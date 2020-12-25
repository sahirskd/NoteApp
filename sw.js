const NoteApp = "NoteApp"
const assets = [
  "/",
  "/NoteApp/index.html",
  "/NoteApp/paper.css",
  "/NoteApp/index.js",
  "/NoteApp/favicon-16x16.png",
  "/NoteApp/favicon-32x32.png",
  "/NoteApp/favicon.ico",
  "/NoteApp/apple-touch-icon.png",
  "/NoteAppandroid-chrome-192x192.png",
  "/NoteAppandroid-chrome-512x512.png",
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
