(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[1],{10:function(e,t,n){e.exports={nav:"NavBar_nav__2wPSE",ul:"NavBar_ul__1l48d",li:"NavBar_li__Vep2q",link:"NavBar_link__2RJXd",link_disabled:"NavBar_link_disabled__1AD3k",activeLink:"NavBar_activeLink__2_N7h"}},142:function(e,t,n){},146:function(e,t,n){},167:function(e,t,n){},18:function(e,t,n){e.exports={header:"Header_header__2zkFB",header_img:"Header_header_img__2BIv2",header_accordion:"Header_header_accordion__16J7_",summary:"Header_summary__3Hv2v",header_accordion_auth_name:"Header_header_accordion_auth_name__1E15b",header_accordion_auth_avatar:"Header_header_accordion_auth_avatar__3XI2M",header_accordion_auth_arrow:"Header_header_accordion_auth_arrow__2wF-1",header_accordion_exit:"Header_header_accordion_exit__2P-Ca",header_accordion_exitLink:"Header_header_accordion_exitLink__2rPTD"}},21:function(e,t,n){"use strict";n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return j}));var r=n(4),a=n.n(r),c=n(8),i=n(23),s=n(3),o=n(9),u=n(29),A="INITIALIZED_SUCCESS",l="ADD_MY_FRIENDS",d="ADD_MY_PROFILE",f={initialized:!1,myFriendsProfile:[],myProfile:null},p=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n().auth.id,!n().auth.isAuth){e.next=7;break}return e.next=5,o.c.getProfile(r);case 5:c=e.sent,t((a=c.data,{type:d,myProfile:a}));case 7:case"end":return e.stop()}var a}),e)})));return function(t,n){return e.apply(this,arguments)}}()},j=function(){return function(e){var t,n,r,i;Promise.all([e(Object(u.b)()),e((t=1,n=100,r="",i=!0,function(){var e=Object(c.a)(a.a.mark((function e(c){var s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.d.getUsers(t,n,r,i);case 2:s=e.sent,c((a=s.data.items,{type:l,myFriends:a}));case 4:case"end":return e.stop()}var a}),e)})));return function(t){return e.apply(this,arguments)}}()))]).then((function(){e(p()),e({type:A})}))}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return Object(s.a)(Object(s.a)({},e),{},{initialized:!0});case l:return Object(s.a)(Object(s.a)({},e),{},{myFriendsProfile:Object(i.a)(t.myFriends)});case d:return Object(s.a)(Object(s.a)({},e),{},{myProfile:t.myProfile});default:return e}}},228:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(0),c=n.n(a),i=n(47),s=n.n(i),o=(n(142),n(37)),u=n(26),A=n(7),l=n(25),d=(n(146),n(10)),f=n.n(d),p=n(16),j=function(e){return Object(r.jsx)("nav",{className:f.a.nav,children:Object(r.jsxs)("ul",{className:f.a.ul,children:[Object(r.jsx)("li",{className:f.a.li,children:Object(r.jsxs)(p.b,{to:"/profile",className:"".concat(f.a.link," ").concat(!e.isAuth&&f.a.link_disabled),activeClassName:f.a.activeLink,children:[Object(r.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAABDUlEQVQ4jd3SPyuFYRgG8N9BDuekjj+HryCRxWBSZENJyWRjt/BBKIuNJCkpn8KglIWNgYUBsRzC8D6nzvC+j7djkaue5bqv+7r/PDd/Ha05NENYxjie8fibghuo4Sq8GtabNZvCO+YbuIXATTZjeIDDFP4I+1lJLRHDbtyn8HfoacbwDDPobOBKmA2xVBQihl24wAM2A7eGXoziNZKbiX7sSc7lCbuoxhJid1jCCiYwIFnPJ9pC5x9pSVkjD+JUsr8dnAd+DKt4wxyuY93WUcUtjlFOiZdxghv05THcloxUjGg6cImtn8yKeMFijsJLko9qj4lG8CXfKNWgHY6JKpgWv886CkFbyaH9z/gGwiws/wpmMkYAAAAASUVORK5CYII=",alt:"userIcon"}),"\u041c\u043e\u0439 \u043f\u0440\u043e\u0444\u0438\u043b\u044c"]})}),Object(r.jsx)("li",{className:f.a.li,children:Object(r.jsxs)(p.b,{to:"/messages",className:"".concat(f.a.link," ").concat(!e.isAuth&&f.a.link_disabled),activeClassName:f.a.activeLink,children:[Object(r.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAABdklEQVQ4ja3Uv0uVYRQH8I9XqRvahaZAcZAUh2t7iUNTjU7OjbYoSA6BtNnQryFo1CUa5P4JDRVBDoqbpNMlBCEQdAjMhroOz+n6dtP3vZfuFx4ennO+53vOeX7RZfQU+PswgcFY72MbvzpNNIZVHKHRMo6wgtF2K5zDc1zGOt7ha/hGcBe38ROLeJ1X2VJU8QW3cniT2Anuo4tIU/iNDVzNyxqoYDNiJs8jfMKx1Fa7uIEf+NjqGIpMbzoQ+4O30qkPQimM49IBfY71MGqYifXLGMJWC46IKYVGU/BKzCcxVyKwGut7MYRtJjjwPRPTxIR0Yk/b6/IvPInYatbYI921vUy17aCEXRw467aJ+cj0qgPBBxHz4jxnLz5kRC8ViI3hUHqK1y8iVfA+ROt4iJvox4C0T+PSFakH735RG71YwDf/fgwNrEn73cCz1uC876uMO9KTHMI1TGf8y3hcVF0eqlHVMWb/RygruCXd2a6gLP3guTgFN5lOF5DcVfwAAAAASUVORK5CYII=",alt:"messagesIcon"}),"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"]})}),Object(r.jsx)("li",{className:f.a.li,children:Object(r.jsxs)(p.b,{to:"/friends",className:"".concat(f.a.link," ").concat(!e.isAuth&&f.a.link_disabled),activeClassName:f.a.activeLink,children:[Object(r.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAABTUlEQVQ4je3STyulcRjG8Y+/x9RhIfL3HdiJnYnYWNhrioVYT2mm5DXIloSXYGF4AWZrMU0cvAJpUhTlv1g896mnn3OUZuuqp57nur/31f17fjef+l/VJN9fMIc+nGEDpwnTi1l0oYRN3FYK78FJBGwFfInRHDMWXimY0+jpqRT4C3so5qZfjqYimuN9KXeyIn5jOw1rwTNGEr8J95iI5w6FhBmN3haoD7MRtbhO4IcILMRU9+HldRW9DemUJawm3rcI6EI3HjGZMGs4TMPIjnuHHXyP8Acs5JjF8FaC2ZXd8HAZqM/BTzjHOPrRipfwyvoX3gwu0CFbr+d0uq8x3TrawmvCPG7wAz/jfT5qgt2I3qFyWC2Oo1BJ07J/94ipKswmjsQ6DcZx26rAcIC/79TbI2OgDp2ydXmznDk9YR9/qtRvZItf8bY/9TG9Al0sT6D1nFRfAAAAAElFTkSuQmCC",alt:"friendsIcon"}),"\u0414\u0440\u0443\u0437\u044c\u044f"]})}),Object(r.jsx)("li",{className:f.a.li,children:Object(r.jsxs)(p.b,{to:"/settings",className:"".concat(f.a.link," ").concat(!e.isAuth&&f.a.link_disabled),activeClassName:f.a.activeLink,children:[Object(r.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAABUklEQVQ4je3UvUtcURAF8F92hUVJIWyxjcGPVMEmoKJrTCdobykW8b9IilhYpwokhQhJtZXYJpWQdLJVLBQ1KQwEFpGkCkQkWtwpZHn3sWvtgSnufJx3Zu7cxz26MI73OAh7h7G7ks3iD9p4GdYO32y/ZAM4RQvVW/5q+E4ip2c8xzUaBbFGxBaKCisZwhFcoFMQ60TsUT+EZ6iXKKzjZ6a2EBUcy8/wWGaGD0pIZ/AZP7ATvhU8xhL2+1FIGvqRdAHn+Cbt4eitnF3M90K2jiu8xURX7AU2MI2/2ERTGkWtiKyJS6xlPrYc8X/Sov+OLj7IXPInfCxRPxlkM3GuS4/gdVHyQ/zHXIZsL9S043wove034b/uLniC7xjKEE7hldRmXZpvBV+whcVcW2VohpLTUPY1zquU72EOLWmGv6Q/0HYofhbWN2pSm8Oh7Gn4B+EGIc1H1K3BwtEAAAAASUVORK5CYII=",alt:"settingsIcon"}),"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"]})})]})})},b=n(29),h=n(40),O=n(30),g=n(18),m=n.n(g),x=n(62),v=function(e){var t=Object(a.useState)(!1),n=Object(o.a)(t,2),c=n[0],i=n[1];return Object(r.jsxs)("header",{className:m.a.header,children:[Object(r.jsx)("img",{src:"data:image/jpeg;base64,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",className:m.a.header_img,alt:"logoImg"}),e.isAuth&&e.profile&&Object(r.jsxs)("details",{className:m.a.header_accordion,onMouseEnter:function(){i(!0)},onMouseLeave:function(){i(!1)},open:c,children:[Object(r.jsxs)("summary",{className:m.a.summary,children:[Object(r.jsx)("h1",{className:m.a.header_accordion_auth_name,children:Object(r.jsx)("b",{children:e.login})}),Object(r.jsx)("figure",{className:m.a.header_accordion_auth_avatar,children:Object(r.jsx)(x.a,{photo:e.profile.photos.small,style:"avatar__small"})}),Object(r.jsx)("span",{className:m.a.header_accordion_auth_arrow,children:Object(r.jsx)("b",{children:"\u2039"})})]}),Object(r.jsxs)("aside",{className:m.a.header_accordion_exit,onClick:function(){i(!1),e.logout()},children:[Object(r.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABmJLR0QA/wD/AP+gvaeTAAAAnklEQVQYGXWPMQoCQQxFs8uCiIqeQfAE4jEsvI03WPAUVjaWdjY2bmHjBWTBg4j6EpIhhQ7/5c9PwixbidjZUVfwgqyGcIMtmDqrv4vNap993LNtCBU8oOjqtym+dJ4icoARFMViS0dfz1zozeLT3P9qyGQApnhxTJo7PX6ECRTFYmlwWYP+zF44Dai0oZ45eViox2JHuMMbsmrCGeQLEHMYNdzcYscAAAAASUVORK5CYII=",alt:"exitImg"}),Object(r.jsx)(p.b,{className:m.a.header_accordion_exitLink,to:"/login",children:"\u0412\u044b\u0445\u043e\u0434"})]})]})]})},E=Object(u.b)((function(e){return{login:Object(O.b)(e),isAuth:Object(O.d)(e),profile:Object(h.b)(e)}}),{logout:b.d})(v),w=n(3),C=n(38),P=function(e){return function(t){return Object(r.jsx)(a.Suspense,{fallback:Object(r.jsx)(C.a,{}),children:Object(r.jsx)(e,Object(w.a)({},t))})}},I=n(59),y=n.n(I),B=n(36),U=n.n(B),Q=function(e){return Object(r.jsx)("aside",{className:U.a.wrapper,children:Object(r.jsxs)("figure",{className:y.a.error404,children:[Object(r.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAEsUlEQVR4nO3bXYiVRRzH8c9uW65aaRCFElS+LARRV0WhUKgQmAXhRWgWZUYXUlQSlhZZkVZGr5RQKZXZTaAXedGL4kVF3QgV0YWpeVGJBK5rkfmC28U8j2fO8Tkve87jedbd84WB/zwzz8x/fmfmeeaZmdPldMZjDqbi3Iz0s5Fj2INt+Ldapi48jkMYHKGhH8uStpbRjU+GgYPtCptSEXoSAZZhQSTIHmxPFBsJXITZwrCGhdiJVwljPu7272FM+30844zBeuXDYRzcHl381chsfMoYoXen7Z3Xjb4owzYcLcCxdnFUaGNKXw/Ojy4cqLihG3dhchL/U3iAnGwwfTiyP7Iv7KmaLbAIH2Zc39hg+rCnu076YJ1r9dKHPfV6wCahQVcn8Z+F+UKj6cOeegKcxMctpA976g2BEc+oF6ByCMzA8iIcaSMz4kilAHOSMGroDIGK+Lf4pghH2shM0TCoFGAbVrXVnfazSiTAqB8CHQGKdqBoOgIU7UDRdAQo2oGi6QiQc3nj8TY2YEKNfH1Yjc+SsBrTm6jvVmzBHU3ce4pVSsvErc4C10VlPVIlzwocd/puzXE8MYS6LseR5N5DQ7ivrL159oA+LIniEzPyLMULsleierAGDzZY33PoTexava0meQpQrWEpE4SunvKdsB23EN9H11/EhXXqukZYkW6ZemuCjXI95tfJc4tSw3ZhFv5L4lvwk/AcmJjk/bRGWWvk9OPl1QNekrHlXMHUyN6q1HiJvbVK3kpuwtwheVeDPASYi5sbyBfvOf6dkX44snsz0lPWNOJUo7QqQLfycX2sxfLqMR835llXqwIswrWJfcSZ3RI7B89H8XV5FNqKAOfhmSj+Bn5vzZ2aPICrEvsfOQ2FVgRYiimJ3Y+1rbtTlbFYGcXXOn0nuymaFeAC5bO21TjYujtVeQyXJfZfeC2vgpsVYDkuSew/8E4+7mRysXB6LeVZ2W+RpmhGgEnK5/lPq3H2LgdWKE11fxPOMOVGMwLcKXz1wS/4KD93Mlkc2Svl/KptZiocf+SMw+dRfEpkLxCmt5ubqCMm/tBZolyQmA1CzzxcJT2TZgSIz/9ckYQs+vC+kgDx4ausj534WjxNHlSaZs+q4dd9+AFv1shzGs0Mga9xosG8OyN7T2TPUz7dHYvbovjuyN7RYF0nhB43JJrpATuEr7ZpGWn34O7EfhcPRWlfYEDo0tOTct5K0h6OyuvHl9F9c3Gd7O+DryJ7OvY12oiUZj+H91WpbGZk71f+wBrAk0qvzBuSUMly5eP4qMY2bIfcePJfExyI7KxlqnVCA49npB0T3vdDec2l9Q1lSayMvBZEUjYIJ8YGEzuLl4UH473Cyg78iA+UPycaYbHw8KtWV13yFmAA9zeQbzeeyqG+zVp8zXb2BYp2oGg6AhTtQNF0BCjagaLpCKB8dWVSUY60kcmRPdAtbFOlzDay/zTVq/wo8C7Coka/0pbxeiNThF5hypy28yDGpgsNy/BKlHmvcGp0bzs9PINMFX75K6Nrj+L1NNKl9PeX0RA2ytjM7RLW3/tbKHi4h4PCuuGpxmdtaY8THobTcGlG+tnIAeFfsduFPcxT/A9hq77C5u3wTgAAAABJRU5ErkJggg==",alt:"404img"}),Object(r.jsx)("figcaption",{className:y.a.error404_text,children:Object(r.jsx)("b",{children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430..."})})]})})},N=c.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,318))})),k=c.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,319))})),T=c.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,320))})),R=c.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,321))})),S=c.a.lazy((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,322))})),H=function(e){return Object(r.jsx)("main",{className:U.a.main,children:Object(r.jsxs)(A.d,{children:[Object(r.jsx)(A.b,{path:"/profile/:userId?",render:P(N)}),Object(r.jsx)(A.b,{path:"/messages/:userId?",render:P(k)}),Object(r.jsx)(A.b,{path:"/friends",render:P(T)}),Object(r.jsx)(A.b,{path:"/settings",render:P(R)}),Object(r.jsx)(A.b,{path:"/login",render:P(S)}),Object(r.jsx)(A.a,{exact:!0,from:"/",to:"/profile"}),Object(r.jsx)(A.b,{path:"*",render:function(){return Object(r.jsx)(Q,{})}})]})})},_=n(21),M=n(60),K=n.n(M),D=function(e){return Object(r.jsxs)("aside",{className:K.a.errorAll,children:[Object(r.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABmJLR0QA/wD/AP+gvaeTAAAHUUlEQVRYCe2YfUzUdRzHf787zsjZKjR15nxs2sMUW0tTlqikjD9sugMVThGwMXLmU6L4EJCWlg/LZ7FCFLg7HqzRfEgsZzlZLnWCbGmAUk1rri2lItsh9+v1Obnzd3c/Thz6T/P2+fB5/H6+79/n+3C/Q1EefjrXAbVzw+8+OikpqT9ZKaqqvoJ8StO0JvSzSAefanwh6YECBNwSwKwBwWX4C0A1IcPxxSJHYe9saWl5u7y83IVtSA8KoDpz5sw8ACTCc+jUfmbXYB/ZbLYoDCfxerPZ/HpRUVEzdhCZgjydd6hMvpuJp5lMpgmAK6ekB1xaWtpj6B6y2+1Vra2tUXRzMLnO3NxcQyz33EGW7TWZgYm/FqlnmaS+vj4PXwLgJtKVM+gKY8arqpqPPhD+A31RcXFxIbpCp4cC8BS8jJofi0/PJr0RqNOJbArkKroPxYfCZSkpKb11bo/a0NCwCyVeD47xU8g/AlcQGw2QdfAnNpttKbYC0B+R64lnIVXYj0ICZND3brc7i2LrvKNcLlce+uVbt25tRfqInLlMbAPcJG/nBBy+UuqsAshilvUUXdqIbxoD36ezI5EKe7AQOTAxMfF5pB+Z/KwAg6Ly5PEUXAQAOY0KJ64V+w14Kr5JMmTWrFk9kZvwzWsH3AbiPgKknOgTAJ8szsLCwqvIPwE6GOlHIQFKJk99kK5YmTyTJ84RHxNUY2ewyX8Xmy7PQV7Bvw8pe24scW/nNogvkAH3BHxT57cwpkVne9S7ApQsOnlIQKIvB6QNqQAmv6Sk5JzosNxph5AarDDxdmQe4wzB0fmVxIeQ50Qq2LK0jzLHRbH13C5A9kM0e2gnsocMYLJDFHwV/SQcSH0oLsukJCQkdCP4AlwMBxFgsnBmu93uJLZDI7pQBn9qdDbmbWoXoMViadQ07UUmvkDR2aSrLPdpOvczeiBdI7eXOBn3HrKJcT8g/Yg6y3G8C7h4p9N5AF2hAdHIDB5euorqT2Z/845VU1PTZLVaC65fv/4P3o3Dhw/vXVtbewQ9iIgNUBQlNTIycjwynsni6fhFdC+pbI1V+HP04PCN5EEOk7SDh9+JDKKwII/OwcXrxtw+Y8aMzynUE92Q6NpHXD/d6GJfEqKYrBqpcLpHAWge+kvw07CVzh1EykEaCeCj6E7ylyENSTX03gcnyxlDGQFzDCDfcm+Wc6h+Uvi0Aa9EFXBzkRpsSB0CmJyc3J1OzNY0bTRV+sO/wVUWi2Xr3r17/0X3I5buSUA14CygO0uQPuLgTaROOY67giNHCbnEkkDBedx3G9Avw8c1TTvD5L3R57OsjyNXwn5ETi9yIuAiTrWZoDk8PHwIdRYQS8PeCPAspAaHpHYBsv9MdXV1n1JwOpzucDiKqeQryBL2AUA/fEHEPrtIFysIVHfp0gWhKKyA3I811JpMrcMeZwf+hBnlCDjeSvIBYKVwrNPpPOnNi4uLeyQiImI1tnxNRSMNCRBT6f4zjJc7UmMPXmIP/mqYHMIZtAe94BhjheNYiiqkvBaN4+k3oQ8D+A30RGLHsOVEyp7ri10r9v1kU0AxVTqHzwr7wLFcCQCSK+E4+2hUWFhYP8B4wLHUkwB8ifzzdKwM2S6RuxaeTUJQY/AZkl8ig5eTJZs+FgCezgk4ANjxL8W3Gekj8l/G+Ib4bpbSjjzDfTnI6CuLPPnOfQu5Hq4iN4PLXE46Zvvk6yBXiWz4bAamAaRKhoQCJ3F4PvwVEy3mx081ugugg5CGRN1tvFJFEjSxIud5wGHoIcnkjbKJU1VVrWOyMvExOAbbDmdSeLP4Ali6P4L48Ta/5zrBdrXZPkGtDJZ/hTh496ujXgz6FK6pRmRI8gEkS97h9Md/O5NtAfAWYkHEhDk4B9CJz5AKl/YwpBkOWjZyGjVNywHoh8SFNEAe5eX3bzFCsQ8gYHrCVyU57favr2dZrhKxA5mJsplQ9moqE12ROHvvTeQJHki+ZeTUryAvH5+8O1ZSKx59Ib71yA6THuANinSXkXv27PkLeY1Jo5F+xL7MwfEOD2MD3H502fxxAE6B14otTK1KZDKvU5ORCnfpAXwCcsG9gPQBpMhpJh2n3PksYcIPKDa9zSU/xnPJkdcmG50qEz9LPQZZSu5ah8MhoDAV6dpZcjfzkDvaVsQPJA8qHffkhvqjB7iPxLEMHItU6E4xMhu2A7IS/g4QmXCSHhz2EXIKACedRb1DXbt2zQEkZ8GV5PW2dTKGcVVeXyip6oOA20bBqVwFYzhtv0gMn7xUxrI8Li7p/aWlpZfED+Ao5JdwAQ+zEKnBQcQS9+CGaOZA3AwKdsDhBzA9Pd3S3Nx8kHFDABkLyDr0IOJ9bgKAKwiEBEe80+QHUKrxH4NwLl0H+nhVVdewFGV06Aq2vCE/B7BU9IXwJvwrkIadw39fSDWq0vbCIJs4k3h/uBmWOy4c0OfQV7MPK5APnAwB6mZV+T0yguUeALBWuneBw1Cviz9UH3bgf9+B/wC//I5MMW3xdQAAAABJRU5ErkJggg==",alt:"errorimg"}),Object(r.jsxs)("figcaption",{className:K.a.errorAll_text,children:[Object(r.jsx)("b",{children:"\u0423\u043f\u0441\u0441..."}),Object(r.jsx)("b",{children:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a..."}),Object(r.jsx)("b",{children:"\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0441\u043d\u043e\u0432\u0430"})]})]})},V=Object(l.d)(A.g,Object(u.b)((function(e){return{initialized:Object(h.a)(e),isAuth:Object(O.d)(e)}}),{initializeApp:_.c}))((function(e){var t=Object(a.useState)(!1),n=Object(o.a)(t,2),c=n[0],i=n[1],s=function(){i(!0);var e=setTimeout((function(){i(!1),clearTimeout(e)}),5e3)};return Object(a.useEffect)((function(){return e.initializeApp(),window.addEventListener("unhandledrejection",s),function(){window.removeEventListener("unhandledrejection",s)}}),[]),e.initialized?Object(r.jsxs)("article",{className:"app-container",children:[c&&Object(r.jsx)(D,{}),Object(r.jsx)(E,{}),Object(r.jsx)(j,{isAuth:e.isAuth}),Object(r.jsx)(H,{})]}):Object(r.jsx)(C.a,{})})),Y=function(e){e&&e instanceof Function&&n.e(9).then(n.bind(null,317)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))},z=n(64),L=n(79),F=n(65),J=n(85),G=n(88),X=Object(l.c)({profiles:z.b,messages:L.b,users:F.a,auth:b.a,form:J.a,app:_.a}),W=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,Z=Object(l.e)(X,W(Object(l.a)(G.a)));s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(p.a,{children:Object(r.jsx)(u.a,{store:Z,children:Object(r.jsx)(V,{})})})}),document.getElementById("root")),Y()},29:function(e,t,n){"use strict";n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return j})),n.d(t,"d",(function(){return b}));var r=n(4),a=n.n(r),c=n(8),i=n(3),s=n(50),o=n(9),u=n(21),A="AUTH_ME",l="GET_CAPTCHA",d={id:null,email:null,login:null,isAuth:!1,captcha:null},f=function(e,t,n,r){return{type:A,auth:{id:e,email:t,login:n,isAuth:r}}},p=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c,i,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.authMe();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,c=r.id,i=r.email,s=r.login,t(f(c,i,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},j=function(e,t,n,r){return function(){var i=Object(c.a)(a.a.mark((function c(i){var A,l;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.a.login(e,t,n,r);case 2:0===(A=a.sent).data.resultCode?i(Object(u.c)()):(10===A.data.resultCode&&i(h()),l=A.data.messages.length>0?A.data.messages[0]:"\u041e\u0448\u0438\u0431\u043a\u0430...",i(Object(s.b)("loginForm",{_error:l})));case 4:case"end":return a.stop()}}),c)})));return function(e){return i.apply(this,arguments)}}()},b=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.logout();case 2:0===e.sent.data.resultCode&&t(f(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},h=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.getCaptchaUrl();case 2:n=e.sent,t((r=n.data.url,{type:l,captcha:r}));case 4:case"end":return e.stop()}var r}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return Object(i.a)(Object(i.a)({},e),t.auth);case l:return Object(i.a)(Object(i.a)({},e),{},{captcha:t.captcha});default:return e}}},30:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"d",(function(){return a})),n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return i}));var r=function(e){return e.auth.login},a=function(e){return e.auth.isAuth},c=function(e){return e.auth.id},i=function(e){return e.auth.captcha}},36:function(e,t,n){e.exports={main:"Main_main__1SLbu",wrapper:"Main_wrapper__W0Jad"}},38:function(e,t,n){"use strict";var r=n(1),a=(n(0),n(49)),c=n.n(a);t.a=function(){return Object(r.jsxs)("article",{className:c.a.gooey,children:[Object(r.jsx)("span",{className:c.a.dot}),Object(r.jsxs)("div",{className:c.a.dots,children:[Object(r.jsx)("span",{}),Object(r.jsx)("span",{}),Object(r.jsx)("span",{})]})]})}},40:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return i}));var r=n(87),a=function(e){return e.app.myProfile},c=function(e){return e.app.initialized},i=Object(r.a)((function(e){return e.app.myFriendsProfile}),(function(e){return function(e){for(var t,n,r=e.length-1;r>0;r--)n=e[t=Math.floor(Math.random()*(r+1))],e[t]=e[r],e[r]=n;return e}(e).slice(0,4).slice(0,4)}))},49:function(e,t,n){e.exports={gooey:"Preloader_gooey__3mOz7",dot:"Preloader_dot__31mYm",dots:"Preloader_dots__1s7Ej"}},59:function(e,t,n){e.exports={error404:"Error404_error404__2NYYf",error404_text:"Error404_error404_text__ZVtlp"}},60:function(e,t,n){e.exports={errorAll:"ErrorAll_errorAll__1f3Mt",errorAll_text:"ErrorAll_errorAll_text__1hOyE"}},62:function(e,t,n){"use strict";var r=n(1),a=(n(0),n(167),n.p+"static/media/avatar.8ddff555.png");t.a=function(e){return Object(r.jsx)("figure",{children:Object(r.jsx)("img",{src:e.photo||a,className:e.style,alt:"avatar"})})}},64:function(e,t,n){"use strict";n.d(t,"a",(function(){return g})),n.d(t,"c",(function(){return m})),n.d(t,"e",(function(){return C})),n.d(t,"f",(function(){return P})),n.d(t,"d",(function(){return I})),n.d(t,"h",(function(){return y})),n.d(t,"g",(function(){return B})),n.d(t,"i",(function(){return U}));var r=n(4),a=n.n(r),c=n(8),i=n(23),s=n(3),o=n(9),u=n(21),A="ADD_POST",l="DELETE_POST",d="SET_PROFILE",f="SET_PROFILE_SETTINGS",p="SET_STATUS",j="SET_AVATAR_PHOTO",b="SET_AVATAR_PHOTO_UPDATE",h="SET_INFO_UPDATE",O={posts:[{id:0,textPost:"\u0412\u044b\u0441\u0442\u0443\u043f\u0430\u044f \u043d\u0430 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u043e\u0439 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0435\u0439 Google \u043a\u043e\u043d\u0444\u0435\u0440\u0435\u043d\u0446\u0438\u0438 Zeitgeist Conference \u0432 2011 \u0433\u043e\u0434\u0443, \u0421\u0442\u0438\u0432\u0435\u043d \u0425\u043e\u043a\u0438\u043d\u0433 \u0432\u044b\u0441\u043a\u0430\u0437\u0430\u043b\u0441\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c \u043e\u0431 \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u044f\u0445 \u0444\u0438\u043b\u043e\u0441\u043e\u0444\u0438\u0438 \u0438 \u043d\u0430\u0443\u043a\u0438 \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043a \u0432\u043e\u043f\u0440\u043e\u0441\u0430\u043c \u043f\u043e\u0437\u043d\u0430\u043d\u0438\u044f \u0412\u0441\u0435\u043b\u0435\u043d\u043d\u043e\u0439: \xab\u0411\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u043e \u0438\u0437 \u043d\u0430\u0441 \u043d\u0435 \u0434\u0443\u043c\u0430\u044e\u0442 \u043e\u0431 \u044d\u0442\u043e\u043c \u0432\u0441\u0451 \u0432\u0440\u0435\u043c\u044f, \u043d\u043e, \u0432\u0440\u0435\u043c\u044f \u043e\u0442 \u0432\u0440\u0435\u043c\u0435\u043d\u0438, \u043f\u043e\u0447\u0442\u0438 \u043a\u0430\u0436\u0434\u044b\u0439 \u0437\u0430\u0434\u0443\u043c\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u2014 \u0437\u0430\u0447\u0435\u043c \u043c\u044b \u0437\u0434\u0435\u0441\u044c? \u041e\u0442\u043a\u0443\u0434\u0430 \u043c\u044b \u043f\u043e\u044f\u0432\u0438\u043b\u0438\u0441\u044c? \u0418\u0441\u0442\u043e\u0440\u0438\u0447\u0435\u0441\u043a\u0438, \u044d\u0442\u043e \u0441\u0447\u0438\u0442\u0430\u043b\u043e\u0441\u044c \u0432\u043e\u043f\u0440\u043e\u0441\u0430\u043c\u0438 \u0444\u0438\u043b\u043e\u0441\u043e\u0444\u0438\u0438. \u041d\u043e \u0444\u0438\u043b\u043e\u0441\u043e\u0444\u0438\u044f \u043c\u0435\u0440\u0442\u0432\u0430. \u0424\u0438\u043b\u043e\u0441\u043e\u0444\u044b \u043d\u0435 \u043f\u043e\u0441\u043f\u0435\u0432\u0430\u044e\u0442 \u0437\u0430 \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u043c\u0438 \u0434\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u044f\u043c\u0438 \u043d\u0430\u0443\u043a\u0438, \u0432 \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0444\u0438\u0437\u0438\u043a\u0438. \u0422\u0435\u043f\u0435\u0440\u044c \u0443\u0447\u0451\u043d\u044b\u0435 \u043f\u0440\u0438\u043d\u044f\u043b\u0438 \u044d\u0441\u0442\u0430\u0444\u0435\u0442\u0443 \u043e\u0442\u043a\u0440\u044b\u0442\u0438\u0439 \u0432 \u043d\u0430\u0448\u0435\u043c \u043a\u0432\u0435\u0441\u0442\u0435 \u043f\u043e\u0437\u043d\u0430\u043d\u0438\u044f\xbb.",datePost:"4 \u0438\u044e\u043b\u044f, 18:39"},{id:1,textPost:"\u041d\u0435\u0441\u043c\u043e\u0442\u0440\u044f \u043d\u0430 \u0442\u043e, \u0447\u0442\u043e \u0425\u043e\u043a\u0438\u043d\u0433 \xab\u043f\u043e\u0445\u043e\u0440\u043e\u043d\u0438\u043b\xbb \u0444\u0438\u043b\u043e\u0441\u043e\u0444\u0438\u044e, \u0435\u0434\u0432\u0430 \u043b\u0438 \u043d\u0430\u0439\u0434\u0451\u0442\u0441\u044f \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u0438\u043d \u0444\u0438\u043b\u043e\u0441\u043e\u0444, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u043e\u0437\u0440\u0430\u0437\u0438\u0442 \u043f\u043e \u043f\u043e\u0432\u043e\u0434\u0443 \u0446\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0438 \u043d\u0443\u0436\u043d\u043e\u0441\u0442\u0438 \u043d\u0430\u0443\u0447\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u2014 \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0441\u043f\u043e\u0440\u0438\u043b \u0432\u0435\u043b\u0438\u043a\u0438\u0439 \u0444\u0438\u0437\u0438\u043a \u0442\u0443\u0442 \u043d\u0435 \u0441\u0442\u043e\u043b\u044c\u043a\u043e \u0441 \u0444\u0438\u043b\u043e\u0441\u043e\u0444\u0430\u043c\u0438, \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u043e \u0441\u0432\u043e\u0438\u043c \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043c \u043e \u0444\u0438\u043b\u043e\u0441\u043e\u0444\u0438\u0438. \u042d\u0442\u043e \u0432\u044b\u0441\u043a\u0430\u0437\u044b\u0432\u0430\u043d\u0438\u0435 \u2014 \u0445\u043e\u0440\u043e\u0448\u0438\u0439 \u043f\u043e\u0432\u043e\u0434 \u0434\u043b\u044f \u0441\u0435\u0440\u044c\u0451\u0437\u043d\u043e\u0433\u043e \u043e\u0431 \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u044f\u0445 \u043d\u0430\u0443\u043a\u0438 \u0438 \u0444\u0438\u043b\u043e\u0441\u043e\u0444\u0438\u0438, \u0442\u043e\u0447\u043d\u0435\u0435 \u2014 \u043e\u0431 \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u0438 \u0444\u0438\u043b\u043e\u0441\u043e\u0444\u0438\u0438 \u0441 \u043d\u0430\u0443\u0447\u043d\u044b\u043c \u043c\u0435\u0442\u043e\u0434\u043e\u043c.",datePost:"5 \u0438\u044e\u043b\u044f, 13:29"}],profile:null,profileForSettings:null,status:"",updateAvatar:!1,updateInfo:!1},g=function(e,t){return{type:A,textPost:e,datePost:t}},m=function(e){return{type:l,idPost:e}},x=function(e){return{type:p,status:e}},v=function(e){return{type:j,photoFile:e}},E=function(e){return{type:b,update:e}},w=function(e){return{type:h,update:e}},C=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:d,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},P=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:f,profileForSettings:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},I=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.getStatus(e);case 2:r=t.sent,n(x(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},y=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(x(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},B=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&(n(v(r.data.data.photos)),n(Object(u.b)()),n(E(!0)),c=setTimeout((function(){n(E(!1)),clearTimeout(c)}),1e3));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},U=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n,r){var c,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=r().auth.id,t.next=3,o.c.saveProfileInfo(e);case 3:0===t.sent.data.resultCode&&(n(C(c)),n(P(c)),n(w(!0)),i=setTimeout((function(){n(w(!1)),clearTimeout(i)}),1e3));case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return Object(s.a)(Object(s.a)({},e),{},{posts:[{id:e.posts.length,textPost:t.textPost,datePost:t.datePost}].concat(Object(i.a)(e.posts))});case l:return Object(s.a)(Object(s.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.idPost}))});case d:return Object(s.a)(Object(s.a)({},e),{},{profile:t.profile});case f:return Object(s.a)(Object(s.a)({},e),{},{profileForSettings:t.profileForSettings});case p:return Object(s.a)(Object(s.a)({},e),{},{status:t.status});case j:return Object(s.a)(Object(s.a)({},e),{},{profile:Object(s.a)(Object(s.a)({},e.profile),{},{photos:t.photoFile})});case b:return Object(s.a)(Object(s.a)({},e),{},{updateAvatar:t.update});case h:return Object(s.a)(Object(s.a)({},e),{},{updateInfo:t.update});default:return e}}},65:function(e,t,n){"use strict";n.d(t,"c",(function(){return w})),n.d(t,"b",(function(){return P})),n.d(t,"d",(function(){return I}));var r=n(4),a=n.n(r),c=n(8),i=n(23),s=n(3),o=n(9),u="SET_USER_PROFILE",A="SET_TOTAL_COUNT",l="SET_CURRENT_PAGE",d="SET_SEARCH_NAME",f="SET_SEARCH_FRIENDS",p="FOLLOW",j="UNFOLLOW",b="FOLLOWING_IN_PROGRESS",h={profiles:null,currentPage:1,sizePage:10,totalCount:null,searchName:"",searchFriends:!0,isToggle:!1,followingInProgress:[]},O=function(e,t){return{type:b,isToggle:e,userId:t}},g=function(e){return{type:l,currentPage:e}},m=function(e){return{type:d,searchName:e}},x=function(e){return{type:f,searchFriends:e}},v=function(e){return{type:p,userId:e}},E=function(e){return{type:j,userId:e}},w=function(e,t,n,r){return function(){var i=Object(c.a)(a.a.mark((function c(i){var s;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.d.getUsers(e,t,n,r);case 2:s=a.sent,i((l=s.data.items,{type:u,profiles:l})),i((c=s.data.totalCount,{type:A,totalCount:c})),i(g(e)),i(m(n)),i(x(r));case 8:case"end":return a.stop()}var c,l}),c)})));return function(e){return i.apply(this,arguments)}}()},C=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r,c){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(n);case 2:0===e.sent.data.resultCode&&(t(c(n)),t(O(!1,n))),t(O(!0,n));case 5:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),P=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:C(n,e,o.d.followUser.bind(e),v);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},I=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:C(n,e,o.d.unfollowUser.bind(e),E);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(s.a)(Object(s.a)({},e),{},{profiles:t.profiles});case A:return Object(s.a)(Object(s.a)({},e),{},{totalCount:t.totalCount});case l:return Object(s.a)(Object(s.a)({},e),{},{currentPage:t.currentPage});case d:return Object(s.a)(Object(s.a)({},e),{},{searchName:t.searchName});case f:return Object(s.a)(Object(s.a)({},e),{},{searchFriends:t.searchFriends});case p:return Object(s.a)(Object(s.a)({},e),{},{profiles:e.profiles.map((function(e){return e.id===t.userId?Object(s.a)(Object(s.a)({},e),{},{followed:!0}):e}))});case j:return Object(s.a)(Object(s.a)({},e),{},{profiles:e.profiles.map((function(e){return e.id===t.userId?Object(s.a)(Object(s.a)({},e),{},{followed:!1}):e}))});case b:return Object(s.a)(Object(s.a)({},e),{},{followingInProgress:t.isToggle?[].concat(Object(i.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}}},79:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(23),a=n(3),c="ADD_MESSAGE",i={messages:[{id:0,textMessage:"\u041f\u0440\u0438\u0432\u0435\u0442! \u0422\u044b \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e \u043d\u0435 \u0437\u043d\u0430\u0435\u0448\u044c, \u043a\u043e\u0433\u0434\u0430 \u041f\u0443\u0442\u0438\u043d \u0438 \u041a\u043e \u0443\u0439\u0434\u0443\u0442 \u0432 \u043e\u0442\u0441\u0442\u0430\u0432\u043a\u0443?",dateMessage:"22:30"},{id:1,textMessage:'\u041d\u0435\u0434\u0430\u0432\u043d\u043e \u043e\u043d \u0437\u0430\u044f\u0432\u0438\u043b, \u0432 \u043e\u0442\u0432\u0435\u0442 \u043d\u0430 \u0432\u043e\u043f\u0440\u043e\u0441, \u0447\u0435\u043c \u043f\u043b\u0430\u043d\u0438\u0440\u0443\u0435\u0442 \u0437\u0430\u043d\u044f\u0442\u044c\u0441\u044f \u043f\u043e\u0441\u043b\u0435 \u043e\u0442\u0441\u0442\u0430\u0432\u043a\u0438 \u0438 \u0433\u0434\u0435 \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442 \u0441\u0432\u043e\u044e \u0440\u0430\u0431\u043e\u0442\u0443: "\u0410 \u0437\u0430\u0447\u0435\u043c \u043f\u043e\u0441\u043b\u0435 \u043e\u0442\u0441\u0442\u0430\u0432\u043a\u0438 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c?! \u0411\u0443\u0434\u0443 \u043d\u0430 \u043f\u0435\u0447\u043a\u0435 \u0441\u0438\u0434\u0435\u0442\u044c!". \u041c\u043e\u0436\u0435\u0442 \u0435\u043c\u0443 \u0435\u0449\u0435 \u043f\u0435\u0447\u043a\u0443 \u043d\u0435 \u043f\u043e\u0441\u0442\u0440\u043e\u0438\u043b\u0438?!',dateMessage:"10:22"}]},s=function(e,t){return{type:c,textMessage:e,dateMessage:t}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:return Object(a.a)(Object(a.a)({},e),{},{messages:[{id:e.messages.length,textMessage:t.textMessage,dateMessage:t.dateMessage}].concat(Object(r.a)(e.messages))});default:return e}}},9:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return o}));var r=n(86),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"e9c26744-99a1-4391-9d00-e03a7fab4f78"}}),c={getUsers:function(e,t,n,r){return a.get("users?page=".concat(e,"&count=").concat(t,"&term=").concat(n,"&friend=").concat(r))},followUser:function(e){return a.post("follow/".concat(e))},unfollowUser:function(e){return a.delete("follow/".concat(e))}},i={getProfile:function(e){return a.get("profile/".concat(e))},getStatus:function(e){return a.get("/profile/status/".concat(e))},updateStatus:function(e){return a.put("/profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("/profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfileInfo:function(e){return a.put("/profile",e)}},s={authMe:function(){return a.get("/auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3?arguments[3]:void 0;return a.post("/auth/login",{email:e,password:t,rememberMe:n,captcha:r})},logout:function(){return a.delete("/auth/login")}},o={getCaptchaUrl:function(){return a.get("/security/get-captcha-url")}}}},[[228,2,3]]]);
//# sourceMappingURL=main.7f83f4b4.chunk.js.map