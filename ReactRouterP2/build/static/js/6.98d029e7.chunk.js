(this.webpackJsonpquoteapp=this.webpackJsonpquoteapp||[]).push([[6],{39:function(e,t,n){e.exports={card:"Card_card__1KjfC"}},40:function(e,t,n){e.exports={form:"QuoteForm_form__2mlLF",loading:"QuoteForm_loading__29rnA",control:"QuoteForm_control__2gP4G",actions:"QuoteForm_actions__1Ve8i"}},53:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(2),r=n(35),s=n(39),a=n.n(s),u=n(1),i=function(e){return Object(u.jsx)("div",{className:a.a.card,children:e.children})},l=n(15),d=n(40),j=n.n(d),b=function(e){var t=Object(c.useState)(!0),n=Object(r.a)(t,2),s=n[0],a=n[1],d=Object(c.useRef)(),b=Object(c.useRef)();return Object(u.jsxs)(c.Fragment,{children:[Object(u.jsx)(o.a,{when:s.valueOf,message:function(e){return"Are you sure you want to leave? All your entered data will be lost!"}}),Object(u.jsx)(i,{children:Object(u.jsxs)("form",{onFocus:function(){a(!0),console.log(s)},className:j.a.form,onSubmit:function(t){t.preventDefault();var n=d.current.value,c=b.current.value;e.onAddQuote({author:n,text:c})},children:[e.isLoading&&Object(u.jsx)("div",{className:j.a.loading,children:Object(u.jsx)(l.a,{})}),Object(u.jsxs)("div",{className:j.a.control,children:[Object(u.jsx)("label",{htmlFor:"author",children:"Author"}),Object(u.jsx)("input",{type:"text",id:"author",ref:d})]}),Object(u.jsxs)("div",{className:j.a.control,children:[Object(u.jsx)("label",{htmlFor:"text",children:"Text"}),Object(u.jsx)("textarea",{id:"text",rows:"5",ref:b})]}),Object(u.jsx)("div",{className:j.a.actions,children:Object(u.jsx)("button",{onClick:function(){a(!1)},className:"btn",children:"Add Quote"})})]})})]})},f=n(33),h=n(34);t.default=function(){var e=Object(f.a)(h.b),t=e.sendRequest,n=e.status,r=Object(o.h)();Object(c.useEffect)((function(){"completed"===n&&r.push("/quotes")}),[n,r]);return Object(u.jsx)(b,{isLoading:"pending"===n,onAddQuote:function(e){t(e)}})}}}]);
//# sourceMappingURL=6.98d029e7.chunk.js.map