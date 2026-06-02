import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import Nav from "./quartz/components/Nav"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {},
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Nav(),
    Component.DesktopOnly(Component.Explorer({
      filterFn: (node) => node.isFolder && (node.slugSegment === "Notes" || node.slugSegment === "Writing" || node.slugSegment === "Learning"),
      folderClickBehavior: "link",
    })),
  ],
  right: [
    Component.ConditionalRender({
      component: Component.DesktopOnly(Component.TableOfContents()),
      condition: (page) => (page.fileData.slug?.startsWith("Writing/") || page.fileData.slug?.startsWith("Learning/")) ?? false,
    }),
    Component.ConditionalRender({
      component: Component.Graph(),
      condition: (page) => page.fileData.slug?.startsWith("Notes/") ?? false,
    }),
    Component.ConditionalRender({
      component: Component.Backlinks(),
      condition: (page) => page.fileData.slug?.startsWith("Notes/") ?? false,
    }),
  ],
}

// components for pages that display lists of pages (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ConditionalRender({
      component: Component.ArticleTitle(),
      condition: (page) => page.fileData.slug !== "Learning/index",
    }),
    Component.ConditionalRender({
      component: Component.ContentMeta(),
      condition: (page) => page.fileData.slug !== "Learning/index",
    }),
    Component.ConditionalRender({
      component: Component.AIRoadmap(),
      condition: (page) => page.fileData.slug === "Learning/index",
    }),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Nav(),
    Component.DesktopOnly(Component.Explorer({
      filterFn: (node) => node.isFolder && (node.slugSegment === "Notes" || node.slugSegment === "Writing" || node.slugSegment === "Learning"),
      folderClickBehavior: "link",
    })),
  ],
  right: [],
}
