"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[81],{280:function(t,e,n){n.d(e,{M1:function(){return l},Q2:function(){return o},TP:function(){return f},qF:function(){return p},tx:function(){return m},yA:function(){return s}});var r=n(861),a=n(757),c=n.n(a),u=n(388);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="https://image.tmdb.org/t/p/w500",i="0c6aaf0b7647b8904eb56d7029fc3369",o=function(){var t=(0,r.Z)(c().mark((function t(){var e,n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="trending/movie/day?api_key=".concat(i),t.next=3,u.Z.get(e);case 3:return n=t.sent,r=n.data,t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="search/movie?api_key=".concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(e),t.next=3,u.Z.get(n);case 3:return r=t.sent,a=r.data,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="movie/".concat(e,"?api_key=").concat(i,"&language=en-US"),t.next=3,u.Z.get(n);case 3:return r=t.sent,a=r.data,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"),t.next=3,u.Z.get(n);case 3:return r=t.sent,a=r.data,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US"),t.next=3,u.Z.get(n);case 3:return r=t.sent,a=r.data,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},81:function(t,e,n){n.r(e),n.d(e,{default:function(){return m}});var r=n(861),a=n(885),c=n(757),u=n.n(c),s=n(280),i=n(791),o=n(731),p=n(689),f={box:"Home_box__kau63",homeTitle:"Home_homeTitle__0vDaF",list:"Home_list__0TnMr",listItem:"Home_listItem__fSUNk",title:"Home_title__3qaH0"},l=n(184),m=function(){var t=(0,i.useState)([]),e=(0,a.Z)(t,2),n=e[0],c=e[1],m=(0,p.TH)();return(0,i.useEffect)((function(){var t=function(){var t=(0,r.Z)(u().mark((function t(){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s.Q2)();case 2:e=t.sent,n=e.results,c(n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,l.jsxs)("div",{className:f.box,children:[(0,l.jsx)("h1",{className:f.homeTitle,children:"Tranding today"}),(0,l.jsx)("ul",{className:f.list,children:n&&n.map((function(t){var e=t.id,n=t.title,r=t.poster_path;return(0,l.jsx)("li",{className:f.listItem,children:(0,l.jsxs)(o.rU,{to:"/movies/".concat(e),state:{from:m},children:[(0,l.jsx)("img",{className:f.img,src:r?"https://image.tmdb.org/t/p/w300".concat(r):"https://bitsofco.de/content/images/2018/12/broken-1.png",width:"200",height:"150",alt:n}),(0,l.jsx)("p",{className:f.title,children:n})]})},e)}))})]})}}}]);
//# sourceMappingURL=81.45049a54.chunk.js.map