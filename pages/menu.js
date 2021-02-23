import Head from "next/head";
import { renderMetaTags, Image } from "react-datocms";
import Header from '../components/header'
import Link from "next/link";
import Layout from "../components/layout";
import { request } from "../lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "../lib/fragments";
import Container from "../components/container";
import BigX from "../components/big-x";
import { motion } from "framer-motion"
import { fade, reveal, menuMovement, menuMovementOne, menuMovementTwo, menuMovementThree } from "../helpers/transitionHelper"
import { SmoothScrollProvider } from '../contexts/SmoothScroll.context'

export default function Menu({ data: { site, home, about, work, contact } }) {
  // const metaTags = about.seo.concat(site.favicon);

  return (
    <SmoothScrollProvider options={{ smooth: true, lerp: 0.13 }}>
      <Layout>
        <Head>{renderMetaTags(site.favicon)}</Head>
        
        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <motion.div variants={fade} className=" bg-orange text-off-white min-h-screen flex flex-wrap items-center md:items-end overflow-hidden relative">
            <Header theme="white" />

            <BigX color="text-orange-dark" />

            <Container>
              <div className="flex flex-wrap relative z-10">
                <div className="h-full w-full md:w-1/4">
                  <Link href="/"><a aria-label="Navigate to Home" className="group block py-5 md:py-10 border-b md:border-b-0 md:border-l border-dotted border-orange-light border-opacity-50 md:px-8 transition ease-in-out duration-500 focus:outline-none text-white hover:text-off-white focus:text-off-white">
                    <motion.div variants={menuMovement}>
                      <div className="transition-transform ease-in-out duration-500 md:transform group-hover:-translate-y-12 group-focus:-translate-y-12">
                        
                        <div className="relative transition ease-in-out duration-500 opacity-25 group-hover:opacity-100 group-focus:opacity-100 mb-10 transform skew-y-2 hidden md:block z-0">
                          <Image
                            data={{
                              ...home.menuImage.responsiveImage,
                              alt: home.menuImage.alt ? home.menuImage.alt : home.menuImage.title,
                            }}
                            className="w-full"
                          />

                          <div className="absolute top-0 left-0 right-0 bottom-0 z-10 opacity-0 group-hover:opacity-100 transition ease-in-out duration-300">
                            <video loop={true} playsInline autoPlay="autoplay" muted className="w-full h-full object-cover z-10">
                              <source src={ home.menuVideo.video.mp4Url } type="video/mp4" />
                              
                              Sorry. Your browser does not support the video tag.
                            </video>
                          </div>
                        </div>

                        <motion.div
                          initial="initial"
                          animate="enter"
                          exit="exit"
                          variants={{
                            enter: { transition: { staggerChildren: 0.125 } }
                          }}
                        >
                          <div className="relative overflow-hidden mb-2 md:mb-3">
                            <motion.h3 variants={reveal} className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl leading-none tracking-tighter mb-0">Home</motion.h3>
                          </div>

                          <div className="relative overflow-hidden">
                            <motion.p variants={reveal} className="font-mono text-sm mb-0 pb-0">{home.menuText}</motion.p>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </a></Link>
                </div>
                <div className="h-full w-full md:w-1/4">
                  <Link href="/work"><a aria-label="Navigate to Home" className="group block py-5 md:py-10 border-b md:border-b-0 md:border-l border-dotted border-orange-light border-opacity-50 md:px-8 transition ease-in-out duration-500 focus:outline-none text-white hover:text-off-white focus:text-off-white">
                    <motion.div variants={menuMovementOne}>
                      <div className="transition-transform ease-in-out duration-500 md:transform group-hover:-translate-y-12 group-focus:-translate-y-12">
                        <div className="relative transition ease-in-out duration-500 opacity-25 group-hover:opacity-100 group-focus:opacity-100 mb-10 transform skew-y-2 hidden md:block z-0">
                          <Image
                            data={{
                              ...work.menuImage.responsiveImage,
                              alt: work.menuImage.alt ? work.menuImage.alt : work.menuImage.title,
                            }}
                            className="w-full"
                          />

                          <div className="absolute top-0 left-0 right-0 bottom-0 z-10 opacity-0 group-hover:opacity-100 transition ease-in-out duration-300">
                            <video loop={true} playsInline autoPlay="autoplay" muted className="w-full h-full object-cover z-10">
                              <source src={ work.menuVideo.video.mp4Url } type="video/mp4" />
                              
                              Sorry. Your browser does not support the video tag.
                            </video>
                          </div>
                        </div>

                        <motion.div
                          initial="initial"
                          animate="enter"
                          exit="exit"
                          variants={{
                            enter: { transition: { staggerChildren: 0.125 } }
                          }}
                        >
                          <div className="relative overflow-hidden mb-2 md:mb-3">
                            <motion.h3 variants={reveal} className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl leading-none tracking-tighter mb-0">Work</motion.h3>
                          </div>

                          <div className="relative overflow-hidden">
                            <motion.p variants={reveal} className="font-mono text-sm mb-0 pb-0">{work.menuText}</motion.p>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </a></Link>
                </div>
                <div className="h-full w-full md:w-1/4">
                  <Link href="/about"><a aria-label="Navigate to Home" className="group block py-5 md:py-10 border-b md:border-b-0 md:border-l border-dotted border-orange-light border-opacity-50 md:px-8 transition ease-in-out duration-500 focus:outline-none text-white hover:text-off-white focus:text-off-white">
                    <motion.div variants={menuMovementTwo}>
                      <div className="transition-transform ease-in-out duration-500 md:transform group-hover:-translate-y-12 group-focus:-translate-y-12">
                        <div className="relative transition ease-in-out duration-500 opacity-25 group-hover:opacity-100 group-focus:opacity-100 mb-10 transform skew-y-2 hidden md:block z-0">
                          <Image
                            data={{
                              ...about.menuImage.responsiveImage,
                              alt: about.menuImage.alt ? about.menuImage.alt : about.menuImage.title,
                            }}
                            className="w-full"
                          />

                          <div className="absolute top-0 left-0 right-0 bottom-0 z-10 opacity-0 group-hover:opacity-100 transition ease-in-out duration-300">
                            <video loop={true} playsInline autoPlay="autoplay" muted className="w-full h-full object-cover z-10">
                              <source src={ about.menuVideo.video.mp4Url } type="video/mp4" />
                              
                              Sorry. Your browser does not support the video tag.
                            </video>
                          </div>
                        </div>

                        <motion.div
                          initial="initial"
                          animate="enter"
                          exit="exit"
                          variants={{
                            enter: { transition: { staggerChildren: 0.125 } }
                          }}
                        >
                          <div className="relative overflow-hidden mb-2 md:mb-3">
                            <motion.h3 variants={reveal} className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl leading-none tracking-tighter mb-0">About</motion.h3>
                          </div>
                          
                          <div className="relative overflow-hidden">
                            <motion.p variants={reveal} className="font-mono text-sm mb-0 pb-0">{about.menuText}</motion.p>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </a></Link>
                </div>
                {/* <div className="h-full w-full md:w-1/4">
                  <Link href="/"><a aria-label="Navigate to Home" className="group block py-5 md:py-10 border-b md:border-b-0 md:border-l border-dotted border-orange-light border-opacity-50 md:px-8 transition ease-in-out duration-500 focus:outline-none text-white hover:text-off-white focus:text-off-white">
                    <div className="transition-transform ease-in-out duration-500 md:transform group-hover:-translate-y-12 group-focus:-translate-y-12">
                      
                      <img src="https://placedog.net/650/900" alt="Placeholder" className="transition ease-in-out duration-500 opacity-25 group-hover:opacity-100 group-focus:opacity-100 mb-10 transform skew-y-2 hidden md:block" />

                      <motion.div
                        initial="initial"
                        animate="enter"
                        exit="exit"
                        variants={{
                          enter: { transition: { staggerChildren: 0.125 } }
                        }}
                      >
                        <div className="relative overflow-hidden mb-2 md:mb-3">
                          <motion.h3 variants={reveal} className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl leading-none tracking-tighter mb-0">Journal</motion.h3>
                        </div>
                        
                        <div className="relative overflow-hidden">
                          <motion.p variants={reveal} className="font-mono text-sm mb-0 pb-0">Things we’ve thought, made and seen</motion.p>
                        </div>
                      </motion.div>
                    </div>
                  </a></Link>
                </div> */}
                <div className="h-full w-full md:w-1/4">
                  <Link href="/contact"><a aria-label="Navigate to Home" className="group block py-5 md:py-10 border-b md:border-b-0 md:border-l md:border-r border-dotted border-orange-light border-opacity-50 md:px-8 transition ease-in-out duration-500 focus:outline-none text-white hover:text-off-white focus:text-off-white">
                    <motion.div variants={menuMovementThree}>
                      <div className="transition-transform ease-in-out duration-500 md:transform group-hover:-translate-y-12 group-focus:-translate-y-12">
                        
                        <div className="relative transition ease-in-out duration-500 opacity-25 group-hover:opacity-100 group-focus:opacity-100 mb-10 transform skew-y-2 hidden md:block z-0">
                          <Image
                            data={{
                              ...contact.menuImage.responsiveImage,
                              alt: contact.menuImage.alt ? contact.menuImage.alt : contact.menuImage.title,
                            }}
                            className="w-full"
                          />

                          <div className="absolute top-0 left-0 right-0 bottom-0 z-10 opacity-0 group-hover:opacity-100 transition ease-in-out duration-300">
                            <video loop={true} playsInline autoPlay="autoplay" muted className="w-full h-full object-cover z-10">
                              <source src={ contact.menuVideo.video.mp4Url } type="video/mp4" />
                              
                              Sorry. Your browser does not support the video tag.
                            </video>
                          </div>
                        </div>

                        <motion.div
                          initial="initial"
                          animate="enter"
                          exit="exit"
                          variants={{
                            enter: { transition: { staggerChildren: 0.125 } }
                          }}
                        >
                          <div className="relative overflow-hidden mb-2 md:mb-3">
                            <motion.h3 variants={reveal} className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl leading-none tracking-tighter mb-0">Contact</motion.h3>
                          </div>
                          <div className="relative overflow-hidden">
                            <motion.p variants={reveal} className="font-mono text-sm mb-0 pb-0">{ contact.menuText }</motion.p>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </a></Link>
                </div>
              </div>
            </Container>
          </motion.div>
        </motion.div>
      </Layout>
    </SmoothScrollProvider>
  );
}

const MENU_QUERY = `
  query MenuPage {
    site: _site {
      favicon: faviconMetaTags {
        ...metaTagsFragment
      }
    }
    home {
      menuImage {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 720, h: 1000 }) {
          ...responsiveImageFragment
        }
        title
        alt
      }
      menuVideo {
        video {
          mp4Url
        }
      }
      menuText
    }
    about {
      menuImage {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 720, h: 1000 }) {
          ...responsiveImageFragment
        }
        title
        alt
      }
      menuVideo {
        video {
          mp4Url
        }
      }
      menuText
    }
    work: workLanding {
      menuImage {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 720, h: 1000 }) {
          ...responsiveImageFragment
        }
        title
        alt
      }
      menuVideo {
        video {
          mp4Url
        }
      }
      menuText
    }
    contact {
      menuImage {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 720, h: 1000 }) {
          ...responsiveImageFragment
        }
        title
        alt
      }
      menuVideo {
        video {
          mp4Url
        }
      }
      menuText
    }
  }
  ${metaTagsFragment}
  ${responsiveImageFragment}
`

export async function getStaticProps() {
  const data = await request({
    query: MENU_QUERY
  })

  return {
    props: {
      data,
    },
  }
}