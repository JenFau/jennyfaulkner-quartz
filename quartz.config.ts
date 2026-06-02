import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Jenny Faulkner",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "jennyfaulkner.com",
    ignorePatterns: [
      "private",
      "templates",
      ".obsidian",
      "@meta",
      "Attachments",
      "Bases",
      "gemini-scribe",
    ],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Clash Display",
        body: "Cabinet Grotesk",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#ffffff",
          lightgray: "#e8e8e8",
          gray: "#aaaaaa",
          darkgray: "#444444",
          dark: "#111111",
          secondary: "#C4622D",
          tertiary: "#d4834d",
          highlight: "rgba(196, 98, 45, 0.08)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#1a1a1a",
          lightgray: "#2a2a2a",
          gray: "#666666",
          darkgray: "#cccccc",
          dark: "#f0f0f0",
          secondary: "#d4834d",
          tertiary: "#C4622D",
          highlight: "rgba(196, 98, 45, 0.12)",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.ExplicitPublish()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.CustomFolderPage({ skipFolders: ["Learning"] }),
      Plugin.StaticHtmlPage({ source: "learning-roadmap.html", destination: "Learning/index" }),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // CustomOgImages requires fonts on Google Fonts; disabled for Fontshare-based design
      // Plugin.CustomOgImages(),
    ],
  },
}

export default config
