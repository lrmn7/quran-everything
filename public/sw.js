if (!self.define) {
  let e,
    a = {};
  const s = (s, c) => (
    (s = new URL(s + ".js", c).href),
    a[s] ||
      new Promise((a) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = s), (e.onload = a), document.head.appendChild(e);
        } else (e = s), importScripts(s), a();
      }).then(() => {
        let e = a[s];
        if (!e) throw new Error(`Module ${s} didn’t register its module`);
        return e;
      })
  );
  self.define = (c, i) => {
    const n = e || ("document" in self ? document.currentScript.src : "") || location.href;
    if (a[n]) return;
    let t = {};
    const d = (e) => s(e, n),
      r = { module: { uri: n }, exports: t, require: d };
    a[n] = Promise.all(c.map((e) => r[e] || d(e))).then((e) => (i(...e), t));
  };
}
define(["./workbox-80ca14c3"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/static/G6hr0F3bM_7pSyBs67928/_buildManifest.js",
          revision: "4b0d502dfe239dcda58782d5f0e8ef11",
        },
        {
          url: "/_next/static/G6hr0F3bM_7pSyBs67928/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        { url: "/_next/static/chunks/515.434bbe2840619db9.js", revision: "434bbe2840619db9" },
        { url: "/_next/static/chunks/591-210c7beaae3dc99b.js", revision: "210c7beaae3dc99b" },
        { url: "/_next/static/chunks/624-3533bec346a9a8dc.js", revision: "3533bec346a9a8dc" },
        { url: "/_next/static/chunks/669.ba09c29ed25fcd92.js", revision: "ba09c29ed25fcd92" },
        { url: "/_next/static/chunks/681.cf7206c1f915333f.js", revision: "cf7206c1f915333f" },
        { url: "/_next/static/chunks/686.822ba465430a392a.js", revision: "822ba465430a392a" },
        { url: "/_next/static/chunks/726.7036d96b28074e94.js", revision: "7036d96b28074e94" },
        { url: "/_next/static/chunks/729-9f947f61e4d80a21.js", revision: "9f947f61e4d80a21" },
        { url: "/_next/static/chunks/814.4125370a6a068a77.js", revision: "4125370a6a068a77" },
        { url: "/_next/static/chunks/framework-ac88a2a245aea9ab.js", revision: "ac88a2a245aea9ab" },
        { url: "/_next/static/chunks/main-7f7812915c823cda.js", revision: "7f7812915c823cda" },
        { url: "/_next/static/chunks/pages/404-a0fc34310c099537.js", revision: "a0fc34310c099537" },
        { url: "/_next/static/chunks/pages/500-14cb202d21cc4af5.js", revision: "14cb202d21cc4af5" },
        {
          url: "/_next/static/chunks/pages/_app-c28574207c1e9779.js",
          revision: "c28574207c1e9779",
        },
        {
          url: "/_next/static/chunks/pages/_error-0544bf4e71b9e6be.js",
          revision: "0544bf4e71b9e6be",
        },
        {
          url: "/_next/static/chunks/pages/asmaul-husna-6ac511f32f257daf.js",
          revision: "6ac511f32f257daf",
        },
        {
          url: "/_next/static/chunks/pages/index-ecce07f31c86887c.js",
          revision: "ecce07f31c86887c",
        },
        {
          url: "/_next/static/chunks/pages/jadwal-sholat-fc901591f1cdc0a0.js",
          revision: "fc901591f1cdc0a0",
        },
        {
          url: "/_next/static/chunks/pages/jadwal-sholat/kota/%5Bid%5D-9f719ce2a3b644c5.js",
          revision: "9f719ce2a3b644c5",
        },
        {
          url: "/_next/static/chunks/pages/quran-99f13b30723206ac.js",
          revision: "99f13b30723206ac",
        },
        {
          url: "/_next/static/chunks/pages/quran/surat/%5Bnumber%5D-363c08a8ae5c10aa.js",
          revision: "363c08a8ae5c10aa",
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        { url: "/_next/static/chunks/webpack-05e1d4bd6584dcb3.js", revision: "05e1d4bd6584dcb3" },
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
            cacheWillUpdate: async ({ request: e, response: a, event: s, state: c }) =>
              a && "opaqueredirect" === a.type
                ? new Response(a.body, { status: 200, statusText: "OK", headers: a.headers })
                : a,
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
        const a = e.pathname;
        return !a.startsWith("/api/auth/") && !!a.startsWith("/api/");
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
