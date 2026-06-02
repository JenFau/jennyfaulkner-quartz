import { QuartzEmitterPlugin } from "../types"
import { write } from "./helpers"
import { QUARTZ, joinSegments } from "../../util/path"
import { FullSlug } from "../../util/path"
import fs from "fs"

type StaticHtmlPageOptions = {
  source: string
  destination: string
}

export const StaticHtmlPage: QuartzEmitterPlugin<StaticHtmlPageOptions> = (opts) => ({
  name: "StaticHtmlPage",
  async emit(ctx) {
    const { source, destination } = opts
    const srcPath = joinSegments(QUARTZ, "static", source)
    const content = await fs.promises.readFile(srcPath, "utf-8")
    const path = await write({
      ctx,
      content,
      slug: destination as FullSlug,
      ext: ".html",
    })
    return [path]
  },
  async *partialEmit() {},
})
