import Key from "../i18nKey";
import type { Translation } from "../translation";

export const ko: Translation = {
	[Key.home]: "홈",
	[Key.about]: "소개",
	[Key.archive]: "아카이브",
	[Key.search]: "검색",
	[Key.searchNoResults]: "검색 결과가 없습니다.",
	[Key.searchTypeSomething]: "검색어를 입력하세요...",
	[Key.searchLoading]: "검색 중...",
	[Key.searchSummary]: "요약",
	[Key.searchContent]: "내용",
	[Key.searchViewMore]: "더 많은 결과 보기 ({count}개 더)",
	[Key.other]: "기타",

	// 네비게이션 메뉴 그룹
	[Key.navArticles]: "글",
	[Key.navSocial]: "소셜",
	[Key.navMine]: "마이",
	[Key.navAbout]: "소개",
	[Key.navLinks]: "링크",
	[Key.all]: "전체",

	[Key.tags]: "태그",
	[Key.categories]: "카테고리",
	[Key.allCategories]: "모든 카테고리",
	[Key.allTags]: "모든 태그",
	[Key.allSeries]: "모든 시리즈",
	[Key.recentPosts]: "최근 게시글",
	[Key.postList]: "게시글 목록",
	[Key.tableOfContents]: "목차",
	[Key.tocEmpty]: "이 페이지에는 목차가 없습니다",
	[Key.untitled]: "제목 없음",
	[Key.uncategorized]: "미분류",
	[Key.noTags]: "태그 없음",

	[Key.wordCount]: "단어",
	[Key.wordsCount]: "단어",
	[Key.minuteCount]: "분",
	[Key.minutesCount]: "분",
	[Key.postCount]: "게시글",
	[Key.postsCount]: "게시글",
	[Key.tagsCount]: "태그",
	[Key.noData]: "데이터 없음",

	[Key.themeColor]: "테마 색상",

	[Key.lightMode]: "라이트",
	[Key.darkMode]: "다크",
	[Key.systemMode]: "시스템",

	[Key.more]: "더 보기",
	[Key.collapse]: "접기",

	[Key.author]: "작성자",
	[Key.publishedAt]: "게시일",
	[Key.updatedAt]: "수정일",
	[Key.readTime]: "읽는 시간",
	[Key.license]: "라이선스",

	// Pagination
	[Key.paginationFirst]: "처음",
	[Key.paginationPrev]: "이전",
	[Key.paginationNext]: "다음",
	[Key.paginationLast]: "마지막",
	[Key.paginationPage]: "페이지",
	[Key.paginationOf]: "/",
	[Key.paginationTotal]: ", 총",
	[Key.paginationRecords]: "개",
	[Key.paginationJump]: "지정한 페이지로 이동",

	// 404 Page
	[Key.notFound]: "404",
	[Key.notFoundTitle]: "페이지를 찾을 수 없습니다",
	[Key.notFoundDescription]:
		"죄송합니다. 방문하신 페이지가 존재하지 않거나 이동되었습니다.",
	[Key.backToHome]: "홈으로 돌아가기",

	// RSS Page
	[Key.rss]: "RSS 피드",
	[Key.rssDescription]: "최신 소식을 구독하세요",
	[Key.rssSubtitle]: "RSS를 구독하여 최신 글과 업데이트를 즉시 받아보세요",
	[Key.rssLink]: "RSS 링크",
	[Key.rssCopyToReader]: "링크를 RSS 리더기에 복사하세요",
	[Key.rssCopyLink]: "링크 복사",
	[Key.rssLatestPosts]: "최신 게시글",
	[Key.rssWhatIsRSS]: "RSS란 무엇인가요?",
	[Key.rssWhatIsRSSDescription]:
		"RSS(Really Simple Syndication)는 자주 업데이트되는 콘텐츠를 게시하기 위한 표준 형식입니다. RSS를 사용하면 다음이 가능합니다:",
	[Key.rssBenefit1]:
		"직접 방문하지 않고도 최신 웹사이트 콘텐츠를 제때 받아볼 수 있습니다",
	[Key.rssBenefit2]: "여러 웹사이트의 구독을 한 곳에서 관리할 수 있습니다",
	[Key.rssBenefit3]: "중요한 업데이트와 글을 놓치지 않을 수 있습니다",
	[Key.rssBenefit4]: "광고 없는 깔끔한 읽기 환경을 즐길 수 있습니다",
	[Key.rssHowToUse]:
		"Feedly, Inoreader 등 RSS 리더기를 사용하여 이 사이트를 구독하는 것을 권장합니다.",
	[Key.rssCopied]: "RSS 링크가 클립보드에 복사되었습니다!",
	[Key.rssCopyFailed]: "복사에 실패했습니다. 링크를 직접 복사해 주세요",

	// Atom Page
	[Key.atom]: "Atom 피드",
	[Key.atomDescription]: "최신 업데이트 구독",
	[Key.atomSubtitle]:
		"Atom으로 구독하면 최신 글과 업데이트를 바로 받을 수 있습니다",
	[Key.atomLink]: "Atom 링크",
	[Key.atomCopyToReader]: "Atom 리더에 링크 복사",
	[Key.atomCopied]: "Atom 링크가 클립보드에 복사되었습니다!",

	[Key.year]: "년",
	[Key.month]: "월",
	[Key.day]: "일",
	[Key.hour]: "시간",
	[Key.minute]: "분",
	[Key.second]: "초",

	// Page Views Statistics
	[Key.pageViews]: "조회수",
	[Key.pageViewsLoading]: "불러오는 중...",
	[Key.pageViewsError]: "통계를 불러올 수 없습니다",

	// Pinned
	[Key.pinned]: "고정됨",

	// 글 시리즈
	[Key.series]: "시리즈",
	[Key.seriesPartOf]: "시리즈의 일부",
	[Key.seriesPart]: "파트 {n}",
	[Key.seriesThisArticle]: "이 글",
	[Key.noSeries]: "시리즈가 없습니다",

	// Encrypted
	[Key.postEncrypted]: "이 게시글은 암호화되어 있습니다",
	[Key.sakuraEffect]: "벚꽃 효과",
	[Key.effectsSettings]: "효과 설정",
	[Key.overlaySettings]: "투명도 설정",
	[Key.overlayOpacity]: "배경화면 불투명도",
	[Key.overlayBlur]: "배경 흐림",
	[Key.overlayCardOpacity]: "카드 불투명도",

	// Settings Panel Tabs
	[Key.settingsTabAppearance]: "외형",
	[Key.settingsTabEffects]: "효과",

	// 카드 스타일
	[Key.cardSettings]: "카드 스타일",
	[Key.cardBorder]: "카드 테두리와 그림자",
	[Key.cardFollowTheme]: "카드 테마 색상 따르기",

	// Post List Layout
	[Key.postListLayout]: "게시글 목록 레이아웃",
	[Key.postListLayoutList]: "목록형",
	[Key.postListLayoutGrid]: "격자형",

	// Site Statistics
	[Key.siteStats]: "사이트 통계",
	[Key.siteStatsPostCount]: "게시글",
	[Key.siteStatsCategoryCount]: "카테고리",
	[Key.siteStatsTagCount]: "태그",
	[Key.siteStatsTotalWords]: "총 단어 수",
	[Key.siteStatsRunningDays]: "운영 일수",
	[Key.siteStatsLastUpdate]: "최근 활동",
	[Key.siteStatsDaysAgo]: "{days}일 전",
	[Key.siteStatsDays]: "{days}일",
	[Key.today]: "오늘",

	// Calendar Component
	[Key.calendarSunday]: "일",
	[Key.calendarMonday]: "월",
	[Key.calendarTuesday]: "화",
	[Key.calendarWednesday]: "수",
	[Key.calendarThursday]: "목",
	[Key.calendarFriday]: "금",
	[Key.calendarSaturday]: "토",
	[Key.calendarJanuary]: "1월",
	[Key.calendarFebruary]: "2월",
	[Key.calendarMarch]: "3월",
	[Key.calendarApril]: "4월",
	[Key.calendarMay]: "5월",
	[Key.calendarJune]: "6월",
	[Key.calendarJuly]: "7월",
	[Key.calendarAugust]: "8월",
	[Key.calendarSeptember]: "9월",
	[Key.calendarOctober]: "10월",
	[Key.calendarNovember]: "11월",
	[Key.calendarDecember]: "12월",
	[Key.calendar]: "사이트 캘린더",
	[Key.calendarHeatmapWeek]: "{month}의 {week}주차, 게시글 {count}개",
	[Key.copied]: "복사됨",
	[Key.copyLink]: "링크 복사",

	// Code Block Collapsible Configuration
	[Key.codeCollapsibleShowMore]: "더 보기",
	[Key.codeCollapsibleShowLess]: "간략히 보기",
	[Key.codeCollapsibleExpanded]: "코드 블록 펼쳐짐",
	[Key.codeCollapsibleCollapsed]: "코드 블록 접힘",

	// Password Protection
	[Key.passwordProtected]: "비밀번호로 보호됨",
	[Key.passwordProtectedDesc]:
		"이 콘텐츠는 비밀번호로 보호되어 있습니다. 보려면 비밀번호를 입력하세요.",
	[Key.passwordHint]: "힌트",
	[Key.passwordPlaceholder]: "비밀번호 입력",
	[Key.passwordSubmit]: "잠금 해제",
	[Key.passwordError]: "비밀번호가 올바르지 않습니다. 다시 시도해 주세요.",
	[Key.passwordProtectedRss]:
		"이 글은 암호화되어 있습니다. 웹사이트에서 확인해 주세요.",

	// 몰입형 읽기
	[Key.immersiveReading]: "몰입형 읽기",
	[Key.enterImmersiveReading]: "몰입형 읽기 시작",
	[Key.exitImmersiveReading]: "몰입형 읽기 종료",
	[Key.tocExpand]: "목차 펼치기",
	[Key.tocCollapse]: "목차 접기",
};
