"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[879],{879:function(e,n,t){t.r(n),t.d(n,{default:function(){return y}});var r,i=t(2791),a=t(9434),o=t(4270),c=t(3634),u=t(1413),s=t(7762),l=t(5705),d=t(6727),m=t(5984),h=t(168),x=t(6444).ZP.label(r||(r=(0,h.Z)(["\ndisplay: flex;\ngap: 12px;\nflex-direction: column;\nwidth: 450px;\nmargin: 20px 15px;\n\n"]))),f=t(184),j=d.Ry().shape({number:d.Rx().positive("!!! > 0 !!!").min(2,"too short!").required("Required"),name:d.Z_().min(2,"too short!").required("Required")}),p=function(e){var n=e.onSubmit,t=e.contArr;return(0,f.jsx)(l.J9,{initialValues:{number:"",name:""},validationSchema:j,onSubmit:function(e){var r,i=(0,s.Z)(t);try{for(i.s();!(r=i.n()).done;){var a=r.value;if(e.name.toLocaleLowerCase()===a.name.toLocaleLowerCase())return void alert("".concat(e.name," is already in contacts!"))}}catch(o){i.e(o)}finally{i.f()}n((0,u.Z)((0,u.Z)({},e),{},{id:(0,m.x0)()}))},children:(0,f.jsxs)(l.l0,{children:[(0,f.jsxs)(x,{children:["Name",(0,f.jsx)(l.gN,{id:"firstName",name:"name",placeholder:"Name"}),(0,f.jsx)(l.Bc,{name:"name"})]}),(0,f.jsxs)(x,{children:["Number",(0,f.jsx)(l.gN,{id:"secName",name:"number",placeholder:"Number"}),(0,f.jsx)(l.Bc,{name:"number"})]}),(0,f.jsx)("button",{type:"submit",children:"Add contacts"})]})})},v=function(e){var n=e.contactsList,t=e.onDelete;return(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:"Contacts"}),(0,f.jsx)("ul",{children:n.map((function(e){return(0,f.jsxs)("li",{children:[e.name," : ",e.number," ",(0,f.jsx)("button",{onClick:function(){return t(e.id)},type:"button",children:"Delete"})]},e.id)}))})]})},b=function(e){var n=e.value,t=e.onChange;return(0,f.jsx)("div",{children:(0,f.jsx)("input",{type:"text",onChange:t,value:n})})},C=function(e){return e.contacts.items},g=function(e){return e.filter},w=t(4808);function y(){var e=(0,a.I0)(),n=(0,a.v9)(C),t=(0,a.v9)(g),r=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));(0,i.useEffect)((function(){e((0,c.yF)())}),[e],n,t);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o.q,{children:(0,f.jsx)("title",{children:"Your contacts"})}),(0,f.jsx)(p,{contArr:n,onSubmit:function(n){e((0,c.uK)(n)),console.log(n)}}),(0,f.jsx)(b,{value:t,onChange:function(n){e((0,w.T)(n.target.value))}}),n.length>0?(0,f.jsx)(v,{onDelete:function(n){return e((0,c.GK)(n))},contactsList:r||null}):(0,f.jsx)("p",{children:"Contacts"})]})}}}]);
//# sourceMappingURL=879.623685ce.chunk.js.map