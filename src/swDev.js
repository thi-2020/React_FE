export default function swDev() {
    let swURL = `${process.env.PUBLIC_URL}/sw.js`
        if(navigator.serviceWorker){
            navigator.serviceWorker.register(swURL).then((res) => {
                console.warn('Service Worker Response: ', res)
            })
        }
   
}