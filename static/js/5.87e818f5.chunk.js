(this["webpackJsonpsocial-network-socialost"]=this["webpackJsonpsocial-network-socialost"]||[]).push([[5],{230:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(3),s=n(1),a=(n(0),n(26)),i=n(7),o=n(30),c=function(e){return Object(a.b)(u)((function(t){return t.isAuth?Object(s.jsx)(e,Object(r.a)({},t)):Object(s.jsx)(i.a,{to:"/login"})}))},u=function(e){return{isAuth:Object(o.d)(e)}}},231:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return s}));var r=function(e){if(!e)return"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"},s=function(e){return function(t){if(t&&t.length>e)return"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 ".concat(e," \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432")}}},232:function(e,t,n){e.exports={input_successful:"ValidationForms_input_successful__1OJyI",input_error:"ValidationForms_input_error__n5M-D",text_error:"ValidationForms_text_error__1yU9Q"}},233:function(e,t,n){"use strict";n.d(t,"b",(function(){return M})),n.d(t,"a",(function(){return y}));var r=n(3);function s(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var a=n(1),i=n(0),o=n(6),c=n(11),u=i.useLayoutEffect,d=function(e){var t=Object(i.useRef)(e);return u((function(){t.current=e})),t},l=function(e,t){"function"!==typeof e?e.current=t:e(t)},f=function(e,t){var n=Object(i.useRef)();return Object(i.useCallback)((function(r){e.current=r,n.current&&l(n.current,null),n.current=t,t&&l(t,r)}),[t])},m={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},b=function(e){Object.keys(m).forEach((function(t){e.style.setProperty(t,m[t],"important")}))},g=null;var _=function(){},j=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],h=!!document.documentElement.currentStyle,p=function(e,t){var n=e.cacheMeasurements,r=e.maxRows,s=e.minRows,a=e.onChange,u=void 0===a?_:a,l=e.onHeightChange,m=void 0===l?_:l,p=Object(c.a)(e,["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"]);var x=void 0!==p.value,O=Object(i.useRef)(null),v=f(O,t),M=Object(i.useRef)(0),y=Object(i.useRef)(),w=function(){var e=O.current,t=n&&y.current?y.current:function(e){var t=window.getComputedStyle(e);if(null===t)return null;var n,r=(n=t,j.reduce((function(e,t){return e[t]=n[t],e}),{})),s=r.boxSizing;return""===s?null:(h&&"border-box"===s&&(r.width=parseFloat(r.width)+parseFloat(r.borderRightWidth)+parseFloat(r.borderLeftWidth)+parseFloat(r.paddingRight)+parseFloat(r.paddingLeft)+"px"),{sizingStyle:r,paddingSize:parseFloat(r.paddingBottom)+parseFloat(r.paddingTop),borderSize:parseFloat(r.borderBottomWidth)+parseFloat(r.borderTopWidth)})}(e);if(t){y.current=t;var a=function(e,t,n,r){void 0===n&&(n=1),void 0===r&&(r=1/0),g||((g=document.createElement("textarea")).setAttribute("tabindex","-1"),g.setAttribute("aria-hidden","true"),b(g)),null===g.parentNode&&document.body.appendChild(g);var s=e.paddingSize,a=e.borderSize,i=e.sizingStyle,o=i.boxSizing;Object.keys(i).forEach((function(e){var t=e;g.style[t]=i[t]})),b(g),g.value=t;var c=function(e,t){var n=e.scrollHeight;return"border-box"===t.sizingStyle.boxSizing?n+t.borderSize:n-t.paddingSize}(g,e);g.value="x";var u=g.scrollHeight-s,d=u*n;"border-box"===o&&(d=d+s+a),c=Math.max(d,c);var l=u*r;return"border-box"===o&&(l=l+s+a),[c=Math.min(l,c),u]}(t,e.value||e.placeholder||"x",s,r),i=a[0],o=a[1];M.current!==i&&(M.current=i,e.style.setProperty("height",i+"px","important"),m(i,{rowHeight:o}))}};return Object(i.useLayoutEffect)(w),function(e){var t=d(e);Object(i.useLayoutEffect)((function(){var e=function(e){t.current(e)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[])}(w),Object(i.createElement)("textarea",Object(o.a)({},p,{onChange:function(e){x||w(),u(e)},ref:v}))},x=Object(i.forwardRef)(p),O=n(232),v=n.n(O),M=function(e){var t=e.input,n=e.meta,i=s(e,["input","meta"]),o=n.touched&&n.error;return Object(a.jsxs)("div",{children:[Object(a.jsx)(x,Object(r.a)(Object(r.a)({className:"".concat(v.a.input_successful," ").concat(o&&v.a.input_error)},i),t)),o&&Object(a.jsxs)("div",{className:v.a.text_error,children:["\u26d4",n.error]})]})},y=function(e){var t=e.input,n=e.meta,i=s(e,["input","meta"]),o=n.touched&&n.error;return Object(a.jsxs)("div",{children:[Object(a.jsx)("input",Object(r.a)(Object(r.a)({className:"".concat(v.a.input_successful," ").concat(o&&v.a.input_error)},i),t)),o&&Object(a.jsxs)("div",{className:v.a.text_error,children:["\u26d4",n.error]})]})}},241:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return s})),n.d(t,"f",(function(){return a})),n.d(t,"g",(function(){return i})),n.d(t,"e",(function(){return o})),n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return u}));var r=function(e){return e.users.profiles},s=function(e){return e.users.currentPage},a=function(e){return e.users.sizePage},i=function(e){return e.users.totalCount},o=function(e){return e.users.searchName},c=function(e){return e.users.searchFriends},u=function(e){return e.users.followingInProgress}},305:function(e,t,n){e.exports={messages:"Messages_messages__3zjoD"}},306:function(e,t,n){e.exports={listFriends:"ListFriends_listFriends__1d1fY"}},307:function(e,t,n){e.exports={friendsProfile:"FriendsProfileMessages_friendsProfile__1Ivb7",friendsProfile_link:"FriendsProfileMessages_friendsProfile_link__klRx9",friendsProfile_link_name:"FriendsProfileMessages_friendsProfile_link_name__1Ut5Q"}},308:function(e,t,n){e.exports={listMessages:"ListMessages_listMessages__2o9GQ"}},309:function(e,t,n){e.exports={message:"Message_message__C9AXd",message__name:"Message_message__name__2YkQU",message__date:"Message_message__date__2lAMm",message__text:"Message_message__text__2VbBx"}},310:function(e,t,n){e.exports={addMessageForm:"AddMessage_addMessageForm__1gaKa",message__form:"AddMessage_message__form__wJOc9",message__form_field:"AddMessage_message__form_field__22q6M",message__form_button:"AddMessage_message__form_button__P92vD"}},320:function(e,t,n){"use strict";n.r(t);var r=n(26),s=n(7),a=n(25),i=n(230),o=n(80),c=n(65),u=n(241),d=n(1),l=n(0),f=n(305),m=n.n(f),b=n(306),g=n.n(b),_=n(15),j=n(62),h=n(307),p=n.n(h),x=function(e){return Object(d.jsx)("li",{className:p.a.friendsProfile,children:Object(d.jsxs)(_.b,{to:"/messages/"+e.id,className:p.a.friendsProfile_link,children:[Object(d.jsx)(j.a,{photo:e.photo,style:"avatar__small"}),Object(d.jsx)("figcaption",{className:p.a.friendsProfile_link_name,children:e.name})]})})},O=function(e){return Object(d.jsx)("article",{className:g.a.listFriends,children:Object(d.jsx)("ul",{children:e.profiles&&e.profiles.map((function(e){return Object(d.jsx)(x,{id:e.id,name:e.name,photo:e.photos.small},e.id)}))})})},v=n(40),M=n(30),y=function(e){return e.messages.messages},w=n(308),S=n.n(w),F=n(36),P=n.n(F),N=n(309),z=n.n(N),R=function(e){return Object(d.jsxs)("section",{className:z.a.message,children:[Object(d.jsx)(j.a,{photo:e.photo,style:"avatar__small"}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:z.a.message__name,children:[Object(d.jsx)("b",{children:e.login}),Object(d.jsx)("i",{className:z.a.message__date,children:e.dateMessage})]}),Object(d.jsx)("div",{className:z.a.message__text,children:e.textMessage})]})]})},k=function(e){return Object(d.jsx)("article",{className:"".concat(S.a.listMessages," ").concat(P.a.wrapper),children:e.profile&&e.messages.map((function(t){return Object(d.jsx)(R,{login:e.login,photo:e.profile.photos.small,textMessage:t.textMessage,dateMessage:t.dateMessage},t.id)}))})},A=Object(r.b)((function(e){return{messages:y(e),login:Object(M.b)(e),profile:Object(v.b)(e)}}))(k),E=n(50),L=n(111),C=n(112),W=n(310),B=n.n(W),H=n(231),I=n(233),T=Object(H.a)(500),U=Object(C.a)({form:"message",onSubmitSuccess:function(e,t){return t(Object(E.a)("message"))}})((function(e){return Object(d.jsx)("article",{className:B.a.addMessageForm,children:Object(d.jsx)("div",{className:P.a.wrapper,children:Object(d.jsxs)("form",{onSubmit:e.handleSubmit,className:B.a.message__form,children:[Object(d.jsx)(L.a,{placeholder:" \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f...",name:"textArea",component:I.b,className:B.a.message__form_field,validate:[H.b,T],cols:"40",minRows:"2",maxRows:"2"}),Object(d.jsx)("button",{className:B.a.message__form_button,children:Object(d.jsx)("b",{children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})})]})})})})),D=function(e){var t=e.getUserProfile,n=e.currentPage,r=e.sizePage,s=e.searchName,a=e.searchFriends,i=e.profiles,o=e.addMessage;Object(l.useEffect)((function(){t(n,r,s,a)}),[]);var c=new Date,u={hour:"numeric",minute:"numeric"};return i&&Object(d.jsxs)("main",{className:m.a.messages,children:[Object(d.jsx)(O,{profiles:i}),Object(d.jsx)(A,{}),Object(d.jsx)(U,{onSubmit:function(e){o(e.textArea.trim(),c.toLocaleString("ru",u))}})]})};t.default=Object(a.d)(Object(r.b)((function(e){return{profiles:Object(u.c)(e),currentPage:Object(u.a)(e),sizePage:Object(u.f)(e),searchName:Object(u.e)(e),searchFriends:Object(u.d)(e)}}),{getUserProfile:c.c,addMessage:o.a}),s.g,i.a)(D)}}]);
//# sourceMappingURL=5.87e818f5.chunk.js.map