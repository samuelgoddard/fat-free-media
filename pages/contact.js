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
import ShapeSquare from "../components/shape-square";
import ShapeSquareOutline from "../components/shape-square-outline";
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
            <Header theme="off-black" contact />
            <BigX color="text-white" />
            <Container thin>
              <div className="w-full mb-12 md:mb-24 xl:mb-32 relative z-10 overflow-hidden" data-scroll data-scroll-speed="1.35">
                <motion.h1 variants={reveal} className="text-6xl md:text-7xl xl:text-8xl leading-none w-full tracking-tighter text-center mb-0 pb-0 px-8 md:px-0">Let's talk about it</motion.h1>
              </div>

              <div className="w-full mb-12 md:mb-24 xl:mb-32 relative z-10">
                <div className="flex flex-wrap">
                  <div className="w-full md:w-1/3 md:px-8">
                    <div className="h-full py-6 md:py-10 border-b md:border-b-0 md:border-l border-dotted border-off-black border-opacity-50 md:px-8">
                      <div className="flex flex-wrap -mx-4 md:mx-0" data-scroll data-scroll-speed="1.25">
                        <div className="md:flex w-auto md:w-full px-4 md:px-0 relative z-0 md:mb-5">
                          <div className="w-auto relative md:mb-6">
                            <ShapeSquare classes="w-10 md:w-16 xl:w-20" color="text-orange" />
                            <ShapeSquareOutline classes="w-10 md:w-16 xl:w-20 absolute top-0 right-0 bottom-0 -mr-3 md:-mr-6 xl:-mr-8 mt-2 md:mt-4 xl:mt-5" />
                          </div>
                        </div>

                        <div className="flex-1 md:w-full px-2 md:px-0 relative z-10">
                          <div className="relative overflow-hidden mb-3 md:mb-5">
                            <motion.h3 variants={reveal} className="text-3xl md:text-3xl xl:text-4xl leading-tight tracking-tighter mb-0 pb-0">Collaborate with us</motion.h3>
                          </div>
                          
                          <div className="font-mono text-sm mb-5 md:mb-8 content" dangerouslySetInnerHTML={{ __html: contact.collaborateText }}></div>

                          <div className="relative overflow-hidden mb-5 md:mb-8">
                            <motion.a variants={reveal} aria-label={`Email us at ${ contact.emailAddress }`} href={`mailto:${contact.emailAddress}`} className="underline tracking-tight text-lg inline-block items-center">{ contact.emailAddress }</motion.a>
                          </div>


                          <div className="w-full max-w-xs">
                            <form className="contact-form">
                              <div className="mb-4">
                                <label className="sr-only" htmlFor="name">Name</label>
                                <input className="appearance-none w-full py-3 px-4 leading-tight border-transparent border-2 focus:outline-none focus:border-green text-xl transition ease-in-out duration-200 textb-off-lack" id="name" type="text" placeholder="Name" required />
                              </div>
                              <div className="mb-4">
                                <label className="sr-only" htmlFor="email">Email</label>
                                <input className="appearance-none w-full py-3 px-4 leading-tight border-transparent border-2 focus:outline-none focus:border-green text-xl transition ease-in-out duration-200 textb-off-lack" id="email" type="email" placeholder="Email" required />
                              </div>
                              <div className="mb-4">
                                <label className="sr-only" htmlFor="tel">Phone</label>
                                <input className="appearance-none w-full py-3 px-4 leading-tight border-transparent border-2 focus:outline-none focus:border-green text-xl transition ease-in-out duration-200 textb-off-lack" id="tel" type="tel" placeholder="Phone" required />
                              </div>
                              <div className="mb-4">
                                <label className="sr-only" htmlFor="message">Message</label>
                                <textarea rows="3" className="appearance-none w-full py-3 px-4 leading-tight border-transparent border-2 focus:outline-none focus:border-green text-xl transition ease-in-out duration-200 textb-off-lack" id="message" placeholder="Message" />
                              </div>
                              <button class="text-lg block ml-auto text-right underline" type="submit">
                                Send Message
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="h-full w-full md:w-1/3 md:px-8">
                    <div className="py-6 md:pb-10 md:pt-48 border-b md:border-b-0 md:border-l border-dotted border-off-black border-opacity-50 md:px-8">
                      <div className="flex flex-wrap -mx-4 md:mx-0" data-scroll data-scroll-speed="2.25">
                        <div className="md:flex w-auto md:w-full px-4 md:px-0 relative z-0 md:mb-5">
                          <div className="w-auto relative md:mb-10">
                            <ShapeSquare classes="w-10 md:w-16 xl:w-20 absolute top-0 right-0 bottom-0 -mr-3 md:-mr-6 xl:-mr-6 mt-5 md:mt-4 xl:mt-5" color="text-green" />

                            <ShapeSquareOutline classes="w-10 md:w-16 xl:w-20 ml-5 -mt-5" wrapperClasses="transform rotate-45" />
                          </div>
                        </div>
                        <div className="flex-1 md:w-full px-2 md:px-0 relative z-10">
                          <div className="relative overflow-hidden mb-3 md:mb-5">
                            <motion.h3 variants={reveal} className="text-3xl md:text-3xl xl:text-4xl leading-tight tracking-tighter mb-0 pb-0">Join our team</motion.h3>
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
                          <div className="w-auto relative md:mb-3">
                            <ShapeSquare classes="w-8 md:w-12 xl:w-16 ml-2" color="text-purple" />
                            <ShapeSquareOutline classes="w-10 md:w-16 xl:w-20 absolute top-0 right-0 bottom-0 -mt-2 -mr-2" />
                          </div>
                        </div>
                        <div className="flex-1 md:w-full px-2 md:px-0 relative z-10">
                          <div className="relative overflow-hidden mb-3 md:mb-5">
                            <motion.h3 variants={reveal} className="text-3xl md:text-3xl xl:text-4xl leading-tight tracking-tighter mb-0 pb-0">Something else</motion.h3>
                          </div>
                          
                          <div className="font-mono text-sm mb-5 md:mb-8 content" dangerouslySetInnerHTML={{ __html: contact.somethingElseText }}></div>

                          <div className="relative overflow-hidden mb-5 md:mb-8">
                            <motion.a variants={reveal} aria-label={`Email us at ${ contact.speakingEmailAddress }`} href={`mailto:${contact.speakingEmailAddress}`} className="underline tracking-tight text-lg inline-block items-center">{ contact.speakingEmailAddress }</motion.a>
                          </div>

                          <address className="not-italic text-lg mb-5 md:mb-8 leading-tight tracking-tight" dangerouslySetInnerHTML={{ __html: contact.address }}></address>

                          <a href={`tel:${contact.phoneNumber}`} className="text-lg leading-tight tracking-tight">Call us on {contact.phoneNumber}</a>
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
      phoneNumber
      address
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