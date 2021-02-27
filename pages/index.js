import Head from "next/head";
import Link from "next/link";
import Header from '../components/header'
import { request } from "../lib/datocms";
import Layout from "../components/layout";
import { renderMetaTags, useQuerySubscription } from "react-datocms";
import { metaTagsFragment, responsiveImageFragment } from "../lib/fragments";
import Container from "../components/container";
import Footer from "../components/footer";
import BigX from "../components/big-x";
import CircleInfinity from "../components/circle-infinity";
import MagneticButton from "../components/magnetic-button";
import { motion } from "framer-motion"
import { reveal, fade, scaleDown } from "../helpers/transitionHelper"
import { SmoothScrollProvider } from '../contexts/SmoothScroll.context'
// import ReactPlayer from 'react-player'

export default function Index({ data: { home, site } }) {
  const metaTags = home.seo.concat(site.favicon);

  return (
    <SmoothScrollProvider options={{ smooth: true, lerp: 0.13 }}>
      <Layout>
      <Head>{renderMetaTags(metaTags)}</Head>

        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <Header theme="off-black" />
          
          <motion.div variants={fade} className="mb-16 md:mb-20 pt-32 md:pt-48 xl:pt-56 overflow-hidden relative">
            <BigX color="text-white" />
            <Container thin>

              <motion.div
                initial="initial"
                animate="enter"
                exit="exit"
                variants={{
                  enter: { transition: { staggerChildren: 0.1 } }
                }}
                className="w-full mb-12 md:mb-10 xl:mb-0 relative z-10"
              >
                <div className="mb-5">
                  <div className="relative overflow-hidden mb-2" data-scroll data-scroll-speed="1">
                    <div className="flex">
                      <motion.div variants={scaleDown} className="w-5 h-5 bg-off-black rounded-full"></motion.div>
                      <motion.div variants={scaleDown} className="w-5 h-5 -ml-2 bg-transparent border border-off-black rounded-full"></motion.div>
                    </div>
                  </div>
                  <div className="relative overflow-hidden" data-scroll data-scroll-speed="1">
                    <motion.span variants={reveal} className="block font-mono text-lg md:text-xl xl:text-2xl leading-none mb-1">2006—{ new Date().getFullYear() } </motion.span>
                  </div>
                  <div className="relative overflow-hidden" data-scroll data-scroll-speed="1">
                    <motion.span variants={reveal} className="block text-xs uppercase tracking-tighter leading-none">{ home.heroMetaText }</motion.span>
                  </div>
                </div>
                <h1 className="text-5xl md:text-6xl xl:text-7xl leading-none w-full max-w-4xl tracking-tighter pr-12 xl:pr-0" data-scroll data-scroll-speed="1.35">{ home.heroHeading }</h1>
              </motion.div>
            </Container>

            <Container bleed>
              <div className="w-full mb-16 xl:mb-24 relative z-10" data-scroll data-scroll-speed="1.3">
                <div className="relative overflow-hidden mb-4 md:mb-6">
                  <motion.div variants={reveal} className="text-right px-6 md:px-0">
                    <Link href="/work"><a aria-label="Navigate to Our Work" className="underline tracking-tight text-lg inline-block items-center">
                      <div className="flex items-center">
                        <span className="w-3 h-3 mt-px bg-off-black rounded-full mr-1 block"></span>
                        <span className="block">See our work</span>
                      </div>
                    </a></Link>
                  </motion.div>
                </div>

                <div className="relative">
                  <span className="block upright font-mono text-xs absolute top-0 left-0 -ml-5 z-0 uppercase tracking-wide leading-none">Our Showreel</span>
                  <div className="w-full bg-green relative z-10">
                    <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center z-20">
                      <MagneticButton text="Watch our Showreel" />
                    </div>
                    <video loop={true} playsInline autoPlay="autoplay" muted className="w-full home-video object-cover">
                      <source src={ home.videoRawUrl } type="video/mp4" />
                      
                      Sorry. Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="h-12 md:h-64 w-64 bg-orange absolute bottom-0 left-0 md:left-auto md:right-0 z-0 -m-5"></div>
                </div>
              </div>
            </Container>

            <Container thin>
              <div className="w-full mb-12 md:mb-16 xl:mb-24 relative z-10" data-scroll data-scroll-speed="1">
                <div className="flex flex-wrap">
                  <div className="w-full md:w-full max-w-sm">
                    <span className="block text-xs uppercase tracking-tighter leading-none">Small but mighty —</span>
                    <h2 className="text-4xl md:text-5xl xl:text-6xl leading-none tracking-tighter">We do three things</h2>
                  </div>

                  <div className="w-full md:w-1/2 max-w-md">
                    <p className="text-lg md:text-xl leading-snug tracking-tight mb-5 md:mb-8">We believe that every moment with a viewer is a privilege, and brands deserve creative bravery without the ego. That’s why you won’t find clickbait or talking heads in our portfolio.</p>

                    <Link href="/contact"><a aria-label="Navigate to Contact us" className="underline tracking-tight text-lg inline-block items-center">Contact us</a></Link>
                  </div>
                </div>
              </div>

              <div className="w-full mb-12 md:mb-16 xl:mb-24 2xl:mb-32 3xl:mb-40 relative z-10">
                <div className="flex flex-wrap">
                  <div className="w-full md:w-1/3 md:px-8">
                    <div className="h-full py-6 md:py-10 border-b md:border-b-0 md:border-l border-dotted border-off-black border-opacity-50 md:px-8">
                      <div className="flex flex-wrap -mx-4 md:mx-0" data-scroll data-scroll-speed="1.25">
                        <div className="text-orange w-full">
                          <CircleInfinity />
                        </div>
                        <div className="flex-1 md:w-full px-2 md:px-0 relative z-10">
                          <h3 className="text-3xl md:text-3xl xl:text-4xl leading-none tracking-tighter">Video<br/>Identity</h3>
                          
                          <p className="font-mono text-sm mb-5 md:mb-8">Video identity is the missing chapter of most brand guideline documents. We help brands articulate how their brand looks, moves, sounds and feels in video.</p>

                          <Link href="/services/video-identity"><a aria-label="Navigate to Video identity" className="underline tracking-tight text-lg inline-block items-center">Learn more</a></Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="h-full w-full md:w-1/3 md:px-8">
                    <div className="py-6 md:pb-10 md:pt-64 border-b md:border-b-0 md:border-l border-dotted border-off-black border-opacity-50 md:px-8">
                      <div className="flex flex-wrap -mx-4 md:mx-0" data-scroll data-scroll-speed="2.25">
                        <div className="text-green w-full">
                          <CircleInfinity />
                        </div>
                        <div className="flex-1 md:w-full px-2 md:px-0 relative z-10">
                          <h3 className="text-3xl md:text-3xl xl:text-4xl leading-none tracking-tighter">Content &amp;<br/>Creative</h3>
                          
                          <p className="font-mono text-sm mb-5 md:mb-8">We work best with creatively brave multi-channel campaigns, especially when one creative through-line needs to thrive in different places and durations.</p>

                          <Link href="/services/content-and-creative"><a aria-label="Navigate to Content &amp; Creative" className="underline tracking-tight text-lg inline-block items-center">Learn more</a></Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-1/3 md:px-8">
                    <div className="h-full py-6 md:pb-10 md:pt-32 border-b md:border-b-0 md:border-l md:border-r border-dotted border-off-black border-opacity-50 md:px-8">
                      <div className="flex flex-wrap -mx-4 md:mx-0" data-scroll data-scroll-speed="1.75">
                        <div className="text-purple w-full">
                          <CircleInfinity />
                        </div>
                        <div className="flex-1 md:w-full px-2 md:px-0 relative z-10">
                          <h3 className="text-3xl md:text-3xl xl:text-4xl leading-none tracking-tighter">Strategy &amp;<br/>Consultancy</h3>
                          
                          <p className="font-mono text-sm mb-5 md:mb-8">We help brands plan, create and measure video. We help upskill internal talent to build and grow your video ecosystem like an extension of the team.</p>

                          <Link href="/services/strategy-and-consultancy"><a aria-label="Navigate to Strategy &amp; Consultancy" className="underline tracking-tight text-lg inline-block items-center">Learn more</a></Link>
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

const HOMEPAGE_QUERY = `
  query HomePage {
    site: _site {
      favicon: faviconMetaTags {
        ...metaTagsFragment
      }
    }
    home {
      seo: _seoMetaTags {
        ...metaTagsFragment
      }
      heroMetaText
      heroHeading
      videoRawUrl
      whatWeDoText
    }
  }
  ${metaTagsFragment}
`

export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY
  })

  return {
    props: {
      data,
    },
  }
}