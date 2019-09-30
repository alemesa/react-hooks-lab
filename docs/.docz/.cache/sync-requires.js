const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---content-use-scroll-to-top-mdx": hot(preferDefault(require("/Users/alejandromesasuarez/Winterfell/react-hooks-lab/docz/content/use-scroll-to-top.mdx"))),
  "component---content-use-scroll-progress-use-scroll-progress-mdx": hot(preferDefault(require("/Users/alejandromesasuarez/Winterfell/react-hooks-lab/docz/content/UseScrollProgress/use-scroll-progress.mdx"))),
  "component---content-intro-mdx": hot(preferDefault(require("/Users/alejandromesasuarez/Winterfell/react-hooks-lab/docz/content/Intro.mdx"))),
  "component---content-use-intersection-observer-use-intersectino-observer-mdx": hot(preferDefault(require("/Users/alejandromesasuarez/Winterfell/react-hooks-lab/docz/content/UseIntersectionObserver/use-intersectino-observer.mdx"))),
  "component---content-use-window-size-use-window-size-mdx": hot(preferDefault(require("/Users/alejandromesasuarez/Winterfell/react-hooks-lab/docz/content/UseWindowSize/use-window-size.mdx"))),
  "component---content-use-mouse-position-use-mouse-position-mdx": hot(preferDefault(require("/Users/alejandromesasuarez/Winterfell/react-hooks-lab/docz/content/UseMousePosition/use-mouse-position.mdx"))),
  "component---content-use-scroll-direction-use-scroll-direction-mdx": hot(preferDefault(require("/Users/alejandromesasuarez/Winterfell/react-hooks-lab/docz/content/UseScrollDirection/use-scroll-direction.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/alejandromesasuarez/Winterfell/react-hooks-lab/docz/.docz/src/pages/404.js")))
}

