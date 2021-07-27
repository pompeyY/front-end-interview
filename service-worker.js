/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "88d045e8fd0791c81c2aa1a5e1379953"
  },
  {
    "url": "assets/css/0.styles.20d4ba6b.css",
    "revision": "7b44f7d70564866c5bff49fa46f3f606"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ef2ef882.js",
    "revision": "f360b9bf34669552f2f369bfec96c1e8"
  },
  {
    "url": "assets/js/11.bea478d7.js",
    "revision": "2e07cfa950cbcfb4b26d00b6dc24055b"
  },
  {
    "url": "assets/js/12.e2c9f81b.js",
    "revision": "1615068d36a9d6115ab68cbd36767ca8"
  },
  {
    "url": "assets/js/13.b9ab188f.js",
    "revision": "89f320714fa0a2e4fc3b8619fc821dfc"
  },
  {
    "url": "assets/js/14.aea3dc79.js",
    "revision": "22fdbff88132cbb9f317469260338a14"
  },
  {
    "url": "assets/js/15.f0389e7c.js",
    "revision": "0127c1602e3bd3ea5f242683b4650e75"
  },
  {
    "url": "assets/js/16.fe6d8089.js",
    "revision": "5a93196313aca0ca3222c8e64125abd0"
  },
  {
    "url": "assets/js/17.17dbe59b.js",
    "revision": "7a0c9f5bc91c5d8c9018d6139435b89a"
  },
  {
    "url": "assets/js/18.6159566c.js",
    "revision": "4a281b13418668a1a0fe0fedf2d1e376"
  },
  {
    "url": "assets/js/19.5e72e9bb.js",
    "revision": "76e2fddc8e8846e3237c33f9120c0574"
  },
  {
    "url": "assets/js/20.ed6d000a.js",
    "revision": "ba288acf661b734c53ad1861d8f893a2"
  },
  {
    "url": "assets/js/21.17e5df56.js",
    "revision": "089b29e5348a341525b17fa1830a99bd"
  },
  {
    "url": "assets/js/22.6624ff52.js",
    "revision": "12bbafc0fd17bd2b2ebc0e1413bacd3d"
  },
  {
    "url": "assets/js/23.4d744d84.js",
    "revision": "1694c18585e827bccabdba1a46ac186b"
  },
  {
    "url": "assets/js/24.8510fdb1.js",
    "revision": "102e08206cd93396e0dcf079206892cc"
  },
  {
    "url": "assets/js/25.a91d9aa9.js",
    "revision": "14c145864022b421b7d4477ae6ada388"
  },
  {
    "url": "assets/js/26.26de356d.js",
    "revision": "ccd3040c5f85ded349a36161f8ac95c1"
  },
  {
    "url": "assets/js/27.d1ee1586.js",
    "revision": "1111a8ddc3fc70f969e52ec8538cd072"
  },
  {
    "url": "assets/js/28.ae55a442.js",
    "revision": "1b01a58a1a13ac01e53f13b51d38f361"
  },
  {
    "url": "assets/js/29.f12daa72.js",
    "revision": "fbfc889e627946f914f29660f1b53afc"
  },
  {
    "url": "assets/js/3.27562796.js",
    "revision": "ddd915d74e26a0f3b86044ddfe5a9000"
  },
  {
    "url": "assets/js/30.f155e0d8.js",
    "revision": "7737e195476790bbc32df8ed30db577c"
  },
  {
    "url": "assets/js/31.7ebfff73.js",
    "revision": "c4304bcb1566c217fa7962a1d0bcadb9"
  },
  {
    "url": "assets/js/32.e01626bd.js",
    "revision": "48abd70bb051cd0ec9800a10345a56ff"
  },
  {
    "url": "assets/js/33.c7413cda.js",
    "revision": "0598b4ea63a7e0a1cdd5840445dc2aec"
  },
  {
    "url": "assets/js/34.c2dc7fd1.js",
    "revision": "d939a531c993aa27a1451f81a0e1fdf4"
  },
  {
    "url": "assets/js/35.9459a1d2.js",
    "revision": "d62a27fbb6ead71e79939c2850c139b6"
  },
  {
    "url": "assets/js/36.6bb66f5a.js",
    "revision": "0ef48aa2d011c249a042f489bcb7027b"
  },
  {
    "url": "assets/js/37.b13301df.js",
    "revision": "ab36d3518f7f90e7234ba5cde2b76db7"
  },
  {
    "url": "assets/js/38.874ae506.js",
    "revision": "dd75a75c0adef9bb006ceef78f50a106"
  },
  {
    "url": "assets/js/39.38bd396e.js",
    "revision": "80eec97f4ea0966d5ce23729683d27ae"
  },
  {
    "url": "assets/js/4.c046c865.js",
    "revision": "e1ff0f505d2078cc9eb4d5c7fef6655d"
  },
  {
    "url": "assets/js/40.8405928a.js",
    "revision": "35d3a1431e65273cfaccca7b28c19b87"
  },
  {
    "url": "assets/js/41.b1547857.js",
    "revision": "1f02ff34e795d17ed695e25ac47fab06"
  },
  {
    "url": "assets/js/42.77b89c26.js",
    "revision": "d18a9426c8f82b521d1a0d5531701db0"
  },
  {
    "url": "assets/js/43.35ef79c8.js",
    "revision": "b747e0bc805906377ba60247ad04403e"
  },
  {
    "url": "assets/js/44.36a2f390.js",
    "revision": "45e242793628247e8c16d855ec457fae"
  },
  {
    "url": "assets/js/45.ab4f4c8a.js",
    "revision": "bda4307e1c8ae3d243b9de501c0ea52a"
  },
  {
    "url": "assets/js/46.22443948.js",
    "revision": "56392dd50a7993b4b0c3be483f5509e0"
  },
  {
    "url": "assets/js/47.9aed2ee0.js",
    "revision": "44f1fe170e3bf4434fdedc22c2804535"
  },
  {
    "url": "assets/js/48.3760d598.js",
    "revision": "da7a2b14bb8e7a031d6bf3dfd3c08656"
  },
  {
    "url": "assets/js/49.14fa5fca.js",
    "revision": "a4acfc6b10cb1b1f8ce9383d72391896"
  },
  {
    "url": "assets/js/5.e60c7edb.js",
    "revision": "0b5fe5e29a527a09e71913ea4d3ded95"
  },
  {
    "url": "assets/js/50.6bf0af93.js",
    "revision": "ded34f93bf7605ab8434ca7f66d07996"
  },
  {
    "url": "assets/js/51.b679249c.js",
    "revision": "2193dfa4fb60c8da388a99845e6a0fd9"
  },
  {
    "url": "assets/js/52.13345ad0.js",
    "revision": "28caaff3cdd11b343bf295c0aba0766b"
  },
  {
    "url": "assets/js/53.d2cc0a31.js",
    "revision": "11c713d88246e64ab56084f0644c3992"
  },
  {
    "url": "assets/js/54.3004514b.js",
    "revision": "2d0723349c7976db82f69627e3616061"
  },
  {
    "url": "assets/js/55.193fafb1.js",
    "revision": "f81cc8b1b2a01f1f8ea41b996d3b1aac"
  },
  {
    "url": "assets/js/56.2fc5915f.js",
    "revision": "2ac07f36013539b904a51bbb4609759b"
  },
  {
    "url": "assets/js/57.7cecb2a9.js",
    "revision": "435607aba6af528784c4ce826a87305d"
  },
  {
    "url": "assets/js/58.c3780a18.js",
    "revision": "4f9bd0fdb5d7691d9c472e0e3eb47a03"
  },
  {
    "url": "assets/js/59.8d9307d7.js",
    "revision": "8465b92fc9259626230d98adf8b45c33"
  },
  {
    "url": "assets/js/6.4cd0594d.js",
    "revision": "05a4a87766e1bf9c3c0e9220ef916aac"
  },
  {
    "url": "assets/js/60.e57eee8d.js",
    "revision": "53a16ccddfcbe3753023382d1d0e936a"
  },
  {
    "url": "assets/js/61.a659df6c.js",
    "revision": "07fecd3b54ca5a532b2515f605428a14"
  },
  {
    "url": "assets/js/62.a0df7918.js",
    "revision": "a5601b129cf324fd7f112f7167c53530"
  },
  {
    "url": "assets/js/63.93a46d3b.js",
    "revision": "0b8620dec35b7da4fe837662baf43bee"
  },
  {
    "url": "assets/js/64.b452ed2d.js",
    "revision": "d65886dd2ca0e203361aeb04a86e2131"
  },
  {
    "url": "assets/js/65.3b3370ef.js",
    "revision": "131068ac6366f247b88a6a8c48d45329"
  },
  {
    "url": "assets/js/66.87bb6e9d.js",
    "revision": "7c5e70df31314e3ecfa4607d321d2153"
  },
  {
    "url": "assets/js/67.8b2a455b.js",
    "revision": "a14cbc734e7400c4b1fc172a3a798d57"
  },
  {
    "url": "assets/js/68.8d65d455.js",
    "revision": "9f3f150faed8b2faf4cf76b82f125f62"
  },
  {
    "url": "assets/js/69.dad6136b.js",
    "revision": "3127f31f7a0834b413a324266dde3743"
  },
  {
    "url": "assets/js/7.f7fb530c.js",
    "revision": "b12252a7b1b8b00a145c17707fc02145"
  },
  {
    "url": "assets/js/70.4463ac0f.js",
    "revision": "c8d33ec71aefc536e68b238947267253"
  },
  {
    "url": "assets/js/8.6c131b05.js",
    "revision": "622f273e8e3490c9015b503b50982a49"
  },
  {
    "url": "assets/js/9.6a58b3ec.js",
    "revision": "753e358494c3217127dee310d5a0712b"
  },
  {
    "url": "assets/js/app.3b669e7c.js",
    "revision": "0b4427bee747e9d68955ea1ebb1dbc36"
  },
  {
    "url": "assets/js/vendors~notification.b8581b7d.js",
    "revision": "42e6fac24e08529f6883fbf1c8369934"
  },
  {
    "url": "guide/abstract.html",
    "revision": "d51f36c583887bf6d252238a3dbbb901"
  },
  {
    "url": "guide/algorithm.html",
    "revision": "9257591294d5d6ee0a481fff54a849fa"
  },
  {
    "url": "guide/ast.html",
    "revision": "c3111035f456ab21676b02f47b139d98"
  },
  {
    "url": "guide/babel.html",
    "revision": "daafcf42c0f1cfd40b610cfc8a13b2ee"
  },
  {
    "url": "guide/babelPlugin.html",
    "revision": "d8a5300c4f0eab33f9c71734cc8f472f"
  },
  {
    "url": "guide/book.html",
    "revision": "d92e949ab9f798a0638841dcbb839718"
  },
  {
    "url": "guide/browser.html",
    "revision": "d804956e1edd002c813f94880cbbf34f"
  },
  {
    "url": "guide/carousel.html",
    "revision": "44c1326ceac8e00b96801d0f5f16ae55"
  },
  {
    "url": "guide/common.html",
    "revision": "abd947b477e8516d7081142f7eb5662a"
  },
  {
    "url": "guide/component.html",
    "revision": "9b835846779a882bfb80ca71c86cdc3a"
  },
  {
    "url": "guide/componentCli.html",
    "revision": "ce41e979723d59e1418a6fd8fe0fae5a"
  },
  {
    "url": "guide/composite.html",
    "revision": "16a84f9e84b11e40ec8e973b4bba88bd"
  },
  {
    "url": "guide/cssBasic.html",
    "revision": "10116df0cc35c9bcb66ff575151d0ec4"
  },
  {
    "url": "guide/dataStructure.html",
    "revision": "36627638812f6c1c960db87d8b8fb954"
  },
  {
    "url": "guide/deepclone.html",
    "revision": "048f0f2c225cb920105e512bd3e96ad4"
  },
  {
    "url": "guide/designPatterns.html",
    "revision": "5d015a77e1779d1fc9f4b5f46cec5873"
  },
  {
    "url": "guide/devsProxy.html",
    "revision": "40b24140b73e5b5a2dafd97712523461"
  },
  {
    "url": "guide/dom.html",
    "revision": "9afef77e6345a2977dd3f0448c0eb3db"
  },
  {
    "url": "guide/engineering.html",
    "revision": "1f81beca56dd2396b0da1659f4841179"
  },
  {
    "url": "guide/event.html",
    "revision": "e962ce6d07e3b32026511f218e6d47e6"
  },
  {
    "url": "guide/eventLoop.html",
    "revision": "b2d5006d7714fd4782a8f61a3e649121"
  },
  {
    "url": "guide/execute.html",
    "revision": "6b439fb746f00ce46d0eed3a2f0ad6d8"
  },
  {
    "url": "guide/fiber.html",
    "revision": "619e83acddb011d1112b999d43e1ec71"
  },
  {
    "url": "guide/framework.html",
    "revision": "21c4283c78b8f4a15d99ecd55b50a796"
  },
  {
    "url": "guide/hoisting.html",
    "revision": "ad26fb7ce8adf686d98dfb419de7aefe"
  },
  {
    "url": "guide/hr.html",
    "revision": "d7862abbaa248783d3784aba6c32982b"
  },
  {
    "url": "guide/htmlBasic.html",
    "revision": "53e99b540544d19dfc3c0a84e9544df5"
  },
  {
    "url": "guide/http.html",
    "revision": "4efffec5752fe5c2c6312b31f5419256"
  },
  {
    "url": "guide/httpWritten.html",
    "revision": "15dcf0d315a049065570ae84f52cf0e0"
  },
  {
    "url": "guide/immutable.html",
    "revision": "71285ef8d50a280e00ab99d1201783ae"
  },
  {
    "url": "guide/index.html",
    "revision": "5479b1e2b531be727f8974571ea74752"
  },
  {
    "url": "guide/jsBasic.html",
    "revision": "82aa0fe632422ef14459eb20489579ba"
  },
  {
    "url": "guide/jsWritten.html",
    "revision": "914f6dda36ce0d6d5742f8f830ea5927"
  },
  {
    "url": "guide/load.html",
    "revision": "46141142a0a5747619d968f4e80492fc"
  },
  {
    "url": "guide/mechanism.html",
    "revision": "5538964bde047f9e877916d9fa8fbde7"
  },
  {
    "url": "guide/memory.html",
    "revision": "7cca24f9eb512b36c3c9ac14567cba6c"
  },
  {
    "url": "guide/node.html",
    "revision": "de60fc01697ad5be9b1d1b1e9786e480"
  },
  {
    "url": "guide/preface.html",
    "revision": "4614a9d3b76d86a5d691e72d237df35e"
  },
  {
    "url": "guide/project.html",
    "revision": "64f9ac6db896f80486797da017441208"
  },
  {
    "url": "guide/react.html",
    "revision": "5a5dfdfde4c3a61f077f500bbc9be058"
  },
  {
    "url": "guide/reactHook.html",
    "revision": "485a0922641409bdd27e47ddda4c973d"
  },
  {
    "url": "guide/reactivity.html",
    "revision": "b641c03719a34c43fb63b475709ff21a"
  },
  {
    "url": "guide/redux.html",
    "revision": "621b370c2d796e9e376085ce2ae0084c"
  },
  {
    "url": "guide/resume.html",
    "revision": "680815432dd7423133779d2d17ea336d"
  },
  {
    "url": "guide/router.html",
    "revision": "c75baaad8d41c060f7956e8d9a3bdaed"
  },
  {
    "url": "guide/security.html",
    "revision": "b7b348b42eca48330d1ea03fa9302af1"
  },
  {
    "url": "guide/setState.html",
    "revision": "c4efc54cc23906c20299e108df1bbc27"
  },
  {
    "url": "guide/string.html",
    "revision": "bb2c9fddbf3f9940b81207558117b281"
  },
  {
    "url": "guide/tcp.html",
    "revision": "eb53fb13835496518dcccebf63b04b71"
  },
  {
    "url": "guide/virtualDom.html",
    "revision": "a62f050becd5a7fd39b2ac48beca2b13"
  },
  {
    "url": "guide/vue.html",
    "revision": "e613cf28f2a36b4926fd2e16ae83eaa2"
  },
  {
    "url": "guide/webpack.html",
    "revision": "0cb321ce0ac9fd3b1f7ebba7f90bf73e"
  },
  {
    "url": "guide/WebpackHMR.html",
    "revision": "60d7cab8e71aa839ad3bdd0087c77b31"
  },
  {
    "url": "guide/webpackLoader.html",
    "revision": "831063f0a8b53c9f823e85163f280762"
  },
  {
    "url": "guide/webpackMoudle.html",
    "revision": "0d624cf2c789abdd76983bf627740c9e"
  },
  {
    "url": "guide/webpackPlugin.html",
    "revision": "b30cfae727b8a7f9b4c035cee0686306"
  },
  {
    "url": "guide/webpackPluginDesign.html",
    "revision": "4349aaf2aca5a4eca8dc09a2ded4f857"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "9871cac4d487969eaa10271fd19a32fe"
  },
  {
    "url": "logo.svg",
    "revision": "193a730d0b1344fdbbbcd2c9cd733edc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
