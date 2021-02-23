import Head from "next/head";
import Link from "next/link";
import { request } from "../lib/datocms";
import Header from "../components/header";
import Layout from "../components/layout";
import { renderMetaTags, useQuerySubscription } from "react-datocms";
import { metaTagsFragment, responsiveImageFragment } from "../lib/fragments";
import Container from "../components/container";
import Footer from "../components/footer";
import BigX from "../components/big-x";
import { motion } from "framer-motion"
import { fade, reveal } from "../helpers/transitionHelper"
import { SmoothScrollProvider } from '../contexts/SmoothScroll.context'

export default function Index({ data: { site, contact } }) {
  const metaTags = contact.seo.concat(site.favicon);

  return (
    <SmoothScrollProvider options={{ smooth: true, lerp: 0.13 }}>
      <Layout>
      <Head>{renderMetaTags(metaTags)}</Head>
        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <motion.div variants={fade} className="mb-16 md:mb-20 pt-32 md:pt-48 xl:pt-56 overflow-hidden relative">
            <Header theme="off-black" />
            <BigX color="text-white" />
            <Container thin>
              <div className="w-full mb-12 md:mb-24 xl:mb-32 relative z-10 overflow-hidden" data-scroll data-scroll-speed="1.35">
                <motion.h1 variants={reveal} className="text-6xl md:text-7xl xl:text-8xl leading-none w-full tracking-tighter text-center mb-0 pb-0">Let's talk about it</motion.h1>
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
                          <div className="relative overflow-hidden mb-3 md:mb-5">
                            <motion.h3 variants={reveal} className="text-3xl md:text-3xl xl:text-4xl leading-none tracking-tighter mb-0 pb-0">Collaborate with us</motion.h3>
                          </div>
                          
                          <div className="font-mono text-sm mb-5 md:mb-8 content" dangerouslySetInnerHTML={{ __html: contact.collaborateText }}></div>

                          <div className="relative overflow-hidden">
                            <motion.a variants={reveal} aria-label={`Email us at ${ contact.emailAddress }`} href={`mailto:${contact.emailAddress}`} className="underline tracking-tight text-lg inline-block items-center">{ contact.emailAddress }</motion.a>
                          </div>
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
                          <div className="relative overflow-hidden mb-3 md:mb-5">
                            <motion.h3 variants={reveal} className="text-3xl md:text-3xl xl:text-4xl leading-none tracking-tighter mb-0 pb-0">Join our team</motion.h3>
                          </div>
                          
                          <div className="font-mono text-sm mb-5 md:mb-8 content" dangerouslySetInnerHTML={{ __html: contact.teamText }}></div>
                          
                          <div className="relative overflow-hidden">
                            <motion.a variants={reveal} aria-label={`Email us at ${ contact.teamEmailAddress }`} href={`mailto:${contact.teamEmailAddress}`} className="underline tracking-tight text-lg inline-block items-center">{ contact.teamEmailAddress }</motion.a>
                          </div>
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
                          <div className="relative overflow-hidden mb-3 md:mb-5">
                            <motion.h3 variants={reveal} className="text-3xl md:text-3xl xl:text-4xl leading-none tracking-tighter mb-0 pb-0">Something else</motion.h3>
                          </div>
                          
                          <div className="font-mono text-sm mb-5 md:mb-8 content" dangerouslySetInnerHTML={{ __html: contact.somethingElseText }}></div>

                          <div className="relative overflow-hidden">
                            <motion.a variants={reveal} aria-label={`Email us at ${ contact.speakingEmailAddress }`} href={`mailto:${contact.speakingEmailAddress}`} className="underline tracking-tight text-lg inline-block items-center">{ contact.speakingEmailAddress }</motion.a>
                          </div>
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
    contact: contact {
      seo: _seoMetaTags {
        ...metaTagsFragment
      }
      title
      emailAddress
      teamEmailAddress
      speakingEmailAddress
      collaborateText
      teamText
      somethingElseText
      slug
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