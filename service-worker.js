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
    "revision": "96346bac5d2adc22807c1644260638b8"
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
    "url": "assets/js/12.9be1bab5.js",
    "revision": "2ae8b75065f7db760178dcdd36e05078"
  },
  {
    "url": "assets/js/13.4db93f3e.js",
    "revision": "39a7cd275e2846855943951de070f303"
  },
  {
    "url": "assets/js/14.8b1d3740.js",
    "revision": "8a3e5bcfe3135c89071ae92cbd2d93cc"
  },
  {
    "url": "assets/js/15.75e81160.js",
    "revision": "f60af58f38a9fa05d4c98684d05eeaa5"
  },
  {
    "url": "assets/js/16.61acd6ef.js",
    "revision": "c7d80916edd220d6dcd601512b5309c9"
  },
  {
    "url": "assets/js/17.67653935.js",
    "revision": "ed8b8ba53e4a880561e535ba826973a1"
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
    "url": "assets/js/20.2e41d062.js",
    "revision": "69bcdd9253f31a82feb730d0caa0345e"
  },
  {
    "url": "assets/js/21.d0ae247e.js",
    "revision": "3b72c92a93c5325cb05c207698004f4d"
  },
  {
    "url": "assets/js/22.86656817.js",
    "revision": "1cd687b24262eb77d089569e5b55fc0f"
  },
  {
    "url": "assets/js/23.376ef950.js",
    "revision": "945842db5bc300d0a1e355d2479b11f6"
  },
  {
    "url": "assets/js/24.0da09d93.js",
    "revision": "f780ebb91677e846a65b3b6a2fb38b5b"
  },
  {
    "url": "assets/js/25.6db88c49.js",
    "revision": "3c2c4d4f911c52c76c63d23c2fef61dd"
  },
  {
    "url": "assets/js/26.1e544b0e.js",
    "revision": "f0bf5986091ded10560d7c7fff6788e6"
  },
  {
    "url": "assets/js/27.b2a696f5.js",
    "revision": "7e0142dce4dd71c77d7207cb257877fa"
  },
  {
    "url": "assets/js/28.90a4318f.js",
    "revision": "f9856372c29c2cae743a0a5b136b1bed"
  },
  {
    "url": "assets/js/29.16add951.js",
    "revision": "5814a484ac0618fa10dd6f7cf6181bd7"
  },
  {
    "url": "assets/js/3.97cb735a.js",
    "revision": "66d922b4ca9536ad139eb29aedf6761d"
  },
  {
    "url": "assets/js/30.d9f43113.js",
    "revision": "fd0f277de35a7af0dfeffe211ef306ac"
  },
  {
    "url": "assets/js/31.fef4df36.js",
    "revision": "6658cd8ff598ec9a7b915421d09fe284"
  },
  {
    "url": "assets/js/32.00e8b7b3.js",
    "revision": "97fe483115b7c734168d0116d05f0924"
  },
  {
    "url": "assets/js/33.93d02eb2.js",
    "revision": "795c81a1c6dd8bd424ba74dbac18eea3"
  },
  {
    "url": "assets/js/34.f308772d.js",
    "revision": "0fd642030df472f73ae5767f6e0fb668"
  },
  {
    "url": "assets/js/35.978b3044.js",
    "revision": "1ba24d3564c6ab99afadc9d0c9870214"
  },
  {
    "url": "assets/js/36.e1c6ca29.js",
    "revision": "f07a5590d9d8ac3962e6f8666ebb7bb5"
  },
  {
    "url": "assets/js/37.ac4cffbb.js",
    "revision": "b5a8e4ae0a1d2d314858bf497cf13aa2"
  },
  {
    "url": "assets/js/38.d4a3669d.js",
    "revision": "0e4bd320c61977d3d97423c43d9a6cec"
  },
  {
    "url": "assets/js/39.581daf8f.js",
    "revision": "7ad31d80ea81339c54cbbdaf2ba3b775"
  },
  {
    "url": "assets/js/4.fd8c8808.js",
    "revision": "5877946461a6d6575241439de614d095"
  },
  {
    "url": "assets/js/40.c6435b79.js",
    "revision": "f151ad336f2c3e2f1c3b21a818dfedd4"
  },
  {
    "url": "assets/js/41.cde0308f.js",
    "revision": "b740d7f86f169bbea00f8426b9b99355"
  },
  {
    "url": "assets/js/42.3eeb851c.js",
    "revision": "1b29170c64fedde17a79ee37dea4d69d"
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
    "url": "assets/js/45.c7536776.js",
    "revision": "3a125103407b8c0f62ff1922ba0c77b1"
  },
  {
    "url": "assets/js/46.04b8fb19.js",
    "revision": "0d6f9a0f3bec3a28cded910bbae0b94f"
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
    "url": "assets/js/app.7887551a.js",
    "revision": "3537aa271e334e7696f49cf1100f6c34"
  },
  {
    "url": "background.png",
    "revision": "f0cb5c6080cc533cce01b7a7182940fe"
  },
  {
    "url": "blogs/about.html",
    "revision": "70f123372d42ff2e493d4fd20316e973"
  },
  {
    "url": "categories/index.html",
    "revision": "fa292a52d36047dc094f5a3459cc47a0"
  },
  {
    "url": "docs/api_doc/group.html",
    "revision": "f82517be32f535ab1eae7b9d17afc4f6"
  },
  {
    "url": "docs/api_doc/plugins.html",
    "revision": "e570d90ef072870a5bf32f77b4c0e2f3"
  },
  {
    "url": "docs/api_doc/request.html",
    "revision": "8d727df557ec1c2bee0b4056ec3a2136"
  },
  {
    "url": "docs/api_doc/system.html",
    "revision": "6e427b12e4371e030b9d4c2c5cb960dd"
  },
  {
    "url": "docs/development_doc/plugins.html",
    "revision": "6d2db950690e4145131b531be047ed24"
  },
  {
    "url": "docs/development_doc/shop_handle.html",
    "revision": "d2a522ee24da24083e066fb9d2c4da0e"
  },
  {
    "url": "docs/development_doc/task_control.html",
    "revision": "b2750ada6d8288f52d1ac2ac8565ef0c"
  },
  {
    "url": "docs/development_doc/utils.html",
    "revision": "2d63b8e72a33fb5ddb3d1d261c86da57"
  },
  {
    "url": "docs/faq/index.html",
    "revision": "70401ebd998a4c5b42049044bd1de47b"
  },
  {
    "url": "docs/help_doc/basic_plugins/admin_plugins.html",
    "revision": "8fe1137c907bc711c2918505d93bdb52"
  },
  {
    "url": "docs/help_doc/basic_plugins/common_plugins.html",
    "revision": "c13d3c3500afba562a370046af212493"
  },
  {
    "url": "docs/help_doc/basic_plugins/other_plugins.html",
    "revision": "80b8763b9f1c9d61cecc3b891ae2b828"
  },
  {
    "url": "docs/help_doc/basic_plugins/shop_plugins.html",
    "revision": "f71c51e782db96595a156176345ba97e"
  },
  {
    "url": "docs/help_doc/basic_plugins/superuser_plugins.html",
    "revision": "538ba4ab38831e84ed49f93555585145"
  },
  {
    "url": "docs/help_doc/configs.html",
    "revision": "5a3bd0db6499cc45254c075aa8ce8448"
  },
  {
    "url": "docs/help_doc/index.html",
    "revision": "5f11218f01d6f726222ee4f8dd786624"
  },
  {
    "url": "docs/help_doc/plugins_index.html",
    "revision": "3171a2127eb5ce730f84dd31a1c1f2f3"
  },
  {
    "url": "docs/help_doc/public_plugins/admin_plugins.html",
    "revision": "5a4027bc3234704590bdb8e73e550cc3"
  },
  {
    "url": "docs/help_doc/public_plugins/common_plugins/common_plugins.html",
    "revision": "beba8e2639784b773b1447d855d5b01e"
  },
  {
    "url": "docs/help_doc/public_plugins/draw_card_plugins/draw_card_plugins.html",
    "revision": "c565bd482a3d1c224c32f9ebe1f9463f"
  },
  {
    "url": "docs/help_doc/public_plugins/game_plugins/game_plugins.html",
    "revision": "6bdbb80425af805f011ea0cff666da1e"
  },
  {
    "url": "docs/help_doc/public_plugins/genshin_plugins/genshin_plugins.html",
    "revision": "40fe0a8263252b3150073db846e6d153"
  },
  {
    "url": "docs/help_doc/public_plugins/other_plugins/other_plugins.html",
    "revision": "c1334c0be5987435d52f9cb9cf626c94"
  },
  {
    "url": "docs/help_doc/public_plugins/pic_plugins/pic_plugins.html",
    "revision": "15b963418f2d4dfadbd859773580f82e"
  },
  {
    "url": "docs/help_doc/public_plugins/superuser_plugins.html",
    "revision": "937eb91305b924c8c21f8a4afd6ac2f5"
  },
  {
    "url": "docs/help_doc/public_plugins/utils_plugins/utils_plugins.html",
    "revision": "935c44fdc2b92681bbdaf0e04587284f"
  },
  {
    "url": "docs/index.html",
    "revision": "b7d8d9338e174d7374ebf240474f7765"
  },
  {
    "url": "docs/installation_doc/index.html",
    "revision": "101159199ff3fe9c9cc58e0de2d669ed"
  },
  {
    "url": "docs/installation_doc/install_gocq.html",
    "revision": "19a2922e6b53a607d1aaeb4f684b9bce"
  },
  {
    "url": "docs/installation_doc/install_postgresql.html",
    "revision": "e9ec36b906abc4fd78f414e5d0753018"
  },
  {
    "url": "docs/installation_doc/install_webui.html",
    "revision": "63b15d75a53fdad7accf77212f396405"
  },
  {
    "url": "docs/installation_doc/install_zhenxun.html",
    "revision": "24a9c44141555648acd2a0820fce750b"
  },
  {
    "url": "docs/installation_doc/start_.html",
    "revision": "3ec65879ca3077d6fbdb2d33e786f758"
  },
  {
    "url": "docs/update_log/index.html",
    "revision": "8db4a3c85bafdf18e7a835bf392f5553"
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
    "revision": "bef56e7a8aff6a6cfb6840b625c3fc6c"
  },
  {
    "url": "logo.png",
    "revision": "247217ec9f22445d8f14aedcd1eb1b3f"
  },
  {
    "url": "tag/index.html",
    "revision": "748983252a93ad3eeae970461e842f29"
  },
  {
    "url": "timeline/index.html",
    "revision": "f52190af5aec6df868f0d6a417f64d9f"
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
