import React from 'react';
import '../styles/main.css'
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  // GTAG Analytics
  // useEffect(() => {
  //   if (process.env.NODE_ENV === 'development') {
  //     window.dataLayer = window.dataLayer || []
      
  //     function gtag() {
  //       dataLayer.push(arguments)
  //     }

  //     gtag('js', new Date())
  //     gtag('config', 'UA-58771627-1', {
  //       page_location: window.location.href,
  //       page_path: window.location.pathname,
  //       page_title: window.document.title,
  //     })
  //   }
  // }, [])

  const schema = `
    {
      "@context":"https://schema.org/",
      "@type":"Website",
      "name":"Fat Free Media",
      "url":"https://hellofatfree.com/",
      "image":{
        "@type":"ImageObject",
        "url":"https://www.datocms-assets.com/41630/1615815600-ff-logo-schema.png",
        "height":400,
        "width":400
      },
      "author": { 
        "@type":"ProfessionalService",
        "name":"Fat Free Media",
        "description":"We work with ambitious brands that need courage, clarity & consistency in their video, inside & out.",
        "url":"https://hellofatfree.com/",
        "telephone":"+44 115 857 7502",
        "email":"hello@hellofatfree.com",
        "image":{
          "@type":"ImageObject",
          "url":"https://www.datocms-assets.com/41630/1615815600-ff-logo-schema.png",
          "height":400,
          "width":400
        },
        "contactPoint":[
          {
              "@type":"ContactPoint",
              "contactType":"sales",
              "telephone":"0115 857 7502"
          }
        ],
        "address":{
          "@type":"PostalAddress",
          "addressCountry":"GB",
          "addressLocality":"Nottingham",
          "postalCode":"NG1 1HS",
          "streetAddress":"16 Commerce Square  Lace Market"
        },
        "sameAs":[
          "https://www.instagram.com/hellofatfree",
          "https://vimeo.com/hellofatfree"
        ]
      }
    }
  `
  
  return (
    <>
      <div className="fixed top-0 left-0 right-0 w-full h-1 bg-off-black-dark z-40 py-px"></div>
      <div data-scroll-container id="scroll-container">
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </div>

      <Head>
        <link rel="canonical" href={`https://hellofatfree.com${router.asPath}`} />
        {/* <script async src={`https://www.googletagmanager.com/gtag/js?id=UA-58771627-1`}></script> */}
        <script type="application/ld+json" 
          dangerouslySetInnerHTML={{ 
            __html: schema
          }}>
        </script>
      </Head>
    </>
  );
}

export default MyApp;