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
    "revision": "1a04c4955e148aee7f817e961b0ef611"
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
    "url": "assets/js/12.cf34d071.js",
    "revision": "a8b90be9a1824824c1b8ec9d0325e117"
  },
  {
    "url": "assets/js/13.ce10a3ca.js",
    "revision": "9b00aa3c58fe6abb4be1ae6f1aa4f57e"
  },
  {
    "url": "assets/js/14.ebcddac7.js",
    "revision": "a0e54e6a8ccda594b67f2ba8c5f1e525"
  },
  {
    "url": "assets/js/15.016b3d5c.js",
    "revision": "74d53741895a161e5df661ddf7ddc2a2"
  },
  {
    "url": "assets/js/16.568aa1e3.js",
    "revision": "a500937a1dfa4b0801fb66d56d43b0a8"
  },
  {
    "url": "assets/js/17.f29f3e31.js",
    "revision": "e8359c5fdcdb9f437629c5436420c35b"
  },
  {
    "url": "assets/js/18.7f20ea8d.js",
    "revision": "0913ee65a5afa86746510194ec4c54eb"
  },
  {
    "url": "assets/js/19.631f960e.js",
    "revision": "d09f0d9d338fc6a607e902eb5a79cf5f"
  },
  {
    "url": "assets/js/20.26e01a24.js",
    "revision": "abdc0118b5571e494449f82dbcc0d3eb"
  },
  {
    "url": "assets/js/21.02646001.js",
    "revision": "7b94b61985793041b6956e4f2e389392"
  },
  {
    "url": "assets/js/22.717c5676.js",
    "revision": "46cab8b88305320c65bc67eb272af012"
  },
  {
    "url": "assets/js/23.92340319.js",
    "revision": "f00764ae7889d00e122a6d8325afedd0"
  },
  {
    "url": "assets/js/24.21106865.js",
    "revision": "fdfbce7cf526c1f1f7a2d30885610072"
  },
  {
    "url": "assets/js/25.34cbaeb0.js",
    "revision": "7028f7b9969ca058ca68d6f9692191d8"
  },
  {
    "url": "assets/js/26.870b1c7e.js",
    "revision": "dbbaa66e8ecfeee42e0f9b1ad5e14c1a"
  },
  {
    "url": "assets/js/27.d5f126f5.js",
    "revision": "0967d230eec41658088371e840e44c0c"
  },
  {
    "url": "assets/js/28.c1cfa471.js",
    "revision": "025d72217292d2f718be6b5137f63dd3"
  },
  {
    "url": "assets/js/29.13501eeb.js",
    "revision": "7bca6869682ac7fbf7324bd158ab334d"
  },
  {
    "url": "assets/js/3.a9dcdb28.js",
    "revision": "77c3def0358b0b60b343e66acf179866"
  },
  {
    "url": "assets/js/30.fc775719.js",
    "revision": "c7985f41d31dafed62bef5251e850c19"
  },
  {
    "url": "assets/js/31.39980839.js",
    "revision": "f7ebe9e446fba54d0558bf355b40b74e"
  },
  {
    "url": "assets/js/32.e3074516.js",
    "revision": "9d5cda8f43a04e9ada8592a083f023c3"
  },
  {
    "url": "assets/js/33.c681280a.js",
    "revision": "1caa48ef6b6a7da2dd91460542afc6aa"
  },
  {
    "url": "assets/js/34.61626d1e.js",
    "revision": "e1dd66c9d35a4b4b65f55ea8d85bbf88"
  },
  {
    "url": "assets/js/35.e1d14115.js",
    "revision": "c1eaaa1aa7e02cb2cc23d272c300e8f2"
  },
  {
    "url": "assets/js/36.424f76ce.js",
    "revision": "924314505f474ee3d15663f59db71aea"
  },
  {
    "url": "assets/js/37.a561f739.js",
    "revision": "a75ca64b7f1b17572835a3b31c9829d9"
  },
  {
    "url": "assets/js/38.062db41b.js",
    "revision": "beeeab70f5bc9478ddc2106907f9a838"
  },
  {
    "url": "assets/js/39.b050e70b.js",
    "revision": "9f379f34fccfa66654e1408635116ee1"
  },
  {
    "url": "assets/js/4.682beda7.js",
    "revision": "9a5feef2c172c481f443669b47150461"
  },
  {
    "url": "assets/js/40.2c097f48.js",
    "revision": "cf8057bfbe457bd671ee73e1c90547e3"
  },
  {
    "url": "assets/js/41.0dc70246.js",
    "revision": "d9907b5e018d9cc97891fa36d7af4951"
  },
  {
    "url": "assets/js/42.9de40141.js",
    "revision": "78e0d26bf59ac8923a04c7169e96957b"
  },
  {
    "url": "assets/js/43.f67b86fd.js",
    "revision": "1268399fb93c6255c07855b63f0f1c34"
  },
  {
    "url": "assets/js/44.2333e84f.js",
    "revision": "0cc793d6b182d2e835df03d902707245"
  },
  {
    "url": "assets/js/45.7658ac31.js",
    "revision": "29d4349eeb549aa1e359566a942dff1b"
  },
  {
    "url": "assets/js/46.787ee5f7.js",
    "revision": "d97966a8690f88e3d343025c040dc8e0"
  },
  {
    "url": "assets/js/47.cde5903b.js",
    "revision": "b9926a5065dbcdf675885eb9ec128809"
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
    "url": "assets/js/9.5311559f.js",
    "revision": "e68250ebb71561c2f7605741c65ec646"
  },
  {
    "url": "assets/js/app.c1ccfa44.js",
    "revision": "311852710f766bcf225db31de98d12e6"
  },
  {
    "url": "background.png",
    "revision": "f0cb5c6080cc533cce01b7a7182940fe"
  },
  {
    "url": "blogs/about.html",
    "revision": "e3a49e04fe6ceb2338767a72741d9585"
  },
  {
    "url": "categories/index.html",
    "revision": "a71f42b366a93a867645e6ae626e363e"
  },
  {
    "url": "docs/api_doc/group.html",
    "revision": "6bb848dc24a66a3c4f90efd4360fb390"
  },
  {
    "url": "docs/api_doc/plugins.html",
    "revision": "b545e03252f8da877a3d3c803f45a743"
  },
  {
    "url": "docs/api_doc/request.html",
    "revision": "5e6f7d74057134217fc7bb5b2ece11b5"
  },
  {
    "url": "docs/api_doc/system.html",
    "revision": "93fdbcd9e56f4a8658832320b80c3be2"
  },
  {
    "url": "docs/development_doc/plugins.html",
    "revision": "ecfe30e155a2d3ac23c72e65435038d0"
  },
  {
    "url": "docs/development_doc/shop_handle.html",
    "revision": "bb555d980d845b40b4ccafb1e1b1aaf5"
  },
  {
    "url": "docs/development_doc/task_control.html",
    "revision": "bdac8dcce6f6c29c0f4eb710e4604442"
  },
  {
    "url": "docs/development_doc/utils.html",
    "revision": "8d0c8a75e6d0adad8782ce9e7dba893b"
  },
  {
    "url": "docs/faq/index.html",
    "revision": "116f1e19436273e85f1e6c183b694a17"
  },
  {
    "url": "docs/help_doc/basic_plugins/admin_plugins.html",
    "revision": "c950e0dc08a920361fe00879066d6320"
  },
  {
    "url": "docs/help_doc/basic_plugins/common_plugins.html",
    "revision": "0b9d7283161045bedd847a4f8135d514"
  },
  {
    "url": "docs/help_doc/basic_plugins/other_plugins.html",
    "revision": "60b412ae59dc6cec3f7db5a5b182a3b0"
  },
  {
    "url": "docs/help_doc/basic_plugins/shop_plugins.html",
    "revision": "4f6564358473132cbe250076765b9fd6"
  },
  {
    "url": "docs/help_doc/basic_plugins/superuser_plugins.html",
    "revision": "b8cf5ba6a9fa6b82f2c8c07dfccdb7fb"
  },
  {
    "url": "docs/help_doc/configs.html",
    "revision": "aea3a4d235a97d006721e50e9fcae228"
  },
  {
    "url": "docs/help_doc/index.html",
    "revision": "359b937a74694e9fdcaf3fb3ab2e42f1"
  },
  {
    "url": "docs/help_doc/plugins_index.html",
    "revision": "0907e5b33d188f567cea5ac3a2715c6b"
  },
  {
    "url": "docs/help_doc/public_plugins/admin_plugins.html",
    "revision": "127b147f1e52d21b28bb9570ce09722d"
  },
  {
    "url": "docs/help_doc/public_plugins/common_plugins/common_plugins.html",
    "revision": "8d14a5289fc1bc86ad1979142f7dc88b"
  },
  {
    "url": "docs/help_doc/public_plugins/draw_card_plugins/draw_card_plugins.html",
    "revision": "826c65df9bcc78758e5a00880deaf00c"
  },
  {
    "url": "docs/help_doc/public_plugins/game_plugins/game_plugins.html",
    "revision": "dfc42d274f6c55b5f311a05050affdc7"
  },
  {
    "url": "docs/help_doc/public_plugins/genshin_plugins/genshin_plugins.html",
    "revision": "a0f6ec69ed23d14da52fb812f7c70b1a"
  },
  {
    "url": "docs/help_doc/public_plugins/other_plugins/other_plugins.html",
    "revision": "5904ba21ed67cdc9b0ecf0a4ad99834e"
  },
  {
    "url": "docs/help_doc/public_plugins/pic_plugins/pic_plugins.html",
    "revision": "83c06e8951be5a6e5cf937dfe7d9c0d4"
  },
  {
    "url": "docs/help_doc/public_plugins/superuser_plugins.html",
    "revision": "f4707f6aa51b77412397a807c605d3f7"
  },
  {
    "url": "docs/help_doc/public_plugins/utils_plugins/utils_plugins.html",
    "revision": "deb8de65eb3c185ec433e3b29c5c20d1"
  },
  {
    "url": "docs/index.html",
    "revision": "ae0696c97abf52563a60b35a025290ac"
  },
  {
    "url": "docs/installation_doc/index.html",
    "revision": "1a94fb042f01fb2d0158252985f45071"
  },
  {
    "url": "docs/installation_doc/install_gocq.html",
    "revision": "d9441e0d56317cc4fd7c375765d717ab"
  },
  {
    "url": "docs/installation_doc/install_postgresql.html",
    "revision": "7f22de52160af780593d6775d5af8ffd"
  },
  {
    "url": "docs/installation_doc/install_webui.html",
    "revision": "e6a59d7da6bd0cd5f93c19cbe6336816"
  },
  {
    "url": "docs/installation_doc/install_zhenxun.html",
    "revision": "b250f29c67900d7b617d0dd6caa4c125"
  },
  {
    "url": "docs/installation_doc/start_.html",
    "revision": "e73dd7851583d318a602e4221cc66be1"
  },
  {
    "url": "docs/update_log/index.html",
    "revision": "2038699354d66c5c262d920daf8eb7c8"
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
    "revision": "3a2d76a2fd8b6ccd25d1bc4cc7e4ba04"
  },
  {
    "url": "logo.png",
    "revision": "247217ec9f22445d8f14aedcd1eb1b3f"
  },
  {
    "url": "tag/index.html",
    "revision": "6e692fe2fbcd520e05dca695072012a9"
  },
  {
    "url": "timeline/index.html",
    "revision": "673b04300c32efb5fe7679c50642a22e"
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
