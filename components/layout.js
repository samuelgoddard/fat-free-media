import { useEffect } from "react";
import Head from "next/head";

export default function Layout({ children, preview }) {
  
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
      "author": { 
        "@type":"ProfessionalService",
        "description":"We write and direct remarkable video for brands and agencies",
        "url":"https://hellofatfree.com/",
        "telephone":"+44 115 857 7502",
        "email":"hello@hellofatfree.com",
        "image":{
          "@type":"ImageObject",
          "url":"https://www.datocms-assets.com/41630/1615305141-nssteaser.jpg?fit=max&fm=jpg&w=1000",
          "height":560,
          "width":1000
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
    <div>
      { preview && (
        <div className="fixed top-0 left-0 right-0 bg-red-500 z-50 text-center text-white py-2">
          <>
            PREVIEW MODE ENABLED: This is page is showing draft content direct from the CMS.{' '}
            <a
              href="/api/exit-preview"
              className="underline"
            >
              Click here
            </a>{' '}
            to exit preview mode.
          </>
        </div>
      )}
      {/* <Head>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=UA-58771627-1`}></script>
      </Head> */}

      <Head>
      <script type="application/ld+json" 
        dangerouslySetInnerHTML={{ 
          __html: schema
        }}>
      </script>
      </Head>

      {children}
    </div>
  )
  }