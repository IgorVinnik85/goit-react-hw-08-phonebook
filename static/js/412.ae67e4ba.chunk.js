"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[412],{514:function(e,n,t){t.r(n),t.d(n,{ContactsPhonebook:function(){return v}});var r=t(5861),a=t(9439),s=t(7757),o=t.n(s),c="ContactsPhonebook_list__Gs+B5",u="ContactsPhonebook_item__Xf3WR",i="ContactsPhonebook_btn__tpBX1",l="ContactsPhonebook_spinner__pdAe3",d="ContactsPhonebook_itemWrapper__bpPbh",m=t(643),h=t(9101),f=t(6351),p=t(3661),x=t(184),b=function(){var e,n=(0,h.useSelector)(f.LP),t=(0,p.wY)(n),s=t.data,c=t.isLoading,b=(0,p.zr)(),v=(0,a.Z)(b,1)[0],j=(0,h.useSelector)(f.zK),_=function(){var e=(0,r.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v({id:t,token:n});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(n){return e.apply(this,arguments)}}();return(0,x.jsxs)(x.Fragment,{children:[c&&(0,x.jsx)("div",{className:l,children:(0,x.jsx)(m.g4,{height:"80",width:"80",radius:"9",color:"#4fa94d",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})}),s&&(null===(e=s.filter((function(e){return e.name.toLowerCase().includes(j.toLowerCase())})))||void 0===e?void 0:e.map((function(e){return(0,x.jsxs)("li",{className:u,children:[(0,x.jsx)("div",{className:d,children:(0,x.jsxs)("span",{children:[" ",e.name]})}),(0,x.jsx)("div",{className:d,children:(0,x.jsxs)("span",{children:[" ",e.number]})}),(0,x.jsx)("div",{className:d,children:(0,x.jsx)("button",{className:i,type:"button",onClick:function(){return _(e.id)},children:"delete"})})]},e.id)})))]})},v=function(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("h2",{children:"Contacts"}),(0,x.jsx)("ul",{className:c,children:(0,x.jsx)(b,{})})]})}},3530:function(e,n,t){t.d(n,{Z:function(){return c}});var r="ModalNotify_modal__ZfGAV",a=t(4164),s=t(184),o=document.querySelector("#modal-root"),c=function(e){var n=e.error,t=e.success;return(0,a.createPortal)((0,s.jsxs)("div",{className:r,children:[n,t]}),o)}},1412:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var r=t(9439),a=t(9101),s=t(6351),o=t(3661),c=t(184),u=function(){var e=(0,a.useDispatch)(),n=(0,a.useSelector)(s.zK);return(0,c.jsxs)("div",{children:[(0,c.jsx)("h3",{children:"Find contacts by name"}),(0,c.jsx)("input",{type:"text",placeholder:"Enter find name",value:n,onChange:function(n){console.log(n.target.value),e((0,o.Wu)(n.target.value))}})]})},i=t(5861),l=t(7757),d=t.n(l),m=t(2791),h=t(5558),f=t(5984),p=function(){var e=(0,a.useSelector)(s.LP),n=(0,o.wY)(e).data,t=(0,o.Tn)(),u=(0,r.Z)(t,1)[0],l=(0,m.useState)(""),p=(0,r.Z)(l,2),x=p[0],b=p[1],v=(0,m.useState)(""),j=(0,r.Z)(v,2),_=j[0],k=j[1],g=(0,f.x0)(),C=(0,f.x0)(),Z=function(e){var n=e.currentTarget,t=n.name,r=n.value;"name"===t&&b(r),"number"===t&&k(r)},N=function(){var t=(0,i.Z)(d().mark((function t(r){var a,s,o;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.preventDefault(),a=r.target.elements,s=a.name,o=a.number,!n.find((function(e){return e.name===s.value}))){t.next=5;break}return alert("".concat(s.value," is alredy in contacts")),t.abrupt("return");case 5:return t.prev=5,t.next=8,u({contactData:{name:s.value,number:o.value,id:(0,f.x0)()},token:e});case 8:t.next=13;break;case 10:t.prev=10,t.t0=t.catch(5),console.log(t.t0);case 13:w();case 14:case"end":return t.stop()}}),t,null,[[5,10]])})));return function(e){return t.apply(this,arguments)}}(),w=function(){b(""),k("")};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h1",{children:"Phonebook"}),(0,c.jsxs)("form",{className:h.Z.form,onSubmit:N,children:[(0,c.jsxs)("label",{className:h.Z.form,htmlFor:g,children:["Name",(0,c.jsx)("input",{type:"text",value:x,onChange:Z,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,id:g})]}),(0,c.jsxs)("label",{className:h.Z.form,htmlFor:C,children:["Number",(0,c.jsx)("input",{type:"tel",value:_,onChange:Z,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,id:C})]}),(0,c.jsx)("button",{className:h.Z.btn,type:"submit",children:"Add contact"})]})]})},x=t(3530),b=t(514).ContactsPhonebook,v=function(){var e=(0,m.useState)(!0),n=(0,r.Z)(e,2),t=n[0],o=n[1],i=(0,a.useSelector)(s.LP);return(0,m.useEffect)((function(){if(t){var e=setTimeout((function(){o(!1)}),1500);return function(){clearTimeout(e)}}}),[t]),(0,c.jsxs)(c.Fragment,{children:[t&&(0,c.jsx)(x.Z,{success:"Login Successful"}),i&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(p,{}),(0,c.jsx)(u,{}),(0,c.jsx)(b,{})]})]})}},5558:function(e,n){n.Z={form:"FormPhonebook_form__yE3-g",btn:"FormPhonebook_btn__5b-dH"}}}]);
//# sourceMappingURL=412.ae67e4ba.chunk.js.map