const NoteApp = "NoteApp"
const assets = [
  "/",
  "/index.html",
  "/paper.css",
  "/index.js",
  "/favicon-16x16.png",
  "/favicon-32x32.png",
  "/favicon.ico",
  "/apple-touch-icon.png",
  "android-chrome-192x192.png",
  "android-chrome-512x512.png",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(NoteApp).then(cache => {
      cache.addAll(assets)
    })
  )
})


self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})