function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequire7bc7;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},t.parcelRequire7bc7=r);var l=r("7Y9D8");const i={formEl:document.querySelector(".form"),buttonEl:document.querySelector("button"),inputNameEl:document.querySelector('input[type="text"]')};function u(e,t){return new Promise(((o,n)=>{const r=Math.random()>.3;setTimeout((()=>{r?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}i.formEl.addEventListener("submit",(function(t){t.preventDefault(),i.buttonEl.setAttribute("disabled","");const{elements:{"user-name":o,delay:n,step:r,amount:s}}=t.currentTarget,a=Number(n.value),d=Number(r.value),c=Number(s.value);let f=a,m=1;for(let t=0;t<c;t+=1)u(m,f).then((({position:t,delay:o})=>{e(l).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`,{clickToClose:!0})})).catch((({position:t,delay:o})=>{e(l).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`,{clickToClose:!0})})).finally((()=>{i.buttonEl.removeAttribute("disabled"),i.formEl.reset()})),f+=d,m+=1}));
//# sourceMappingURL=03-promises.c1b63641.js.map
