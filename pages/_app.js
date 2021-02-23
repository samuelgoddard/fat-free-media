import React from 'react';
import '../styles/main.css'
import Header from '../components/header'
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  return (
    <div data-scroll-container id="scroll-container">
      <Header theme={ router.route === '/menu' || router.route === '/about' ? 'white' : 'off-black' }/>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </div>
  );
}

export default MyApp;