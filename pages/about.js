import Head from "next/head";
import Link from "next/link";
import { renderMetaTags } from "react-datocms";
import Layout from "../components/layout";
import { request } from "../lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "../lib/fragments";
import Container from "../components/container";
import Footer from "../components/footer";
import BigX from "../components/big-x";
import { motion } from "framer-motion"
import { fade } from "../helpers/transitionHelper"
import { useContext } from 'react'
import { SmoothScrollContext, SmoothScrollProvider } from '../contexts/SmoothScroll.context'

export default function About({ data: { site } }) {
  // const metaTags = about.seo.concat(site.favicon);

  return (
    <SmoothScrollProvider options={{ smooth: true, lerp: 0.13 }}>
      <Layout>
        {/* <Head>{renderMetaTags(metaTags)}</Head> */}
        
        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
          className="mb-16 md:mb-20"
        >
          <motion.div variants={fade} className="mb-16 md:mb-20 overflow-hidden relative">
            <div className="bg-black text-white pt-40 md:pt-48 xl:pt-56 pb-8 md:pb-32 xl:pb-48 mb-8 md:mb-20 relative">
              <Container thin>
                <div className="relative z-10">
                  <span data-scroll data-scroll-speed="0.4" className="block text-md md:text-lg xl:text-xl uppercase tracking-tighter leading-none mb-2 md:mb-4 xl:mb-8">A small but mighty team</span>

                  <h1 className="text-4xl md:text-5xl xl:text-6xl leading-none w-full max-w-4xl tracking-tighter pr-12 xl:pr-0 mb-10 md:mb-0" data-scroll data-scroll-speed="1.1">Video carries more feeling and uses more senses than any other medium. It has the potential to pull at the hearts and change the minds of those who watch it more than any other format.</h1>
                </div>

                <span data-scroll data-scroll-speed="0.35" className="font-mono text-xs tracking-wide leading-none md:absolute bottom-0 right-0 mb-12 mr-8 z-10">* We don’t say yes to everything, because we want to give our yes’s our everything.</span>

                <video loop={true} playsInline autoPlay="autoplay" muted className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover z-0">
                  <source src="https://test-videos.co.uk/vids/bigbuckbunny/webm/vp9/1080/Big_Buck_Bunny_1080_10s_10MB.webm" type="video/webm" />
                  <source src="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_10MB.mp4" type="video/mp4" />
                  
                  Sorry. Your browser does not support the video tag.
                </video>
              </Container>
            </div>

            <Container thin>
              <div className="w-full mb-12 md:mb-16 xl:mb-24 relative z-10" data-scroll data-scroll-speed="1">
                <div className="flex flex-wrap">
                  <div className="w-full md:w-full max-w-md">
                    <span className="block text-xs uppercase tracking-tighter leading-none">Information —</span>
                    <h2 className="text-5xl md:text-6xl xl:text-7xl leading-none tracking-tighter">Our Team</h2>
                  </div>

                  <div className="w-full md:w-1/2 max-w-md">
                    <p className="text-lg md:text-xl leading-snug tracking-tight md:mt-8">Everything we do is underpinned by our guiding principle: to work hard and do great work.</p>
                  </div>
                </div>
              </div>

              <div className="w-full mb-12 md:mb-16 xl:mb-24 relative z-10">
                <div className="flex flex-wrap">
                  <div className="h-full w-full md:w-1/3">
                    <div className="h-full py-8 md:py-10 md:pt-32 border-b md:border-b-0 md:border-l border-dotted border-off-black border-opacity-50 md:px-8 lg:px-12 xl:px-16">
                      <div data-scroll data-scroll-speed="2.25">
                        <div className="relative mr-5 mb-5">
                          <img src="https://placedog.net/475/575" alt="Dog Placeholder" className="w-full relative z-0" />
                          <span className="block upright font-mono text-xs absolute top-0 right-0 -mr-5 z-0 uppercase tracking-wide leading-none">Creative Director</span>
                        </div>

                        <h3 className="text-3xl md:text-3xl xl:text-4xl leading-none tracking-tighter">Neil Rostance</h3>
                        
                        <p className="font-mono text-sm mb-5 md:mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur efficitur quam id est pulvinar eleifend. Ut sed dictum urna. Nullam laoreet congue elit.</p>

                        <Link href="/"><a aria-label="Navigate to Neil Rostance's biography" className="underline tracking-tight text-lg inline-block items-center">Read bio</a></Link>
                      </div>
                    </div>
                  </div>

                  <div className="h-full w-full md:w-1/3">
                    <div className="h-full py-8 md:py-10 md:pt-0 border-b md:border-b-0 md:border-l border-dotted border-off-black border-opacity-50 md:px-8 lg:px-12 xl:px-16">
                      <div data-scroll data-scroll-speed="1.25">
                        <div className="relative mr-5 mb-5">
                          <img src="https://placedog.net/430/540" alt="Dog Placeholder" className="w-full relative z-0" />
                          <span className="block upright font-mono text-xs absolute top-0 right-0 -mr-5 z-0 uppercase tracking-wide leading-none">Exec Producer</span>
                        </div>

                        <h3 className="text-3xl md:text-3xl xl:text-4xl leading-none tracking-tighter">Kate Rostance</h3>
                        
                        <p className="font-mono text-sm mb-5 md:mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur efficitur quam id est pulvinar eleifend. Ut sed dictum urna. Nullam laoreet congue elit.</p>

                        <Link href="/"><a aria-label="Navigate to Kate Rostance's biography" className="underline tracking-tight text-lg inline-block items-center">Read bio</a></Link>
                      </div>
                    </div>
                  </div>

                  <div className="h-full w-full md:w-1/3">
                    <div className="h-full py-8 md:py-10 md:pt-64 border-b md:border-b-0 md:border-l md:border-r border-dotted border-off-black border-opacity-50 md:px-8 lg:px-12 xl:px-16">
                      <div data-scroll data-scroll-speed="1.75">
                        <div className="relative mr-5 mb-5">
                          <img src="https://placedog.net/450/550" alt="Dog Placeholder" className="w-full relative z-0" />
                          <span className="block upright font-mono text-xs absolute top-0 right-0 -mr-5 z-0 uppercase tracking-wide leading-none">Producer</span>
                        </div>
                        <h3 className="text-3xl md:text-3xl xl:text-4xl leading-none tracking-tighter">Ash Gardiner</h3>
                        
                        <p className="font-mono text-sm mb-5 md:mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur efficitur quam id est pulvinar eleifend. Ut sed dictum urna. Nullam laoreet congue elit.</p>

                        <Link href="/"><a aria-label="Navigate to Ash Gardiner's biography" className="underline tracking-tight text-lg inline-block items-center">Read bio</a></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>

            <div className="bg-yellow pt-8 pb-16 md:pt-12 md:pb-20 lg:pt-16 lg:pb-24 xl:pt-20 xl:pb-32 overflow-hidden relative">
              <BigX color="text-yellow-dark" />
              <Container>
                <div className="flex flex-wrap items-center md:-mx-12 relative z-20">
                  <div className="w-full md:w-1/2 md:px-12 mb-6 md:mb-0" data-scroll data-scroll-speed="0.25">
                    <img src="https://placedog.net/800/1200" alt="Dog Placeholder" className="w-full relative z-0" />
                  </div>
                  <div className="w-full md:w-1/2 md:px-12" data-scroll data-scroll-speed="1.05">
                    <span className="block text-xs uppercase tracking-tighter leading-none mb-6 md:mb-10">No bullshit —</span>
                    <p className="text-3xl md:text-4xl xl:text-5xl leading-none tracking-tighter pr-8 md:pr-8 lg:pr-16 xl:pr-20 mb-6 md:mb-10">We know that prospective clients trust personal recommendation above all else, so we concentrate our efforts on delivering the best service to brands that love what we do, and the rest falls into place.</p>

                    <Link href="/"><a aria-label="Navigate to Start a project" className="underline tracking-tight text-lg inline-block items-center">Start a project</a></Link>
                  </div>
                </div>
              </Container>
            </div>

            <Footer />
          </motion.div>
        </motion.div>
      </Layout>
    </SmoothScrollProvider>
  );
}

const ABOUT_QUERY = `
  query AboutPage {
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
    query: ABOUT_QUERY
  })

  return {
    props: {
      data,
    },
  }
}