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
    "revision": "2172dcf74155a0acdb55e3c6759d81f8"
  },
  {
    "url": "assets/css/0.styles.3af13d03.css",
    "revision": "3cf231b711ffdd04ad7f9a9b68414e7b"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/search.72b0ff46.svg",
    "revision": "72b0ff466169d7f6d483e301dcfe4c00"
  },
  {
    "url": "assets/js/1.bbc69b0d.js",
    "revision": "86fe09a13a05ffcb0d69b14597cad433"
  },
  {
    "url": "assets/js/10.c36c3cdb.js",
    "revision": "ea64c20ea854e58bb44642636538e76e"
  },
  {
    "url": "assets/js/11.e9b0183e.js",
    "revision": "10f26e1177e8231499023ce9c00318cb"
  },
  {
    "url": "assets/js/12.32dccff7.js",
    "revision": "29a81db9c534b5c7ba473bf2d42af0fa"
  },
  {
    "url": "assets/js/13.d8530c5a.js",
    "revision": "1419e11b9aa46eef11de9df2c41eea54"
  },
  {
    "url": "assets/js/14.c7c21ce6.js",
    "revision": "f809d16ab50826bdd6f070a0af1335de"
  },
  {
    "url": "assets/js/15.ad13abfc.js",
    "revision": "b6d16c4a4e1814eb6a6dca30474c4e61"
  },
  {
    "url": "assets/js/16.61acd6ef.js",
    "revision": "c7d80916edd220d6dcd601512b5309c9"
  },
  {
    "url": "assets/js/17.497dc32d.js",
    "revision": "ac7b3c46c2d1922dddb183379729df1a"
  },
  {
    "url": "assets/js/18.5b05d0e2.js",
    "revision": "e97cabe2d648a937e00845c3235eb6e8"
  },
  {
    "url": "assets/js/19.3504c063.js",
    "revision": "bd47e8b9af33a7e077952eecadc47a7a"
  },
  {
    "url": "assets/js/20.da6f87c4.js",
    "revision": "55edd582bfcace311a41314ffe029084"
  },
  {
    "url": "assets/js/21.940b6684.js",
    "revision": "353168c90ab49235770d4c153eb48268"
  },
  {
    "url": "assets/js/22.5027c6f9.js",
    "revision": "a859162daf91ff1dd3b937313e610ca9"
  },
  {
    "url": "assets/js/23.ac4ebdc3.js",
    "revision": "45432e5e685c57c013f2f2fb26bf4a53"
  },
  {
    "url": "assets/js/24.a76e03d0.js",
    "revision": "dc376262d606f1a3d9efc2c4349b775a"
  },
  {
    "url": "assets/js/25.d4c3f983.js",
    "revision": "ea642c0ad8ead3829b3d10798ec43dcf"
  },
  {
    "url": "assets/js/26.f11ec274.js",
    "revision": "f7a0976edb40b2c67c4cc656ef4a2075"
  },
  {
    "url": "assets/js/27.26be0dcf.js",
    "revision": "d4b411a7fe3a777ee104191e39ec501b"
  },
  {
    "url": "assets/js/28.90a4318f.js",
    "revision": "f9856372c29c2cae743a0a5b136b1bed"
  },
  {
    "url": "assets/js/29.3ed7e4e9.js",
    "revision": "04b0fb0f65f29b0e63e54459dabac258"
  },
  {
    "url": "assets/js/3.97cb735a.js",
    "revision": "66d922b4ca9536ad139eb29aedf6761d"
  },
  {
    "url": "assets/js/30.b12bff90.js",
    "revision": "9e9c45dcff844397b7bab63faf911d3b"
  },
  {
    "url": "assets/js/31.ae9c5ae1.js",
    "revision": "cd4e0316c972754fdb057a4815b3e219"
  },
  {
    "url": "assets/js/32.d29f3a05.js",
    "revision": "c5bc3a6d766e7d5c3d041e3f9f8d990b"
  },
  {
    "url": "assets/js/33.54e2909f.js",
    "revision": "ba666a8803c10e893be46e6740c3882c"
  },
  {
    "url": "assets/js/34.ac54e426.js",
    "revision": "6ff08df48f2ac1aa2355d08d92307767"
  },
  {
    "url": "assets/js/35.2248e851.js",
    "revision": "d28ae0af87788f758f55e853515e5a79"
  },
  {
    "url": "assets/js/36.98957a8d.js",
    "revision": "cec230915860b21b340118f3bced7dd1"
  },
  {
    "url": "assets/js/37.9ee2120a.js",
    "revision": "12f810b3e0c534a94189e969b46b59fb"
  },
  {
    "url": "assets/js/38.ac898aba.js",
    "revision": "7c52f9ed6d29a1575211db8dc774b158"
  },
  {
    "url": "assets/js/39.d7bc050c.js",
    "revision": "201e80c9e0eb153684f0fb3c5edb6654"
  },
  {
    "url": "assets/js/4.fd8c8808.js",
    "revision": "5877946461a6d6575241439de614d095"
  },
  {
    "url": "assets/js/40.dc2feb81.js",
    "revision": "028ef391f311df97340fccee1cc7546f"
  },
  {
    "url": "assets/js/41.6ed625f4.js",
    "revision": "3b8b3364203bf3333a433ff341dedc72"
  },
  {
    "url": "assets/js/42.b977332c.js",
    "revision": "cf3033dc07b16662aa43ef161b78bc5b"
  },
  {
    "url": "assets/js/43.8d105861.js",
    "revision": "5e7ee0718c388103b9342dcf41732965"
  },
  {
    "url": "assets/js/44.6ab16f06.js",
    "revision": "e3578a99dbbeff024f34a57e088b7714"
  },
  {
    "url": "assets/js/45.ddb2ba5d.js",
    "revision": "e77632158da24bd633107d32836f6ffe"
  },
  {
    "url": "assets/js/46.b3612c43.js",
    "revision": "0ba7a9dc66c9dae82745e24c5daba9e9"
  },
  {
    "url": "assets/js/47.cde5903b.js",
    "revision": "b9926a5065dbcdf675885eb9ec128809"
  },
  {
    "url": "assets/js/5.71556fb3.js",
    "revision": "d259aa4991e4571fe7518f3671248ccd"
  },
  {
    "url": "assets/js/6.100e6bd9.js",
    "revision": "4ee9151e86f1690b6fa48777b76a5c7d"
  },
  {
    "url": "assets/js/7.3873c60b.js",
    "revision": "eedf755734c240c423164a6b4d25663c"
  },
  {
    "url": "assets/js/8.8aea8f6a.js",
    "revision": "0aae2683c4faa976504569728801f1e0"
  },
  {
    "url": "assets/js/9.ce4fe8d3.js",
    "revision": "17ce9bbc31f9593a960b7715f0b5318d"
  },
  {
    "url": "assets/js/app.261d5efe.js",
    "revision": "3c6d1710d80dd78c3e11ca54d02d1389"
  },
  {
    "url": "background.png",
    "revision": "f0cb5c6080cc533cce01b7a7182940fe"
  },
  {
    "url": "blogs/about.html",
    "revision": "8e45d0664d89f678b29d23b53b5924fa"
  },
  {
    "url": "categories/index.html",
    "revision": "3cc6b464a81c2fd995e4c684dbbc091e"
  },
  {
    "url": "docs/api_doc/group.html",
    "revision": "c00d680517744c8eec56ab7c2d68dcdd"
  },
  {
    "url": "docs/api_doc/plugins.html",
    "revision": "c1d43acdfac991f2e63cfde763f4e53e"
  },
  {
    "url": "docs/api_doc/request.html",
    "revision": "7e661eaea230305002b42e25f95c3fed"
  },
  {
    "url": "docs/api_doc/system.html",
    "revision": "8a584015d4ffa8ad090a50700ca21250"
  },
  {
    "url": "docs/development_doc/plugins.html",
    "revision": "08b3fe9985ecc09ffaacc827b7c16852"
  },
  {
    "url": "docs/development_doc/shop_handle.html",
    "revision": "86175a487cb0f997f91ca9f92cd6b5d2"
  },
  {
    "url": "docs/development_doc/task_control.html",
    "revision": "1ab80df22b7f91f0745c1ffaf1d10e18"
  },
  {
    "url": "docs/development_doc/utils.html",
    "revision": "557bf30eccd628fe0d2e1718592d3aa3"
  },
  {
    "url": "docs/faq/index.html",
    "revision": "d6e534df2016a5a746127297fa79b3a9"
  },
  {
    "url": "docs/help_doc/basic_plugins/admin_plugins.html",
    "revision": "d9f6b7561ff446171e1d14caa11ea129"
  },
  {
    "url": "docs/help_doc/basic_plugins/common_plugins.html",
    "revision": "cc26981ecb8723c4656de800e1faaefe"
  },
  {
    "url": "docs/help_doc/basic_plugins/other_plugins.html",
    "revision": "933f343fdf178bbefbb0c1ff0fe0b9fb"
  },
  {
    "url": "docs/help_doc/basic_plugins/shop_plugins.html",
    "revision": "bfc62109dd4cdfe48ab85553209b00e7"
  },
  {
    "url": "docs/help_doc/basic_plugins/superuser_plugins.html",
    "revision": "578ce752448dc9b2402284b2c16d47f5"
  },
  {
    "url": "docs/help_doc/configs.html",
    "revision": "8d143f936ae8f4550f34ea0841cc73a4"
  },
  {
    "url": "docs/help_doc/index.html",
    "revision": "62c47064d3d0c606a52e37196c858e25"
  },
  {
    "url": "docs/help_doc/plugins_index.html",
    "revision": "559f1b41ac61e89c3a2a4bd74142e28b"
  },
  {
    "url": "docs/help_doc/public_plugins/admin_plugins.html",
    "revision": "0b0397f312903e0833f09bfc20045153"
  },
  {
    "url": "docs/help_doc/public_plugins/common_plugins/common_plugins.html",
    "revision": "ae95d92ee8e4fca3388ff2ec050eeb9d"
  },
  {
    "url": "docs/help_doc/public_plugins/draw_card_plugins/draw_card_plugins.html",
    "revision": "e9d2d5f8a1fba33643916eb7d06621b7"
  },
  {
    "url": "docs/help_doc/public_plugins/game_plugins/game_plugins.html",
    "revision": "10681c0183f8cbdb52fb666f289eea2b"
  },
  {
    "url": "docs/help_doc/public_plugins/genshin_plugins/genshin_plugins.html",
    "revision": "bc4c179ce4a30d861493d95f4ee6bc61"
  },
  {
    "url": "docs/help_doc/public_plugins/other_plugins/other_plugins.html",
    "revision": "13573adcc7f872e31eb634ee2ba103d5"
  },
  {
    "url": "docs/help_doc/public_plugins/pic_plugins/pic_plugins.html",
    "revision": "4b3aaf53333a445bdc75955f933e9ffc"
  },
  {
    "url": "docs/help_doc/public_plugins/superuser_plugins.html",
    "revision": "21af3769d20fa42126c60a562fc6d2ea"
  },
  {
    "url": "docs/help_doc/public_plugins/utils_plugins/utils_plugins.html",
    "revision": "f8e31cac7c7da69f89d9af0a51ae1f81"
  },
  {
    "url": "docs/index.html",
    "revision": "e4e67aea3989e697b1a664def0064c74"
  },
  {
    "url": "docs/installation_doc/index.html",
    "revision": "8699a06b182f885818994bb23859c608"
  },
  {
    "url": "docs/installation_doc/install_gocq.html",
    "revision": "2f916a20cadb4443b38937b53ab3bd4c"
  },
  {
    "url": "docs/installation_doc/install_postgresql.html",
    "revision": "66c4bfc37ec7fbe8180eb7e7e2aa67f1"
  },
  {
    "url": "docs/installation_doc/install_webui.html",
    "revision": "bd7378ab276db6c43880fd1297b9911a"
  },
  {
    "url": "docs/installation_doc/install_zhenxun.html",
    "revision": "9ef95f2b6e6a696ff5e638db51d77b3e"
  },
  {
    "url": "docs/installation_doc/start_.html",
    "revision": "088a25b4f2f614a3b1912a7e528c273c"
  },
  {
    "url": "docs/update_log/index.html",
    "revision": "660384c272be84fe1cf55621abbda63d"
  },
  {
    "url": "gocq/gocq0.png",
    "revision": "9ea372dcebceef63ef360d120c0eb898"
  },
  {
    "url": "gocq/gocq1.png",
    "revision": "4694d1a7821898b8621582f34c20c199"
  },
  {
    "url": "gocq/gocq2.png",
    "revision": "d2cdf4f890af39c5e3789485bb7ad493"
  },
  {
    "url": "index.html",
    "revision": "5e34ace4546f7760b02ab5cca78563c7"
  },
  {
    "url": "logo.png",
    "revision": "247217ec9f22445d8f14aedcd1eb1b3f"
  },
  {
    "url": "tag/index.html",
    "revision": "e70f402c4ed2c7ccbef81ba93514a1f7"
  },
  {
    "url": "timeline/index.html",
    "revision": "aaff877581319a860342d4c5da3a3ec1"
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
