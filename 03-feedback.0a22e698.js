function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),d=Object.prototype.toString,s=Math.max,v=Math.min,m=function(){return l.Date.now()};function p(e,t,n){var o,r,i,f,a,u,c=0,l=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,c=t,f=e.apply(i,n)}function x(e){return c=e,a=setTimeout(T,t),l?y(e):f}function j(e){var n=e-u;return void 0===u||n>=t||n<0||d&&e-c>=i}function T(){var e=m();if(j(e))return h(e);a=setTimeout(T,function(e){var n=t-(e-u);return d?v(n,i-(e-c)):n}(e))}function h(e){return a=void 0,p&&o?y(e):(o=r=void 0,f)}function w(){var e=m(),n=j(e);if(o=arguments,r=this,u=e,n){if(void 0===a)return x(u);if(d)return a=setTimeout(T,t),y(u)}return void 0===a&&(a=setTimeout(T,t)),f}return t=g(t)||0,b(n)&&(l=!!n.leading,i=(d="maxWait"in n)?s(g(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),w.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=u=r=a=void 0},w.flush=function(){return void 0===a?f:h(m())},w}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||f.test(e)?a(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return b(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:o,maxWait:t,trailing:r})};const y={form:document.querySelector(".feedback-form"),textarea:document.querySelector(".feedback-form textarea")};let x={};!function(){const e=localStorage.getItem("feedback-form-state");e&&(console.log(e),y.textarea.value=e)}(),y.form.addEventListener("submit",(function(e){e.preventDefault(),console.log(x),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),y.textarea.addEventListener("input",e(t)((function(e){e.preventDefault();const t=e.target.value;localStorage.setItem("feedback-form-state",t)}),500));
//# sourceMappingURL=03-feedback.0a22e698.js.map