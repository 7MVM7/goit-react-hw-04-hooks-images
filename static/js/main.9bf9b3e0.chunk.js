(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{16:function(e,t,a){e.exports={overlay:"Modal_overlay__gXgI9",modal:"Modal_modal__2YRmG"}},17:function(e,t,a){e.exports={galleryItem:"ImageGalleryItem_galleryItem__1Owq6",galleryItemImage:"ImageGalleryItem_galleryItemImage__3JWOe"}},28:function(e,t,a){e.exports={imageGalleryList:"ImageGallery_imageGalleryList__2oqXo"}},29:function(e,t,a){e.exports={button:"Button_button__1VB-P"}},35:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(6),o=a.n(c),s=(a(35),a(7)),i=a.n(s),u=a(18),l=a(13),b=a(4),m=a(5),j=(a(19),a(15)),h=a.n(j);h.a.defaults.baseURL="https://pixabay.com/api";var g=function(){var e=Object(l.a)(i.a.mark((function e(t){var a,r,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.query,r=t.page,e.next=3,h.a.get("/?q=".concat(a,"&page=").concat(r,"&key=").concat("23035715-e0cb760b48ddc49b0eff80b6c","&image_type=photo&orientation=horizontal&per_page=12"));case 3:return n=e.sent,e.abrupt("return",n.data.hits);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=a(16),p=a.n(f),d=a(1),O=document.querySelector("#modal-root");var v=function(e){var t=e.largeImageURL,a=e.onClose;Object(r.useEffect)((function(){return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}));var n=function(e){"Escape"===e.code&&a()};return Object(c.createPortal)(Object(d.jsx)("div",{className:p.a.overlay,onClick:function(e){e.currentTarget===e.target&&a()},children:Object(d.jsx)("div",{className:p.a.modal,children:Object(d.jsx)("img",{src:t,alt:""})})}),O)},x=a(8),_=a.n(x);var y=function(e){var t=e.onSubmit,a=Object(r.useState)(""),n=Object(b.a)(a,2),c=n[0],o=n[1];return Object(d.jsx)("header",{className:_.a.searchbar,children:Object(d.jsxs)("form",{className:_.a.searchForm,onSubmit:function(e){e.preventDefault(),""!==c.trim()?(t(c),o("")):m.b.info("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438")},children:[Object(d.jsx)("button",{type:"submit",className:_.a.searchBtn,children:Object(d.jsx)("span",{className:_.a.searchLable,children:"Search"})}),Object(d.jsx)("input",{className:_.a.searchInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){o(e.currentTarget.value.toLowerCase())},value:c})]})})},I=a(17),w=a.n(I);var L=function(e){var t=e.webformatURL,a=e.largeImageURL,r=e.alt,n=void 0===r?"":r,c=e.getLargeImageURL;return Object(d.jsx)("li",{className:w.a.galleryItem,children:Object(d.jsx)("img",{src:t,alt:n,className:w.a.galleryItemImage,onClick:function(){return c(a)}})})},S=a(28),k=a.n(S);var R=function(e){var t=e.images,a=e.onSelect;return Object(d.jsx)("ul",{className:k.a.imageGalleryList,children:t.map((function(e){return Object(d.jsx)(L,{webformatURL:e.webformatURL,largeImageURL:e.largeImageURL,alt:e.tags,getLargeImageURL:a},e.id)}))})},U=a(29),C=a.n(U),N=function(e){var t=e.onClick;return Object(d.jsx)("button",{className:C.a.button,type:"button",onClick:t,children:"Load more"})},E=a(30),F=a.n(E);var G=function(){return Object(d.jsx)(F.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})};var B=function(){var e=Object(r.useState)([]),t=Object(b.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(null),o=Object(b.a)(c,2),s=o[0],j=o[1],h=Object(r.useState)(!1),f=Object(b.a)(h,2),p=f[0],O=f[1],x=Object(r.useState)(""),_=Object(b.a)(x,2),I=_[0],w=_[1],L=Object(r.useState)(1),S=Object(b.a)(L,2),k=S[0],U=S[1],C=Object(r.useState)(""),E=Object(b.a)(C,2),F=E[0],B=E[1],q=Object(r.useState)("idle"),J=Object(b.a)(q,2),M=J[0],P=J[1];Object(r.useEffect)((function(){"rejected"===M&&m.b.error("\u041f\u0440\u0438\u0457\u0445\u0430\u043b\u0438, no match")}),[M,a.length]),Object(r.useEffect)((function(){function e(){return(e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,P("pending"),e.next=4,g({query:I,page:k});case 4:t=e.sent,P("resolve"),0===t.length&&m.b.error("\u041f\u0440\u0438\u0457\u0445\u0430\u043b\u0438, no match"),n((function(e){return[].concat(Object(u.a)(e),Object(u.a)(t))})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),P("rejected");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}I&&function(){e.apply(this,arguments)}()}),[I,k]),Object(r.useEffect)((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}));var T=function(){O(!p)};return Object(d.jsxs)(d.Fragment,{children:[s&&m.b.error("OOO, something is wrong!"),Object(d.jsx)(y,{onSubmit:function(e){w(e),n([]),U(1),j(null)}}),"pending"===M&&Object(d.jsx)(G,{}),a.length>0&&Object(d.jsx)(R,{images:a,onSelect:function(e){B(e),T()}}),a.length>0&&Object(d.jsx)(N,{onClick:function(){return U(k+1)}}),p&&Object(d.jsx)(v,{onClose:T,largeImageURL:F}),Object(d.jsx)(m.a,{position:"bottom-left",autoClose:3e3})]})};o.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(B,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__2iYiG",searchForm:"Searchbar_searchForm__3uUVd",searchBtn:"Searchbar_searchBtn__1v7J3",searchInput:"Searchbar_searchInput__1Wyhp",searchLable:"Searchbar_searchLable__R4Hcj"}}},[[76,1,2]]]);
//# sourceMappingURL=main.9bf9b3e0.chunk.js.map