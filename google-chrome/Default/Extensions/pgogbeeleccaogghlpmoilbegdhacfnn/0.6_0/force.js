!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=639)}({0:function(t,e,n){var r=n(2),o=n(17);t.exports=function(t){return function e(n,i){switch(arguments.length){case 0:return e;case 1:return o(n)?e:r(function(e){return t(n,e)});default:return o(n)&&o(i)?e:o(n)?r(function(e){return t(e,i)}):o(i)?r(function(e){return t(n,e)}):t(n,i)}}}},10:function(t,e,n){var r=n(11),o=n(2),i=n(0),a=n(29);t.exports=i(function(t,e){return 1===t?o(e):r(t,a(t,[],e))})},107:function(t,e,n){var r=n(0),o=n(8);t.exports=function(){function t(t,e){this.xf=e,this.f=t}return t.prototype["@@transducer/init"]=o.init,t.prototype["@@transducer/result"]=o.result,t.prototype["@@transducer/step"]=function(t,e){return this.f(e)?this.xf["@@transducer/step"](t,e):t},r(function(e,n){return new t(e,n)})}()},11:function(t,e){t.exports=function(t,e){switch(t){case 0:return function(){return e.apply(this,arguments)};case 1:return function(t){return e.apply(this,arguments)};case 2:return function(t,n){return e.apply(this,arguments)};case 3:return function(t,n,r){return e.apply(this,arguments)};case 4:return function(t,n,r,o){return e.apply(this,arguments)};case 5:return function(t,n,r,o,i){return e.apply(this,arguments)};case 6:return function(t,n,r,o,i,a){return e.apply(this,arguments)};case 7:return function(t,n,r,o,i,a,u){return e.apply(this,arguments)};case 8:return function(t,n,r,o,i,a,u,s){return e.apply(this,arguments)};case 9:return function(t,n,r,o,i,a,u,s,c){return e.apply(this,arguments)};case 10:return function(t,n,r,o,i,a,u,s,c,f){return e.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}},117:function(t,e,n){var r=n(24),o=n(0),i=n(51),a=n(50);t.exports=o(function(t,e){return a(i(r)(t),e)})},12:function(t,e,n){var r=n(31),o=n(43),i=n(44);t.exports=function(){function t(t,e,n){for(var r=0,o=n.length;r<o;){if((e=t["@@transducer/step"](e,n[r]))&&e["@@transducer/reduced"]){e=e["@@transducer/value"];break}r+=1}return t["@@transducer/result"](e)}function e(t,e,n){for(var r=n.next();!r.done;){if((e=t["@@transducer/step"](e,r.value))&&e["@@transducer/reduced"]){e=e["@@transducer/value"];break}r=n.next()}return t["@@transducer/result"](e)}function n(t,e,n,r){return t["@@transducer/result"](n[r](i(t["@@transducer/step"],t),e))}var a="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";return function(i,u,s){if("function"==typeof i&&(i=o(i)),r(s))return t(i,u,s);if("function"==typeof s["fantasy-land/reduce"])return n(i,u,s,"fantasy-land/reduce");if(null!=s[a])return e(i,u,s[a]());if("function"==typeof s.next)return e(i,u,s);if("function"==typeof s.reduce)return n(i,u,s,"reduce");throw new TypeError("reduce: list must be array or iterable")}}()},13:function(t,e,n){var r=n(0),o=n(59);t.exports=r(function(t,e){return o(t,e,[],[])})},14:function(t,e,n){var r=n(2),o=n(7),i=n(45);t.exports=function(){var t=!{toString:null}.propertyIsEnumerable("toString"),e=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],n=function(){"use strict";return arguments.propertyIsEnumerable("length")}(),a=function(t,e){for(var n=0;n<t.length;){if(t[n]===e)return!0;n+=1}return!1};return r("function"!=typeof Object.keys||n?function(r){if(Object(r)!==r)return[];var u,s,c=[],f=n&&i(r);for(u in r)!o(u,r)||f&&"length"===u||(c[c.length]=u);if(t)for(s=e.length-1;s>=0;)u=e[s],o(u,r)&&!a(c,u)&&(c[c.length]=u),s-=1;return c}:function(t){return Object(t)!==t?[]:Object.keys(t)})}()},15:function(t,e){t.exports=Array.isArray||function(t){return null!=t&&t.length>=0&&"[object Array]"===Object.prototype.toString.call(t)}},17:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t&&!0===t["@@functional/placeholder"]}},2:function(t,e,n){var r=n(17);t.exports=function(t){return function e(n){return 0===arguments.length||r(n)?e:t.apply(this,arguments)}}},21:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={user:"ovpn_user",count:"ovpn_count",tabsCounts:"ovpn_tabs",settings:"ovpn_settings",piwik:"ovpn_piwik",sitesWhitelist:"ovpn_sites_whitelist",domainsWhitelist:"ovpn_domains_whitelist",startDate:"ovpn_start_date",version:"ovpn_version",clientVersion:"ovpn_client_version",update:"ovpn_latest_update",adsList:"ovpn_ads_list",adsPatterns:"ovpn_ads_patterns",trackersList:"ovpn_trackers_list",trackersPatterns:"ovpn_trackers_patterns",forceList:"ovpn_force_list",clientWarn:"ovpn_client_warn",serverData:"ovpn_server_data",ipData:"ovpn_ip_data"};e.default={setUser:function(t){localStorage.setItem(r.user,JSON.stringify(t))},getUser:function(){return JSON.parse(localStorage.getItem(r.user))},getSettings:function(){return JSON.parse(localStorage.getItem(r.settings))},setLocalSettings:function(t){localStorage.setItem(r.settings,JSON.stringify(t))},getTotalCounts:function(){return JSON.parse(localStorage.getItem(r.count))},setTotalCounts:function(t){localStorage.setItem(r.count,JSON.stringify(t))},getTabsCounts:function(){return JSON.parse(localStorage.getItem(r.tabsCounts))},setTabsCounts:function(t){localStorage.setItem(r.tabsCounts,JSON.stringify(t))},getSitesWhitelist:function(){return JSON.parse(localStorage.getItem(r.sitesWhitelist))},setSitesWhitelist:function(t){localStorage.setItem(r.sitesWhitelist,JSON.stringify(t))},getDomainsWhitelist:function(){return JSON.parse(localStorage.getItem(r.domainsWhitelist))},setDomainsWhitelist:function(t){localStorage.setItem(r.domainsWhitelist,JSON.stringify(t))},getForceList:function(){return JSON.parse(localStorage.getItem(r.forceList))},setForceList:function(t){localStorage.setItem(r.forceList,JSON.stringify(t))},setPiwikId:function(){var t=Math.random().toString(16).substr(2,8)+Math.random().toString(16).substr(2,8);localStorage.setItem(r.piwik,JSON.stringify(t))},getPiwikId:function(){return JSON.parse(localStorage.getItem(r.piwik))},removePiwikId:function(){localStorage.removeItem(r.piwik)},getStartDate:function(){return JSON.parse(localStorage.getItem(r.startDate))},setStartDate:function(t){localStorage.setItem(r.startDate,JSON.stringify(t))},getVersion:function(){return JSON.parse(localStorage.getItem(r.version))},setVersion:function(t){localStorage.setItem(r.version,JSON.stringify(t))},setClientVersion:function(t){localStorage.setItem(r.clientVersion,JSON.stringify(t))},removeClientVersion:function(){localStorage.removeItem(r.clientVersion)},getLatestUpdateDate:function(){return JSON.parse(localStorage.getItem(r.update))},setLatestUpdateDate:function(){var t=+new Date;localStorage.setItem(r.update,JSON.stringify(t))},getAds:function(){return JSON.parse(localStorage.getItem(r.adsList))},setAds:function(t){localStorage.setItem(r.adsList,JSON.stringify(t))},getAdsPatterns:function(){return JSON.parse(localStorage.getItem(r.adsPatterns))},setAdsPatterns:function(t){localStorage.setItem(r.adsPatterns,JSON.stringify(t))},getTrackers:function(){return JSON.parse(localStorage.getItem(r.trackersList))},setTrackers:function(t){localStorage.setItem(r.trackersList,JSON.stringify(t))},getTrackersPatterns:function(){return JSON.parse(localStorage.getItem(r.trackersPatterns))},setTrackersPatterns:function(t){localStorage.setItem(r.trackersPatterns,JSON.stringify(t))},getClosedClientWarnStatus:function(){return JSON.parse(localStorage.getItem(r.clientWarn))},setClosedClientWarnStatus:function(t){localStorage.setItem(r.clientWarn,JSON.stringify(t))},clearConnectionData:function(){localStorage.removeItem(r.ipData),localStorage.removeItem(r.serverData)}}},24:function(t,e,n){var r=n(48);t.exports=function(t,e){return r(e,t,0)>=0}},26:function(t,e){t.exports=function(t){return"[object String]"===Object.prototype.toString.call(t)}},29:function(t,e,n){var r=n(11),o=n(17);t.exports=function t(e,n,i){return function(){for(var a=[],u=0,s=e,c=0;c<n.length||u<arguments.length;){var f;c<n.length&&(!o(n[c])||u>=arguments.length)?f=n[c]:(f=arguments[u],u+=1),a[c]=f,o(f)||(s-=1),c+=1}return s<=0?i.apply(this,a):r(s,t(e,a,i))}}},31:function(t,e,n){var r=n(2),o=n(15),i=n(26);t.exports=r(function(t){return!!o(t)||!!t&&("object"==typeof t&&(!i(t)&&(1===t.nodeType?!!t.length:0===t.length||t.length>0&&(t.hasOwnProperty(0)&&t.hasOwnProperty(t.length-1)))))})},36:function(t,e,n){var r=n(2);t.exports=r(function(t){return null===t?"Null":void 0===t?"Undefined":Object.prototype.toString.call(t).slice(8,-1)})},43:function(t,e){t.exports=function(){function t(t){this.f=t}return t.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},t.prototype["@@transducer/result"]=function(t){return t},t.prototype["@@transducer/step"]=function(t,e){return this.f(t,e)},function(e){return new t(e)}}()},44:function(t,e,n){var r=n(11),o=n(0);t.exports=o(function(t,e){return r(t.length,function(){return t.apply(e,arguments)})})},45:function(t,e,n){var r=n(7);t.exports=function(){var t=Object.prototype.toString;return"[object Arguments]"===t.call(arguments)?function(e){return"[object Arguments]"===t.call(e)}:function(t){return r("callee",t)}}()},46:function(t,e,n){var r=n(2),o=n(10);t.exports=r(function(t){return o(t.length,t)})},48:function(t,e,n){var r=n(13);t.exports=function(t,e,n){var o,i;if("function"==typeof t.indexOf)switch(typeof e){case"number":if(0===e){for(o=1/e;n<t.length;){if(0===(i=t[n])&&1/i===o)return n;n+=1}return-1}if(e!==e){for(;n<t.length;){if("number"==typeof(i=t[n])&&i!==i)return n;n+=1}return-1}return t.indexOf(e,n);case"string":case"boolean":case"function":case"undefined":return t.indexOf(e,n);case"object":if(null===e)return t.indexOf(e,n)}for(;n<t.length;){if(r(t[n],e))return n;n+=1}return-1}},49:function(t,e,n){var r=n(0);t.exports=r(function(t,e){return t===e?0!==t||1/t==1/e:t!==t&&e!==e})},50:function(t,e,n){var r=n(86),o=n(0),i=n(62);t.exports=o(function(t,e){return i(r(t),e)})},51:function(t,e,n){var r=n(2),o=n(46);t.exports=r(function(t){return o(function(e,n){var r=Array.prototype.slice.call(arguments,0);return r[0]=n,r[1]=e,t.apply(this,r)})})},54:function(t,e){t.exports=function(t){return"function"==typeof t["@@transducer/step"]}},59:function(t,e,n){var r=n(60),o=n(61),i=n(7),a=n(49),u=n(14),s=n(36);t.exports=function t(e,n,c,f){if(a(e,n))return!0;if(s(e)!==s(n))return!1;if(null==e||null==n)return!1;if("function"==typeof e["fantasy-land/equals"]||"function"==typeof n["fantasy-land/equals"])return"function"==typeof e["fantasy-land/equals"]&&e["fantasy-land/equals"](n)&&"function"==typeof n["fantasy-land/equals"]&&n["fantasy-land/equals"](e);if("function"==typeof e.equals||"function"==typeof n.equals)return"function"==typeof e.equals&&e.equals(n)&&"function"==typeof n.equals&&n.equals(e);switch(s(e)){case"Arguments":case"Array":case"Object":if("function"==typeof e.constructor&&"Promise"===o(e.constructor))return e===n;break;case"Boolean":case"Number":case"String":if(typeof e!=typeof n||!a(e.valueOf(),n.valueOf()))return!1;break;case"Date":if(!a(e.valueOf(),n.valueOf()))return!1;break;case"Error":return e.name===n.name&&e.message===n.message;case"RegExp":if(e.source!==n.source||e.global!==n.global||e.ignoreCase!==n.ignoreCase||e.multiline!==n.multiline||e.sticky!==n.sticky||e.unicode!==n.unicode)return!1;break;case"Map":case"Set":if(!t(r(e.entries()),r(n.entries()),c,f))return!1;break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"ArrayBuffer":break;default:return!1}var l=u(e);if(l.length!==u(n).length)return!1;for(var p=c.length-1;p>=0;){if(c[p]===e)return f[p]===n;p-=1}for(c.push(e),f.push(n),p=l.length-1;p>=0;){var g=l[p];if(!i(g,n)||!t(n[g],e[g],c,f))return!1;p-=1}return c.pop(),f.pop(),!0}},6:function(t,e,n){var r=n(15),o=n(54);t.exports=function(t,e,n){return function(){if(0===arguments.length)return n();var i=Array.prototype.slice.call(arguments,0),a=i.pop();if(!r(a)){for(var u=0;u<t.length;){if("function"==typeof a[t[u]])return a[t[u]].apply(a,i);u+=1}if(o(a)){return e.apply(null,i)(a)}}return n.apply(this,arguments)}}},60:function(t,e){t.exports=function(t){for(var e,n=[];!(e=t.next()).done;)n.push(e.value);return n}},61:function(t,e){t.exports=function(t){var e=String(t).match(/^function (\w*)/);return null==e?"":e[1]}},62:function(t,e,n){var r=n(0),o=n(6),i=n(63),a=n(64),u=n(12),s=n(107),c=n(14);t.exports=r(o(["filter"],s,function(t,e){return a(e)?u(function(n,r){return t(e[r])&&(n[r]=e[r]),n},{},c(e)):i(t,e)}))},63:function(t,e){t.exports=function(t,e){for(var n=0,r=e.length,o=[];n<r;)t(e[n])&&(o[o.length]=e[n]),n+=1;return o}},639:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o=n(117),i=r(o),a=n(21),u=r(a);window.browser=window.msBrowser||window.browser||window.chrome;var s=function(t){var e=t.match(/^https?\:\/\/(?:www\.)?([^\/?#]+)(?:[\/?#]|$)/i);return e&&e[1]},c=new URLSearchParams(window.location.search),f=c.get("url"),l=document.getElementById("title"),p=document.getElementById("message-start"),g=document.getElementById("message-middle"),d=document.getElementById("message-end"),y=document.getElementById("domain"),m=document.getElementById("link"),v=document.getElementById("unforce"),S=browser.i18n.getMessage;l.innerText=S("forceTitle"),p.innerText=S("forceMessageStart"),g.innerText=S("forceMessageMiddle"),d.innerText=S("forceMessageEnd"),y.innerText=s(f),m.innerText=S("forceLink"),v.innerText=S("unforce"),m.setAttribute("href",f),browser.runtime.onMessage.addListener(function(t){t.ovpnConnected&&(location.href=f)}),v.addEventListener("click",function(t){t.preventDefault();var e=u.default.getForceList(),n=s(f);u.default.setForceList((0,i.default)([n],e)),location.href=f})},64:function(t,e){t.exports=function(t){return"[object Object]"===Object.prototype.toString.call(t)}},7:function(t,e){t.exports=function(t,e){return Object.prototype.hasOwnProperty.call(e,t)}},8:function(t,e){t.exports={init:function(){return this.xf["@@transducer/init"]()},result:function(t){return this.xf["@@transducer/result"](t)}}},86:function(t,e){t.exports=function(t){return function(){return!t.apply(this,arguments)}}}});