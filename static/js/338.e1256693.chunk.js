"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[338],{9338:function(n,e,r){r.r(e),r.d(e,{default:function(){return F}});var t,o,i,a,c,l,s,u=r(2791),d=r(9434),x=r(4270),f=r(3634),m=r(1413),p=r(7762),b=r(5705),h=r(6727),j=r(5984),g=r(168),v=r(6444),Z=v.ZP.label(t||(t=(0,g.Z)(["\ndisplay: flex;\ngap: 12px;\nflex-direction: column;\nwidth: 450px;\nmargin: 20px 15px;\n\n"]))),y=v.ZP.button(o||(o=(0,g.Z)(["\nborder-radius: 4px;\nalign-self: center;\nmargin: 30px 50px;\nbackground-color: #59b8bd;\ncolor: #ffffff;\n\n:hover{\n   background-color: #57c253;\n   scale: 1.2; \n}\n    \n:focus{\n   background-color: #59b8bd; \n   scale: 1.2;\n}\n    \n\n"]))),k=r(184),w=h.Ry().shape({number:h.Rx().positive("!!! > 0 !!!").min(2,"too short!").required("Required"),name:h.Z_().min(2,"too short!").required("Required")}),C=function(n){var e=n.onSubmit,r=n.contArr;return(0,k.jsx)(b.J9,{initialValues:{number:"",name:""},validationSchema:w,onSubmit:function(n){var t,o=(0,p.Z)(r);try{for(o.s();!(t=o.n()).done;){var i=t.value;if(n.name.toLocaleLowerCase()===i.name.toLocaleLowerCase())return void alert("".concat(n.name," is already in contacts!"))}}catch(a){o.e(a)}finally{o.f()}e((0,m.Z)((0,m.Z)({},n),{},{id:(0,j.x0)()}))},children:(0,k.jsxs)(b.l0,{children:[(0,k.jsxs)(Z,{children:["Name",(0,k.jsx)(b.gN,{id:"firstName",name:"name",placeholder:"Name"}),(0,k.jsx)(b.Bc,{name:"name"})]}),(0,k.jsxs)(Z,{children:["Number",(0,k.jsx)(b.gN,{id:"secName",name:"number",placeholder:"Number"}),(0,k.jsx)(b.Bc,{name:"number"})]}),(0,k.jsx)(y,{type:"submit",children:"Add contacts"})]})})},L=v.ZP.h2(i||(i=(0,g.Z)(["\ndisplay: inline-block;\nmargin: 15px 50px;\n\n"]))),N=v.ZP.ul(a||(a=(0,g.Z)(["\nlist-style: none;\ndisplay: flex;\nflex-direction: column;\ngap: 10px;\n"]))),P=v.ZP.li(c||(c=(0,g.Z)(["\npadding: 6px;\nborder: 1px solid;\nborder-radius: 3px;\nwidth: 600px;\ndisplay: flex;\njustify-content: space-between; \n"]))),q=v.ZP.button(l||(l=(0,g.Z)(["\nbackground-color: #ceddde;\nborder-radius: 3px;\n\n:hover{\n    background-color:#f55b74;\n}\n:focus{\n    background-color:#f55b74;\n}\n\n"]))),_=function(n){var e=n.contactsList,r=n.onDelete;return(0,k.jsxs)("div",{children:[(0,k.jsx)(L,{children:"Contacts"}),(0,k.jsx)(N,{children:e.map((function(n){return(0,k.jsxs)(P,{children:[n.name," : ",n.number," ",(0,k.jsx)(q,{onClick:function(){return r(n.id)},type:"button",children:"Delete"})]},n.id)}))})]})},R=v.ZP.input(s||(s=(0,g.Z)(["\nmargin: 15px 15px;\nwidth: 250px;\nborder-radius: 5px;\nborder: 3px solid #c87ff0;\n"]))),S=function(n){var e=n.value,r=n.onChange;return(0,k.jsx)("div",{children:(0,k.jsx)(R,{type:"text",onChange:r,value:e,placeholder:"To find contact by name"})})},A=function(n){return n.contacts.items},D=function(n){return n.filter},B=r(4808);function F(){var n=(0,d.I0)(),e=(0,d.v9)(A),r=(0,d.v9)(D),t=e.filter((function(n){return n.name.toLowerCase().includes(r.toLowerCase())}));(0,u.useEffect)((function(){n((0,f.yF)())}),[n],e,r);return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(x.q,{children:(0,k.jsx)("title",{children:"Your contacts"})}),(0,k.jsx)(C,{contArr:e,onSubmit:function(e){n((0,f.uK)(e)),console.log(e)}}),(0,k.jsx)(S,{value:r,onChange:function(e){n((0,B.T)(e.target.value))}}),e.length>0?(0,k.jsx)(_,{onDelete:function(e){return n((0,f.GK)(e))},contactsList:t||null}):(0,k.jsx)("p",{children:"Contacts"})]})}}}]);
//# sourceMappingURL=338.e1256693.chunk.js.map