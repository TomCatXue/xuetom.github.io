import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

// 网站基础配置
export const siteConfig: SiteConfig = {
	title: "XueTom", // 网站标题
	subtitle: "Demo Site", // 网站副标题
	lang: "zh_CN", // 网站语言代码，如 'en', 'zh_CN', 'ja' 等
	// 主题色配置
	themeColor: {
		hue: 250, // 主题色色调，范围 0-360。例如：红色: 0, 青色: 200, 蓝色: 250, 粉色: 345
		fixed: false, // 是否隐藏主题色选择器（true 为隐藏）
	},
	// 横幅配置
	banner: {
		enable: true, // 是否启用横幅
		src: "assets/images/demo-banner.png", // 横幅图片路径（相对于 /src 或 /public 目录）
		position: "center", // 横幅位置，支持 'top', 'center', 'bottom'
		credit: {
			enable: false, // 是否显示横幅图片的署名
			text: "", // 署名文本
			url: "", // 原始作品或艺术家页面的链接
		},
	},
	// 目录（TOC）配置
	toc: {
		enable: true, // 是否在文章右侧显示目录
		depth: 2, // 目录显示的最大标题深度，范围 1-3
	},
	// 网站图标配置，留空则使用默认图标
	favicon: [
		// {
		//   src: '/favicon/icon.png',    // 图标路径，相对于 /public 目录
		//   theme: 'light',              // 可选：'light' 或 'dark'，用于区分浅色和深色模式
		//   sizes: '32x32',              // 可选：图标尺寸，若有多个尺寸则需设置
		// }
	],
};

// 导航栏配置
export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home, // 首页链接预设
		LinkPreset.Archive, // 归档页面链接预设
		LinkPreset.About, // 关于页面链接预设
		{
			name: "BiliBili", // 链接显示名称
			url: "https://space.bilibili.com/499766908?spm_id_from=333.1007.0.0", // 链接 URL（内部链接会自动添加 base 路径，无需手动添加）
			external: true, // 是否为外部链接（true 时显示外链图标且在新标签页打开）
		},
	],
};
// 个人资料配置
export const profileConfig: ProfileConfig = {
	avatar: "assets/images/demo-avatar.png", // 头像路径（相对于 /src 或以 '/' 开头时相对于 /public）
	name: "Xue Tom", // 昵称
	bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", // 个人简介
	// 社交媒体链接
	links: [
		{
			name: "Twitter", // 链接显示名称
			icon: "fa6-brands:twitter", // 图标代码，访问 https://icones.js.org/ 查看更多
			// 如果图标集未安装，需要先执行：pnpm add @iconify-json/<icon-set-name>
			url: "https://twitter.com", // 链接 URL<icon-set-name>`
			url: "https://twitter.com",
		},
		{
			name: "Steam",
			icon: "fa6-brands:steam",
			url: "https://store.steampowered.com",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/saicaca/fuwari",
		},
	],
};
// 许可证配置
export const licenseConfig: LicenseConfig = {
	enable: true, // 是否在文章末尾显示许可证信息
	name: "CC BY-NC-SA 4.0", // 许可证名称
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/", // 许可证链接
};

// 代码块配置（Expressive Code）
export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// 注意：部分样式（如背景色）在 astro.config.mjs 中被覆盖
	// 请选择深色主题，本博客主题目前仅支持深色背景
	theme: "github-dark", // 代码块主题，推荐深色主题（如 github-dark）rk theme, as this blog theme currently only supports dark background color
};
