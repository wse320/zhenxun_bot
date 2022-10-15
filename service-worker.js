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
    "revision": "3ff6df9d1adb089f0cd94b9bfd2a358a"
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
    "url": "assets/js/1.10ffbede.js",
    "revision": "30d0f49ced528d8f74d3fc51d5652b85"
  },
  {
    "url": "assets/js/10.1bc41e7e.js",
    "revision": "3518809d3e56ef072be206fcf1f42907"
  },
  {
    "url": "assets/js/11.a588d1ef.js",
    "revision": "6aaa566c2dda40cab2dc64ce163aa792"
  },
  {
    "url": "assets/js/12.767ab01a.js",
    "revision": "c54d5d970105b53e8c66e8c452413f35"
  },
  {
    "url": "assets/js/13.506e30bf.js",
    "revision": "c9823db616609d180454127e0e4e3576"
  },
  {
    "url": "assets/js/14.e2e126a4.js",
    "revision": "0e0bbd496c192b0a4075d6b535a540ee"
  },
  {
    "url": "assets/js/15.fee026ac.js",
    "revision": "09d1035bbdb8f371cf27406d735498ab"
  },
  {
    "url": "assets/js/16.bfe5417d.js",
    "revision": "968eef977a7d7520f3bd93f3c102dff2"
  },
  {
    "url": "assets/js/17.94b61533.js",
    "revision": "e057b88026d10ff03324cddbca9cfeb1"
  },
  {
    "url": "assets/js/18.212b1a71.js",
    "revision": "e2acdbdc97c1d8dc85b9a41ee16af629"
  },
  {
    "url": "assets/js/19.b2ea4add.js",
    "revision": "3fed408e500edb971b4b5619404a1cc3"
  },
  {
    "url": "assets/js/20.d772518a.js",
    "revision": "3091a3f20f2da73eb3f70495fa02d454"
  },
  {
    "url": "assets/js/21.dad08e17.js",
    "revision": "7e7f9f78f34e1bfb26ac05888b0cd932"
  },
  {
    "url": "assets/js/22.ebf85f7f.js",
    "revision": "fab0d411889668908cf999c84cc85904"
  },
  {
    "url": "assets/js/23.5a8d81f1.js",
    "revision": "ee90e67941a602887108be34a038b14d"
  },
  {
    "url": "assets/js/24.89c454fb.js",
    "revision": "f4eba63c9d21c4a24d5e529e3fa21c82"
  },
  {
    "url": "assets/js/25.6eb95f6c.js",
    "revision": "b12434e8d186c9fb0b133688eac23aab"
  },
  {
    "url": "assets/js/26.8320f3ec.js",
    "revision": "26c895a6891847f275ca09c8fd93cf2a"
  },
  {
    "url": "assets/js/27.8936d362.js",
    "revision": "0446af534df6f1242dca33d2e657b6b5"
  },
  {
    "url": "assets/js/28.cf4d104c.js",
    "revision": "1f130b8846be8f46b2aa145c227c602f"
  },
  {
    "url": "assets/js/29.d6e23e75.js",
    "revision": "6e2dfb5ce3600b9046e8850e04647101"
  },
  {
    "url": "assets/js/3.a9dcdb28.js",
    "revision": "77c3def0358b0b60b343e66acf179866"
  },
  {
    "url": "assets/js/30.ce977e98.js",
    "revision": "954c2a9dbc0522bcd99c6452e9026b26"
  },
  {
    "url": "assets/js/31.cf2fea64.js",
    "revision": "285e56ad6e47eca2ad6816532a81018f"
  },
  {
    "url": "assets/js/32.d2325e81.js",
    "revision": "f8c34e6c187bc8941118db7d7c9b8783"
  },
  {
    "url": "assets/js/33.d0ce3830.js",
    "revision": "67a4ededec756d45566655cbf9b4683b"
  },
  {
    "url": "assets/js/34.e42308c4.js",
    "revision": "f078984798aeb77bb6dd5c740194174b"
  },
  {
    "url": "assets/js/35.1821b9fe.js",
    "revision": "bad985c4693ecdaee7c37e518ddeca36"
  },
  {
    "url": "assets/js/36.c9900775.js",
    "revision": "0662449dd58a170e53f9a2361727cf1f"
  },
  {
    "url": "assets/js/37.dfdfd1bd.js",
    "revision": "1bd51b1f87b8df0dd45eaf7afee59e5c"
  },
  {
    "url": "assets/js/38.6461ae2d.js",
    "revision": "2075556d965aede4689b82fc61d3cd14"
  },
  {
    "url": "assets/js/39.4370e756.js",
    "revision": "8fdf65f2bec1d5ae7d4ddfbde20e7468"
  },
  {
    "url": "assets/js/4.682beda7.js",
    "revision": "9a5feef2c172c481f443669b47150461"
  },
  {
    "url": "assets/js/40.91a78f8a.js",
    "revision": "6ad199b21e92caccf8cf8f15475b989d"
  },
  {
    "url": "assets/js/41.21d70e42.js",
    "revision": "cdea3a014d886d8b6c2a729a574c53c7"
  },
  {
    "url": "assets/js/42.0b180fd2.js",
    "revision": "898b42538554a4f3999569601f48bcc5"
  },
  {
    "url": "assets/js/43.59150fa9.js",
    "revision": "d092204e3782521a1affd5b709d54ee3"
  },
  {
    "url": "assets/js/44.cc9a28b8.js",
    "revision": "616fcf3a826e4fd0037727b0012d0027"
  },
  {
    "url": "assets/js/45.5e24e2db.js",
    "revision": "369925db6c0ed4106ca6e3eb31c5394c"
  },
  {
    "url": "assets/js/46.97d0d997.js",
    "revision": "b84399b9b5a4320323ea995c5a9704c7"
  },
  {
    "url": "assets/js/47.d5cb57d5.js",
    "revision": "5ff24d4b10e94da8f7e9a996d7cb4da6"
  },
  {
    "url": "assets/js/48.839a1aed.js",
    "revision": "76768da563fa0d20d1d99974129cbe95"
  },
  {
    "url": "assets/js/5.5eec42b2.js",
    "revision": "e4b4c7d0753bf566c6c818cdb00cf668"
  },
  {
    "url": "assets/js/6.45f432e0.js",
    "revision": "60ccde4288669f03337bf24c931065d4"
  },
  {
    "url": "assets/js/7.1ebf8c89.js",
    "revision": "c0e889803a633e4b6f64fb5063c861e8"
  },
  {
    "url": "assets/js/8.1694a43b.js",
    "revision": "90efbbd5750ab55cafb259761b0fe4d1"
  },
  {
    "url": "assets/js/9.6b86dfe3.js",
    "revision": "dbef90cd54662d6995f47080003be3c5"
  },
  {
    "url": "assets/js/app.79748215.js",
    "revision": "2147ad0d6dd0c6d5f467126d02927bf5"
  },
  {
    "url": "background.png",
    "revision": "f0cb5c6080cc533cce01b7a7182940fe"
  },
  {
    "url": "blogs/about.html",
    "revision": "c81b65680c32c932cbe265d1f434f13f"
  },
  {
    "url": "categories/index.html",
    "revision": "1c9fd8caeebfbc673f6223cd0cbe1e09"
  },
  {
    "url": "docs/api_doc/group.html",
    "revision": "0bc57d7431b733f04d638465554da007"
  },
  {
    "url": "docs/api_doc/plugins.html",
    "revision": "9f97e3b5d75f5370dddf477d679801ff"
  },
  {
    "url": "docs/api_doc/request.html",
    "revision": "3e63124271b338931e371e73b4e2a9b6"
  },
  {
    "url": "docs/api_doc/system.html",
    "revision": "46a1211caaf18f8820b579ecc0d22f29"
  },
  {
    "url": "docs/development_doc/depends.html",
    "revision": "4e3fe6ee08fbdf5320040167bd247e8e"
  },
  {
    "url": "docs/development_doc/plugins.html",
    "revision": "417c9757f2bf8ef1b48d5746db6e6ad6"
  },
  {
    "url": "docs/development_doc/shop_handle.html",
    "revision": "4cfd468c26a37c5c3e1c1b5a6c670922"
  },
  {
    "url": "docs/development_doc/task_control.html",
    "revision": "6fdd587173fd1a4cb2279beb8c3b3744"
  },
  {
    "url": "docs/development_doc/utils.html",
    "revision": "25b5bb158e4fbb44fb06303da15932f3"
  },
  {
    "url": "docs/faq/index.html",
    "revision": "527fe8d3481d86a861029f594a3a6397"
  },
  {
    "url": "docs/help_doc/basic_plugins/admin_plugins.html",
    "revision": "4ced1b336aefe1aa76dc1f9825d848e8"
  },
  {
    "url": "docs/help_doc/basic_plugins/common_plugins.html",
    "revision": "aca4d7ee08255ffd5cdd3c27df120200"
  },
  {
    "url": "docs/help_doc/basic_plugins/other_plugins.html",
    "revision": "e85434fac22310f735ca9de91a05ed16"
  },
  {
    "url": "docs/help_doc/basic_plugins/shop_plugins.html",
    "revision": "d9f701228986074d1c31db9863944710"
  },
  {
    "url": "docs/help_doc/basic_plugins/superuser_plugins.html",
    "revision": "865256ac48b3a64c1e1242bdeec36f90"
  },
  {
    "url": "docs/help_doc/configs.html",
    "revision": "5131c0647e7801c04b3ac0360c4315e5"
  },
  {
    "url": "docs/help_doc/index.html",
    "revision": "5f3d6d6c92dff66334cd20e3c94a68e8"
  },
  {
    "url": "docs/help_doc/plugins_index.html",
    "revision": "32f9f37b65cac06d331472e97252609b"
  },
  {
    "url": "docs/help_doc/public_plugins/admin_plugins.html",
    "revision": "b7c86bd173cf631cf630f97c37562e3a"
  },
  {
    "url": "docs/help_doc/public_plugins/common_plugins/common_plugins.html",
    "revision": "3cb3591c9a898bc8a570ca1ea035e3f6"
  },
  {
    "url": "docs/help_doc/public_plugins/draw_card_plugins/draw_card_plugins.html",
    "revision": "e059fa2b6ca5c030cf3dc3572fd3bd38"
  },
  {
    "url": "docs/help_doc/public_plugins/game_plugins/game_plugins.html",
    "revision": "9efeeca6f83045ba4adb59cd879d6d5a"
  },
  {
    "url": "docs/help_doc/public_plugins/genshin_plugins/genshin_plugins.html",
    "revision": "6ce8f2658cffd09cd26e5d84636f0e2b"
  },
  {
    "url": "docs/help_doc/public_plugins/other_plugins/other_plugins.html",
    "revision": "01dc04a3faabd5e449e837e9062247be"
  },
  {
    "url": "docs/help_doc/public_plugins/pic_plugins/pic_plugins.html",
    "revision": "ae0c1d3a2032b9b879ebec4cb848780a"
  },
  {
    "url": "docs/help_doc/public_plugins/superuser_plugins.html",
    "revision": "abb1dfa3b3f9c9051376fdb79a436868"
  },
  {
    "url": "docs/help_doc/public_plugins/utils_plugins/utils_plugins.html",
    "revision": "a9f0447e62a77939ede87762664f8876"
  },
  {
    "url": "docs/index.html",
    "revision": "fa1dd8fdd250a57636d9b71b92ab85e8"
  },
  {
    "url": "docs/installation_doc/index.html",
    "revision": "24d63e22e91bbafb0545c33752a6d241"
  },
  {
    "url": "docs/installation_doc/install_gocq.html",
    "revision": "ea49a1278c7fe38dd4fff77a1ba91074"
  },
  {
    "url": "docs/installation_doc/install_postgresql.html",
    "revision": "9b23c0869465617e088eb35efd6b914c"
  },
  {
    "url": "docs/installation_doc/install_webui.html",
    "revision": "8355c0ae18a72c688a1c5e0dc5e4867c"
  },
  {
    "url": "docs/installation_doc/install_zhenxun.html",
    "revision": "eb1444954f0ec4e2a8435bfb2a63ff2d"
  },
  {
    "url": "docs/installation_doc/start_.html",
    "revision": "0d10380838bdd760eb3919f9ba734261"
  },
  {
    "url": "docs/update_log/index.html",
    "revision": "0db874244ae8bdae6185e9c7e5643d59"
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
    "revision": "891157ea8409032eb4f02d97cad92fff"
  },
  {
    "url": "logo.png",
    "revision": "247217ec9f22445d8f14aedcd1eb1b3f"
  },
  {
    "url": "tag/index.html",
    "revision": "54812b1ca61124e77e8c399ed3300463"
  },
  {
    "url": "timeline/index.html",
    "revision": "edcdd72cbf06d82a2784b3a6f47a3e71"
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
