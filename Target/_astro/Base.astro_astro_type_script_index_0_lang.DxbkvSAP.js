const e={};await((function(t,n){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const t=document.querySelector("meta[property=csp-nonce]"),o=t?.nonce||t?.getAttribute("nonce");r=Promise.allSettled(n.map((t=>{if((t=function(e){return"/"+e}(t))in e)return;e[t]=!0;const n=t.endsWith(".css"),r=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${r}`))return;const a=document.createElement("link");return a.rel=n?"stylesheet":"modulepreload",n||(a.as="script"),a.crossOrigin="",a.href=t,o&&a.setAttribute("nonce",o),document.head.appendChild(a),n?new Promise(((e,n)=>{a.addEventListener("load",e),a.addEventListener("error",(()=>n(new Error(`Unable to preload CSS for ${t}`))))})):void 0})))}function o(e){const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then((e=>{for(const t of e||[])"rejected"===t.status&&o(t.reason);return t().catch(o)}))}))((async()=>{const{initializeApp:e}=await import("./index.esm.CF6ImCQk.js");return{initializeApp:e}}),[]).initializeApp({apiKey:"AIzaSyAkevZLi2u7BNRBxvnwYTTgRbpbQYWjGL8",authDomain:"playform-cloud.firebaseapp.com",projectId:"playform-cloud",storageBucket:"playform-cloud.appspot.com",messagingSenderId:"541150662775",appId:"1:541150662775:web:574599325594e05ae7f672",measurementId:"G-RFLGQF2GPJ"});