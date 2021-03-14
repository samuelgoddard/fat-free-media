import Head from "next/head";
import { request } from "../lib/datocms";
import Header from "../components/header";
import Layout from "../components/layout";
import { renderMetaTags } from "react-datocms";
import { metaTagsFragment } from "../lib/fragments";
import Container from "../components/container";
import Footer from "../components/footer";
import BigX from "../components/big-x";
import ShapeSquare from "../components/shape-square";
import ShapeSquareOutline from "../components/shape-square-outline";
import Form from "../components/form.js"
import FancyLinkExternal from "../components/fancy-link-external";
import { motion } from "framer-motion"
import { fade, reveal } from "../helpers/transitionHelper"
import { SmoothScrollProvider } from '../contexts/SmoothScroll.context'

export default function Index({ data: { site, contact, disciplines } }) {
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
                    <div className=" pt-10 pb-8 md:py-10 border-b md:border-b-0 md:border-l border-dotted border-off-black border-opacity-50 md:pl-8">
                      <div className="flex flex-wrap -mx-4 md:mx-0" data-scroll data-scroll-speed="1.25">
                        <div className="md:flex w-auto md:w-full px-4 md:px-0 relative z-0 md:mb-5">
                          <div className="w-auto relative mb-8 md:mb-8">
                            <ShapeSquare classes="w-10 md:w-16 xl:w-20" color="text-orange" />
                            <ShapeSquareOutline classes="w-10 md:w-16 xl:w-20 absolute top-0 right-0 bottom-0 -mr-3 md:-mr-6 xl:-mr-8 mt-2 md:mt-4 xl:mt-5" />
                          </div>
                        </div>

                        <div className="w-full md:w-full px-4 md:px-0 relative z-10">
                          <div className="relative overflow-hidden mb-3 md:mb-5">
                            <motion.h3 variants={reveal} className="text-3xl md:text-3xl xl:text-4xl leading-tight tracking-tighter mb-2 pb-0">Collaborate with us</motion.h3>
                          </div>
                          
                          <div className="font-mono text-sm lg:text-base leading-snug mb-5 md:mb-8 content" dangerouslySetInnerHTML={{ __html: contact.collaborateText }}></div>

                          <div className="relative overflow-hidden mb-5 md:mb-8">
                            <motion.div variants={reveal} className="text-lg lg:text-xl pb-1">
                              <FancyLinkExternal link={`mailto:${contact.emailAddress}`} text={contact.emailAddress} a11yText="Email Us" />
                            </motion.div>
                          </div>

                          <div className="w-full lg:max-w-xs">
                            <Form />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className=" w-full md:w-1/3 md:px-8">
                    <div className="pt-10 pb-8 md:pb-10 md:pt-48 border-b md:border-b-0 md:border-l border-dotted border-off-black border-opacity-50 md:pl-8 h-full">
                      <div className="flex flex-wrap -mx-4 md:mx-0" data-scroll data-scroll-speed="2.25">
                        <div className="md:flex w-auto md:w-full px-4 md:px-0 relative z-0 md:mb-5">
                          <div className="w-full md:w-auto relative mb-10 md:mb-12">
                            <ShapeSquare classes="w-10 md:w-16 xl:w-20 absolute top-0 right-0 bottom-0 -mr-3 md:-mr-6 xl:-mr-6 mt-5 md:mt-4 xl:mt-5" color="text-green" />

                            <ShapeSquareOutline classes="w-10 md:w-16 xl:w-20 ml-5 -mt-5" wrapperClasses="transform rotate-45" />
                          </div>
                        </div>
                        <div className="w-full md:w-full px-4 md:px-0 relative z-10">
                          <div className="relative overflow-hidden mb-3 md:mb-5">
                            <motion.h3 variants={reveal} className="text-3xl md:text-3xl xl:text-4xl leading-tight tracking-tighter mb-2 pb-0">Join our team</motion.h3>
                          </div>
                          
                          <div className="font-mono text-sm lg:text-base leading-snug mb-5 md:mb-8 content pr-12 md:pr-0" dangerouslySetInnerHTML={{ __html: contact.teamText }}></div>

                          <div className="relative overflow-hidden">
                            <motion.div variants={reveal} className="text-lg lg:text-xl pb-1">
                              <FancyLinkExternal link={`mailto:${contact.teamEmailAddress}`} text={contact.teamEmailAddress} a11yText={`Email us at ${contact.teamEmailAddress}`} />
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-1/3 md:px-8">
                    <div className=" h-full pt-10 pb-8 md:pb-10 md:pt-24 md:border-b-0 md:border-l md:border-r border-dotted border-off-black border-opacity-50 md:px-8">
                      <div className="flex flex-wrap -mx-4 md:mx-0" data-scroll data-scroll-speed="1.75">
                        <div className="md:flex w-auto md:w-full px-4 md:px-0 relative z-0 mb-4 md:mb-5">
                          <div className="w-auto relative md:mb-5">
                            <ShapeSquare classes="w-8 md:w-12 xl:w-16 ml-2" color="text-purple" />
                            <ShapeSquareOutline classes="w-10 md:w-16 xl:w-20 absolute top-0 right-0 bottom-0 -mt-1 md:-mt-2 -mr-1 md:-mr-2" />
                          </div>
                        </div>
                        <div className="w-full md:w-full px-4 md:px-0 relative z-10">
                          <div className="relative overflow-hidden mb-3 md:mb-5">
                            <motion.h3 variants={reveal} className="text-3xl md:text-3xl xl:text-4xl leading-tight tracking-tighter mb-2 pb-0">Something else</motion.h3>
                          </div>
                          
                          <div className="font-mono text-sm lg:text-base leading-snug mb-3 md:mb-4 content pr-12 md:pr-0" dangerouslySetInnerHTML={{ __html: contact.somethingElseText }}></div>

                          <div className="relative overflow-hidden mb-1 md:mb-3">
                            <motion.div variants={reveal} className="text-lg lg:text-xl pb-1">
                              <FancyLinkExternal link={`mailto:${contact.speakingEmailAddress}`} text={contact.speakingEmailAddress} a11yText={`Email us at ${contact.speakingEmailAddress}`} />
                            </motion.div>
                          </div>

                          <address className="not-italic text-lg mb-3 md:mb-5 leading-tight tracking-tight" dangerouslySetInnerHTML={{ __html: contact.address }}></address>

                          <div className="relative overflow-hidden">
                            <motion.div variants={reveal} className="text-lg lg:text-xl pb-1">
                              <span>Call us on </span>
                              <FancyLinkExternal link={`tel:${contact.phoneNumber}`} text={`${contact.phoneNumber}`} a11yText={`Call us`} />
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>

            <Footer disciplines={disciplines} />
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
    disciplines: allDisciplines {
      slug 
      title
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