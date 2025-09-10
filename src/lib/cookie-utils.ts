/**
 * Cookie Consent Utilities for The Limitless Way
 * Helper functions to check consent status and conditionally load scripts
 */

// Check if user has accepted cookies
export function hasUserAcceptedCookies(): boolean {
  if (typeof window === "undefined") return false;

  const consent = document.cookie
    .split("; ")
    .find((row) => row.startsWith("tlw-cookie-consent="));

  return consent ? consent.split("=")[1] === "true" : false;
}

// Load Google Analytics only if cookies are accepted
export function loadGoogleAnalytics(measurementId: string): void {
  if (!hasUserAcceptedCookies()) {
    console.log("Google Analytics not loaded - cookies not accepted");
    return;
  }

  // Load Google Analytics script
  const script1 = document.createElement("script");
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script1);

  // Initialize Google Analytics
  const script2 = document.createElement("script");
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${measurementId}');
  `;
  document.head.appendChild(script2);

  console.log("Google Analytics loaded");
}

// Load Google Ads/AdSense only if cookies are accepted
export function loadGoogleAds(adClientId: string): void {
  if (!hasUserAcceptedCookies()) {
    console.log("Google Ads not loaded - cookies not accepted");
    return;
  }

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adClientId}`;
  script.crossOrigin = "anonymous";
  document.head.appendChild(script);

  console.log("Google Ads loaded");
}

// Load Facebook Pixel only if cookies are accepted
export function loadFacebookPixel(pixelId: string): void {
  if (!hasUserAcceptedCookies()) {
    console.log("Facebook Pixel not loaded - cookies not accepted");
    return;
  }

  // Facebook Pixel Code
  const script = document.createElement("script");
  script.innerHTML = `
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '${pixelId}');
    fbq('track', 'PageView');
  `;
  document.head.appendChild(script);

  console.log("Facebook Pixel loaded");
}

// Generic function to execute code only if cookies are accepted
export function withCookieConsent(callback: () => void): void {
  if (hasUserAcceptedCookies()) {
    callback();
  } else {
    console.log("Code not executed - cookies not accepted");
  }
}

// Listen for cookie consent changes (useful for SPAs)
export function onCookieConsentChange(
  callback: (accepted: boolean) => void
): () => void {
  if (typeof window === "undefined") return () => {};

  let lastState = hasUserAcceptedCookies();

  const checkConsent = () => {
    const currentState = hasUserAcceptedCookies();
    if (currentState !== lastState) {
      lastState = currentState;
      callback(currentState);
    }
  };

  const interval = setInterval(checkConsent, 1000);

  // Return cleanup function
  return () => clearInterval(interval);
}

// Example usage for Google AdSense approval
export function initializeAnalytics(): void {
  // Replace with your actual Google Analytics ID
  const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";

  // Replace with your actual Google AdSense client ID
  const GOOGLE_ADS_CLIENT_ID = "ca-pub-XXXXXXXXXXXXXXXXX";

  // Load analytics and ads only if user has accepted cookies
  loadGoogleAnalytics(GA_MEASUREMENT_ID);
  loadGoogleAds(GOOGLE_ADS_CLIENT_ID);
}
