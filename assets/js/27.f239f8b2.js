(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{374:function(t,e,l){"use strict";l.r(e);var s={computed:{recentFiles(){return this.$site.pages.sort((t,e)=>e.lastUpdatedTimestamp-t.lastUpdatedTimestamp).filter(t=>t.title).slice(0,10).map(t=>{const{relativePath:e}=t,l=e.split("/"),s=l[l.length-2]+"/"+l[l.length-1];return{...t,title:s}})}}},i=l(14),n=Object(i.a)(s,(function(){var t=this,e=t._self._c;return e("div",[e("h3",[t._v("最近更新")]),t._v(" "),e("ul",t._l(t.recentFiles,(function(l,s){return e("li",{key:s},[e("a",{attrs:{href:l.path}},[t._v(t._s(l.title))])])})),0)])}),[],!1,null,null,null);e.default=n.exports}}]);