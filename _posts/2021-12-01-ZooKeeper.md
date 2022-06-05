---
title: ZooKeeper
tags: Notes Computer-Science Distributed-Systems
article_header:
  type: 
  image:
    src: 
---

ZooKeeper learning notes.

<!--more-->

## 简介


ZooKeeper是一个为分布式应用提供一致性服务的开源软件。具有以下特性：

- 顺序一致性，从同一个客户端发起的事务请求，会严格地按照发起顺序应用到Zookeeper中。
- 原子性，所有事务请求的处理结果在整个集群中所有机器上的应用情况是一致的，即整个集群要么都成功应用了某个事务，要么都没有应用。
- 单一视图，无论客户端连接的是哪个Zookeeper服务器，其看到的服务端数据模型都是一致的。
- 可靠性，一旦服务端成功地应用了一个事务，并完成对客户端的响应，那么该事务所引起的服务端状态变更将会一直被保留，除非有另一个事务对其进行了变更。
- 实时性，Zookeeper保证在某个时间段内，客户端一定能够从服务端上读取到最新的数据状态。



## 结构

- Zookeeper是一个由多个server组成的集群，投票选举出(半数以上，优先检查事务ID)一个leader，多个follower
- leader为是整个Zookeeper集群工作机制中的核心，负责响应所有对ZooKeeper状态变更的请求，是事务请求的唯一调度和处理者，也是集群内各服务器的调度者
- leader为客户端提供读写服务，除了leader外其他的机器只能提供读服务
- 在ZooKeeper中，“节点” 分为两类，第一类同样是指构成集群的机器，我们称之为机器节点；第二类则是指数据模型中的数据单元，我们称之为数据节点—— ZNode。ZooKeeper将所有数据存储在内存中，数据模型是一棵树（ZNode Tree），由斜杠（/）分割路径



## 数据一致性

保持数据一致性有两种情况：

- 重新选举leader之后的数据同步
- leader处理完事务之后与follower保持数据同步



选举后的同步：

- Leader构建一个NEWLEADER的包，包括当前最大的zxid，发送给所有的follower或者Observer
- Leader给每个follower创建一个线程LearnerHandler来负责处理每个follower的数据同步请求，同时主线程开始阻塞，等到超过一半的follwer同步完成，同步过程才完成，leader才真正成为leader
- 选举完成后，每个follower尝试与leader建立同步连接，如果一段时间没有连接上就报连接超时，重新回到选举状态。连接成功后，向leader发送FOLLOWERINFO包，带上follower自己最大的zxid



处理事务后的同步：

- leader会为每一个follower创建一个队列，将该事务放入响应队列，保证事务的顺序性，并向队列中其他节点广播该proposal
- follower收到后会将其以事务的形式写入到本地日志中，并向leader发送反馈ack。leader会等待其他follower的回复，当收到一半以上的follower响应时，leader会向其他节点发送commit消息，同时leader提交该提案。


## 会话管理
在Zookeeper客户端与服务端成功完成连接创建后，就创建了一个会话，Zookeeper会话在整个运行期间的生命周期中，会在不同的会话状态中之间进行切换。


会话管理主要通过SessionTracker来负责，其采用了分桶策略（将类似的会话放在同一区块中进行管理）进行管理，以便Zookeeper对会话进行不同区块的隔离处理以及同一区块的统一处理。
