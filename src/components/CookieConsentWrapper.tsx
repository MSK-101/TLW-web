"use client";

import CookieConsent from "react-cookie-consent";

export default function CookieConsentWrapper() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept All"
      declineButtonText="Essential Only"
      enableDeclineButton
      flipButtons
      style={{
        background: "rgba(26, 26, 26, 0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        color: "#ffffff",
        fontFamily: "var(--font-funnel-sans)",
        border: "1px solid rgba(64, 64, 64, 0.3)",
        borderRadius: "20px 20px 0px 0px",
        borderTop: "1px solid rgba(139, 92, 246, 0.3)",
        padding: "14px 32px",
        fontSize: "15px",
        boxShadow:
          "0 -20px 40px -10px rgba(0, 0, 0, 0.4), 0 -8px 16px -4px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
      }}
      buttonStyle={{
        background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
        color: "#ffffff",
        fontSize: "15px",
        fontFamily: "var(--font-funnel-sans)",
        fontWeight: "600",
        borderRadius: "8px",
        border: "none",
        padding: "14px 24px",
        cursor: "pointer",
        transition: "all 0.3s ease",
        boxShadow: "0 4px 15px rgba(99, 102, 241, 0.4)",
        minWidth: "130px",
      }}
      declineButtonStyle={{
        background: "rgba(255, 255, 255, 0.1)",
        color: "#d1d5db",
        fontSize: "15px",
        fontFamily: "var(--font-funnel-sans)",
        fontWeight: "500",
        borderRadius: "8px",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        padding: "14px 24px",
        cursor: "pointer",
        marginRight: "12px",
        transition: "all 0.3s ease",
        minWidth: "130px",
      }}
      cookieName="tlw-cookie-consent"
      expires={365}
      hideOnAccept={true}
      hideOnDecline={true}
      onAccept={() => {
        console.log("Cookies accepted");
        // Add your analytics/tracking code here
      }}
      onDecline={() => {
        console.log("Optional cookies declined");
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8">
          {/* Icon */}
          <div className="flex-shrink-0 hidden sm:block">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500/80 to-purple-600/80 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg border border-white/10">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="font-funnelDisplay text-xl font-bold text-white mb-1">
              🍪 Cookie Preferences
            </h3>
            <p className="text-gray-300 leading-relaxed">
              We use cookies to enhance your experience, analyze site traffic,
              and personalize content. Choose your preferred settings below.
            </p>
            <div className="text-sm text-gray-400 mt-1">
              <a
                href="/privacy-statement"
                className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2 font-medium transition-colors"
              >
                Privacy Policy
              </a>
              <span className="mx-2">•</span>
              <span>You can change preferences anytime in the footer</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* Button hover effects */
        div[style*="linear-gradient(135deg, #6366f1"]:hover {
          background: linear-gradient(
            135deg,
            #5855eb 0%,
            #7c3aed 100%
          ) !important;
          box-shadow: 0 6px 20px rgba(99, 102, 241, 0.6) !important;
          transform: translateY(-2px) !important;
        }

        div[style*="rgba(255, 255, 255, 0.1)"]:hover {
          border-color: rgba(255, 255, 255, 0.3) !important;
        }

        /* Smooth entrance animation */
        .react-cookie-consent {
          animation: slideUp 0.4s ease-out;
          position: relative;
        }

        /* Glass effect enhancement */
        .react-cookie-consent::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.05) 0%,
            rgba(255, 255, 255, 0.02) 100%
          );
          border-radius: 20px 20px 0px 0px;
          pointer-events: none;
        }

        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        /* Mobile responsive adjustments */
        @media (max-width: 768px) {
          .react-cookie-consent {
            padding: 20px 16px !important;
          }

          .react-cookie-consent div[style*="minWidth"] {
            min-width: 120px !important;
            font-size: 14px !important;
            padding: 12px 18px !important;
          }
        }
      `}</style>
    </CookieConsent>
  );
}
