function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},l=t.parcelRequire7bc7;null==l&&((l=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var l={id:e,exports:{}};return n[e]=l,t.call(l.exports,l,l.exports),l.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequire7bc7=l);var i=l("7Y9D8");const u={formEl:document.querySelector(".form"),buttonEl:document.querySelector("button"),inputNameEl:document.querySelector('input[type="text"]')};function r(){u.inputNameEl.value="Noname"}function a(e,t){return new Promise(((n,o)=>{const l=Math.random()>.3;setTimeout((()=>{l?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}u.formEl.addEventListener("submit",(function(t){t.preventDefault(),u.buttonEl.setAttribute("disabled","");const{elements:{"user-name":n,delay:o,step:l,amount:s}}=t.currentTarget,d=n.value,c=Number(o.value),f=Number(l.value),m=Number(s.value);let p=c,b=1;for(let t=0;t<m;t+=1)a(b,p).then((({position:t,delay:n})=>{e(i).Notify.success(`Hi ${d}, ✅ Fulfilled promise ${t} in ${n}ms`,{clickToClose:!0})})).catch((({position:t,delay:n})=>{e(i).Notify.failure(`Hi ${d} , ❌ Rejected promise ${t} in ${n}ms`,{clickToClose:!0})})).finally((()=>{u.buttonEl.removeAttribute("disabled"),u.formEl.reset(),r()})),p+=f,b+=1})),u.inputNameEl.addEventListener("focus",(function(){u.inputNameEl.value=""})),u.inputNameEl.addEventListener("blur",(function(){""===u.inputNameEl.value&&(u.inputNameEl.value="Noname")})),r();
//# sourceMappingURL=03-promises.bdebc97b.js.map
