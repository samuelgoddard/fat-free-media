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

  return (
    <>
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
      {children}
    </>
  )
  }