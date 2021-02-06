import Head from "next/head";
import Link from "next/link";
import { request } from "../lib/datocms";
import Layout from "../components/layout";
import { renderMetaTags, useQuerySubscription } from "react-datocms";
import { metaTagsFragment, responsiveImageFragment } from "../lib/fragments";
import Container from "../components/container";
import Footer from "../components/footer";
import BigX from "../components/big-x";
import { motion } from "framer-motion"
import { fade } from "../helpers/transitionHelper"
import { SmoothScrollProvider } from '../contexts/SmoothScroll.context'

export default function Index({ data: { site } }) {
  // const metaTags = home.seo.concat(site.favicon);

  return (
    <SmoothScrollProvider options={{ smooth: true, lerp: 0.13 }}>
      <Layout>
      {/* <Head>{renderMetaTags(metaTags)}</Head> */}
        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <motion.div variants={fade} className="mb-16 md:mb-20 pt-32 md:pt-48 xl:pt-56 overflow-hidden relative">
            <BigX color="text-white" />
            <Container thin>
              <div className="w-full mb-12 md:mb-24 xl:mb-32 relative z-10">
                <h1 className="text-6xl md:text-7xl xl:text-8xl leading-none w-full tracking-tighter text-center" data-scroll data-scroll-speed="1.35">Let's talk about it</h1>
              </div>

              <div className="w-full mb-12 md:mb-24 xl:mb-32 relative z-10">
                <div className="flex flex-wrap">
                  <div className="w-full md:w-1/3 md:px-8">
                    <div className="h-full py-6 md:py-10 border-b md:border-b-0 md:border-l border-dotted border-off-black border-opacity-50 md:px-8">
                      <div className="flex flex-wrap -mx-4 md:mx-0" data-scroll data-scroll-speed="1.25">
                        <div className="md:flex w-auto md:w-full px-4 md:px-0 relative z-0 md:mb-5">
                          <div className="w-10 md:w-16 xl:w-20 h-10 md:h-16 xl:h-20 bg-orange rounded-full"></div>
                          <div className="w-10 md:w-16 xl:w-20 h-10 md:h-16 xl:h-20 -mt-5 md:mt-0 md:-ml-8 xl:-ml-10 bg-transparent border border-off-black rounded-full"></div>
                        </div>
                        <div className="flex-1 md:w-full px-2 md:px-0 relative z-10">
                          <h3 className="text-3xl md:text-3xl xl:text-4xl leading-none tracking-tighter">Collaborate with us</h3>
                          
                          <p className="font-mono text-sm mb-5 md:mb-8">If you’re ready to do great things, pop your details into the form opposite, and Kate will be back in touch to find out more</p>

                          <a aria-label="Email us at hello@hellofatfree.com" href="mailto:hello@hellofatfree.com" className="underline tracking-tight text-lg inline-block items-center">hello@hellofatfree.com</a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="h-full w-full md:w-1/3 md:px-8">
                    <div className="py-6 md:pb-10 md:pt-48 border-b md:border-b-0 md:border-l border-dotted border-off-black border-opacity-50 md:px-8">
                      <div className="flex flex-wrap -mx-4 md:mx-0" data-scroll data-scroll-speed="2.25">
                        <div className="md:flex w-auto md:w-full px-4 md:px-0 relative z-0 md:mb-5">
                          <div className="w-10 md:w-16 xl:w-20 h-10 md:h-16 xl:h-20 bg-green rounded-full"></div>
                          <div className="w-10 md:w-16 xl:w-20 h-10 md:h-16 xl:h-20 -mt-5 md:mt-0 md:-ml-8 xl:-ml-10 bg-transparent border border-off-black rounded-full"></div>
                        </div>
                        <div className="flex-1 md:w-full px-2 md:px-0 relative z-10">
                          <h3 className="text-3xl md:text-3xl xl:text-4xl leading-none tracking-tighter">Join our team</h3>
                          
                          <p className="font-mono text-sm mb-5 md:mb-8">We’re always looking for exceptionally talented freelancers to work with. Send your showreel and tell us a bit more about you.</p>

                          <a aria-label="Email us at team@hellofatfree.com" href="mailto:team@hellofatfree.com" className="underline tracking-tight text-lg inline-block items-center">team@hellofatfree.com</a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-1/3 md:px-8">
                    <div className="h-full py-6 md:pb-10 md:pt-24 border-b md:border-b-0 md:border-l md:border-r border-dotted border-off-black border-opacity-50 md:px-8">
                      <div className="flex flex-wrap -mx-4 md:mx-0" data-scroll data-scroll-speed="1.75">
                        <div className="md:flex w-auto md:w-full px-4 md:px-0 relative z-0 md:mb-5">
                          <div className="w-10 md:w-16 xl:w-20 h-10 md:h-16 xl:h-20 bg-purple rounded-full"></div>
                          <div className="w-10 md:w-16 xl:w-20 h-10 md:h-16 xl:h-20 -mt-5 md:mt-0 md:-ml-8 xl:-ml-10 bg-transparent border border-off-black rounded-full"></div>
                        </div>
                        <div className="flex-1 md:w-full px-2 md:px-0 relative z-10">
                          <h3 className="text-3xl md:text-3xl xl:text-4xl leading-none tracking-tighter">Something else</h3>
                          
                          <p className="font-mono text-sm mb-5 md:mb-8">Panel events, industry talks, key note speeches, podcasts and interviews are right up our street. Just let us know what you need!</p>

                          <a aria-label="Email us at speaking@hellofatfree.com" href="mailto:speaking@hellofatfree.com" className="underline tracking-tight text-lg inline-block items-center">speaking@hellofatfree.com</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>

            <Footer />
          </motion.div>
        </motion.div>
      </Layout>
    </SmoothScrollProvider>
  );
}

const CONTACTPAGE_QUERY = `
  query ContactPage {
    site: _site {
      favicon: faviconMetaTags {
        ...metaTagsFragment
      }
    }
  }
  ${metaTagsFragment}
`

export async function getStaticProps() {
  const data = await request({
    query: CONTACTPAGE_QUERY
  })

  return {
    props: {
      data,
    },
  }
}