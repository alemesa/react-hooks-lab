const { mergeWith } = require('lodash/fp')

let custom
try {
  custom = require('./gatsby-config.custom')
} catch (err) {
  custom = {}
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'React Hooks Lab Docz',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        themesDir: 'src',
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        root:
          '/Users/alejandromesasuarez/Winterfell/react-hooks-lab/docz/.docz',
        base: '/',
        source: './',
        src: './',
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'React Hooks Lab Docz',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/alejandromesasuarez/Winterfell/react-hooks-lab/docz',
          templates:
            '/Users/alejandromesasuarez/Winterfell/react-hooks-lab/docz/node_modules/docz-core/dist/templates',
          packageJson:
            '/Users/alejandromesasuarez/Winterfell/react-hooks-lab/docz/package.json',
          docz:
            '/Users/alejandromesasuarez/Winterfell/react-hooks-lab/docz/.docz',
          cache:
            '/Users/alejandromesasuarez/Winterfell/react-hooks-lab/docz/.docz/.cache',
          app:
            '/Users/alejandromesasuarez/Winterfell/react-hooks-lab/docz/.docz/app',
          appPublic:
            '/Users/alejandromesasuarez/Winterfell/react-hooks-lab/docz/.docz/public',
          appNodeModules:
            '/Users/alejandromesasuarez/Winterfell/react-hooks-lab/docz/node_modules',
          appPackageJson:
            '/Users/alejandromesasuarez/Winterfell/react-hooks-lab/docz/package.json',
          appYarnLock:
            '/Users/alejandromesasuarez/Winterfell/react-hooks-lab/docz/node_modules/docz-core/yarn.lock',
          ownNodeModules:
            '/Users/alejandromesasuarez/Winterfell/react-hooks-lab/docz/node_modules/docz-core/node_modules',
          gatsbyConfig:
            '/Users/alejandromesasuarez/Winterfell/react-hooks-lab/docz/gatsby-config.js',
          gatsbyBrowser:
            '/Users/alejandromesasuarez/Winterfell/react-hooks-lab/docz/gatsby-browser.js',
          gatsbyNode:
            '/Users/alejandromesasuarez/Winterfell/react-hooks-lab/docz/gatsby-node.js',
          gatsbySSR:
            '/Users/alejandromesasuarez/Winterfell/react-hooks-lab/docz/gatsby-ssr.js',
          importsJs:
            '/Users/alejandromesasuarez/Winterfell/react-hooks-lab/docz/.docz/app/imports.js',
          rootJs:
            '/Users/alejandromesasuarez/Winterfell/react-hooks-lab/docz/.docz/app/root.jsx',
          indexJs:
            '/Users/alejandromesasuarez/Winterfell/react-hooks-lab/docz/.docz/app/index.jsx',
          indexHtml:
            '/Users/alejandromesasuarez/Winterfell/react-hooks-lab/docz/.docz/app/index.html',
          db:
            '/Users/alejandromesasuarez/Winterfell/react-hooks-lab/docz/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
