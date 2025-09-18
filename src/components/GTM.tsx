import Script from "next/script";
import React from "react";

export default function GTM() {
  return (
    <>
      <Script id="gtm" strategy="beforeInteractive">
        {`(function(){function t(t,e,r){if("cookie"===t){var n=document.cookie.split(";");for(var o=0;o<n.length;o++){var i=n[o].split("=");if(i[0].trim()===e)return i[1]}}else if("localStorage"===t)return localStorage.getItem(e);else if("jsVariable"===t)return window[e];else console.warn("invalid uid source",t)}function e(e,r,n){var o=document.createElement("script");var y=document.querySelector('[nonce]');y&&o.setAttribute('nonce',y.nonce||y.getAttribute('nonce'));o.async=!0,o.src=r,e.insertBefore(o,n)}function r(r,n,o,i,a){var c,s=!1;try{var u=navigator.userAgent,f=/Version\/([0-9\\._]+)(.*Mobile)?.*Safari.*/.exec(u);f&&parseFloat(f[1])>=16.4&&(c=t(o,i,""),s=!0)}catch(t){console.error(t)}var l=window[a]=window[a]||[];l.push({"gtm.start":(new Date).getTime(),event:"gtm.js"});var g=r+"/TDhKODJNJmVu.js?tg="+n+(s?"&enableCK=true":"")+(c?"&mcookie="+encodeURIComponent(c):""),d=document.getElementsByTagName("script")[0];e(d.parentNode,g,d)}r('https://tagging.thelimitlessway.nl',"WRLRHNHT","cookie","_taggingmk","dataLayer")})();`}
      </Script>
      <noscript>
        <iframe
          src="https://tagging.thelimitlessway.nl/ns.html?id=GTM-WRLRHNHT"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
    </>
  );
}
