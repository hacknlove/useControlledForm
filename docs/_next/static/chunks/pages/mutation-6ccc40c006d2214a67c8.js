_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"1N1u":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mutation",function(){return r("XAU2")}])},LhnH:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r("o0o1"),a=r.n(n),u=r("HaE+");function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,u=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(c){a=!0,u=c}finally{try{n||null==i.return||i.return()}finally{if(a)throw u}}return r}}(e,t)||function(e,t){if(e){if("string"===typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=r("q1tI"),s=r("1YQ3");function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(e,t){(t.values||t.initialValues)&&(t.isDirty=Object(s.a)(t.values||e.values,t.initialValues||e.initialValues)),t.errors&&(t.hasErrors=Object.values(t.errors).reduce((function(e,t){return e+Number(Boolean(t))}),0));var r=b(b({},e),t);return e.afterChange&&(e.debounced&&clearTimeout(e.debounced),e.debounced=setTimeout(e.afterChange,e.afterChangeDebounce,r)),r}function h(e){var t=e.afterChange,r=e.afterChangeDebounce,n=void 0===r?0:r,a=e.initialValues,u=e.initialContext;return{afterChange:t,afterChangeDebounce:n,context:b({},u),initialContext:b({},u),initialValues:b({},a),errors:{},hasErrors:0,isDirty:!1,values:b({},a)}}var p={};function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.afterChange,r=e.afterChangeDebounce,n=void 0===r?0:r,o=e.beforeChange,f=e.initialContext,d=void 0===f?p:f,m=e.initialValues,O=void 0===m?p:m,g=Object(l.useReducer)(v,{afterChange:t,initialValues:O,initialContext:d,afterChangeDebounce:n},h),y=g[0],j=g[1];function w(e){return void 0===y.values[e]?"":y.values[e]}function C(e,t){if(o){var r=b({},y.errors),n=b(b({},y.values),{},c({},e,t)),a=b({},y.context);o({context:a,errors:r,name:e,prevValue:y.values[e],value:t,values:n});var u={};Object(s.a)(y.context,a)&&(u.context=a),Object(s.a)(y.errors,r)&&(u.errors=r),Object(s.a)(y.values,n)&&(u.values=n),Object.keys(u).length&&j(u)}else j({values:b(b({},y.values),{},c({},e,t))})}function x(){if(y.hasErrors)return y.hasErrors;if(!o)return 0;var e=b({},y.values),t=b({},y.errors),r=b({},y.context);Object.entries(y.values).forEach((function(n){var a=i(n,2),u=a[0],c=a[1];o({name:u,value:c,values:e,errors:t,context:r})}));var n={};return Object(s.a)(y.context,r)&&(n.context=r),Object(s.a)(y.errors,t)&&(n.errors=t),Object(s.a)(y.values,e)&&(n.values=e),Object.keys(n).length?(j({values:e,errors:t}),Object.values(n.errors).reduce((function(e,t){return e+Number(Boolean(t))}),0)):0}function E(e){var t=e.target;C(t.name,t.value)}function k(e){var t=e.target;C(t.name,t.checked)}return{checkboxControl:function(e){return y.values[e]||(y.values[e]=!1,y.initialValues[e]=!1),{name:e,checked:w(e),onChange:k}},dispatch:j,getValue:w,handleSubmit:function(e){return function(){var t=Object(u.a)(a.a.mark((function t(r){var n,u;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.preventDefault(),!(n=x())){t.next=4;break}return t.abrupt("return",n);case 4:if(e){t.next=6;break}return t.abrupt("return",0);case 6:return t.next=8,e(y.values,{state:y},j);case 8:u=t.sent,t.t0=u,t.next=!0===t.t0?12:"update"===t.t0?12:!1===t.t0?14:"reset"===t.t0?14:void 0===t.t0?16:(t.t0,16);break;case 12:return j({initialValues:y.values}),t.abrupt("break",16);case 14:return j({values:y.initialValues}),t.abrupt("break",16);case 16:return t.abrupt("return",0);case 17:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},inputControl:function(e){return y.values[e]||(y.values[e]="",y.initialValues[e]=""),{name:e,value:w(e),onChange:E}},setChecked:k,setInput:E,setValue:C,state:y}}},XAU2:function(e,t,r){"use strict";r.r(t),r.d(t,"__N_SSG",(function(){return h})),r.d(t,"default",(function(){return p}));var n=r("q1tI"),a=r.n(n),u=r("BAVR"),o=r("wx14"),i=r("LhnH"),c=r("vRNQ"),l=r.n(c),s=a.a.createElement;function f(e){var t=e.name,r=e.value,n=e.values;switch(t){case"email":n.email=r.toLowerCase().replace(/[^a-z0-9.@]/g,"");break;case"phone":n.phone=function(e){var t=(e=e.replace(/[^0-9]/g,"")).match(/(.{0,3})(.{0,3})(.{0,4})/);return t[3]?"(".concat(t[1],")-").concat(t[2],"-").concat(t[3]):t[2]?"(".concat(t[1],")-").concat(t[2]):t[1]?"(".concat(t[1]):""}(r)}}function b(e){var t=e.onSubmit,r=Object(i.a)({beforeChange:f}),n=r.inputControl,a=r.handleSubmit;return s("form",{onSubmit:a(t)},s("div",{className:l.a.field},s("label",null,"Email:"),s("br",null),s("input",Object(o.a)({placeholder:"Email"},n("email")))),s("div",{className:l.a.field},s("label",null,"Phone:"),s("br",null),s("input",Object(o.a)({placeholder:"Phone"},n("phone")))),s("button",null," submit "))}var v=a.a.createElement,h=!0;function p(e){var t=e.code;return v(u.a,{title:"Mutation",Example:b,code:t})}}},[["1N1u",0,2,1,3,4]]]);