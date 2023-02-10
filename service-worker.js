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
    "revision": "e14ead6d8c8323cd52a85bf2c6a17c53"
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
    "url": "assets/js/14.d5f3f67e.js",
    "revision": "f754bd440574752dde5184c5efa90116"
  },
  {
    "url": "assets/js/15.493e64d8.js",
    "revision": "a9267e8b45fc33171454fc7a2266bae5"
  },
  {
    "url": "assets/js/16.affccac5.js",
    "revision": "f1a5ceffe3cb9147f59f01c5658b2d5e"
  },
  {
    "url": "assets/js/17.eadbafe9.js",
    "revision": "4f5927e7ad60a5ee25788ca5ed00f220"
  },
  {
    "url": "assets/js/18.473a2ec0.js",
    "revision": "8f3c6f0a0efa5a67046206aed57058d0"
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
    "url": "assets/js/app.c1ce6d6e.js",
    "revision": "567866da5df268fabec2dd0251d92196"
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
    "revision": "ff01a419b0543d5409b0fb904152cbb1"
  },
  {
    "url": "categories/java/index.html",
    "revision": "4a880c8c14ad78c097f9256bce7dd527"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "2251009847a06fa7dd28c7e0c543bf1b"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "794cb8ab7206d490f45bbe5b7aa805e0"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "4aa377a6700554bea16b67990743bab3"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "b2dd8959513333465c3abae3b5ffb4e0"
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
    "revision": "5bfbb015b4f94c5777a9858791fb1858"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "f0d1a16c32bca08a3da5fe99376d3028"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "58b2e76d50c64975ab1c031532f9e865"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "02ff244d74c39c8eb7670e118d30ecb7"
  },
  {
    "url": "tags/js/index.html",
    "revision": "1f6f7717e6ec5746bb9b5a20fd07d168"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "799e35b8fabc7e7654058437103c33a0"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "9d32fcac5392f7c3e976386a57f948d2"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "02e2efb1173cceb05047b3737f991f4d"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "3528cb1da8a1cac2e9f25e771d342fb7"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "8cede955e7164695e0095ef21e7f8655"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "50ac0f0471ee490b90aa77c14de8c777"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "d9de11aea98cba470a122c533c21d1b0"
  },
  {
    "url": "timeline/index.html",
    "revision": "733fe994ce578253be50eab1b59a6467"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "c700e505521af2e56cc4359c7592b428"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "effdbf5df8ce0546eb0987634b2d6a04"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "94d54690991e381e1e89f7a09b64c10e"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "b1a409d37e9f0ed894ffcf4811e7d808"
  },
  {
    "url": "生活分享/life.html",
    "revision": "b42285464e32ebec779ee13be2979576"
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
