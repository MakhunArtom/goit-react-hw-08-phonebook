"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[303],{9602:function(n,e,r){r.d(e,{v:function(){return t}});var t={save:function(n,e){try{var r=JSON.stringify(e);localStorage.setItem(n,r)}catch(t){console.log("Error during saving ".concat(n," to local strage; "),t.message)}},load:function(n){try{var e=localStorage.getItem(n);return null===e?void 0:JSON.parse(e)}catch(r){console.log("Error during getting ".concat(n," from localStorage: "),r.message)}},del:function(n){try{localStorage.removeItem(n)}catch(e){console.log("Error during deleting ".concat(n,"! from localStorage: "),e.message)}}}},5303:function(n,e,r){r.r(e),r.d(e,{default:function(){return X}});var t,o,i,a,c,l,s,u,d,f,p,x,h,g=r(5048),m=function(n){return n.filter.filter},v=function(n){return n.filter.status},b=r(6895),j=r(168),y=r(7691),Z=y.ZP.label(t||(t=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 1, 875;\n  padding: 10px, 5px;\n  margin: 0, 0, 0, 20px;\n"]))),w=y.ZP.input(o||(o=(0,j.Z)(["\n  font: inherit;\n  padding: 8px;\n  margin: 10px 0 10px 8px;\n  max-width: 80%;\n  border: 1px ;\n  border-radius: 8px;\n  border-color: blue;\n"]))),C=y.ZP.div(i||(i=(0,j.Z)(["\n  display: flex;\n  align-items: center;\n  margin-left: 50px;\n"]))),k=y.ZP.h2(a||(a=(0,j.Z)(["\n  margin-left: 50px;\n  padding: 10px 0 10px 0;\n  font-size: 24px;\n"]))),P=r(9482),E=r(1413),L=r(4925),I=y.ZP.button(c||(c=(0,j.Z)(["\n  display: inline-flex;\n  justify-content: center;\n  width: 150px;\n  padding: 8px 8px;\n  border-radius: 8px;\n  border: solid 1px blue;\n  font: inherit;\n  cursor: pointer;\n"]))),S=r(184),H=["selected","type","children"],z=function(n){var e=n.selected,r=void 0!==e&&e,t=n.type,o=void 0===t?"button":t,i=n.children,a=(0,L.Z)(n,H);return(0,S.jsx)(I,(0,E.Z)((0,E.Z)({style:!1===r?{backgroundColor:" #fff",color:"#000"}:{backgroundColor:"#1976d2",color:"#fff",border:"solid"},type:o},a),{},{children:i}))},N=r(2330),_=y.ZP.div(l||(l=(0,j.Z)(["\n  display: flex;\n  gap: 16px;\n  margin-left: 50px;\n"]))),O=function(){var n=(0,g.I0)(),e=(0,g.v9)(v),r=function(e){return n((0,b.bI)(e))};return(0,S.jsxs)(_,{children:[(0,S.jsx)(z,{selected:e===N.H.all,onClick:function(){return r(N.H.all)},children:"All"}),(0,S.jsx)(z,{selected:e===N.H.personal,onClick:function(){return r(N.H.personal)},children:"Personal"}),(0,S.jsx)(z,{selected:e===N.H.others,onClick:function(){return r(N.H.others)},children:"Others"})]})},A=function(){var n=(0,g.I0)(),e=(0,g.v9)(m);return(0,S.jsxs)(Z,{children:[(0,S.jsx)(k,{children:"Find contacts by Name"}),(0,S.jsxs)(C,{children:[(0,S.jsx)(P.Qcu,{style:{width:36,height:36,borderRadius:"8px",borderColor:"blue"}}),(0,S.jsx)(w,{type:"text",value:e,onChange:function(e){return n((0,b.Tv)(e.target.value))},placeholder:"Anny Benne"})]}),(0,S.jsx)(O,{})]})},F=y.ZP.ul(s||(s=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: stretch;\n  margin-top: 20px;\n  margin-right: auto;\n  padding: 10px;\n  font-size: 24px;\n  border-radius: 10px;\n  border: 2px;\n"]))),J=r(9062),Q=r(5861),B=r(9439),D=r(4687),K=r.n(D),R=y.ZP.li(u||(u=(0,j.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n  padding: 5px 5px;\n  border: 2px;\n  border-radius: 10px;\n\n  :last-child {\n    margin-bottom: 0;\n  }\n"]))),T=y.ZP.button(d||(d=(0,j.Z)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  margin: 8px 10px 8px 20px;\n  padding: 8px 8px 8px 8px;\n  border-radius: 4px;\n  border: none;\n  height: 30px;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 1, 875;\n  text-transform: uppercase;\n  border: 2px;\n  cursor: pointer;\n"]))),Y=y.ZP.div(f||(f=(0,j.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-left: 5px;\n  margin-right: auto;\n"]))),q=y.ZP.div(p||(p=(0,j.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),G=(y.ZP.input(x||(x=(0,j.Z)(["\n  color: black;\n"]))),r(7689)),M=r(9602);function U(n){var e=n.id,r=n.name,t=n.number,o=(0,G.s0)(),i=(0,J.Nt)(),a=(0,B.Z)(i,2),c=a[0],l=a[1].isLoading,s="contact-for-render-state",u=M.v.load(s),d=!0;u&&(d=u.find((function(n){return n.name===r})).personal);var f=function(){var n=(0,Q.Z)(K().mark((function n(){return K().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c(e);case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),console.log(n.t0);case 8:p();case 9:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(){return n.apply(this,arguments)}}();function p(){var n,e=M.v.load(s);e&&(e.find((function(n){return n.name===r})),n=e.findIndex((function(n){return n.name===r})),e.splice(n,1),M.v.save(s,e))}return(0,S.jsxs)(R,{style:!1===d?{backgroundColor:" #e1c7e9"}:{backgroundColor:"#00fff2"},children:[!1===d?(0,S.jsx)(P.dQs,{style:{width:24,height:24}}):(0,S.jsx)(P.fi0,{style:{color:"orange",width:24,height:24}}),(0,S.jsxs)(Y,{children:[(0,S.jsxs)("span",{children:[r," :"]})," ",(0,S.jsx)("span",{children:t})]}),(0,S.jsxs)(q,{children:[(0,S.jsxs)(T,{type:"button",onClick:f,disabled:l,children:[(0,S.jsx)(P.Ehm,{style:{color:"orange",width:24,height:24}}),"Delete"]}),(0,S.jsxs)(T,{type:"button",onClick:function(){return o("/".concat(e))},children:[(0,S.jsx)(P.cpK,{style:{color:"orange",width:24,height:24}}),"Edit"]})]})]})}function V(){var n=(0,g.v9)(m),e=(0,g.v9)(v),r="contact-for-render-state",t=(0,J.wY)(),o=t.data,i=t.error,a=t.isLoading;M.v.load(r)?function(){var n,e=M.v.load(r),t=function(n){return n&&n.forEach((function(n){e.map((function(n){return n.id})).includes(n.id)||(t=n)})),t},i=t(o);"object"===typeof(n=i)&&null!==n&&(e.find((function(n){return n.name===i.name})),e.push(i)),M.v.save(r,e);var a=M.v.load(r),c={},l=a.filter((function(n){var e=n.name;return!c[e]&&(c[e]=1)}));M.v.save(r,l)}():function(){M.v.save(r,[]);var n=M.v.load(r),e=o;M.v.save(r,e),(n=M.v.load(r))&&n.map((function(n){return n.personal=!0})),M.v.save(r,n)}();var c;return o&&(c=function(n,e,t){var o=M.v.load(r);if(n)switch(t){case"personal":var i=function(n,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return n.forEach((function(n){e.includes(n.name)&&r.push(n)})),r}(n,o.filter((function(n){return!0===n.personal})).map((function(n){return n.name})));return i.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}));case"others":var a=function(n,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return n.forEach((function(n){e.includes(n.name)&&r.push(n)})),r}(n,o.filter((function(n){return!1===n.personal})).map((function(n){return n.name})));return a.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}));default:return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))}}(o,n,e).sort((function(n,e){return n.name.localeCompare(e.name)}))),(0,S.jsxs)(S.Fragment,{children:[i&&(0,S.jsx)("p",{children:"Error loading, please try again "}),a?(0,S.jsx)("b",{children:"Loading..."}):(0,S.jsx)(F,{children:c.map((function(n){var e=n.id,r=n.name,t=n.number;return(0,S.jsx)(U,{id:e,name:r,number:t},e)}))})]})}var W=y.ZP.h2(h||(h=(0,j.Z)(["\n  /* color: white; */\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 32px;\n  font-weight: 700;\n  padding: 10px 10px 10px 10px;\n"])));function X(){return(0,S.jsxs)("main",{children:[(0,S.jsx)(A,{}),(0,S.jsx)(W,{children:"Contacts"}),(0,S.jsx)(V,{})]})}}}]);
//# sourceMappingURL=303.5e7161f2.chunk.js.map