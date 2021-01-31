import React from 'react';
import App from 'next/app';
import '../styles/main.css'
import Header from '../components/header'
import { AnimatePresence } from 'framer-motion';

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <div data-scroll-container id="scroll-container">
        <Header theme={ router.route === '/menu' || router.route === '/about' ? 'white' : 'off-black' }/>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </div>
    );
  }
}

export default MyApp;