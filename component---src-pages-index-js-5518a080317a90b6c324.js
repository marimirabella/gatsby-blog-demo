(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{140:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(156),o=n(143),c=n(145),l=c.b.div.withConfig({displayName:"Header__HeaderWrapper",componentId:"sc-10cnog6-0"})(["display:flex;flex-direction:column;align-items:center;margin-bottom:0.8rem;"]),s=c.b.img.withConfig({displayName:"Header__HeaderImage",componentId:"sc-10cnog6-1"})(["width:205px;"]),u=c.b.h1.withConfig({displayName:"Header__Heading",componentId:"sc-10cnog6-2"})(["margin-bottom:0.3rem;margin-top:0;font-size:3rem;"]),d=c.b.p.withConfig({displayName:"Header__Description",componentId:"sc-10cnog6-3"})(["margin-top:0;opacity:0.5;font-size:1.1rem;"]),m=function(e){var t=e.data,n=t.site.siteMetadata.title,a=t.site.siteMetadata.description;return r.a.createElement(l,null,r.a.createElement(s,{src:"https://user-images.githubusercontent.com/21834/34442516-fb1a1a3c-ecc2-11e7-8fe8-530435f22336.jpg",alt:"Gatsby Logo"}),r.a.createElement(u,null,n),r.a.createElement(d,null,a))},p=function(){return r.a.createElement(o.StaticQuery,{query:"3501179355",render:function(e){return r.a.createElement(m,{data:e})},data:i})},f=(n(49),c.b.div.withConfig({displayName:"BlogPosts__BlogPostsWrapper",componentId:"sc-1g0tvkq-0"})(["margin-bottom:1rem;a{text-decoration:none;color:#db1fde;}"])),g=c.b.div.withConfig({displayName:"BlogPosts__TagsWrapper",componentId:"sc-1g0tvkq-1"})(["margin-top:1.5rem;"]),y=Object(c.b)(o.Link).withConfig({displayName:"BlogPosts__TagLink",componentId:"sc-1g0tvkq-2"})(["color:#700875;"]),h=function(e){var t=e.edges;return r.a.createElement(r.a.Fragment,null,t.map(function(e){var t=e.node;return r.a.createElement(f,{key:t.frontmatter.path},r.a.createElement(o.Link,{to:"pages/"+t.frontmatter.path},t.frontmatter.title))}),r.a.createElement(g,null,r.a.createElement(y,{to:"/tags"},"Browse by Tag")))},b=n(147);n.d(t,"query",function(){return v});var v="2152686030";t.default=function(e){var t=e.data;return r.a.createElement(b.a,null,r.a.createElement(p,null),r.a.createElement(h,{edges:t.allMarkdownRemark.edges}))}},142:function(e,t,n){var a;e.exports=(a=n(144))&&a.default||a},143:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(141),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var s=n(142),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var d=n(34);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},144:function(e,t,n){"use strict";n.r(t);n(35);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(48),l=n(2),s=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},146:function(e,t){e.exports=function(e,t){return t||(t=e.slice(0)),e.raw=t,e}},147:function(e,t,n){"use strict";var a=n(146),r=n.n(a),i=n(0),o=n.n(i),c=n(145),l=n(143),s=c.b.header.withConfig({displayName:"Nav__NavHeader",componentId:"sc-2vz3qr-0"})(["display:flex;justify-content:space-between;align-items:center;padding:0 35px;margin-bottom:10px;font-size:1.1rem;"]),u=c.b.ul.withConfig({displayName:"Nav__NavList",componentId:"sc-2vz3qr-1"})(["display:flex;justify-content:space-between;padding:0;min-width:240px;"]),d=c.b.li.withConfig({displayName:"Nav__NavItem",componentId:"sc-2vz3qr-2"})(["display:block;"]),m=Object(c.b)(l.Link).withConfig({displayName:"Nav__Navlink",componentId:"sc-2vz3qr-3"})(["text-decoration:none;color:#db1fde;"]),p=function(e){return o.a.createElement(d,null,o.a.createElement(m,{to:e.to},e.children))},f=function(){return o.a.createElement(s,null,o.a.createElement(l.Link,{to:"/"},o.a.createElement("h3",null,"GatsbyBlog")),o.a.createElement(u,null,o.a.createElement(p,{to:"/"},"Home"),o.a.createElement(p,{to:"/about"},"About"),o.a.createElement(p,{to:"/contacts"},"Contacts")))};function g(){var e=r()(["\n  body {\n    margin: 0;\n    height: 100%;\n    width: 100%;\n    font-family: avenir;\n  }\n"]);return g=function(){return e},e}var y=Object(c.a)(g()),h=c.b.div.withConfig({displayName:"Layout__Container",componentId:"sc-1i3zltk-0"})(["margin:0 auto;height:100vh;font-size:1.1rem;"]),b=c.b.div.withConfig({displayName:"Layout__Inner",componentId:"sc-1i3zltk-1"})(["display:flex;flex-direction:column;align-items:center;"]);t.a=function(e){var t=e.children;return o.a.createElement(h,null,o.a.createElement(y,null),o.a.createElement(f,null),o.a.createElement(b,null,t))}},156:function(e){e.exports={data:{site:{siteMetadata:{title:"My Blog",description:"This is my cool blog."}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-5518a080317a90b6c324.js.map