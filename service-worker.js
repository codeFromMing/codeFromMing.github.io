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
    "revision": "af335cc2de06fd2930d80aecef528698"
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
    "url": "assets/js/12.0696b885.js",
    "revision": "2558768c5b23f2850eb3b56601acdc30"
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
    "url": "assets/js/16.8e195926.js",
    "revision": "77980ee985e85bc7ef25e57e082625c7"
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
    "url": "assets/js/app.df88ebc3.js",
    "revision": "a88219939cb6024ec14d45f505031bf2"
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
    "revision": "ef1d9507287893a5b24341d0ae3d74d5"
  },
  {
    "url": "categories/java/index.html",
    "revision": "7fa173aae44ff3131c0386bc9fc373b4"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "1806e2b43a051cce6ca955450dd1e5c9"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "00eddaf55efb216f9c430c4c2ecd2b22"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "e6c3cf8c66e299755e033d43c3449fcd"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "dd6735beac1c0aeead07672121dc03ed"
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
    "revision": "5d68a7e377ea5915e4e7d90e3351862d"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "a931817b4ad629a27d39ff8bd3ab50e7"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "08b6f9621bd71366f11fcc4aca66b53c"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "ba29398ae0b7d569f45bd8ee5cc7d778"
  },
  {
    "url": "tags/js/index.html",
    "revision": "e5451fdb86e17296a746ed2dae574241"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "f1b9f3c07bb1a6b9026f621f57827e04"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "f479f3cd3078d783851948b98328cc54"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "5814b4a5d5168c7fbd4cbb87c9d8da2c"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "1f5715b87cee36e5f4350b38bddb277e"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "0bfe2dc6270f39312e0c204d8d7a06d8"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "5a3df5be9a86a08fefab88e88854a992"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "344fc14a509b706ba476712aa39bedd7"
  },
  {
    "url": "timeline/index.html",
    "revision": "1435a0e60d1ccd1d1700ecdfccada3f0"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "36f4661b16c0d53a19541a24eace187f"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "6f5e0c8e4ebfd01619d395c765a8ade2"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "0492748b7532b1d67f26a5f6586b2fd3"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "8d18b851dd9800124b71f77dad458167"
  },
  {
    "url": "生活分享/life.html",
    "revision": "91adc04c455439499be2731a87fe8738"
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
