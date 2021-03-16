import Head from "next/head";
import { renderMetaTags } from "react-datocms";
import Header from "../components/header";
import Layout from "../components/layout";
import { request } from "../lib/datocms";
import { metaTagsFragment } from "../lib/fragments";
import Container from "../components/container";
import Footer from "../components/footer";
import BigX from "../components/big-x";
import FancyLink from "../components/fancy-link";
import { motion } from "framer-motion"
import { fade } from "../helpers/transitionHelper"
import {  SmoothScrollProvider } from '../contexts/SmoothScroll.context'

export default function ServiceSingle({ data: { site, home } }) {
  const metaTags = home._seoMetaTags.concat(site.favicon);

  return (
    <SmoothScrollProvider options={{ smooth: true, lerp: 0.13 }}>
      <Layout>
        <Head>{renderMetaTags(metaTags)}</Head>
        
        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
          className=""
        >
          <motion.div variants={fade} className=" overflow-hidden relative">
            <Header theme="off-black" />
            <BigX color="text-white" />
            <div className="relative">
              <Container>
                <div className="pt-40 md:pt-48 xl:pt-56 2xl:pt-64 relative" data-scroll data-scroll-speed="1.4">
                  <div className="flex flex-wrap items-center justify-center md:-mx-2 lg:-mx-8">
                    <div className="flex-1 text-center md:px-2 lg:px-8">
                      <h1 className="text-6xl md:text-7xl xl:text-8xl 2xl:text-9xl leading-none w-full tracking-tighter mt-8 mx-auto md:mx-0">Page Not Found</h1>
                    </div>
                  </div>
                </div>
              </Container>

              <div className="pb-12 md:pb-20 xl:pb-32 2xl:pb-40">
                <Container thinner>
                  <div className="max-w-4xl mx-auto text-center">
                    <span className="content text-lg text-center">Sorry! There's been a mistake and this page can't be found 🙁</span>
                  </div>
                </Container>
              </div>

              <div className="bg-off-black pt-6 md:pt-8 pb-6 md:pb-10 block text-center text-off-white text-4xl md:text-5xl xl:text-6xl tracking-tighter leading-none">
                <FancyLink link="/" a11yText="Navigate to home page" text="Back Home" thicc />
              </div>
              
              <Footer hideMarquee />
            </div>
          </motion.div>
        </motion.div>
      </Layout>
    </SmoothScrollProvider>
  );
}

const ERROR_QUERY = `
  query ErrorSingle {
    site: _site {
      favicon: faviconMetaTags {
        ...metaTagsFragment
      }
    }
    home: home {
      _seoMetaTags {
        ...metaTagsFragment
      }
    }
  }
  ${metaTagsFragment}
`


export async function getStaticProps() {
  const data = await request({
    query: ERROR_QUERY
  })

  return {
      props: {
        data
      }
  }
}