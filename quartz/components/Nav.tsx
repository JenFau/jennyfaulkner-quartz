import { QuartzComponent, QuartzComponentConstructor } from "./types"

const Nav: QuartzComponent = () => {
  return (
    <nav class="site-nav">
      <a href="https://thoughts.jennyfaulkner.com/explore" target="_blank" rel="noopener noreferrer">
        Memos ↗
      </a>
    </nav>
  )
}

// Inject Fontshare and Lora font stylesheets early — CSS @import can't be
// used in custom.scss because SCSS @use hoists base styles before it.
Nav.beforeDOMLoaded = `;(function () {
  // data-persist keeps these links alive across SPA head-swaps.
  // The SPA router removes all non-persist head elements on navigation;
  // without persistence the font links disappear until prescript.js
  // re-executes (async), causing a FOUT flash on every route change.
  // The existence check prevents duplicates when the script re-runs.
  var preconnects = ["https://api.fontshare.com", "https://fonts.googleapis.com", "https://fonts.gstatic.com"]
  preconnects.forEach(function (href) {
    if (document.querySelector('link[rel="preconnect"][href="' + href + '"]')) return
    var link = document.createElement("link")
    link.rel = "preconnect"
    link.href = href
    link.setAttribute("data-persist", "true")
    document.head.appendChild(link)
  })
  var stylesheets = [
    "https://api.fontshare.com/v2/css?f[]=clash-display@600,700&display=swap",
    "https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@400,500,700&display=swap",
    "https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;1,400;1,500&display=swap"
  ]
  stylesheets.forEach(function (href) {
    if (document.querySelector('link[rel="stylesheet"][href="' + href + '"]')) return
    var link = document.createElement("link")
    link.rel = "stylesheet"
    link.href = href
    link.setAttribute("data-persist", "true")
    document.head.appendChild(link)
  })
})()`

Nav.css = `
.site-nav {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  margin-top: 0.5rem;
}

@media (max-width: 800px) {
  .site-nav {
    flex-direction: row;
    gap: 1.2rem;
    margin-top: 0;
  }
}

.site-nav a {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--darkgray);
  text-decoration: none;
  transition: color 0.15s ease;
}

.site-nav a:hover {
  color: var(--secondary);
}
`

export default (() => Nav) satisfies QuartzComponentConstructor
