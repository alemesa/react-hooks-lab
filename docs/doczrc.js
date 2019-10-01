import doczPluginNetlify from "docz-plugin-netlify";

export default {
  title: "Jam3 Hooks",
  description: "Reusable library",
  src: "content",
  files: "content/**/*.mdx",
  typescript: false,
  propsParser: false,
  codeSandbox: false,
  htmlContext: {
    head: {
      links: [
        {
          rel: "stylesheet",
          href: "https://codemirror.net/theme/blackboard.css"
        }
      ]
    }
  },
  themeConfig: {
    mode: "dark",
    codemirrorTheme: "blackboard",
    showPlaygroundEditor: false,
    linesToScrollEditor: 50,
    colors: {
      codeColor: "#8DB6DE",
      codeBg: "#0C1021",
      blockquoteColor: "#8DB6DE",
      blockquoteBg: "#0C1021"
    }
  },
  plugins: [doczPluginNetlify()]
};
