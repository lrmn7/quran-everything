if (!self.define) {
  let e,
    s = {};
  const a = (a, c) => (
    (a = new URL(a + ".js", c).href),
    s[a] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = a), (e.onload = s), document.head.appendChild(e);
        } else (e = a), importScripts(a), s();
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (c, i) => {
    const n = e || ("document" in self ? document.currentScript.src : "") || location.href;
    if (s[n]) return;
    let t = {};
    const d = (e) => a(e, n),
      r = { module: { uri: n }, exports: t, require: d };
    s[n] = Promise.all(c.map((e) => r[e] || d(e))).then((e) => (i(...e), t));
  };
}
define(["./workbox-50de5c5d"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: "/_next/static/chunks/104.d8592570e453ebc7.js", revision: "d8592570e453ebc7" },
        { url: "/_next/static/chunks/109.d30413a3e1849de9.js", revision: "d30413a3e1849de9" },
        { url: "/_next/static/chunks/239.279081504a75a547.js", revision: "279081504a75a547" },
        { url: "/_next/static/chunks/24.dd0d660b9a923cfc.js", revision: "dd0d660b9a923cfc" },
        { url: "/_next/static/chunks/509.2506e0a9deb3011e.js", revision: "2506e0a9deb3011e" },
        { url: "/_next/static/chunks/675-dc766a7e9f7efb74.js", revision: "dc766a7e9f7efb74" },
        { url: "/_next/static/chunks/685-d11f876e121c3362.js", revision: "d11f876e121c3362" },
        { url: "/_next/static/chunks/856-5c6263a4750bb20e.js", revision: "5c6263a4750bb20e" },
        { url: "/_next/static/chunks/899.cf3fdca6d56a0ec2.js", revision: "cf3fdca6d56a0ec2" },
        { url: "/_next/static/chunks/framework-2c79e2a64abdb08b.js", revision: "2c79e2a64abdb08b" },
        { url: "/_next/static/chunks/main-2bcbddbe07937d01.js", revision: "2bcbddbe07937d01" },
        { url: "/_next/static/chunks/pages/404-863e8027e610e2f2.js", revision: "863e8027e610e2f2" },
        { url: "/_next/static/chunks/pages/500-81b4c11b7626f9e0.js", revision: "81b4c11b7626f9e0" },
        {
          url: "/_next/static/chunks/pages/_app-0343bf88c4e5f281.js",
          revision: "0343bf88c4e5f281",
        },
        {
          url: "/_next/static/chunks/pages/_error-54de1933a164a1ff.js",
          revision: "54de1933a164a1ff",
        },
        {
          url: "/_next/static/chunks/pages/asmaul-husna-f7bfc628e2bde3fe.js",
          revision: "f7bfc628e2bde3fe",
        },
        {
          url: "/_next/static/chunks/pages/index-e78987f5e52579a4.js",
          revision: "e78987f5e52579a4",
        },
        {
          url: "/_next/static/chunks/pages/jadwal-sholat-1ade205c7120ce42.js",
          revision: "1ade205c7120ce42",
        },
        {
          url: "/_next/static/chunks/pages/jadwal-sholat/kota/%5Bid%5D-87b91498b028504f.js",
          revision: "87b91498b028504f",
        },
        {
          url: "/_next/static/chunks/pages/quran-71a2300ac95fe589.js",
          revision: "71a2300ac95fe589",
        },
        {
          url: "/_next/static/chunks/pages/quran/surat/%5Bnumber%5D-abb785a7eab9b169.js",
          revision: "abb785a7eab9b169",
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        { url: "/_next/static/chunks/webpack-39e53c6873eb4709.js", revision: "39e53c6873eb4709" },
        { url: "/_next/static/css/100b5ed4f468583d.css", revision: "100b5ed4f468583d" },
        { url: "/_next/static/css/3c2ea2a062f0f917.css", revision: "3c2ea2a062f0f917" },
        {
          url: "/_next/static/media/0596140cb8d9223a-s.woff2",
          revision: "ddd5de66d4a7c56eeac6e0b10c5d8521",
        },
        {
          url: "/_next/static/media/1a4dd1d7cd3232ea-s.woff2",
          revision: "91c6fe4b62b5ebda5ccee3c4aa1eb33d",
        },
        {
          url: "/_next/static/media/341baa6ce7a16e81-s.woff2",
          revision: "0c7b4bd9156673a090be9999002eaab1",
        },
        {
          url: "/_next/static/media/356abdd51b933898-s.woff2",
          revision: "4ed5a85b9b460c31a44ba541e277bcc0",
        },
        {
          url: "/_next/static/media/62544b0689065c78-s.woff2",
          revision: "2e955bfa4248ee962856fcb0c1303057",
        },
        {
          url: "/_next/static/media/69314bc0865f4ce1-s.woff2",
          revision: "cee6e49453e48f939ebe7a2cb840b7fe",
        },
        {
          url: "/_next/static/media/8522711bf91902bc-s.woff2",
          revision: "dad65b56796c45f23d9af3fdccfedf78",
        },
        {
          url: "/_next/static/media/9d17fec1fd5d47d9-s.woff2",
          revision: "893c7a20d9cb2d5a76952bb16a89d9c5",
        },
        {
          url: "/_next/static/media/b21589f143013f9f-s.woff2",
          revision: "7f60d48e302a4a6376dc03e53bd9ba98",
        },
        {
          url: "/_next/static/media/c22ccc5eb58b83e1-s.p.woff2",
          revision: "8a051a2b61e4a766fff21bb106142860",
        },
        {
          url: "/_next/static/media/c3e0771964977034-s.woff2",
          revision: "58038a30fcdb6fc3ed0b0170ef4183c8",
        },
        {
          url: "/_next/static/media/c3fb87e343a67219-s.p.woff2",
          revision: "990d404bcad1a5e230559c3b2c0e08f7",
        },
        {
          url: "/_next/static/media/d70c23d6fe66d464-s.woff2",
          revision: "7abbd25026a8e3994d885bd8704b9588",
        },
        {
          url: "/_next/static/media/f761c9ee3ad272d9-s.p.woff2",
          revision: "0ccb8ba8ba2297954fcf0d8bf52eca7e",
        },
        {
          url: "/_next/static/wipfhQTBo2F9JcfisoZR_/_buildManifest.js",
          revision: "9fe20d9e75234b6dffcc98ade8d235a6",
        },
        {
          url: "/_next/static/wipfhQTBo2F9JcfisoZR_/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        { url: "/docs/asmaul-husna.png", revision: "4e11e200b64f69ad3d46cda6fbcb6bb7" },
        { url: "/docs/home.png", revision: "f2f5e2dd8398f3ec3c31e4b2db0d67d3" },
        { url: "/docs/jadwal-sholat.png", revision: "b63db86509dcd7657f7281a15828f317" },
        { url: "/docs/puasa-sunnah.png", revision: "18fc95cf3e3c1645ea11619f7d43df53" },
        { url: "/docs/quran.png", revision: "a9846e8ccb82868897be665edff4f283" },
        { url: "/favicon.ico", revision: "beec086a267aa0629dc9d31ac3274364" },
        { url: "/img/Quran.webp", revision: "1ba61d5ad4a8d9f746079108ad26e9fe" },
        { url: "/img/fasting.webp", revision: "9e82052a39e7c4bb66fbe33a8e5b7215" },
        { url: "/img/home.webp", revision: "485816848e240a91edb7609cc16cf755" },
        { url: "/img/icon-192x192.png", revision: "365bb562af4091a6d6dd1a3a49b230e0" },
        { url: "/img/icon-256x256.png", revision: "1fb3c7a912b03559974bafdce86da3a2" },
        { url: "/img/icon-384x384.png", revision: "32b2a2d2cdb4f716c9cac6715b6b2ee1" },
        { url: "/img/icon-512x512.png", revision: "1dfc2bc4590370b69bc0af37be5d382d" },
        { url: "/img/mosque.webp", revision: "005c5fac240666eddd746de75d318ee3" },
        { url: "/img/void.svg", revision: "7a635cfd5f9721c194aaf989051cedea" },
        { url: "/manifest.json", revision: "e02c2d051f43d63ec1f79bb217be1d1a" },
        { url: "/sound/adzan.mp3", revision: "1abbf76137db7749b56f1fa4ca2bfb50" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({ request: e, response: s, event: a, state: c }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, { status: 200, statusText: "OK", headers: s.headers })
                : s,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })],
      }),
      "GET"
    );
});
