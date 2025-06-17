import React, { useEffect } from 'react';

const AdSenseBlock = ({ slot, format = 'auto', className = '' }) => {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.adsbygoogle) {
        window.adsbygoogle.push({});
      }
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, []);

  return (
    <div className={`adsense-block my-8 ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXX" // Replace with your client ID
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdSenseBlock;
// Note: Replace 'ca-pub-XXXXXXXXXXXXXXX' with your actual AdSense client ID.
// Ensure you have the AdSense script loaded in your index.html or main.jsx file: