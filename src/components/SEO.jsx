{/*import { Helmet } from 'react-helmet-async';*/}

const SEO = ({ title, description, keywords, image, url }) => {
  const siteTitle = "MyHealthTracker - Your Health Education Companion";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const siteUrl = "https://myhealthtracker.com";
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const defaultImage = `${siteUrl}/og-image.jpg`;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={image || defaultImage} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || defaultImage} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="MyHealthTracker" />
      <link rel="canonical" href={fullUrl} />
    </>
  );
};

export default SEO;
