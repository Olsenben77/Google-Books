(this["webpackJsonpreact-books"]=this["webpackJsonpreact-books"]||[]).push([[0],{28:function(e,a,t){e.exports=t(58)},33:function(e,a,t){},35:function(e,a,t){},58:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(23),o=t.n(c),l=(t(33),t(27)),s=t(24),u=t(6);var i=function(){return r.a.createElement("div",{className:"savedBooks"})},m=function(e){var a=e.setInput,t=e.searchSubmit;e.books;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Search Google Books"),r.a.createElement("input",{onChange:function(e){return a(e.target.value)}}),r.a.createElement("button",{className:"btn btn-warning",onClick:function(){return t()}},"Submit"),r.a.createElement("h2",null,"Results"))};t(34),t(35);var h=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"Google Books Search"),r.a.createElement("ul",{className:"nav-links"},r.a.createElement("li",{className:"nav-item"}," ",r.a.createElement("a",{href:"/pages/search",style:{color:"white"}},"Search")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{href:"/pages/saved",style:{color:"white"}},"Saved"))))},E=t(9),v=t.n(E),p=function(e){return v.a.get("/api/search",{q:e})},g=function(){return r.a.createElement("h1",null,"Landing Page")};var f=function(){var e=Object(n.useState)(""),a=Object(l.a)(e,2),t=a[0],c=a[1],o=function(){p(t).then((function(e){return console.log(e)}))};return r.a.createElement(s.a,null,r.a.createElement("div",null,r.a.createElement(h,null),r.a.createElement(u.a,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",component:g}),r.a.createElement(u.a,{exact:!0,path:"/pages/search",component:function(){return r.a.createElement(m,{setInput:c,searchSubmit:o})}}),r.a.createElement(u.a,{exact:!0,path:"/pages/saved",component:i})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.a1cc4f70.chunk.js.map