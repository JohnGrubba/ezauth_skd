!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.EZAuthJSAdapter=t():e.EZAuthJSAdapter=t()}(self,(()=>(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{EZAuthClient:()=>i,EZAuthServerAdapter:()=>s});var n=function(){return n=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)},r=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function u(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,u)}c((r=r.apply(e,t||[])).next())}))},o=function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(u){return function(c){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,u[0]&&(s=0)),s;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return s.label++,{value:u[1],done:!1};case 5:s.label++,r=u[1],u=[0];continue;case 7:u=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){s=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){s.label=u[1];break}if(6===u[0]&&s.label<o[1]){s.label=o[1],o=u;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(u);break}o[2]&&s.ops.pop(),s.trys.pop();continue}u=t.call(e,s)}catch(e){u=[6,e],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,c])}}},i=function(){function e(e){this.profile_info=null,this.server_url=e.replace(/\/$/,""),console.log("EZAuth initialized")}return e.prototype.logout=function(){return r(this,void 0,void 0,(function(){var e;return o(this,(function(t){switch(t.label){case 0:return[4,fetch("".concat(this.server_url,"/logout"),{credentials:"include"})];case 1:return 200!==(e=t.sent()).status?[3,2]:(console.info("Logged Out"),[3,4]);case 2:return[4,e.json()];case 3:throw t.sent();case 4:return[2]}}))}))},e.prototype.init=function(){return r(this,void 0,void 0,(function(){var e,t;return o(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,fetch("".concat(this.server_url,"/up"))];case 1:return(e=n.sent()).ok?[3,3]:[2];case 2:case 6:return n.sent(),[2];case 3:return n.trys.push([3,6,,7]),[4,fetch("".concat(this.server_url,"/profile"),{credentials:"include"})];case 4:return(e=n.sent()).ok?(t=this,[4,e.json()]):[2];case 5:return t.profile_info=n.sent(),[2,this.profile_info];case 7:return[2]}}))}))},e.prototype.signup=function(e,t,i,s){return r(this,void 0,void 0,(function(){var r;return o(this,(function(o){switch(o.label){case 0:return[4,fetch("".concat(this.server_url,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n(n({},s),{email:e,username:t,password:i}))})];case 1:return 200!==(r=o.sent()).status?[3,2]:(console.info("User Created and Logged In"),[3,5]);case 2:return 204!==r.status?[3,3]:(console.info("Confirmation E-Mail was sent"),[3,5]);case 3:return[4,r.json()];case 4:throw o.sent();case 5:return[2]}}))}))},e.prototype.login=function(e,t,n){return r(this,void 0,void 0,(function(){var r;return o(this,(function(o){switch(o.label){case 0:return[4,fetch("".concat(this.server_url,"/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({identifier:e,password:t,two_factor_code:n}),credentials:"include"})];case 1:return 200!==(r=o.sent()).status?[3,3]:(console.info("Logged In"),[4,r.json()]);case 2:return[2,o.sent().session_token];case 3:return[4,r.json()];case 4:throw o.sent()}}))}))},e}(),s=function(){function e(e){this.profile_info=null,this.server_url=e.replace(/\/$/,""),console.log("EZAuth initialized")}return e.prototype.init=function(e){return t=this,n=void 0,o=function(){var e,t;return function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(u){return function(c){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,u[0]&&(s=0)),s;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return s.label++,{value:u[1],done:!1};case 5:s.label++,r=u[1],u=[0];continue;case 7:u=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){s=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){s.label=u[1];break}if(6===u[0]&&s.label<o[1]){s.label=o[1],o=u;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(u);break}o[2]&&s.ops.pop(),s.trys.pop();continue}u=t.call(e,s)}catch(e){u=[6,e],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,c])}}}(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,fetch("".concat(this.server_url,"/up"))];case 1:return(e=n.sent()).ok?[3,3]:[2,!1];case 2:case 7:return n.sent(),[2,!1];case 3:return n.trys.push([3,7,,8]),[4,fetch("".concat(this.server_url,"/profile"),{credentials:"include"})];case 4:return(e=n.sent()).ok?(t=this,[4,e.json()]):[2,!1];case 5:return t.profile_info=n.sent(),[4,e.json()];case 6:return[2,n.sent()];case 8:return[2]}}))},new((r=void 0)||(r=Promise))((function(e,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function u(e){try{c(o.throw(e))}catch(e){i(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(s,u)}c((o=o.apply(t,n||[])).next())}));var t,n,r,o},e}();return t})()));