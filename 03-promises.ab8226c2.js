!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequire7bc7;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){o[e]=t},t.parcelRequire7bc7=i);var u=i("6JpON"),l={formEl:document.querySelector(".form"),buttonEl:document.querySelector("button"),inputNameEl:document.querySelector('input[type="text"]')};function r(){l.inputNameEl.value="Noname"}function a(e,t){return new Promise((function(n,o){var i=Math.random()>.3;setTimeout((function(){i?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}l.formEl.addEventListener("submit",(function(t){t.preventDefault(),l.buttonEl.setAttribute("disabled","");for(var n=t.currentTarget.elements,o=n["user-name"],i=n.delay,c=n.step,f=n.amount,d=o.value,s=Number(i.value),m=Number(c.value),p=Number(f.value),v=s,b=1,E=0;E<p;E+=1)a(b,v).then((function(t){var n=t.position,o=t.delay;e(u).Notify.success("Hi ".concat(d,", ✅ Fulfilled promise ").concat(n," in ").concat(o,"ms"),{clickToClose:!0})})).catch((function(t){var n=t.position,o=t.delay;e(u).Notify.failure("Hi ".concat(d," , ❌ Rejected promise ").concat(n," in ").concat(o,"ms"),{clickToClose:!0})})).finally((function(){l.buttonEl.removeAttribute("disabled"),l.formEl.reset(),r()})),v+=m,b+=1})),l.inputNameEl.addEventListener("focus",(function(){l.inputNameEl.value=""})),l.inputNameEl.addEventListener("blur",(function(){""===l.inputNameEl.value&&(l.inputNameEl.value="Noname")})),r()}();
//# sourceMappingURL=03-promises.ab8226c2.js.map
