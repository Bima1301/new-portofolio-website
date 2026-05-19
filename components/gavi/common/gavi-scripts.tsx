import Script from "next/script";

export default function GaviScripts() {
  return (
    <>
      <Script
        src="/assets/js/jquery-3.6.0.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/assets/js/jquery-migrate-3.4.0.min.js"
        strategy="beforeInteractive"
      />
      <Script src="/assets/js/plugins.js" strategy="afterInteractive" />
      <Script src="/assets/js/scripts.js" strategy="afterInteractive" />
      <Script src="/assets/js/three.min.js" strategy="lazyOnload" />
    </>
  );
}
