"use strict";(self.webpackChunkpifit=self.webpackChunkpifit||[]).push([[204],{5036:(e,t,a)=>{a.d(t,{A:()=>s});a(5043);const s=a.p+"static/media/Pifit-white.b4d8af5d00c57e6d11ee5fc8a12d66d9.svg"},2799:(e,t,a)=>{a.d(t,{A:()=>c});a(5043);var s=a(5036),l=a(450);const r=a.p+"static/media/blue-lines-bg.b2cf4cf32f9f472ff0a1.jpg";var n=a(3216),o=a(9800),i=a(1645),d=a(579);const c=e=>{const{children:t}=e,a=(0,n.Zp)();return(0,d.jsx)("div",{className:"h-lg-full p-md-0 p-8",style:{height:"calc(100vh - 4em)"},children:(0,d.jsxs)("div",{className:"d-flex d-lg-block h-lg-screen h-full border-md-0 border-2-transparent br-5",children:[(0,d.jsxs)("div",{className:"position-relative bg-primary-dark text-white w-lg-full h-lg-68 h-md-max w-half border-left-2 br-tl-lg-0 br-bl-lg-0 br-tl-3 br-bl-3",children:[(0,d.jsx)("img",{src:l,className:"position-absolute w-full img-md-cover h-60 h-lg-full",alt:""}),(0,d.jsxs)("div",{className:"d-flex flex-column h-md-half h-full pl-md-0",children:[(0,d.jsx)("img",{src:s.A,alt:"img",onClick:()=>a("/"),className:"w-36  w-md-32 mb-auto mb-md-5 pt-8 mx-md-auto pl-md-0 pl-8 cursor-pointer z-10"}),(0,d.jsxs)("div",{className:"custom-fonts w-68 w-lg-60 w-md-auto fs-8 fs-xl-5 fs-lg-4 fs-md-3 fw-bold text-md-center lh-3 pl-3 pb-3 px-md-2 my-md-8",children:['"We exist to empower to Create'," ",(0,d.jsx)("span",{className:"text-yellow-dark",children:"Universal Loyalty Platform!"}),'"']})]})]}),(0,d.jsxs)("div",{className:"position-relative d-flex justify-content-center align-items-center overflow-lg-auto w-half w-lg-full",children:[(0,d.jsx)("img",{src:r,className:"d-flex justify-content-center position-absolute d-md-none h-full w-full m-0",alt:""}),(0,d.jsx)(o.A,{className:"z-1",justify:"center",children:(0,d.jsx)(i.A,{span:24,children:(0,d.jsx)("div",{className:"py-md-0 py-8",children:t})})})]})]})})}},8232:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var s=a(5043),l=a(2019),r=a(9748),n=a(7705),o=a(7021),i=a(3216),d=a(5475),c=a(2799),m=a(3692),u=a(9456),h=a(579);const f=()=>{var e;const t=(0,i.Zp)(),a=(0,i.zy)(),[f,p]=(0,s.useState)(["","","",""]),v=(0,u.d4)((e=>{var t,a,s;return null===e||void 0===e||null===(t=e.counter)||void 0===t||null===(a=t.userData)||void 0===a||null===(s=a.user)||void 0===s?void 0:s.id})),g=(e,t)=>{const a=t.replace(/\D/g,""),s=[...f];if(s[e]=a.slice(0,1),p(s),a.length>0&&e<f.length-1){const t=document.querySelector('input[data-index="'.concat(e+1,'"]'));null===t||void 0===t||t.focus()}else if(e>0&&""===t){const t=document.querySelector('input[data-index="'.concat(e-1,'"]'));null===t||void 0===t||t.focus()}};return(0,s.useEffect)((()=>{v||t("/login")}),[]),(0,h.jsx)(c.A,{children:(0,h.jsxs)(r.A,{name:"normal_login",className:"login-form bg-white p-10 br-3 br-md-0 w-60 w-md-full",initialValues:{remember:!0},onFinish:()=>{const e=f.every((e=>/^\d$/.test(e))),a=f.join().replaceAll(",","");e?(async e=>{try{var a;const s=await(0,m.hX)(e);l.Ay.success(null===s||void 0===s||null===(a=s.meta)||void 0===a?void 0:a.message),t("/reset-password")}catch(r){var s;l.Ay.error(null===r||void 0===r||null===(s=r.meta)||void 0===s?void 0:s.message)}})({user_id:v,otp:a,type:"forgot_pass"}):l.Ay.error("Invalid input. Please enter a single digit in each field.")},children:[(0,h.jsx)(d.N_,{to:"/forgot-password",className:"text-primary-dark",children:(0,h.jsx)("i",{className:"icon-back fs-3"})}),(0,h.jsxs)("div",{className:"text-primary-dark",children:[(0,h.jsx)("p",{className:"custom-fonts fs-4 mb-0 fw-bold mt-0",children:"Check your email!"}),(0,h.jsx)("p",{className:"fs-small lh-1 mb-0",children:"We have sent a verification code to"}),(0,h.jsx)("p",{className:"fs-small fw-bold mt-3 lh-1",children:null===a||void 0===a||null===(e=a.state)||void 0===e?void 0:e.email})]}),(0,h.jsx)(r.A.Item,{name:"username",className:"mt-6",children:(0,h.jsxs)("div",{className:"d-grid grid-columns-4 column-gap",children:[(0,h.jsx)(n.A,{className:"h-14 bg-placeholder border-none fs-4 text-center custom-fonts",value:f[0],onChange:e=>g(0,e.target.value),"data-index":0,rules:{required:!0}}),(0,h.jsx)(n.A,{className:"h-14 bg-placeholder border-none fs-4 text-center custom-fonts",value:f[1],onChange:e=>g(1,e.target.value),"data-index":1,rules:{required:!0}}),(0,h.jsx)(n.A,{className:"h-14 bg-placeholder border-none fs-4 text-center custom-fonts",value:f[2],onChange:e=>g(2,e.target.value),"data-index":2,rules:{required:!0}}),(0,h.jsx)(n.A,{className:"h-14 bg-placeholder border-none fs-4 text-center custom-fonts",value:f[3],onChange:e=>g(3,e.target.value),"data-index":3,rules:{required:!0}})]})}),(0,h.jsx)(r.A.Item,{children:(0,h.jsx)(o.Ay,{type:"primary",htmlType:"submit",className:"login-form-button w-full h-14 fw-bold",children:"Verify Code"})}),(0,h.jsxs)(r.A.Item,{className:"text-center mb-0 text-primary-dark",children:["Didn't receive the email?"," ",(0,h.jsx)(d.N_,{to:"#",className:"text-decoration-underline fw-bold",onClick:()=>(async e=>{try{var t;const a=await(0,m.zz)(e);l.Ay.success(null===a||void 0===a||null===(t=a.meta)||void 0===t?void 0:t.message)}catch(s){var a;l.Ay.error(null===s||void 0===s||null===(a=s.meta)||void 0===a?void 0:a.message)}})({user_id:v}),children:"Resend Code"})]})]})})}},3692:(e,t,a)=>{a.d(t,{HV:()=>r,MI:()=>l,Nd:()=>i,V2:()=>c,Vo:()=>n,hX:()=>o,zz:()=>d});var s=a(57);const l=async e=>{try{return await(0,s.m)({method:"POST",path:"login",data:e,isTokenRequired:!1})}catch(t){throw t}},r=async e=>{try{return await(0,s.m)({method:"POST",path:"logout",data:e,isTokenRequired:!0})}catch(t){throw t}},n=async e=>{try{return await(0,s.m)({method:"POST",path:"forgot-password",data:e,isTokenRequired:!1})}catch(t){throw t}},o=async e=>{try{return await(0,s.m)({method:"POST",path:"verify-otp",data:e,isTokenRequired:!1})}catch(t){throw t}},i=async e=>{try{return await(0,s.m)({method:"POST",path:"reset-password",data:e,isTokenRequired:!1})}catch(t){throw t}},d=async e=>{try{return await(0,s.m)({method:"POST",path:"resend-otp",data:e,isTokenRequired:!1})}catch(t){throw t}},c=async e=>{try{return await(0,s.m)({method:"POST",path:"google-login",data:e})}catch(t){throw t}}},1645:(e,t,a)=>{a.d(t,{A:()=>s});const s=a(227).A},9800:(e,t,a)=>{a.d(t,{A:()=>s});const s=a(8821).A},450:(e,t,a)=>{e.exports=a.p+"static/media/while-lines.34934c300751d3caec05.png"}}]);
//# sourceMappingURL=204.7f3ff8a5.chunk.js.map