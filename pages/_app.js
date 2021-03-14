import React from 'react';
import '../styles/main.css'
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  return (
    <>
      <div className="fixed top-0 left-0 right-0 w-full h-1 bg-off-black-dark z-40 py-px"></div>
      <div data-scroll-container id="scroll-container">
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </div>
    </>
  );
}

export default MyApp;