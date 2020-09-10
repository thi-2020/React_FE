let cacheData="pwaV1"


this.addEventListener('install',(event)=>{
    event.waitUntil(
        caches.open(cacheData).then((cache)=>{
                cache.addAll([
                    "/static/js/bundle.js",
                    "/static/js/main.chunk.js",
                    "/static/js/1.chunk.js",
                    "/index.html",
                    "/",
                    "/feed",
                    "/login",
                    "/register"

                ])
        })
    )
})


this.addEventListener('fetch',(event)=>{
    if(!navigator.onLine){
        event.respondWith(
            caches.match(event.request).then((result)=>{
                if(result){
                    return result
                }
                let requestUrl=event.request.clone()
                return fetch(requestUrl)
            })
        )
    }
   
})