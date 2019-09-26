(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{972:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return a})),n.d(t,"default",(function(){return u}));n(13),n(7),n(5),n(4),n(8),n(6),n(10),n(1);var o=n(80),r=n(969);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var a={};void 0!==a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"content/use-scroll-to-top.mdx"}});var l={_frontmatter:a},s=r.a;function u(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(o.b)(s,c({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"use-scroll-to-top"},"use-scroll-to-top"),Object(o.b)("p",null,"Description"),Object(o.b)("p",null,"Our hook"),Object(o.b)("pre",null,Object(o.b)("code",c({parentName:"pre"},{className:"language-jsx"}),'import React from "react";\nimport { useScrollToTop } from "react-hooks-lab";\n\nconst ScrollToTop = () => {\n  useScrollToTop();\n\n  useEffect(() => {\n    // your stuff\n  }, []);\n};\n')),Object(o.b)("p",null,"If you need a react-router scroll restoration just do it like this"),Object(o.b)("p",null,Object(o.b)("a",c({parentName:"p"},{href:"https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/guides/scroll-restoration.md"}),"Reference")),Object(o.b)("pre",null,Object(o.b)("code",c({parentName:"pre"},{className:"language-jsx"}),'import React from "react";\n\nconst ScrollToTop = ({ children, location: { pathname } }) => {\n  useEffect(() => {\n    window.scrollTo(0, 0);\n  }, [pathname]);\n\n  return children || null;\n};\n\nexport default withRouter(ScrollToTop);\n')))}u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"content/use-scroll-to-top.mdx"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-use-scroll-to-top-mdx-907c56a0fea9518ce749.js.map