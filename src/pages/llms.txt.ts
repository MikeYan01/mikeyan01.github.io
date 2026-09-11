import I18nKey from "@i18n/i18nKey";
import { i18n } from "@i18n/translation";
import { getSortedPosts } from "@utils/content-utils";
import { url } from "@utils/url-utils";
import type { APIRoute } from "astro";
import { siteConfig } from "@/config";

export const prerender = true;

const RECENT_POSTS_COUNT = 20;

type KeyPage = {
	labelKey: I18nKey;
	path: string;
};

const KEY_PAGES: KeyPage[] = [
	{ labelKey: I18nKey.home, path: "/" },
	{ labelKey: I18nKey.archive, path: "/archive/" },
	{ labelKey: I18nKey.about, path: "/about/" },
];

export const GET: APIRoute = async ({ site }) => {
	const base = site ?? new URL(siteConfig.site_url);
	const abs = (path: string) => new URL(url(path), base).href;

	const posts = await getSortedPosts();
	const recentPosts = posts.slice(0, RECENT_POSTS_COUNT);

	const lines: string[] = [
		`# ${siteConfig.title}`,
		`> ${siteConfig.description || siteConfig.subtitle || ""}`,
		"",
		"## Key Pages",
	];
	for (const pageEntry of KEY_PAGES) {
		const label = i18n(pageEntry.labelKey);
		const link = abs(pageEntry.path);
		lines.push(`- [${label}](${link})`);
	}
	lines.push("", "## Recent Posts");
	for (const post of recentPosts) {
		const link = abs(url(`/posts/${post.id}/`));
		const desc = post.data.description || "";
		lines.push(
			desc
				? `- [${post.data.title}](${link}): ${desc}`
				: `- [${post.data.title}](${link})`,
		);
	}

	const body = `${lines.join("\n")}\n`;
	// 前置 UTF-8 BOM：静态托管或 Windows 编辑器对无 BOM 的 .txt 默认按本地编码(ANSI/GBK)解码，
	// BOM 使浏览器与编辑器都能稳定识别为 UTF-8，避免中文乱码。
	return new Response(`﻿${body}`, {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
};
