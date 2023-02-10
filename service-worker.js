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
    "revision": "d81778225a0f884e365c0795e8a083d0"
  },
  {
    "url": "assets/css/0.styles.57064493.css",
    "revision": "bdfc107ffa09860922a6644b10cc5fcd"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.6937b529.js",
    "revision": "b117d2bce8637e818a5a3e220a4c44a5"
  },
  {
    "url": "assets/js/10.1fee933b.js",
    "revision": "e1675544558bf471cac5980848156ea9"
  },
  {
    "url": "assets/js/11.e31419be.js",
    "revision": "014f49a5e4cf80f1ef921b2a3622eac6"
  },
  {
    "url": "assets/js/12.37c31abb.js",
    "revision": "b12133222c4ee3d7aba9d713d7c6e1bf"
  },
  {
    "url": "assets/js/13.201d2997.js",
    "revision": "be3611cdff46e36d7057249212152dc3"
  },
  {
    "url": "assets/js/14.e045644f.js",
    "revision": "960ab8745b60c9eee2f3b9b4b7271e83"
  },
  {
    "url": "assets/js/15.6b2d2ce6.js",
    "revision": "7b8054856375ad20b24dac641d4f4749"
  },
  {
    "url": "assets/js/16.3fc9d872.js",
    "revision": "22924c3aa81d9c82f861200aec5d4679"
  },
  {
    "url": "assets/js/17.eadbafe9.js",
    "revision": "4f5927e7ad60a5ee25788ca5ed00f220"
  },
  {
    "url": "assets/js/18.345d2cd9.js",
    "revision": "e5de0936c508067e90878438b7492fa1"
  },
  {
    "url": "assets/js/4.73602618.js",
    "revision": "929d15f1eb637dd020d2e6d8a779329a"
  },
  {
    "url": "assets/js/5.524902b1.js",
    "revision": "08d857a37d6c21c269db029e29ed57f6"
  },
  {
    "url": "assets/js/6.3f86ec79.js",
    "revision": "a74e582518f58eb1034fc855bc6b506c"
  },
  {
    "url": "assets/js/7.f5f4255e.js",
    "revision": "1a29d50f75cd09087555e0c57dfcaf88"
  },
  {
    "url": "assets/js/8.d73a55bb.js",
    "revision": "711b16945cdd0d83ca3761f38fbfda74"
  },
  {
    "url": "assets/js/9.f94b0836.js",
    "revision": "b43e8bd1a243d17dc15821e6e43dc6b5"
  },
  {
    "url": "assets/js/app.a40e2aaf.js",
    "revision": "c13e9cfcc5c99d074f1c3ba5cf67d7fa"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.1e73e504.js",
    "revision": "42c68ae816be8ddaeefbf779158d148b"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "e6c79b451e8813b222198eca439ff62d"
  },
  {
    "url": "categories/java/index.html",
    "revision": "9fe9a92298c41c393232e55a0262a56b"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "508f5c5d08181137fca55cd77a776507"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "98a23cfcdb81c153a92bbd39c0b288c8"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "446223488f1fd81e7e678fb713b7551b"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "a14d27b84a026d6fbc0ec62a497ebdf0"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "3b82553b2b35ff31a434a0c9b3d52b34"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "4a24cc1d6ac887362d4ee0406dc8eacd"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "55d55d40827a0227a3415a69cd7618c4"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "bf297dfbd8bfbeb22f02b9a2d080cc11"
  },
  {
    "url": "tags/js/index.html",
    "revision": "645fb7beae647b683caea55a86249bed"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "fa62ca689b11a4717afb52ecc944846f"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "0afa2242ee8be4efc4479dd1b6fbd5be"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "77b21d39284a5ee5f9b367aa5f59de7d"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "8d82c718ba1ae61928cae9f0c608878c"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "5938e2b844ddd227941b5d07f180e5b0"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "41c474a39c1c9715e4fa81e140669657"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "7675e6d3455cc8e7e43d869fa30e55bd"
  },
  {
    "url": "timeline/index.html",
    "revision": "dd96ff8fb03b6993b63e2c2943fc2301"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "50ffb29235035b5dec0b465f9c9240cf"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "696cc8b284bb6bfc8183e0578ceafb69"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "6eacfecd43701b8d15f5b51291e9c2fe"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "f0ea12b25745f73406151b502136d7a6"
  },
  {
    "url": "生活分享/life.html",
    "revision": "0ea5dc3404bc9864acf3e8fb6853ac7f"
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