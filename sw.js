var CACHE_STATIC_NAME="primary-v6",CACHE_DYNAMIC_NAME="secondary-v2";self.addEventListener("install",function(e){e.waitUntil(caches.open("primary-v6").then(function(e){e.addAll(["/","/index.html","/offline.html","/css/main.css","/image/form.webp","/image/emporer.webp","/image/covid.webp","/image/coffee-1.webp","/image/fruit-1.webp","https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css","https://fonts.googleapis.com/css2?family=Alegreya+SC:wght@500&family=Monoton&family=Playfair+Display+SC:ital,wght@1,700&display=swap","https://kit.fontawesome.com/1946a965ff.js"])}))}),self.addEventListener("activate",function(e){return e.waitUntil(caches.keys().then(function(e){return Promise.all(e.map(function(e){if("primary-v6"!==e&&"secondary-v2"!==e)return caches.delete(e)}))})),self.clients.claim()}),self.addEventListener("fetch",function(e){e.respondWith(caches.match(e.request).then(function(t){return t||fetch(e.request).then(function(t){return caches.open("secondary-v2").then(function(n){return n.put(e.request.url,t.clone()),t})}).catch(function(e){return caches.open("primary-v6").then(function(e){return e.match("/offline.html")})})}))});
