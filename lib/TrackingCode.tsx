import Script from "next/script";

const TrackingCode = () => {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-1QVHEHLMVQ" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());
 
            gtag('config', 'G-1QVHEHLMVQ');
        `}
      </Script>
    </>
  );
};
