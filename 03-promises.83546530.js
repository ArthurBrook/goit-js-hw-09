!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequire7bc7;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequire7bc7=r);var i=r("6JpON"),u={formEl:document.querySelector(".form"),buttonEl:document.querySelector("button"),inputNameEl:document.querySelector('input[type="text"]')};function l(e,t){return new Promise((function(n,o){var r=Math.random()>.3;setTimeout((function(){r?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}u.formEl.addEventListener("submit",(function(t){t.preventDefault(),u.buttonEl.setAttribute("disabled","");for(var n=t.currentTarget.elements,o=(n["user-name"],n.delay),r=n.step,a=n.amount,c=Number(o.value),f=Number(r.value),s=Number(a.value),d=c,m=1,p=0;p<s;p+=1)l(m,d).then((function(t){var n=t.position,o=t.delay;e(i).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"),{clickToClose:!0})})).catch((function(t){var n=t.position,o=t.delay;e(i).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"),{clickToClose:!0})})).finally((function(){u.buttonEl.removeAttribute("disabled"),u.formEl.reset()})),d+=f,m+=1}))}();
//# sourceMappingURL=03-promises.83546530.js.map