import { QuartzComponent, QuartzComponentConstructor } from "./types"

const Nav: QuartzComponent = () => {
  return (
    <nav class="site-nav">
      <a href="/Writing">Writing</a>
      <a href="/Notes">Notes</a>
      <a href="https://thoughts.jennyfaulkner.com/" target="_blank" rel="noopener noreferrer">
        Memos
      </a>
    </nav>
  )
}

// Inject Fontshare and Lora font stylesheets early — CSS @import can't be
// used in custom.scss because SCSS @use hoists base styles before it.
Nav.beforeDOMLoaded = `;(function () {
  var preconnects = ["https://api.fontshare.com", "https://fonts.googleapis.com", "https://fonts.gstatic.com"]
  preconnects.forEach(function (href) {
    var link = document.createElement("link")
    link.rel = "preconnect"
    link.href = href
    document.head.appendChild(link)
  })
  var stylesheets = [
    "https://api.fontshare.com/v2/css?f[]=clash-display@600,700&display=swap",
    "https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@400,500,700&display=swap",
    "https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;1,400;1,500&display=swap"
  ]
  stylesheets.forEach(function (href) {
    var link = document.createElement("link")
    link.rel = "stylesheet"
    link.href = href
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
