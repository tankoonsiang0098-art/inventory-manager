// 最简 Service Worker
// 目的：仅用于满足浏览器"可安装 PWA"的条件（需要存在已注册且激活的 Service Worker）
// 有意不做任何离线缓存逻辑，避免旧数据被缓存导致 Firebase/Cloudinary 数据更新不及时

self.addEventListener('install', function (event) {
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(self.clients.claim());
});

// 不拦截 fetch，所有请求都直接走网络，不做缓存
self.addEventListener('fetch', function (event) {
  // 留空：透传，不缓存
});
