(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{349:function(t,n,e){var content=e(459);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(48).default)("67f11167",content,!0,{sourceMap:!1})},458:function(t,n,e){"use strict";var r=e(349);e.n(r).a},459:function(t,n,e){(t.exports=e(47)(!1)).push([t.i,".container{min-height:100vh;padding:16px}h3{padding:8px 0;border-bottom:1px solid #e5e5e5}h3,li+li{margin:16px 0}p{margin:8px 0}",""])},468:function(t,n,e){"use strict";e.r(n);e(72);var r=e(6),o={asyncData:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(n){var e,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.app,t.next=3,e.$axios.$get("https://qiita.com/api/v2/items?query=tag:nuxt.js");case 3:return r=t.sent,t.abrupt("return",{items:r});case 5:case"end":return t.stop()}},t)}));return function(n){return t.apply(this,arguments)}}()},c=(e(458),e(24)),component=Object(c.a)(o,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"container"},[e("h3",[t._v("posts list wiz tag nuxt.js")]),t._v(" "),e("ul",t._l(t.items,function(n){return e("li",{key:n.id},[e("h4",[e("span",[t._v(t._s(n.title))]),t._v(" "),e("small",[e("span",[t._v("\n            by\n          ")]),t._v(" "),e("nuxt-link",{attrs:{to:"/users/"+n.user.id}},[t._v("\n            "+t._s(n.user.id)+"\n          ")])],1)]),t._v(" "),e("div",[t._v(t._s(n.body.slice(0,130))+"......")]),t._v(" "),e("p",[e("a",{attrs:{href:n.url}},[t._v(t._s(n.url))])])])}),0)])},[],!1,null,null,null);n.default=component.exports}}]);