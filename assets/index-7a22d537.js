import{I as E,s as L,x,y as w,u as l,d as C,r as g,b as S,e as h,f as v,k as K,t as j,l as I,n as H,o as B,J as p,K as D,_ as z}from"./index-7b94eb0e.js";const M=(n,e,r)=>{const s=t=>{r(t)};E(n)?L(n,(t,i)=>{i==null||i.removeEventListener(e,s),t==null||t.addEventListener(e,s)}):x(()=>{n.addEventListener(e,s)});const o=()=>{var t;(t=l(n))==null||t.removeEventListener(e,s)};return w(()=>{o()}),o},N=(n,e)=>{const r=(e==null?void 0:e.target)??window,s=navigator.userAgent.toLowerCase().includes("mac");let o=!1,t=e==null?void 0:e.key;const i=()=>{const a=e||{},c=[];return a.ctrlKey&&c.push(s?"Cmd":"Ctrl"),a.shiftKey&&c.push(s?"Option":"Shift"),c.push(t),c},f=M(r,"keydown",a=>{const c=e||{};if(!(o||!t)&&(t=typeof t=="string"?[t]:t,t.includes(a.key.toLowerCase())&&O(c,a))){a.preventDefault();const d=n();if(typeof d!="function")return;const y=l(r),_=m=>{m.preventDefault(),d(),y.removeEventListener("keyup",_)};y.addEventListener("keyup",_)}});return n.hotKey=i(),n.directions=(e==null?void 0:e.directions)??"",n.removeListener=f,n.pause=()=>o=!0,n.unpause=()=>o=!1,n},O=(n,e)=>{const r=n.ctrlKey??!1,s=n.shiftKey??!1;if(n.exact)return(r===e.metaKey||r===e.ctrlKey)&&s===e.shiftKey;const o=[];return o.push(r===e.metaKey||r===e.ctrlKey),o.push(s===e.shiftKey),o.every(t=>t)},u=N,T=n=>(I("data-v-d0003e66"),n=n(),H(),n),A={class:"container"},J=["onClick"],R=T(()=>K("h2",null,"快捷键消息",-1)),U=C({__name:"index",setup(n){var f,a,c,d,y;const e=g(),r=u(()=>{e.value="复制功能"},{key:"c",ctrlKey:!0,directions:"复制"}),s=u(()=>{e.value="粘贴功能"},{key:"v",ctrlKey:!0,directions:"粘贴"}),o=u(()=>{e.value="撤销功能"},{key:"z",ctrlKey:!0,directions:"撤销"}),t=u(()=>{e.value="重做功能"},{key:"z",ctrlKey:!0,shiftKey:!0,exact:!0,directions:"重做"}),i=u(()=>(e.value="Y消息",()=>{e.value=""}),{key:"y",directions:"按下设置消息，抬起清楚消息"}),k=[{hotkey:(f=r.hotKey)==null?void 0:f.join("+"),label:r.directions,action:r},{hotkey:(a=s.hotKey)==null?void 0:a.join("+"),label:s.directions,action:s},{hotkey:(c=o.hotKey)==null?void 0:c.join("+"),label:o.directions,action:o},{hotkey:(d=t.hotKey)==null?void 0:d.join("+"),label:t.directions,action:t},{hotkey:(y=i.hotKey)==null?void 0:y.join("+"),label:i.directions,action:i}];return(_,m)=>(B(),S("div",A,[h(l(D),{stripe:"",border:!0,data:k},{default:v(()=>[h(l(p),{prop:"label",label:"说明"}),h(l(p),{prop:"hotkey",label:"快捷键"}),h(l(p),{prop:"option",label:"操作"},{default:v(({row:b})=>[K("button",{onClick:b.action},"立即执行",8,J)]),_:1})]),_:1}),R,K("h1",null,j(e.value),1)]))}});const $=z(U,[["__scopeId","data-v-d0003e66"]]);export{$ as default};
