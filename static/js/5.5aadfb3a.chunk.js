(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[5],{230:function(e,s,t){"use strict";t.d(s,"a",(function(){return o}));var n=t(3),r=t(1),a=(t(0),t(26)),c=t(7),i=t(30),o=function(e){return Object(a.b)(u)((function(s){return s.isAuth?Object(r.jsx)(e,Object(n.a)({},s)):Object(r.jsx)(c.a,{to:"/login"})}))},u=function(e){return{isAuth:Object(i.d)(e)}}},231:function(e,s,t){"use strict";t.d(s,"b",(function(){return n})),t.d(s,"a",(function(){return r}));var n=function(e){if(!e)return"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"},r=function(e){return function(s){if(s&&s.length>e)return"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 ".concat(e," \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432")}}},232:function(e,s,t){e.exports={input_successful:"ValidationForms_input_successful__1OJyI",input_error:"ValidationForms_input_error__n5M-D",text_error:"ValidationForms_text_error__1yU9Q"}},233:function(e,s,t){"use strict";t.d(s,"b",(function(){return o})),t.d(s,"a",(function(){return u}));var n=t(3);function r(e,s){if(null==e)return{};var t,n,r=function(e,s){if(null==e)return{};var t,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],s.indexOf(t)>=0||(r[t]=e[t]);return r}(e,s);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],s.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var a=t(1),c=(t(0),t(232)),i=t.n(c),o=function(e){var s=e.input,t=e.meta,c=r(e,["input","meta"]),o=t.touched&&t.error;return Object(a.jsxs)("div",{children:[Object(a.jsx)("textarea",Object(n.a)(Object(n.a)({className:"".concat(i.a.input_successful," ").concat(o&&i.a.input_error)},c),s)),o&&Object(a.jsxs)("div",{className:i.a.text_error,children:["\u26d4",t.error]})]})},u=function(e){var s=e.input,t=e.meta,c=r(e,["input","meta"]),o=t.touched&&t.error;return Object(a.jsxs)("div",{children:[Object(a.jsx)("input",Object(n.a)(Object(n.a)({className:"".concat(i.a.input_successful," ").concat(o&&i.a.input_error)},c),s)),o&&Object(a.jsxs)("div",{className:i.a.text_error,children:["\u26d4",t.error]})]})}},241:function(e,s,t){"use strict";t.d(s,"c",(function(){return n})),t.d(s,"a",(function(){return r})),t.d(s,"f",(function(){return a})),t.d(s,"g",(function(){return c})),t.d(s,"e",(function(){return i})),t.d(s,"d",(function(){return o})),t.d(s,"b",(function(){return u}));var n=function(e){return e.users.profiles},r=function(e){return e.users.currentPage},a=function(e){return e.users.sizePage},c=function(e){return e.users.totalCount},i=function(e){return e.users.searchName},o=function(e){return e.users.searchFriends},u=function(e){return e.users.followingInProgress}},305:function(e,s,t){e.exports={messages:"Messages_messages__3zjoD"}},306:function(e,s,t){e.exports={listFriends:"ListFriends_listFriends__1d1fY"}},307:function(e,s,t){e.exports={friendsProfile:"FriendsProfileMessages_friendsProfile__1Ivb7",friendsProfile_link:"FriendsProfileMessages_friendsProfile_link__klRx9",friendsProfile_link_name:"FriendsProfileMessages_friendsProfile_link_name__1Ut5Q"}},308:function(e,s,t){e.exports={listMessages:"ListMessages_listMessages__2o9GQ"}},309:function(e,s,t){e.exports={message:"Message_message__C9AXd",message__name:"Message_message__name__2YkQU",message__date:"Message_message__date__2lAMm",message__text:"Message_message__text__2VbBx"}},310:function(e,s,t){e.exports={addMessageForm:"AddMessage_addMessageForm__1gaKa",message__form:"AddMessage_message__form__wJOc9",message__form_button:"AddMessage_message__form_button__P92vD"}},320:function(e,s,t){"use strict";t.r(s);var n=t(26),r=t(7),a=t(25),c=t(230),i=t(80),o=t(65),u=t(241),l=t(1),f=t(0),_=t(305),d=t.n(_),m=t(306),j=t.n(m),b=t(16),g=t(62),O=t(307),x=t.n(O),p=function(e){return Object(l.jsx)("li",{className:x.a.friendsProfile,children:Object(l.jsxs)(b.b,{to:"/messages/"+e.id,className:x.a.friendsProfile_link,children:[Object(l.jsx)(g.a,{photo:e.photo,style:"avatar__small"}),Object(l.jsx)("figcaption",{className:x.a.friendsProfile_link_name,children:e.name})]})})},h=function(e){return Object(l.jsx)("article",{className:j.a.listFriends,children:Object(l.jsx)("ul",{children:e.profiles&&e.profiles.map((function(e){return Object(l.jsx)(p,{id:e.id,name:e.name,photo:e.photos.small},e.id)}))})})},M=t(40),v=t(30),P=function(e){return e.messages.messages},N=t(308),F=t.n(N),k=t(36),w=t.n(k),y=t(309),A=t.n(y),S=function(e){return Object(l.jsxs)("section",{className:A.a.message,children:[Object(l.jsx)(g.a,{photo:e.photo,style:"avatar__small"}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:A.a.message__name,children:[Object(l.jsx)("b",{children:e.login}),Object(l.jsx)("i",{className:A.a.message__date,children:e.dateMessage})]}),Object(l.jsx)("div",{className:A.a.message__text,children:e.textMessage})]})]})},U=function(e){return Object(l.jsx)("article",{className:"".concat(F.a.listMessages," ").concat(w.a.wrapper),children:e.profile&&e.messages.map((function(s){return Object(l.jsx)(S,{login:e.login,photo:e.profile.photos.small,textMessage:s.textMessage,dateMessage:s.dateMessage},s.id)}))})},z=Object(n.b)((function(e){return{messages:P(e),login:Object(v.b)(e),profile:Object(M.b)(e)}}))(U),D=t(50),I=t(111),J=t(112),Q=t(310),V=t.n(Q),L=t(231),C=t(233),E=Object(L.a)(500),Y=Object(J.a)({form:"message",onSubmitSuccess:function(e,s){return s(Object(D.a)("message"))}})((function(e){return Object(l.jsx)("article",{className:V.a.addMessageForm,children:Object(l.jsx)("div",{className:w.a.wrapper,children:Object(l.jsxs)("form",{onSubmit:e.handleSubmit,className:V.a.message__form,children:[Object(l.jsx)(I.a,{placeholder:" \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f...",name:"textArea",component:C.b,validate:[L.b,E],cols:"40",rows:"2"}),Object(l.jsx)("button",{className:V.a.message__form_button,children:Object(l.jsx)("b",{children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})})]})})})})),B=function(e){var s=e.getUserProfile,t=e.currentPage,n=e.sizePage,r=e.searchName,a=e.searchFriends,c=e.profiles,i=e.addMessage;Object(f.useEffect)((function(){s(t,n,r,a)}),[]);var o=new Date,u={hour:"numeric",minute:"numeric"};return c&&Object(l.jsxs)("main",{className:d.a.messages,children:[Object(l.jsx)(h,{profiles:c}),Object(l.jsx)(z,{}),Object(l.jsx)(Y,{onSubmit:function(e){i(e.textArea.trim(),o.toLocaleString("ru",u))}})]})};s.default=Object(a.d)(Object(n.b)((function(e){return{profiles:Object(u.c)(e),currentPage:Object(u.a)(e),sizePage:Object(u.f)(e),searchName:Object(u.e)(e),searchFriends:Object(u.d)(e)}}),{getUserProfile:o.c,addMessage:i.a}),r.g,c.a)(B)}}]);
//# sourceMappingURL=5.5aadfb3a.chunk.js.map