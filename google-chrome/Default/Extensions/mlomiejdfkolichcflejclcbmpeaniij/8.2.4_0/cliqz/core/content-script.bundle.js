!function(e){function t(e){Object.defineProperty(this,e,{enumerable:!0,get:function(){return this[v][e]}})}function r(e){if("undefined"!=typeof System&&System.isModule?System.isModule(e):"[object Module]"===Object.prototype.toString.call(e))return e;var t={default:e,__useDefault:e};if(e&&e.__esModule)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return new o(t)}function o(e){Object.defineProperty(this,v,{value:e}),Object.keys(e).forEach(t,this)}function n(e){return"@node/"===e.substr(0,6)?c(e,r(m(e.substr(6))),{}):p[e]}function u(e){var t=n(e);if(!t)throw new Error('Module "'+e+'" expected, but not contained in build.');if(t.module)return t.module;var r=t.linkRecord;return i(t,r),a(t,r,[]),t.module}function i(e,t){if(!t.depLoads){t.declare&&d(e,t),t.depLoads=[];for(var r=0;r<t.deps.length;r++){var o=n(t.deps[r]);t.depLoads.push(o),o.linkRecord&&i(o,o.linkRecord);var u=t.setters&&t.setters[r];u&&(u(o.module||o.linkRecord.moduleObj),o.importerSetters.push(u))}return e}}function d(t,r){var o=r.moduleObj,n=t.importerSetters,u=!1,i=r.declare.call(e,function(e,t){if(!u){if("object"==typeof e)for(var r in e)"__useDefault"!==r&&(o[r]=e[r]);else o[e]=t;u=!0;for(var i=0;i<n.length;i++)n[i](o);return u=!1,t}},{id:t.key});"function"!=typeof i?(r.setters=i.setters,r.execute=i.execute):(r.setters=[],r.execute=i)}function l(e,t,r){return p[e]={key:e,module:void 0,importerSetters:[],linkRecord:{deps:t,depLoads:void 0,declare:r,setters:void 0,execute:void 0,moduleObj:{}}}}function f(e,t,r,o){var n={};return p[e]={key:e,module:void 0,importerSetters:[],linkRecord:{deps:t,depLoads:void 0,declare:void 0,execute:o,executingRequire:r,moduleObj:{default:n,__useDefault:n},setters:void 0}}}function s(e,t,r){return function(o){for(var n=0;n<e.length;n++)if(e[n]===o){var u,i=t[n],d=i.linkRecord;return u=d?-1===r.indexOf(i)?a(i,d,r):d.moduleObj:i.module,"__useDefault"in u?u.__useDefault:u}}}function a(t,r,n){if(n.push(t),t.module)return t.module;var u;if(r.setters){for(var i=0;i<r.deps.length;i++){var d=r.depLoads[i],l=d.linkRecord;l&&-1===n.indexOf(d)&&(u=a(d,l,l.setters?n:[]))}r.execute.call(y)}else{var f={id:t.key},c=r.moduleObj;Object.defineProperty(f,"exports",{configurable:!0,set:function(e){c.default=c.__useDefault=e},get:function(){return c.__useDefault}});var p=s(r.deps,r.depLoads,n);if(!r.executingRequire)for(var i=0;i<r.deps.length;i++)p(r.deps[i]);var v=r.execute.call(e,p,c.__useDefault,f);void 0!==v?c.default=c.__useDefault=v:f.exports!==c.__useDefault&&(c.default=c.__useDefault=f.exports);var m=c.__useDefault;if(m&&m.__esModule)for(var b in m)Object.hasOwnProperty.call(m,b)&&(c[b]=m[b])}var f=t.module=new o(r.moduleObj);if(!r.setters)for(var i=0;i<t.importerSetters.length;i++)t.importerSetters[i](f);return f}function c(e,t){return p[e]={key:e,module:t,importerSetters:[],linkRecord:void 0}}var p={},v="undefined"!=typeof Symbol?Symbol():"@@baseObject";o.prototype=Object.create(null),"undefined"!=typeof Symbol&&Symbol.toStringTag&&(o.prototype[Symbol.toStringTag]="Module");var m="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&"undefined"!=typeof require.resolve&&"undefined"!=typeof process&&process.platform&&require,y={};return Object.freeze&&Object.freeze(y),function(e,t,n,i){return function(d){d(function(d){var s={_nodeRequire:m,register:l,registerDynamic:f,registry:{get:function(e){return p[e].module},set:c},newModule:function(e){return new o(e)}};c("@empty",new o({}));for(var a=0;a<t.length;a++)c(t[a],r(arguments[a],{}));i(s);var v=u(e[0]);if(e.length>1)for(var a=1;a<e.length;a++)u(e[a]);return n?v.__useDefault:(v instanceof o&&Object.defineProperty(v,"__esModule",{value:!0}),v)})}}}("undefined"!=typeof self?self:"undefined"!=typeof global?global:this)

(["a"], [], true, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
$__System.registerDynamic("b", [], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    "platform": "webextension",
    "brocfile": "Brocfile.node.js",
    "baseURL": "/cliqz/",
    "pack": "npm pack",
    "publish": "aws s3 cp browser-core-$PACKAGE_VERSION.tgz s3://cdncliqz/update/edge/ghostery/$BRANCH_NAME/$VERSION.${GIT_COMMIT:0:7}.tgz --acl public-read && aws s3 cp s3://cdncliqz/update/edge/ghostery/$BRANCH_NAME/$VERSION.${GIT_COMMIT:0:7}.tgz s3://cdncliqz/update/edge/ghostery/$BRANCH_NAME/latest.tgz --acl public-read",
    "sourceMaps": true,
    "format": "common",
    "settings": {
      "ANOLYSIS_BACKEND_URL": "https://anolysis.privacy.cliqz.com",
      "ANOLYSIS_STAGING_BACKEND_URL": "https://anolysis.privacy.clyqz.com",
      "BACKGROUND_IMAGE_URL": "https://cdn.cliqz.com/brands-database/database/",
      "BW_URL": "https://antiphishing.cliqz.com/api/bwlist?md5=",
      "CAMPAIGN_SERVER": "https://fec.cliqz.com/message/",
      "CDN_BASEURL": "https://cdn2.ghostery.com",
      "CLIQZ_SAVE_URL": "https://cliqz.com/q=",
      "CONFIG_PROVIDER": "https://safe-browsing.ghostery.com/config",
      "ENDPOINT_ANONPATTERNSURL": "https://cdn2.ghostery.com/human-web-chromium/patterns-anon.gz",
      "ENDPOINT_BLIND_SIGNER": "https://ghostery-sign.ghostery.com/sign",
      "ENDPOINT_CONFIGURL": "https://safe-browsing.ghostery.com/ts-config",
      "ENDPOINT_HPNV2_COLLECTOR": "https://collector-hpn.cliqz.com",
      "ENDPOINT_HPNV2_CONFIG": "https://collector-hpn.cliqz.com/config",
      "ENDPOINT_HPNV2_JOIN": "https://collector-hpn.cliqz.com/join",
      "ENDPOINT_KEYS_PROVIDER": "https://ghostery-collector.ghostery.com/signerKey",
      "ENDPOINT_LOOKUP_TABLE_PROVIDER": "https://ghostery-collector.ghostery.com/v2/lookuptable",
      "ENDPOINT_PATTERNSURL": "https://cdn2.ghostery.com/human-web-chromium/patterns.gz",
      "ENDPOINT_SAFE_QUORUM_ENDPOINT": "https://safe-browsing-quorum.ghostery.com/",
      "ENDPOINT_SAFE_QUORUM_PROVIDER": "https://safe-browsing-quorum.ghostery.com/config",
      "ENDPOINT_SOURCE_MAP_PROVIDER": "https://ghostery-collector.ghostery.com/sourcemapjson",
      "ENDPOINT_URL": "https://api.cliqz.com/api/v1/rich-header?path=/map&bmresult=",
      "ENDPOINT_USER_REG": "https://ghostery-sign.ghostery.com/register",
      "FEEDBACK": "https://cliqz.com/feedback/",
      "HB_NEWS": "hb-news.cliqz.com",
      "HOMPAGE_URL": "https://cliqz.com/",
      "INVENTORY_URL": "https://cdn.cliqz.com/browser-f/fun-demo/inventoryv2.txt.gz",
      "JOBS_URL": "https://cliqz.com/jobs/",
      "OFFERS_BE_BASE_URL": "https://offers.ghostery.com",
      "PRIVACY_SCORE_URL": "https://anti-tracking.cliqz.com/api/v1/score?",
      "RESULTS_PROVIDER": "https://api.cliqz.com/api/v2/results?nrh=1&q=",
      "RESULTS_PROVIDER_LOG": "https://api.cliqz.com/api/v1/logging?q=",
      "RESULTS_PROVIDER_PING": "https://api.cliqz.com/ping",
      "RICH_HEADER": "https://api.cliqz.com/api/v2/rich-header?path=/v2/map",
      "RICH_HEADER_PROXY_URL": "hb-news.cliqz.com",
      "ROTATED_TOP_NEWS": "rotated-top-news.cliqz.com",
      "SAFE_BROWSING": "https://safe-browsing.cliqz.com",
      "STATISTICS": "https://stats.cliqz.com",
      "SUGGESTIONS_URL": "https://cliqz.com/search?q=",
      "SUPPORT_URL": "https://cliqz.com/support/",
      "TEAM_URL": "https://cliqz.com/team/",
      "TELEMETRY_ENDPOINT": "https://safebrowsing-experiment.cliqz.com",
      "TRACKER_PROXY_PROXY_PEERS_DEFAULT": "https://p2p-signaling-proxypeer.cliqz.com/peers",
      "TRACKER_PROXY_PROXY_PEERS_EXIT_DEFAULT": "https://p2p-signaling-proxypeer.cliqz.com/exitNodes",
      "TRACKER_PROXY_PROXY_SIGNALING_DEFAULT": "wss://p2p-signaling-proxypeer.cliqz.com",
      "TRIQZ_URL": "https://cliqz.com/tips",
      "UNINSTALL": "https://cliqz.com/home/offboarding",
      "channel": "CH80",
      "triggers-root": "ghostery-root",
      "MSGCHANNEL": "web-extension",
      "KEY_DS_PUBKEY": "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwXo4hXvboKHCggNJ0UNFvZQfDWi0jNcF1kBHthxilMu6LB/hFrSMQ+/FgTqVE36cCezWE0K1UcwmYGVsuqxcvql82RfCmYUVBroJ3UFG8qnetYfU5FOk43C555p5l5HzlF8QilcCUBCO4SCj9lEZ3/8FJboCupTqxEUq7nwUgaNZOiGKMdDUBZJO1tW4LSH4lj9IAZccEJ5HKVmJKopQ3hmzWgDqowxni4NQz+0DnsSfCGAupKaJDxjfajJosX5i674rgdHbZGtgHB3M9jhc6HFNPcmtUgLwgtUtRwMhSnya6q/O06euouNi1h0m5eRrWeMRlJSdUnelLSU8QNy7LQIDAQAB",
      "KEY_SECURE_LOGGER_PUBKEY": "MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAh5HhcRAn6+6woXQXl/NtZ+fOooNglZct/HSpYuqkcmrPauHW7EuOSq5bvpBZRTDROjR/kUPomqVZIzqhdCFPA8BwXSCz7hAel2Q157vtBvh9sngMMLXb5Fgzef5N4EuKO8pL5KrS+I9tfZac41vFJSdpgAirZYhh+tdcQQ1z0Qv/Rw0zOXjfvddCz3gEv2gB9KsLMVnTS1J4YOOgfza2adg9Ebz1z99DiF4vtCwn0IUwH/3ToTBwJLbMnC3Ol43yBNk8rgK2mkgCi614vOSD3hnVmio+iW6+AUklM8VPl6l7hEK9cljJY+9UsMVmTrvaFbMPwS6AdZCXKTmNdaMJcy3zSOXu5zvzihoQLwAu9LM3l2eVk0Mw0K7JXOP20fc8BtzWCOLYVP32r4R0BNuhTtvGqjHNZHPJN5OwaxkLpn2dujL9uDWGjRiOItKMVq/nOqmNGghrbf8IOaKT7VQhqOU4cXRkB/uF1UjYETBavwUZAxx9Wd/cMcAGmKiDxighxxQ29jDufl+2WG065tmJz+zCxmgrPh6Zb3KFUxPTe6yksAhWJhmGShA9v20t84M5c6NpZXoUsFcVja6XxzHeSB8dWq9Uu5QcZ83Gz/ronwdEjT2OGTtBgOFeTDqLYUgphC1gcUEHOCnTNXRMQOXqGwBfZHp+Mq61QcMq2rNS7xECAwEAAQ==",
      "HPN_CHANNEL": "ghostery",
      "ATTRACK_TELEMETRY_PROVIDER": "hpn",
      "HW_CHANNEL": "ghostery",
      "ALLOWED_COUNTRY_CODES": ["de", "at", "ch", "es", "us", "fr", "nl", "gb", "it", "be", "se", "dk", "fi", "cz", "gr", "hu", "ro", "no", "ca", "au", "ru", "ua", "in", "pl", "jp", "br", "mx", "cn", "ar"],
      "antitrackingPlaceholder": "ghostery",
      "antitrackingHeader": "Ghostery-AntiTracking",
      "frameScriptWhitelist": []
    },
    "default_prefs": {
      "modules.human-web.enabled": true,
      "modules.offers-v2.enabled": true,
      "modules.message-center.enabled": false,
      "modules.antitracking.enabled": true,
      "modules.anti-phishing.enabled": false,
      "modules.adblocker.enabled": true,
      "offers2FeatureEnabled": true,
      "offersLogsEnabled": true,
      "showConsoleLogs": false,
      "cliqz-adb": true,
      "cliqz-adb-abtest": true,
      "attrackBloomFilter": true,
      "humanWeb": true,
      "cliqz-anti-phishing": true,
      "cliqz-anti-phishing-enabled": true,
      "attrackRemoveQueryStringTracking": false,
      "attrackTelemetryMode": 1,
      "attrackDefaultAction": "placeholder",
      "sendAntiTrackingHeader": false,
      "telemetry": false,
      "attrackCookieTrustReferers": true
    },
    "bundles": ["core/content-script.bundle.js", "hpn/worker.bundle.js"],
    "modules": ["core", "message-center", "human-web", "hpn", "antitracking", "webrequest-pipeline", "static", "offers-v2", "adblocker", "anolysis", "anti-phishing"],
    "system": {
      "map": {
        "BigInt": "node_modules/BigInt/src/BigInt.js"
      },
      "meta": {
        "BigInt": {
          "format": "cjs"
        }
      }
    },
    "subprojects": [],
    "environment": "production",
    "debugPages": false,
    "EXTENSION_VERSION": "7.28.6",
    "instrumentFunctions": ""
  };
});
$__System.registerDynamic('c', [], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.normalizeAclkUrl = normalizeAclkUrl;
  /* eslint-disable import/prefer-default-export */

  /**
   * Google pagead aclk look like this:
   * https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjNi5bcsbPWAhUW4BsKHUePBAwYABARGgJ3bA&ohost=www.google.de&cid=CAASEuRo7v8yDlI1j5_Xe3oAtyANqQ&sig=AOD64_0I3As2z06whZRtfqOC3PGdhk9SIQ&ctype=5&q=&ved=0ahUKEwjc7JLcsbPWAhVLuhQKHQWpCRcQ9aACCKIB&adurl=
   *
   * This function takes such an url and returns a normalized string
   * (which is no longer an url). Links to identical ads should be
   * normalized to the same string while links to different ads
   * should be mapped to different keys.
   */
  function normalizeAclkUrl(url) {
    const parts = url.split('aclk?');
    if (parts.length !== 2) {
      throw new Error(`Expected Google pagead "aclk" URL. Instead got: ${url}`);
    }

    // Ignore the "ved" code, as it seems to change between clicks.
    //
    // For background information about the "ved" code, see
    // https://deedpolloffice.com/blog/articles/decoding-ved-parameter
    const noVed = parts[1].replace(/ved=.*&/, '');

    // TODO: hack, needs to be replaced by a more robust solution
    return noVed.replace(/&q=&adurl=$/, '').replace(/&adurl=&q=$/, '');
  }
});
$__System.registerDynamic('d', ['e', 'c'], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.parseDom = parseDom;

  var _helpers = $__require('e');

  var _adDetection = $__require('c');

  /* eslint import/prefer-default-export: 'off' */

  function logException(e) {
    window.console.error('[human-web] Exception caught:', e);
  }

  function parseDom(url, window) {
    const document = window.document;

    // Let's try and get META refresh to detect javascript redirects.
    try {
      let jsRef = null;
      jsRef = document.querySelector('script');
      if (jsRef && jsRef.innerHTML.indexOf('location.replace') > -1) {
        const location = document.querySelector('title').textContent;
        chrome.runtime.sendMessage({
          source: _helpers.CHROME_MSG_SOURCE,
          payload: {
            module: 'human-web',
            action: 'jsRedirect',
            args: [{
              message: {
                location,
                url: document.location.href
              }
            }]
          }
        });
      }
    } catch (ee) {
      logException(ee);
    }

    try {
      let _ad = '';
      let _h = false;

      if (document.querySelector('#s0p1c0')) {
        _ad = document.querySelector('#s0p1c0').href;
      }

      if (document.querySelector('#tads .ads-ad')) {
        if (document.querySelector('#tads .ads-ad').offsetParent === null) _h = true;
      }

      const additionalInfo = {
        type: 'dom',
        ad: _ad,
        hidden: _h
      };

      chrome.runtime.sendMessage({
        source: _helpers.CHROME_MSG_SOURCE,
        payload: {
          module: 'human-web',
          action: 'contentScriptTopAds',
          args: [{
            message: additionalInfo
          }]
        }
      });
    } catch (ee) {
      logException(ee);
    }

    // We need to get all the ADS from this page.
    try {
      const adDetails = {};
      const doc = window.document;
      let noAdsOnThisPage = 0;
      const detectAdRules = {
        query: {
          element: '#ires',
          attribute: 'data-async-context'
        },
        adSections: ['.ads-ad', '.pla-unit-container', '.pla-hovercard-content-ellip', '.cu-container tr'],
        0: {
          cu: ".ad_cclk h3 a[id^='s0p'],.ad_cclk h3 a[id^='n1s0p'],.ad_cclk h3 a[id^='s3p']",
          fu: ".ad_cclk h3 a[id^='vs0p'],.ad_cclk h3 a[id^='vn1s0p'],.ad_cclk h3 a[id^='vs3p']"
        },
        1: {
          cu: "a[id^='plaurlg']",
          fu: "a[id^='vplaurlg']"
        },
        2: {
          cu: "a[id^='plaurlh']",
          fu: "a[id^='vplaurlh']"
        },
        3: {
          cu: "a[id^='plaurlt']",
          fu: "a[id^='vplaurlt']"
        }
      };

      // We need to scrape the query too.
      const queryElement = doc.querySelector(detectAdRules.query.element);
      let query = '';

      if (queryElement) {
        query = queryElement.getAttribute(detectAdRules.query.attribute).replace('query:', '');

        try {
          query = decodeURIComponent(query);
        } catch (ee) {
          // empty
        }
      }

      // Let's iterate over each possible section of the ads.
      detectAdRules.adSections.forEach((eachAdSection, idx) => {
        const adNodes = Array.prototype.slice.call(doc.querySelectorAll(eachAdSection));

        adNodes.forEach(eachAd => {
          const cuRule = detectAdRules[idx].cu;
          const fuRule = detectAdRules[idx].fu;

          const clink = eachAd.querySelector(cuRule);
          const flink = eachAd.querySelector(fuRule);

          if (clink && flink) {
            const clickPattern = (0, _adDetection.normalizeAclkUrl)(clink.href);

            adDetails[clickPattern] = {
              ts: Date.now(),
              query,
              furl: [flink.getAttribute('data-preconnect-urls'), flink.href] // At times there is a redirect chain, we only want the final domain.
            };

            noAdsOnThisPage += 1;
          }
        });
      });

      if (noAdsOnThisPage > 0) {
        chrome.runtime.sendMessage({
          source: _helpers.CHROME_MSG_SOURCE,
          payload: {
            module: 'human-web',
            action: 'adClick',
            args: [{
              ads: adDetails
            }]
          }
        });
      }
    } catch (ee) {
      logException(ee);
    }
  }

  (0, _helpers.registerContentScript)('http*', window => {
    const url = window.location.href;

    // Only add for main pages.
    if (window.top === window) {
      window.addEventListener('DOMContentLoaded', () => {
        parseDom(url, window);
      });
    }
  });
});
$__System.registerDynamic('f', [], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /**
   * Module containing the code that will be injected on the web page to identify the
   * coupon fields (textbox + button).
   * General algorithm logic:
   *  - for every T (target = all "form" elements, also the ones detected on mutations)
   *    - check if we have a input field that matches one of the list.
   *    - check if we have a button field in the same form
   *  - pick the ones that match the conditions and assume it is the voucher.
   *  - listen for click events
   */

  // the keywords we want to check to identify for input fields
  //
  const couponKeyWords = ['voucher', 'discount', 'coupon', 'rabatt', 'gutschein', 'promo'];

  /**
   * concat 2 lists into one
   * @param  {[type]} l1 [description]
   * @param  {[type]} l2 [description]
   * @return {[type]}    [description]
   */
  const concat = (l1, l2) => l1.concat(l2);

  /**
   * this method will retrieve all the potential fields that we thing that are for
   * inserting coupon codes.
   */
  function getInputFieldsFromTarget(target) {
    const inputFileds = target.querySelectorAll('input');
    return [...inputFileds].filter(x => x.type !== 'hidden' && x.type !== 'password' && couponKeyWords.some(key => x.name.toLowerCase().indexOf(key) > -1 || x.id.toLowerCase().indexOf(key) > -1));
  }

  function getButtonFieldsFromTarget(target) {
    // for some cases we have buttons, for some others we have
    // <input class="btn" data-action="save" value="Einlösen" type="submit">
    const buttons = [...target.querySelectorAll('button')] || [];
    const inputs = ([...target.querySelectorAll('input')] || []).filter(t => t && t.type && t.type.toLowerCase() === 'submit');
    return concat(buttons, inputs);
  }

  /**
   * Will get the list of buttons, inputFields targets from a list of forms we see
   * on the page and filtering those ones that we consider they are to an .
   * @param  {[type]} forms [description]
   * @return {[type]}       [description]
   */
  function getVoucherElements(forms) {
    // the way it work, probably we need to improve this is:
    // for each form:
    //  - get input fields that seems to be associated to voucher
    //  - get associated buttons (submit)
    //  - if none or more than one input field => discard?
    //  - if none button or more than one => discard result completely
    const entriesResults = [];
    forms.filter(f => f).forEach(form => {
      // get the input fields
      const inputFields = getInputFieldsFromTarget(form);
      if (inputFields.length !== 1) {
        // continue with the next one, note that actually here we may want
        // to choose the most probable one instead of none, for now none is fine
        return;
      }
      const buttons = getButtonFieldsFromTarget(form);
      if (buttons.length !== 1) {
        return;
      }

      // we have a form that satisfies the conditions
      entriesResults.push({
        input: inputFields[0],
        button: buttons[0]
      });
    });

    return entriesResults;
  }

  const getCouponsForms = forms => {
    const voucherEntries = getVoucherElements(forms);
    // now we need to decide what to do if we have more than one
    if (voucherEntries.length !== 1) {
      // nothing for now
      return null;
    }

    // else we have the element we want to track
    return voucherEntries[0];
  };

  // ////////////////////////////////////////////////////////////////////////////

  /**
   * This helper class will contain the form we assume is related to the voucher
   * basically the { input, button } + some handy functions
   */
  class CouponForm {
    constructor(_ref) {
      let input = _ref.input,
          button = _ref.button,
          notifyCallback = _ref.notifyCallback;

      this.input = input;
      this.button = button;
      this.notifyCallback = notifyCallback;
      this._clickCb = this._clickCb.bind(this);
    }

    unload() {
      if (this.button) {
        this.button.removeEventListener('click', this._clickCb);
      }
    }

    isValid() {
      return this.input && this.button;
    }

    configure() {
      if (this.isValid()) {
        // remove first if already exists
        this.button.removeEventListener('click', this._clickCb);
        this.button.addEventListener('click', this._clickCb);
      }
    }

    setInputFieldContent(content) {
      if (this.input && this.input.value.length === 0 && content !== null) {
        this.input.value = content;
      }
    }

    getInputField() {
      return this.input ? this.input.value : '';
    }

    _clickCb(event) {
      if (!event || event.type !== 'click') {
        return;
      }
      // now we perform the real callback
      const couponCode = this.getInputField();
      if (this.notifyCallback) {
        this.notifyCallback(couponCode);
      }
    }
  }

  /**
   * This class will find the form and listen for any webpage modification to get the
   * forms we think are associated to the vouchers and perform the associated
   * actions.
   */
  class CouponFormHandler {
    constructor(window, chrome, backgroundAction) {
      this.window = window;
      this.chrome = chrome;
      this.offerInfo = null;
      this.mutationObserver = null;
      this.backgroundAction = backgroundAction;
      // cb
      this._onMutations = this._onMutations.bind(this);
      this._onFormClicked = this._onFormClicked.bind(this);
    }

    // activate on load
    activate(offerInfo) {
      if (!offerInfo) {
        return;
      }
      this.offerInfo = offerInfo;

      // configure mutations if needed
      if (!this.mutationObserver) {
        this.mutationObserver = new this.window.MutationObserver(mutations => this._onMutations(mutations));
        this.mutationObserver.observe(this.window.document, { childList: true, subtree: true });
      }

      // get the forms
      this.pageLoaded();
    }

    pageLoaded() {
      const forms = [...this.window.document.querySelectorAll('form')];
      this._getAndProcessFormsFromTargets(forms);
    }

    // deactivate
    deactivate() {
      if (this.mutationObserver) {
        this.mutationObserver.disconnect();
        this.mutationObserver = null;
      }
    }

    // //////////////////////////////////////////////////////////////////////////
    //                                    PRIVATE
    // //////////////////////////////////////////////////////////////////////////
    //

    _onFormClicked(couponValue) {
      // here we should call the core again
      if (this.backgroundAction) {
        this.backgroundAction('couponFormUsed', {
          offerInfo: this.offerInfo,
          couponValue,
          url: this.window.location.href
        });
      }
    }

    _onMutations(mutations) {
      // TODO: improve here the way we can filter mutations.
      // - probably we can check if the current mutation is the form itself (if we have
      // one) then we just check that one, otherwise we check all the full mutations
      const forms = new Set(mutations.map(m => m.target).filter(t => t && t.tagName && t.tagName.toLowerCase() === 'form'));
      this._getAndProcessFormsFromTargets([...forms]);
    }

    _getAndProcessFormsFromTargets(targets) {
      const couponForm = getCouponsForms(targets);
      if (couponForm) {
        couponForm.notifyCallback = this._onFormClicked;
        // check if we need to unload the latest
        if (this.couponForm) {
          this.couponForm.unload();
        }
        this.couponForm = new CouponForm(couponForm);
      }
      this._processCouponForm(this.couponForm);
    }

    _processCouponForm(couponForm) {
      if (couponForm) {
        // set the coupon code if needed
        if (this.offerInfo.autoFillField) {
          couponForm.setInputFieldContent(this.offerInfo.code);
        }
        couponForm.configure();
      }
    }
  }
  exports.default = CouponFormHandler;
});
$__System.registerDynamic('10', ['e', 'f'], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var _helpers = $__require('e');

  var _couponContent = $__require('f');

  var _couponContent2 = _interopRequireDefault(_couponContent);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  /**
   * This content script will be activated on particular urls depending if we have an offer
   * that contains a unique coupon or not and we have the proper monitors (coupon monitor)
   * for the offer.
   * If we have then we will basically search for the form associated to the voucher and
   * listen whenever the button is clicked to retrieve the value of the coupon field.
   * As additional we can insert the value of the voucher directly on the field to
   * facilitate the user the work :).
   */
  function couponsHandlingScript(window, chrome) {
    // TODO: add general check here if offer is disabled or not enabled we do not
    // inject anything here


    /**
     * Helper method to call offers-v2
     */
    /* eslint no-use-before-define: 'off' */
    const backgroundAction = function backgroundAction(action) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      chrome.runtime.sendMessage({
        source: _helpers.CHROME_MSG_SOURCE,
        payload: {
          module: 'offers-v2',
          action,
          args
        }
      }, msg => {
        if (msg.response.activate) {
          activateCouponHandler(msg.response.offerInfo);
        } else {
          deactivateCouponHandler();
        }
      });
    };

    // the current url, check if we need to inject the script here or not based on this
    const url = window.location.href;

    // this class will be the one handling the voucher forms
    let couponHandler = null;

    const isForThisScriptMessage = msg => msg && msg.module === 'offers-v2' && msg.response && msg.response.url === url;

    const activateCouponHandler = offersInfo => {
      if (!couponHandler || !offersInfo) {
        couponHandler = new _couponContent2.default(window, chrome, backgroundAction);
        couponHandler.activate(offersInfo);
      }
    };

    const deactivateCouponHandler = () => {
      if (couponHandler) {
        couponHandler.deactivate();
        couponHandler = null;
      }
    };

    /**
     * Receive messages from core and proxy them to the copunHandler
     */
    const onMessage = msg => {
      // check if if it is a message for us
      if (!(0, _helpers.isCliqzContentScriptMsg)(msg) || !isForThisScriptMessage(msg)) {
        return;
      }

      // check if we are activating or disabling
      if (msg.response.activate) {
        // we need to activate
        activateCouponHandler(msg.response.offerInfo);
      } else {
        // we need to deactivate
        deactivateCouponHandler();
      }
    };

    const onLoad = () => {
      // after we load we check if we should inject (activate) the script here
      backgroundAction('activateCouponDetectionOnUrl', url);
    };

    const onUnload = () => {
      if (couponHandler) {
        couponHandler.deactivate();
      }
      chrome.runtime.onMessage.removeListener(onMessage);
      window.removeEventListener('unload', onUnload);
      window.removeEventListener('load', onLoad);
    };

    window.addEventListener('load', onLoad);
    window.addEventListener('unload', onUnload);
    chrome.runtime.onMessage.addListener(onMessage);
  }

  (0, _helpers.registerContentScript)('http*', couponsHandlingScript);
});
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : 'function' === 'function' && true ? $__System.registerDynamic('11', [], false, function ($__require, $__exports, $__module) {
        if (typeof factory === 'function') {
            return factory.call($__exports, $__exports);
        } else {
            return factory;
        }
    }) : factory(global.adblocker = {});
})(this, function (exports) {
    'use strict';

    var classCallCheck = function (instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    };

    var createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    var toConsumableArray = function (arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

            return arr2;
        } else {
            return Array.from(arr);
        }
    };

    function injectCSSRule(rule, doc) {
        var css = doc.createElement('style');
        css.type = 'text/css';
        css.id = 'cliqz-adblokcer-css-rules';
        var parent = doc.head || doc.documentElement;
        parent.appendChild(css);
        css.appendChild(doc.createTextNode(rule));
    }
    function injectScript(s, doc) {
        var autoRemoveScript = '\n    try {\n      ' + s + '\n    } catch (ex) { }\n\n    (function() {\n      var currentScript = document.currentScript;\n      var parent = currentScript && currentScript.parentNode;\n\n      if (parent) {\n        parent.removeChild(currentScript);\n      }\n    })();\n  ';
        var script = doc.createElement('script');
        script.type = 'text/javascript';
        script.id = 'cliqz-adblocker-script';
        script.appendChild(doc.createTextNode(autoRemoveScript));
        var parent = doc.head || doc.documentElement;
        parent.appendChild(script);
    }
    function blockScript(filter, doc) {
        var filterRE = new RegExp(filter);
        doc.addEventListener('beforescriptexecute', function (ev) {
            var target = ev.target;
            if (target.textContent && filterRE.test(target.textContent)) {
                ev.preventDefault();
                ev.stopPropagation();
            }
        });
    }

    var CosmeticInjection = function () {
        function CosmeticInjection(window, backgroundAction) {
            classCallCheck(this, CosmeticInjection);

            this.window = window;
            this.backgroundAction = backgroundAction;
            this.mutationObserver = null;
            this.injectedRules = new Set();
            this.injectedScripts = new Set();
            this.blockedScripts = new Set();
            this.observedNodes = new Set();
            this.backgroundAction('getCosmeticsForDomain');
            this.onMutation([{ target: this.window.document.body }]);
            this.startObserving();
        }

        createClass(CosmeticInjection, [{
            key: 'unload',
            value: function unload() {
                if (this.mutationObserver) {
                    try {
                        this.mutationObserver.disconnect();
                    } catch (e) {}
                }
            }
        }, {
            key: 'handleResponseFromBackground',
            value: function handleResponseFromBackground(_ref) {
                var active = _ref.active,
                    scripts = _ref.scripts,
                    blockedScripts = _ref.blockedScripts,
                    styles = _ref.styles;

                if (!active) {
                    this.unload();
                    return;
                }
                for (var i = 0; i < scripts.length; i += 1) {
                    var script = scripts[i];
                    if (!this.injectedScripts.has(script)) {
                        injectScript(script, this.window.document);
                        this.injectedScripts.add(script);
                    }
                }
                for (var _i = 0; _i < blockedScripts.length; _i += 1) {
                    var _script = blockedScripts[_i];
                    if (!this.blockedScripts.has(_script)) {
                        blockScript(_script, this.window.document);
                        this.blockedScripts.add(_script);
                    }
                }
                this.handleRules(styles);
            }
        }, {
            key: 'handleRules',
            value: function handleRules(rules) {
                var rulesToInject = [];
                for (var i = 0; i < rules.length; i += 1) {
                    var rule = rules[i];
                    if (!this.injectedRules.has(rule)) {
                        try {
                            if (!this.window.document.querySelector(rule)) {
                                continue;
                            }
                        } catch (e) {
                            continue;
                        }
                        this.injectedRules.add(rule);
                        rulesToInject.push(' :root ' + rule);
                    }
                }
                if (rulesToInject.length > 0) {
                    injectCSSRule(rulesToInject.join(' ,') + ' {display:none !important;}', this.window.document);
                }
            }
        }, {
            key: 'onMutation',
            value: function onMutation(mutations) {
                var _this = this;

                var targets = new Set(mutations.map(function (m) {
                    return m.target;
                }).filter(function (t) {
                    return t;
                }));
                if (targets.size > 100) {
                    targets = new Set([this.window.document.body]);
                }
                if (targets.size === 0) {
                    return;
                }
                var nodeInfo = new Set();
                targets.forEach(function (target) {
                    var nodes = target.querySelectorAll('*');
                    for (var i = 0; i < nodes.length; i += 1) {
                        var node = nodes[i];
                        if (node.hidden) {
                            continue;
                        }
                        if (node.id) {
                            var selector = '#' + node.id;
                            if (!_this.observedNodes.has(selector)) {
                                nodeInfo.add(selector);
                                _this.observedNodes.add(selector);
                            }
                        }
                        if (node.tagName) {
                            var _selector = node.tagName;
                            if (!_this.observedNodes.has(_selector)) {
                                nodeInfo.add(_selector);
                                _this.observedNodes.add(_selector);
                            }
                        }
                        if (node.className && node.className.split) {
                            node.className.split(' ').forEach(function (name) {
                                var selector = '.' + name;
                                if (!_this.observedNodes.has(selector)) {
                                    nodeInfo.add(selector);
                                    _this.observedNodes.add(selector);
                                }
                            });
                        }
                    }
                });
                if (nodeInfo.size > 0) {
                    this.backgroundAction('getCosmeticsForNodes', [[].concat(toConsumableArray(nodeInfo))]);
                }
            }
        }, {
            key: 'startObserving',
            value: function startObserving() {
                var _this2 = this;

                if (this.window.MutationObserver !== undefined) {
                    this.mutationObserver = new this.window.MutationObserver(function (mutations) {
                        return _this2.onMutation(mutations);
                    });
                    this.mutationObserver.observe(this.window.document, {
                        childList: true,
                        subtree: true
                    });
                }
            }
        }]);
        return CosmeticInjection;
    }();

    exports.CosmeticsInjection = CosmeticInjection;

    Object.defineProperty(exports, '__esModule', { value: true });
});
$__System.registerDynamic('12', ['11'], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _adblockerCosmetics = $__require('11');

  var adblockerCosmetics = _interopRequireWildcard(_adblockerCosmetics);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }newObj.default = obj;return newObj;
    }
  }

  exports.default = adblockerCosmetics;
});
$__System.registerDynamic('13', ['e', '12'], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var _helpers = $__require('e');

  var _adblockerCosmetics = $__require('12');

  var _adblockerCosmetics2 = _interopRequireDefault(_adblockerCosmetics);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  (0, _helpers.registerContentScript)('http*', (window, chrome) => {
    let active = true;
    const url = window.location.href;
    if (!url) {
      return;
    }

    /**
     * Helper used to trigger action from the adblocker's background:
     * @param {string} action - name of the action found in the background.
     * @param {array} args - arguments to forward to the action.
     */

    /* eslint no-use-before-define: 'off' */
    const backgroundAction = function backgroundAction(action) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      // if module is diabled, don't call background further
      if (!active) {
        return;
      }
      chrome.runtime.sendMessage({
        source: _helpers.CHROME_MSG_SOURCE,
        payload: {
          module: 'adblocker',
          action,
          args
        }
      }, msg => cosmeticsInjection.handleResponseFromBackground(msg.response));
    };

    /**
     * This class is in charge of managing the adblocking in content script:
     * - Script injection.
     * - Script blocking.
     * - CSS injection.
     * - Observing mutations in the page.
     */
    const cosmeticsInjection = new _adblockerCosmetics2.default.CosmeticsInjection(window, backgroundAction);

    // ------------------ //
    // Register listeners //
    // ------------------ //

    const onMessage = msg => {
      // On chromium platform the windowid is a fake on (always === 1),
      // instead the message is sent to the tab through `tabs.sendMessage`
      if (msg.module === 'adblocker') {
        if (msg.payload) {
          // handle push message
          cosmeticsInjection.handleResponseFromBackground(msg.payload);
        }
        if ((0, _helpers.isCliqzContentScriptMsg)(msg) && msg.response) {
          if (msg.response.moduleDisabled || msg.response.active === false) {
            active = false;
            cosmeticsInjection.unload();
            return;
          }
          cosmeticsInjection.handleResponseFromBackground(msg.response);
        }
      }
    };

    const onUnload = () => {
      cosmeticsInjection.unload();
      window.removeEventListener('unload', onUnload);
      chrome.runtime.onMessage.removeListener(onMessage);
    };

    window.addEventListener('unload', onUnload);
    chrome.runtime.onMessage.addListener(onMessage);
  });
});
$__System.registerDynamic('14', ['e'], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var _helpers = $__require('e');

  (0, _helpers.registerContentScript)('http*', (window, chrome) => {
    const url = window.location.href;

    // do not check for iframes
    if (window.parent && window.parent === window) {
      const payload = {
        module: 'anti-phishing',
        action: 'isPhishingURL',
        args: [url]
      };

      chrome.runtime.sendMessage({
        source: _helpers.CHROME_MSG_SOURCE,
        payload
      });
    }

    chrome.runtime.onMessage.addListener(msg => {
      if (!(0, _helpers.isCliqzContentScriptMsg)(msg)) {
        return;
      }

      const WARNINGURL = 'chrome://cliqz/content/anti-phishing/phishing-warning.html?u=';
      if (msg && msg.response && msg.response.type === 'phishingURL') {
        if (msg.response.block) {
          window.location = WARNINGURL + encodeURIComponent(window.location);
        }
      }
    });
  }); /* eslint no-param-reassign: 'off' */
});
$__System.registerDynamic('15', ['d', '10', '13', '14'], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  $__require('d');

  $__require('10');

  $__require('13');

  $__require('14');
});
$__System.registerDynamic('16', [], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = globToRegexp;
  /* eslint-disable */
  /*
   Copyright (c) 2013, Nick Fitzgerald
  
    All rights reserved.
  
    Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
  
        Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
  
        Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
  
    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
  */
  // https://developer.chrome.com/extensions/content_scripts#match-patterns-globs
  // source: https://github.com/fitzgen/glob-to-regexp
  function globToRegexp(glob, opts) {
    if (typeof glob !== 'string') {
      throw new TypeError('Expected a string');
    }

    var str = String(glob);

    // The regexp we are building, as a string.
    var reStr = "";

    // Whether we are matching so called "extended" globs (like bash) and should
    // support single character matching, matching ranges of characters, group
    // matching, etc.
    var extended = opts ? !!opts.extended : false;

    // When globstar is _false_ (default), '/foo/*' is translated a regexp like
    // '^\/foo\/.*$' which will match any string beginning with '/foo/'
    // When globstar is _true_, '/foo/*' is translated to regexp like
    // '^\/foo\/[^/]*$' which will match any string beginning with '/foo/' BUT
    // which does not have a '/' to the right of it.
    // E.g. with '/foo/*' these will match: '/foo/bar', '/foo/bar.txt' but
    // these will not '/foo/bar/baz', '/foo/bar/baz.txt'
    // Lastely, when globstar is _true_, '/foo/**' is equivelant to '/foo/*' when
    // globstar is _false_
    var globstar = opts ? !!opts.globstar : false;

    // If we are doing extended matching, this boolean is true when we are inside
    // a group (eg {*.html,*.js}), and false otherwise.
    var inGroup = false;

    // RegExp flags (eg "i" ) to pass in to RegExp constructor.
    var flags = opts && typeof opts.flags === "string" ? opts.flags : "";

    var c;
    for (var i = 0, len = str.length; i < len; i++) {
      c = str[i];

      switch (c) {
        case "\\":
        case "/":
        case "$":
        case "^":
        case "+":
        case ".":
        case "(":
        case ")":
        case "=":
        case "!":
        case "|":
          reStr += "\\" + c;
          break;

        case "?":
          if (extended) {
            reStr += ".";
            break;
          }

        case "[":
        case "]":
          if (extended) {
            reStr += c;
            break;
          }

        case "{":
          if (extended) {
            inGroup = true;
            reStr += "(";
            break;
          }

        case "}":
          if (extended) {
            inGroup = false;
            reStr += ")";
            break;
          }

        case ",":
          if (inGroup) {
            reStr += "|";
            break;
          }
          reStr += "\\" + c;
          break;

        case "*":
          // Move over all consecutive "*"'s.
          // Also store the previous and next characters
          var prevChar = str[i - 1];
          var starCount = 1;
          while (str[i + 1] === "*") {
            starCount++;
            i++;
          }
          var nextChar = str[i + 1];

          if (!globstar) {
            // globstar is disabled, so treat any number of "*" as one
            reStr += ".*";
          } else {
            // globstar is enabled, so determine if this is a globstar segment
            var isGlobstar = starCount > 1 // multiple "*"'s
            && (prevChar === "/" || prevChar === undefined) // from the start of the segment
            && (nextChar === "/" || nextChar === undefined); // to the end of the segment

            if (isGlobstar) {
              // it's a globstar, so match zero or more path segments
              reStr += "((?:[^/]*(?:\/|$))*)";
              i++; // move over the "/"
            } else {
              // it's not a globstar, so only match one path segment
              reStr += "([^/]*)";
            }
          }
          break;

        default:
          reStr += c;
      }
    }

    // When regexp 'g' flag is specified don't
    // constrain the regular expression with ^ & $
    if (!flags || !~flags.indexOf('g')) {
      reStr = "^" + reStr + "$";
    }

    return new RegExp(reStr, flags);
  };
  /* eslint-enable */
});
$__System.registerDynamic('e', ['16'], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.CHROME_MSG_SOURCE = undefined;
  exports.registerContentScript = registerContentScript;
  exports.runContentScripts = runContentScripts;
  exports.isCliqzContentScriptMsg = isCliqzContentScriptMsg;

  var _glob = $__require('16');

  var _glob2 = _interopRequireDefault(_glob);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  const CONTENT_SCRIPTS = {};

  function registerContentScript(urlPattern, script) {
    CONTENT_SCRIPTS[urlPattern] = CONTENT_SCRIPTS[urlPattern] || [];
    CONTENT_SCRIPTS[urlPattern].push(script);
  }

  function runContentScripts(window, chrome, windowId) {
    const currentUrl = window.location.href;
    const matchingPatterns = Object.keys(CONTENT_SCRIPTS).filter(pattern => {
      const regexp = (0, _glob2.default)(pattern);
      return regexp.test(currentUrl);
    });
    matchingPatterns.forEach(pattern => {
      CONTENT_SCRIPTS[pattern].forEach(contentScript => {
        try {
          contentScript(window, chrome, windowId);
        } catch (e) {
          window.console.error(`CLIQZ content-script failed: ${e} ${e.stack}`);
        }
      });
    });
  }

  const CHROME_MSG_SOURCE = exports.CHROME_MSG_SOURCE = 'cliqz-content-script';

  function isCliqzContentScriptMsg(msg) {
    return msg.source && msg.source === CHROME_MSG_SOURCE;
  }
});
$__System.registerDynamic("17", [], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.throttle = throttle;
  exports.nextTick = nextTick;
  function throttle(window, fn, threshhold) {
    let last;
    let timer;
    return function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      const now = Date.now();
      if (last && now < last + threshhold) {
        // reset timeout
        window.clearTimeout(timer);
        timer = window.setTimeout(() => {
          last = now;
          fn(...args);
        }, threshhold);
      } else {
        last = now;
        fn(...args);
      }
    };
  }

  function nextTick(fn) {
    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    return Promise.resolve().then(() => fn(...args));
  }
});
$__System.registerDynamic('18', ['b', '15', 'e', '17'], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var _config = $__require('b');

  var _config2 = _interopRequireDefault(_config);

  $__require('15');

  var _helpers = $__require('e');

  var _decorators = $__require('17');

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  /* global window, chrome */
  function getContextHTML(ev) {
    var target = ev.target,
        count = 0,
        html;

    try {
      while (true) {
        html = target.innerHTML;

        if (html.indexOf('http://') !== -1 || html.indexOf('https://') !== -1) {

          return html;
        }

        target = target.parentNode;

        count += 1;
        if (count > 4) break;
      }
    } catch (ee) {}
  }
  // Load content scripts from modules


  const whitelist = ['chrome://cliqz/', 'resource://cliqz/'].concat(_config2.default.settings.frameScriptWhitelist);

  (function onDOMWindowCreated() {
    try {

      // we only handle HTML documents for now
      if (window.document.documentElement.nodeName.toLowerCase() !== 'html') {
        return;
      }

      (0, _helpers.runContentScripts)(window, chrome);

      const currentURL = () => window.location.href;
      const url = currentURL();

      function onCallback(msg) {
        if (isDead()) {
          return;
        }

        if (!whitelist.some(function (url) {
          return currentURL().indexOf(url) === 0;
        })) {
          return;
        }

        if (msg.origin === 'content') {
          window.postMessage(JSON.stringify({
            target: 'cliqz',
            type: 'response',
            response: msg.response,
            action: msg.action,
            module: msg.module,
            requestId: msg.requestId
          }), '*');
        }
      }

      let fns = {
        postMessage: function postMessage(message) {
          window.postMessage(message, '*');
          return null;
        },
        getHTML: function getHTML() {
          return window.document.documentElement.outerHTML;
        },
        click: function click(selector) {
          const el = window.document.querySelector(selector);
          try {
            el.click();
            return true;
          } catch (e) {
            return false;
          }
        },
        queryHTML: function queryHTML(selector, attribute) {
          let attributes = attribute.split(',');

          return Array.prototype.map.call(window.document.querySelectorAll(selector), function (el) {
            if (attributes.length > 1) {
              return attributes.reduce(function (hash, attr) {
                hash[attr] = el[attr];
                return hash;
              }, {});
            } else {
              return el[attribute];
            }
          });
        },
        getCookie: function getCookie() {
          try {
            return window.document.cookie;
          } catch (e) {
            if (e instanceof DOMException && e.name == 'SecurityError') {
              return null;
            } else {
              throw e; // let others bubble up
            }
          }
        }
      };

      function onCore(msg) {
        let payload;

        if (isDead()) {
          return;
        }

        if (msg.action === 'unload') {
          stop();
          return;
        }

        const url = currentURL();

        let matchesCurrentUrl = msg.url === url;
        // wild card for cliqz URLS
        if (msg.url && (msg.url.indexOf('resource://cliqz') === 0 || msg.url.indexOf('chrome://cliqz') === 0)) {
          if (url.indexOf(msg.url) === 0) {
            matchesCurrentUrl = true;
          }
        }

        if (!matchesCurrentUrl) {
          return;
        }

        if (!(msg.action in fns)) {
          return;
        }

        try {
          payload = fns[msg.action].apply(null, msg.args || []);
          if (payload === null) {
            return;
          }
        } catch (e) {
          window.console.error('cliqz framescript:', e);
        }

        chrome.runtime.sendMessage({
          source: _helpers.CHROME_MSG_SOURCE,
          origin: 'content',
          payload: payload,
          requestId: msg.requestId
        });
      }

      function proxyWindowEvent(action) {
        return function (ev) {
          chrome.runtime.sendMessage({
            source: _helpers.CHROME_MSG_SOURCE,
            payload: {
              module: 'core',
              action: action,
              args: [{
                target: {
                  baseURI: ev.target.baseURI
                }
              }]
            }
          });
        };
      }

      let onMouseDown = function onMouseDown(ev) {
        const linksSrc = [];
        if (window.parent !== window) {
          // collect srcipt links only for frames
          if (window.document && window.document.scripts) {
            for (let i = 0; i < window.document.scripts.length; i += 1) {
              const src = window.document.scripts[i].src;
              if (src.startsWith('http')) {
                linksSrc.push(src);
              }
            }
          }
        }

        let node = ev.target;
        if (node.nodeType !== 1) {
          node = node.parentNode;
        }

        let href = null;

        if (node.closest('a[href]')) {
          href = node.closest('a[href]').getAttribute('href');
        }

        chrome.runtime.sendMessage({
          source: _helpers.CHROME_MSG_SOURCE,
          payload: {
            module: 'core',
            action: 'recordMouseDown',
            args: [{
              target: {
                baseURI: ev.target.baseURI,
                value: ev.target.value,
                href: ev.target.href,
                parentNode: {
                  href: ev.target.parentNode.href
                },
                linksSrc
              }
            }, getContextHTML(ev), href]
          }
        });
      };

      let onReady = function onReady(event) {
        // ReportLang
        let lang = window.document.getElementsByTagName('html').item(0).getAttribute('lang');
        // don't analyse language for (i)frames
        let isTopWindow = !event.target.defaultView.frameElement;

        if (!isTopWindow) {
          return;
        }

        const title = window.document.querySelector('title');
        const description = window.document.querySelector('meta[name=description]');
        const ogTitle = window.document.querySelector('meta[property="og:title"]');
        const ogDescription = window.document.querySelector('meta[property="og:description"]');
        const ogImage = window.document.querySelector('meta[property="og:image"]');

        chrome.runtime.sendMessage({
          source: _helpers.CHROME_MSG_SOURCE,
          payload: {
            module: 'core',
            action: 'recordMeta',
            args: [currentURL(), {
              title: title && title.innerHTML,
              description: description && description.content,
              ogTitle: ogTitle && ogTitle.content,
              ogDescription: ogDescription && ogDescription.content,
              ogImage: ogImage && ogImage.content,
              lang
            }]
          }
        });
      };

      function onBackgroundMessage(message) {
        if (!(0, _helpers.isCliqzContentScriptMsg)(message)) {
          return;
        }

        // messages with windowId are responses to actions being called by content scripts
        // TODO: use chrome.runtime.sendMessage callbacks instead
        if (message.windowId) {
          onCallback(message);
        } else {
          onCore(message);
        }
      }

      const onKeyPress = (0, _decorators.throttle)(window, proxyWindowEvent('recordKeyPress'), 250);
      const onMouseMove = (0, _decorators.throttle)(window, proxyWindowEvent('recordMouseMove'), 250);
      const onScroll = (0, _decorators.throttle)(window, proxyWindowEvent('recordScroll'), 250);
      const onCopy = (0, _decorators.throttle)(window, proxyWindowEvent('recordCopy'), 250);

      window.addEventListener('keypress', onKeyPress);
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mousedown', onMouseDown);
      window.addEventListener('scroll', onScroll);
      window.addEventListener('copy', onCopy);
      window.addEventListener('DOMContentLoaded', onReady);
      chrome.runtime.onMessage.addListener(onBackgroundMessage);

      function stop(ev) {
        if (ev && ev.target !== window.document) {
          return;
        }

        // detect dead windows
        // https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Errors/Dead_object
        try {
          String(window);
        } catch (e) {
          return;
        }

        chrome.runtime.onMessage.removeListener(onBackgroundMessage);
        window.removeEventListener('keypress', onKeyPress);
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mousedown', onMouseDown);
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('copy', onCopy);
        window.removeEventListener('DOMContentLoaded', onReady);
      }

      function isDead() {
        try {
          currentURL();
          return false;
        } catch (e) {
          stop();
          return true;
        }
      }

      window.addEventListener('unload', stop);
    } catch (e) {
      window.console.error('Content Script error', e);
    }
  })(undefined);
});
$__System.registerDynamic('a', ['18'], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  $__require('18');
});
})
(function(factory) {
  if (typeof define == 'function' && define.amd)
    define([], factory);
  else if (typeof module == 'object' && module.exports && typeof require == 'function')
    module.exports = factory();
  else
    CliqzGlobal = factory();
});