(this["webpackJsonpreact-youtube-clone"]=this["webpackJsonpreact-youtube-clone"]||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),c=n.n(r),s=n(35),i=n.n(s),u=(n(53),n(12)),o=n(3),d=n(6),l=n.n(d),j=n(11),p=n(14),b=n(36),h=n(38),O=n(16),f=n.n(O),x=n(4),m={popular:[],related:[],searched:[],selected:{},term:""},v=function(e,t){switch(t.type){case"SET_POPULAR":return Object(x.a)(Object(x.a)({},e),{},{popular:t.payload.popular});case"SET_RELATED":return Object(x.a)(Object(x.a)({},e),{},{related:t.payload.related});case"SET_SELECTED":return Object(x.a)(Object(x.a)({},e),{},{selected:t.payload.selected});case"SET_SEARCHED":return Object(x.a)(Object(x.a)({},e),{},{searched:t.payload.searched});case"SET_TERM":return Object(x.a)(Object(x.a)({},e),{},{term:t.payload.term});default:return e}},_=Object(r.createContext)({globalState:m,setGlobalState:function(){return null}}),y=function(e){var t=e.children,n=Object(r.useReducer)(v,m),c=Object(p.a)(n,2),s=c[0],i=c[1];return Object(a.jsx)(_.Provider,{value:{globalState:s,setGlobalState:i},children:t})},S=function(){var e=Object(r.useState)(""),t=Object(p.a)(e,2),n=t[0],c=t[1],s=Object(r.useContext)(_),i=s.globalState,d=s.setGlobalState,l=Object(o.f)();return Object(r.useEffect)((function(){return c(i.term)}),[]),Object(a.jsxs)("div",{className:f.a.header,children:[Object(a.jsx)("div",{className:f.a.item,children:Object(a.jsx)(u.b,{to:"/",children:"YouTube Clone"})}),Object(a.jsx)("div",{className:f.a.item,children:Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),d({type:"SET_TERM",payload:{term:n}}),l.push("/search?query=".concat(n))},children:[Object(a.jsx)("input",{type:"text",placeholder:"\u691c\u7d22",onChange:function(e){return c(e.target.value)},value:n}),Object(a.jsx)("button",{type:"submit",children:Object(a.jsx)(b.a,{icon:h.a})})]})})]})},w=n(23),E=n.n(w),g=function(e){var t=e.children;return Object(a.jsxs)("div",{className:E.a.wrapper,children:[Object(a.jsx)(S,{}),Object(a.jsx)("div",{className:E.a.main,children:t})]})},T=n(39),L=n.n(T).a.create({baseURL:"https://www.googleapis.com/youtube/v3"}),C={part:"snippet",maxResult:40,key:"AIzaSyDonU57c1isXk0KFuuEbU09VGuJQlbMvhs",regionCode:"JP",type:"video"},P=function(){var e=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.get("/videos",{params:Object(x.a)(Object(x.a)({},C),{},{chart:"mostPopular"})});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.get("/videos",{params:Object(x.a)(Object(x.a)({},C),{},{id:t})});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.get("/search",{params:Object(x.a)(Object(x.a)({},C),{},{reletedToVideoId:t})});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.get("/search",{params:Object(x.a)(Object(x.a)({},C),{},{q:t})});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=n(40),D=n.n(N),G=function(e){var t=e.children;return Object(a.jsx)("div",{className:D.a.container,children:t})},V=n(41),A=n.n(V),U=function(e){var t=e.id,n=e.src,r=e.title;return Object(a.jsx)(u.b,{to:{pathname:"watch",search:"?v=".concat(t)},className:A.a.item,children:Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{src:n,alt:r}),Object(a.jsx)("span",{children:r})]})})},J=function(){var e=Object(r.useContext)(_),t=e.globalState,n=e.setGlobalState,c=function(){var e=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P().then((function(e){return n({type:"SET_POPULAR",payload:{popular:e.data.items}})}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){return c()}),[]),Object(a.jsx)(g,{children:Object(a.jsx)(G,{children:t.popular&&t.popular.map((function(e){return Object(a.jsx)(U,{id:e.id,src:e.snippet.thumbnails.standard.url,title:e.snippet.title},e.id)}))})})},F=function(){var e=Object(r.useContext)(_),t=e.globalState,n=e.setGlobalState,c=Object(o.g)(),s=function(){var e=Object(j.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=new URLSearchParams(c.search),!(a=t.get("query"))){e.next=5;break}return e.next=5,I(a).then((function(e){return n({type:"SET_SEARCHED",payload:{searched:e.data.items}})}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){return s()}),[c.search]),Object(a.jsx)(g,{children:Object(a.jsx)(G,{children:t.searched?t.searched.map((function(e){return Object(a.jsx)(U,{id:e.id.videoId,src:e.snippet.thumbnails.medium.url,title:e.snippet.title},e.id.videoId)})):Object(a.jsx)("span",{children:"no data"})})})},M=n(42),q=n(24),H=n.n(q),z=function(e){var t=e.id;return Object(a.jsx)("div",{className:H.a.wrap,children:Object(a.jsx)(M.a,{className:H.a.video,videoId:t})})},B=n(45),Q=n.n(B),K=n(46),W=n.n(K),X=function(e){var t=e.selected;return t&&t.id?Object(a.jsxs)("div",{className:Q.a.wrap,children:[Object(a.jsx)(z,{id:t.id}),Object(a.jsx)("p",{children:t.snippet.title}),Object(a.jsx)("hr",{}),Object(a.jsx)(W.a,{children:Object(a.jsx)("pre",{children:t.snippet.description})})]}):Object(a.jsx)("span",{children:"no data"})},Y=n(25),Z=n.n(Y),$=function(e){var t=e.id,n=e.src,r=e.title;return Object(a.jsxs)(u.b,{className:Z.a.item,to:{pathname:"watch",search:"v=".concat(t)},children:[Object(a.jsx)("img",{src:n,alt:r}),Object(a.jsx)("div",{className:Z.a.info,children:Object(a.jsx)("span",{children:r})})]})},ee=n(47),te=n.n(ee),ne=function(e){var t=e.related;return Object(a.jsx)("div",{className:te.a.sidenav,children:t?t.map((function(e){return Object(a.jsx)($,{id:e.id.videoId,src:e.snippet.thumbnails.medium.url,title:e.snippet.title},e.id.videoId)})):Object(a.jsx)("span",{children:"no data"})})},ae=function(){var e=Object(r.useContext)(_),t=e.globalState,n=e.setGlobalState,c=Object(o.g)(),s=function(){var e=Object(j.a)(l.a.mark((function e(){var t,a,r,s,i,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=new URLSearchParams(c.search),!(a=t.get("v"))){e.next=11;break}return e.next=5,Promise.all([R(a),k(a)]);case 5:r=e.sent,s=Object(p.a)(r,2),i=s[0],u=s[1],n({type:"SET_SELECTED",payload:{selected:i.data.items.shift()}}),n({type:"SET_RELATED",payload:{related:u.data.items}});case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){return s()}),[c.search]),Object(a.jsxs)(g,{children:[Object(a.jsx)(X,{selected:t.selected}),Object(a.jsx)(ne,{related:t.related})]})},re=function(){return Object(a.jsx)(u.a,{basename:"/react-youtube-clone",children:Object(a.jsxs)(o.c,{children:[Object(a.jsx)(o.a,{exact:!0,path:"/",component:J}),Object(a.jsx)(o.a,{exact:!0,path:"/search",component:F}),Object(a.jsx)(o.a,{exact:!0,path:"/watch",component:ae})]})})},ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,101)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(y,{children:Object(a.jsx)(re,{})})}),document.getElementById("root")),ce()},16:function(e,t,n){e.exports={header:"Header_header__1iZVt",item:"Header_item__3WvVq"}},23:function(e,t,n){e.exports={wrapper:"Layout_wrapper__OJsuf",main:"Layout_main__1JwQz"}},24:function(e,t,n){e.exports={wrap:"VideoPlay_wrap__22i14",video:"VideoPlay_video__2t9S0"}},25:function(e,t,n){e.exports={item:"SideListItem_item__1EMc_",info:"SideListItem_info__12LRi"}},40:function(e,t,n){e.exports={container:"VideoGrid_container__3Sj2s"}},41:function(e,t,n){e.exports={item:"VideoGridItem_item__2juSc"}},45:function(e,t,n){e.exports={wrap:"VideoDetail_wrap__2aAeI"}},47:function(e,t,n){e.exports={sidenav:"SideList_sidenav__rotuj"}}},[[100,1,2]]]);
//# sourceMappingURL=main.554db8e5.chunk.js.map