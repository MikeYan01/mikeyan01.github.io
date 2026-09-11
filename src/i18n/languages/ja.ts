import Key from "../i18nKey";
import type { Translation } from "../translation";

export const ja: Translation = {
	[Key.home]: "ホーム",
	[Key.about]: "について",
	[Key.archive]: "アーカイブ",
	[Key.search]: "検索",
	[Key.searchNoResults]: "結果が見つかりません。",
	[Key.searchTypeSomething]: "検索キーワードを入力してください。",
	[Key.searchLoading]: "検索中...",
	[Key.searchSummary]: "摘要",
	[Key.searchContent]: "内容",
	[Key.searchViewMore]: "さらに結果を表示 ({count} 件)",
	[Key.other]: "その他",

	// ナビバーメニューグループ
	[Key.navArticles]: "記事",
	[Key.navSocial]: "ソーシャル",
	[Key.navMine]: "マイ",
	[Key.navAbout]: "について",
	[Key.navLinks]: "リンク",
	[Key.all]: "すべて",

	[Key.tags]: "タグ",
	[Key.categories]: "カテゴリ",
	[Key.allCategories]: "すべてのカテゴリ",
	[Key.allTags]: "すべてのタグ",
	[Key.allSeries]: "すべてのシリーズ",
	[Key.recentPosts]: "最近の投稿",
	[Key.postList]: "投稿リスト",
	[Key.tableOfContents]: "目次",
	[Key.tocEmpty]: "このページには目次がありません",
	[Key.untitled]: "無題",
	[Key.uncategorized]: "未分類",
	[Key.noTags]: "タグなし",

	[Key.wordCount]: "語",
	[Key.wordsCount]: "語",
	[Key.minuteCount]: "分",
	[Key.minutesCount]: "分",
	[Key.postCount]: "投稿",
	[Key.postsCount]: "投稿",
	[Key.tagsCount]: "タグ",
	[Key.noData]: "データなし",

	[Key.themeColor]: "テーマカラー",

	[Key.lightMode]: "ライト",
	[Key.darkMode]: "ダーク",
	[Key.systemMode]: "システム",

	[Key.more]: "もっと",
	[Key.collapse]: "折りたたむ",

	[Key.author]: "著者",
	[Key.publishedAt]: "公開日",
	[Key.updatedAt]: "更新日",
	[Key.readTime]: "読了時間",
	[Key.license]: "ライセンス",

	// ページネーション
	[Key.paginationFirst]: "最初",
	[Key.paginationPrev]: "前へ",
	[Key.paginationNext]: "次へ",
	[Key.paginationLast]: "最後",
	[Key.paginationPage]: "",
	[Key.paginationOf]: "ページ、全",
	[Key.paginationTotal]: "ページ、合計",
	[Key.paginationRecords]: "件",
	[Key.paginationJump]: "指定ページへ移動",

	// 404ページ
	[Key.notFound]: "404",
	[Key.notFoundTitle]: "ページが見つかりません",
	[Key.notFoundDescription]:
		"申し訳ありませんが、アクセスしたページは存在しないか、移動されています。",
	[Key.backToHome]: "ホームに戻る",

	// RSSページ
	[Key.rss]: "RSSフィード",
	[Key.rssDescription]: "最新の更新を購読する",
	[Key.rssSubtitle]: "RSSで購読して、最新の記事と更新を第一时间で取得する",
	[Key.rssLink]: "RSSリンク",
	[Key.rssCopyToReader]: "RSSリンクをリーダーにコピー",
	[Key.rssCopyLink]: "リンクをコピー",
	[Key.rssLatestPosts]: "最新の投稿",
	[Key.rssWhatIsRSS]: "RSSとは？",
	[Key.rssWhatIsRSSDescription]:
		"RSS（Really Simple Syndication）は、頻繁に更新されるコンテンツを公開するための標準形式です。RSSを使用すると：",
	[Key.rssBenefit1]:
		"手動で訪問することなく、最新のウェブサイトコンテンツを及时に取得",
	[Key.rssBenefit2]: "1か所で複数のウェブサイトの購読を管理",
	[Key.rssBenefit3]: "重要な更新や記事を見逃すことを回避",
	[Key.rssBenefit4]: "広告なしのクリーンな読書体験を楽しむ",
	[Key.rssHowToUse]:
		"Feedly、Inoreaderまたは他のRSSリーダーを使用してこのサイトを購読することを推奨します。",
	[Key.rssCopied]: "RSSリンクがクリップボードにコピーされました！",
	[Key.rssCopyFailed]: "コピーに失敗しました。手動でリンクをコピーしてください",

	// Atom ページ
	[Key.atom]: "Atom フィード",
	[Key.atomDescription]: "最新の更新を購読",
	[Key.atomSubtitle]: "Atom で購読すると、最新の記事と更新をすぐに受け取れます",
	[Key.atomLink]: "Atom リンク",
	[Key.atomCopyToReader]: "Atom リーダーにリンクをコピー",
	[Key.atomCopied]: "Atom リンクをクリップボードにコピーしました！",

	[Key.year]: "年",
	[Key.month]: "月",
	[Key.day]: "日",
	[Key.hour]: "時",
	[Key.minute]: "分",
	[Key.second]: "秒",

	// ページビュー統計
	[Key.pageViews]: "閲覧数",
	[Key.pageViewsLoading]: "読み込み中...",
	[Key.pageViewsError]: "統計利用不可",

	// ピン留め
	[Key.pinned]: "ピン留め",

	// 記事シリーズ
	[Key.series]: "シリーズ",
	[Key.seriesPartOf]: "シリーズの一部",
	[Key.seriesPart]: "パート {n}",
	[Key.seriesThisArticle]: "この記事",
	[Key.noSeries]: "シリーズはありません",

	// 暗号化
	[Key.postEncrypted]: "この記事は暗号化されています",
	[Key.sakuraEffect]: "桜エフェクト",
	[Key.effectsSettings]: "エフェクト設定",
	[Key.overlaySettings]: "透明設定",
	[Key.overlayOpacity]: "壁紙の透明度",
	[Key.overlayBlur]: "背景ぼかし",
	[Key.overlayCardOpacity]: "カード透明度",

	// 設定パネルタブ
	[Key.settingsTabAppearance]: "外観",
	[Key.settingsTabEffects]: "エフェクト",

	// カードスタイル
	[Key.cardSettings]: "カードスタイル",
	[Key.cardBorder]: "カードのボーダーと影",
	[Key.cardFollowTheme]: "カードのテーマカラー追随",

	// 投稿リストレイアウト
	[Key.postListLayout]: "投稿リストレイアウト",
	[Key.postListLayoutList]: "リスト",
	[Key.postListLayoutGrid]: "グリッド",

	// サイト統計
	[Key.siteStats]: "サイト統計",
	[Key.siteStatsPostCount]: "記事",
	[Key.siteStatsCategoryCount]: "カテゴリー",
	[Key.siteStatsTagCount]: "タグ",
	[Key.siteStatsTotalWords]: "総文字数",
	[Key.siteStatsRunningDays]: "運用日数",
	[Key.siteStatsLastUpdate]: "最終活動",
	[Key.siteStatsDaysAgo]: "{days} 日前",
	[Key.siteStatsDays]: "{days} 日",
	[Key.today]: "今日",

	// カレンダーコンポーネント
	[Key.calendarSunday]: "日",
	[Key.calendarMonday]: "月",
	[Key.calendarTuesday]: "火",
	[Key.calendarWednesday]: "水",
	[Key.calendarThursday]: "木",
	[Key.calendarFriday]: "金",
	[Key.calendarSaturday]: "土",
	[Key.calendarJanuary]: "1月",
	[Key.calendarFebruary]: "2月",
	[Key.calendarMarch]: "3月",
	[Key.calendarApril]: "4月",
	[Key.calendarMay]: "5月",
	[Key.calendarJune]: "6月",
	[Key.calendarJuly]: "7月",
	[Key.calendarAugust]: "8月",
	[Key.calendarSeptember]: "9月",
	[Key.calendarOctober]: "10月",
	[Key.calendarNovember]: "11月",
	[Key.calendarDecember]: "12月",
	[Key.calendar]: "サイトカレンダー",
	[Key.calendarHeatmapWeek]: "{month}月第{week}週、{count}記事",
	[Key.copied]: "コピーしました",
	[Key.copyLink]: "リンクをコピー",

	// コードブロック折りたたみ設定
	[Key.codeCollapsibleShowMore]: "展開する",
	[Key.codeCollapsibleShowLess]: "折りたたむ",
	[Key.codeCollapsibleExpanded]: "コードブロックが展開されました",
	[Key.codeCollapsibleCollapsed]: "コードブロックが折りたたまれました",

	// パスワード保護
	[Key.passwordProtected]: "パスワード保護",
	[Key.passwordProtectedDesc]:
		"このコンテンツはパスワードで保護されています。表示するにはパスワードを入力してください。",
	[Key.passwordHint]: "ヒント",
	[Key.passwordPlaceholder]: "パスワードを入力",
	[Key.passwordSubmit]: "ロック解除",
	[Key.passwordError]: "パスワードが間違っています。もう一度お試しください。",
	[Key.passwordProtectedRss]:
		"この記事は暗号化されています。ウェブサイトにアクセスしてご覧ください。",

	// 没入型リーディング
	[Key.immersiveReading]: "没入型リーディング",
	[Key.enterImmersiveReading]: "没入型リーディングに入る",
	[Key.exitImmersiveReading]: "没入型リーディングを終了する",
	[Key.tocExpand]: "目錄を開く",
	[Key.tocCollapse]: "目錄をたたむ",
};
