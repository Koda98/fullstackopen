(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{39:function(e,n,t){"use strict";t.r(n);var r=t(15),c=t.n(r),o=t(6),a=t(3),i=t(1),d=t(0),u=function(e){var n=e.eventHandler;return Object(d.jsxs)("div",{children:["filter shown with ",Object(d.jsx)("input",{onChange:n})]})},s=function(e){var n=e.addPerson,t=e.handleAddName,r=e.handleAddNumber;return Object(d.jsxs)("form",{id:"FORM",onSubmit:n,children:[Object(d.jsxs)("div",{children:["name: ",Object(d.jsx)("input",{onChange:t})]}),Object(d.jsxs)("div",{children:["number: ",Object(d.jsx)("input",{onChange:r})]}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{type:"submit",children:"add"})})]})},l=function(e){var n=e.person,t=e.deletePerson;return Object(d.jsxs)("div",{children:[n.name," ",n.number,Object(d.jsx)("button",{onClick:t,children:"delete"})]})},b=function(e){var n=e.persons_array,t=e.deletePerson;return Object(d.jsx)("div",{children:n.map((function(e){return Object(d.jsx)(l,{person:e,deletePerson:function(){return t(e)}},e.name)}))})},j=t(4),f=t.n(j),h="/api/persons",m=function(){return f.a.get(h).then((function(e){return e.data}))},O=function(e){return f.a.post(h,e).then((function(e){return e.data}))},p=function(e){return f.a.delete("".concat(h,"/").concat(e)).then((function(e){return e.data}))},v=function(e,n){return f.a.put("".concat(h,"/").concat(e),n).then((function(e){return e.data}))},g=function(e){var n=e.message,t=e.isError;return null===n?null:t?Object(d.jsx)("div",{style:{color:"red",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10},children:n}):Object(d.jsx)("div",{style:{color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10},children:n})},x=function(){var e=Object(i.useState)([]),n=Object(a.a)(e,2),t=n[0],r=n[1],c=Object(i.useState)(""),l=Object(a.a)(c,2),j=l[0],f=l[1],h=Object(i.useState)(""),x=Object(a.a)(h,2),y=x[0],w=x[1],S=Object(i.useState)(""),k=Object(a.a)(S,2),P=k[0],A=k[1],C=Object(i.useState)(null),E=Object(a.a)(C,2),N=E[0],B=E[1],D=Object(i.useState)(!1),R=Object(a.a)(D,2),T=R[0],I=R[1];Object(i.useEffect)((function(){m().then((function(e){r(e)}))}),[]);var U=t.filter((function(e){return e.name.toUpperCase().includes(P.toUpperCase())}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Phonebook"}),Object(d.jsx)(g,{message:N,isError:T}),Object(d.jsx)(u,{eventHandler:function(e){A(e.target.value)}}),Object(d.jsx)("h3",{children:"add a new"}),Object(d.jsx)(s,{addPerson:function(e){e.preventDefault();var n={name:j,number:y},c=t.find((function(e){return e.name===j}));if(c){if(window.confirm("".concat(j," is already added to the phonebook, replace the old number with a new one?"))){var a=Object(o.a)(Object(o.a)({},c),{},{number:y});v(c.id,a).then((function(e){B("updated ".concat(c.name)),I(!1),setTimeout((function(){B(null),I(null)}),5e3),r(t.map((function(n){return n.id!==c.id?n:e}))),console.log("Updated ".concat(c.name))})).catch((function(e){B("Information of ".concat(c.name," has alredy been removed from the server")),I(!0),setTimeout((function(){B(null),I(null)}),5e3),r(t.filter((function(e){return e.id!==c.id})))}))}}else O(n).then((function(e){B("Added ".concat(j)),I(!1),setTimeout((function(){B(null),I(null)}),5e3),r(t.concat(e)),f(""),w(""),console.log("Added ".concat(j))}));document.getElementById("FORM").reset()},handleAddName:function(e){f(e.target.value)},handleAddNumber:function(e){w(e.target.value)}}),Object(d.jsx)("h3",{children:"Numbers"}),Object(d.jsx)(b,{persons_array:U,deletePerson:function(e){window.confirm("Delete ".concat(e.name," ?"))&&p(e.id).then((function(n){B("Deleted ".concat(e.name)),I(!1),setTimeout((function(){B(null),I(null)}),5e3),r(t.filter((function(n){return n.id!==e.id}))),console.log("Deleted ".concat(e.name," with id ").concat(e.id))}))}})]})};c.a.render(Object(d.jsx)(x,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.ac4f7a6b.chunk.js.map