(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{137:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(146);n.default=function(){return r.a.createElement(i.a,null,r.a.createElement("div",{className:"about"},r.a.createElement("h2",null,"About"),r.a.createElement("p",null,"This is a Demo Blog")))}},142:function(e,n,t){"use strict";t.r(n),t.d(n,"graphql",function(){return p}),t.d(n,"StaticQueryContext",function(){return m}),t.d(n,"StaticQuery",function(){return f});var a=t(0),r=t.n(a),i=t(4),o=t.n(i),c=t(141),l=t.n(c);t.d(n,"Link",function(){return l.a}),t.d(n,"withPrefix",function(){return c.withPrefix}),t.d(n,"navigate",function(){return c.navigate}),t.d(n,"push",function(){return c.push}),t.d(n,"replace",function(){return c.replace}),t.d(n,"navigateTo",function(){return c.navigateTo});var u=t(143),s=t.n(u);t.d(n,"PageRenderer",function(){return s.a});var d=t(34);t.d(n,"parsePath",function(){return d.a});var m=r.a.createContext({}),f=function(e){return r.a.createElement(m.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},143:function(e,n,t){var a;e.exports=(a=t(145))&&a.default||a},145:function(e,n,t){"use strict";t.r(n);t(35);var a=t(0),r=t.n(a),i=t(4),o=t.n(i),c=t(48),l=t(2),u=function(e){var n=e.location,t=l.default.getResourcesForPathnameSync(n.pathname);return r.a.createElement(c.a,Object.assign({location:n,pageResources:t},t.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},n.default=u},146:function(e,n,t){"use strict";var a=t(147),r=t.n(a),i=t(0),o=t.n(i),c=t(144),l=t(142),u=c.b.header.withConfig({displayName:"Nav__NavHeader",componentId:"sc-2vz3qr-0"})(["display:flex;justify-content:space-between;align-items:center;padding:0 35px;margin-bottom:10px;font-size:1.1rem;"]),s=c.b.ul.withConfig({displayName:"Nav__NavList",componentId:"sc-2vz3qr-1"})(["display:flex;justify-content:space-between;padding:0;min-width:240px;"]),d=c.b.li.withConfig({displayName:"Nav__NavItem",componentId:"sc-2vz3qr-2"})(["display:block;"]),m=Object(c.b)(l.Link).withConfig({displayName:"Nav__Navlink",componentId:"sc-2vz3qr-3"})(["text-decoration:none;color:#db1fde;"]),f=function(e){return o.a.createElement(d,null,o.a.createElement(m,{to:e.to},e.children))},p=function(){return o.a.createElement(u,null,o.a.createElement(l.Link,{to:"/"},o.a.createElement("h3",null,"GatsbyBlog")),o.a.createElement(s,null,o.a.createElement(f,{to:"/"},"Home"),o.a.createElement(f,{to:"/about"},"About"),o.a.createElement(f,{to:"/contacts"},"Contacts")))};function h(){var e=r()(["\n  body {\n    margin: 0;\n    height: 100%;\n    width: 100%;\n    font-family: avenir;\n  }\n"]);return h=function(){return e},e}var y=Object(c.a)(h()),g=c.b.div.withConfig({displayName:"Layout__Container",componentId:"sc-1i3zltk-0"})(["margin:0 auto;height:100vh;font-size:1.1rem;"]),v=c.b.div.withConfig({displayName:"Layout__Inner",componentId:"sc-1i3zltk-1"})(["display:flex;flex-direction:column;align-items:center;"]);n.a=function(e){var n=e.children;return o.a.createElement(g,null,o.a.createElement(y,null),o.a.createElement(p,null),o.a.createElement(v,null,n))}}}]);
//# sourceMappingURL=component---src-pages-about-js-b75224f1ac850fc7f584.js.map