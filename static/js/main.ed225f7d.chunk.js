(this.webpackJsonpmynotes=this.webpackJsonpmynotes||[]).push([[0],{24:function(e,t,n){e.exports=n.p+"static/media/logo.96a95536.png"},31:function(e,t,n){e.exports=n(42)},36:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(9),r=n.n(c),o=(n(36),n(28)),u=n(16),i=n(24),m=n.n(i),s=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"header"},l.a.createElement("img",{src:m.a,alt:"logo",width:"70",height:"50"}),l.a.createElement("h1",null," My Notes ")))},E=function(){var e=(new Date).getFullYear();return l.a.createElement(l.a.Fragment,null,l.a.createElement("footer",null,l.a.createElement("p",null," Copyright \u24b8 ",e," ")))},f=n(18),p=n(21),g=n(56),b=n(26),d=n.n(b),h=function(e){var t=Object(a.useState)(!1),n=Object(u.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)({title:"",content:""}),i=Object(u.a)(o,2),m=i[0],s=i[1],E=function(e){var t=e.target,n=t.name,a=t.value;s((function(e){return Object(p.a)(Object(p.a)({},e),{},Object(f.a)({},n,a))}))};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"main_note",onDoubleClick:function(){r(!1)}},l.a.createElement("form",null,c?l.a.createElement("input",{type:"text",name:"title",onChange:E,value:m.title,placeholder:"Title",autoComplete:"off"}):null,l.a.createElement("textarea",{cols:"",rows:"",name:"content",onChange:E,value:m.content,placeholder:"Write a Note......",onClick:function(){r(!0)}}),l.a.createElement(g.a,{onClick:function(){e.passNote(m),s({title:"",content:""})}},l.a.createElement(d.a,{className:"plus_sign"})))))},v=n(27),j=n.n(v),N=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"note"},l.a.createElement("h1",null," ",e.title," "),l.a.createElement("br",null),l.a.createElement("p",null," ",e.content," "),l.a.createElement("button",{className:"btn",onClick:function(){e.passDelete(e.id)}},l.a.createElement(j.a,{className:"deleteIcon"}))))},O=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],r=function(e){c((function(t){return t.filter((function(t,n){return n!==e}))}))};return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,null),l.a.createElement(h,{passNote:function(e){c((function(t){return[].concat(Object(o.a)(t),[e])}))}}),n.map((function(e,t){return l.a.createElement(N,{key:t,id:t,title:e.title,content:e.content,passDelete:r})})),l.a.createElement(E,null))};r.a.render(l.a.createElement(O,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.ed225f7d.chunk.js.map