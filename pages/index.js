import Head from "next/head";
import { renderMetaTags, useQuerySubscription } from "react-datocms";
import Link from "next/link";
import Layout from "../components/layout";
import { request } from "../lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "../lib/fragments";
import Container from "../components/container";
import Footer from "../components/footer";
import { motion } from "framer-motion"
import { fade } from "../helpers/transitionHelper"
import { useContext } from 'react'
import { SmoothScrollContext, SmoothScrollProvider } from '../contexts/SmoothScroll.context'

export default function Index({ subscription }) {
  const { scroll } = useContext(SmoothScrollContext)
  const {
    data: { home, site },
  } = useQuerySubscription(subscription);

  const metaTags = home.seo.concat(site.favicon);

  return (
    <SmoothScrollProvider options={{ smooth: true, lerp: 0.13 }}>
      <Layout>
        {/* <Head>{renderMetaTags(metaTags)}</Head> */}
        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <motion.div variants={fade} className="mb-16 md:mb-20 pt-32 md:pt-48 xl:pt-56">
            <Container thin>
              <div className="w-full mb-12 md:mb-16 xl:mb-24">
                <div className="mb-5 md:mb-8">
                  <div className="flex mb-2">
                    <div className="w-5 h-5 bg-off-black rounded-full"></div>
                    <div className="w-5 h-5 -ml-2 bg-transparent border border-off-black rounded-full"></div>
                  </div>
                  <span className="block font-mono text-lg md:text-xl xl:text-2xl leading-none mb-1">2006—21</span>
                  <span className="block text-xs uppercase tracking-tighter leading-none">Bravery Without Ego</span>
                </div>
                <h1 className="text-5xl md:text-6xl xl:text-7xl leading-none w-full max-w-4xl tracking-tighter pr-12 xl:pr-0">We work with ambitious brands that need courage, consistency &amp; creativity in their videos, inside &amp; out.</h1>
              </div>
            </Container>

            <Container bleed>
              <div className="w-full mb-16 xl:mb-24">
                <div className="mb-4 md:mb-6 text-right px-6 md:px-0">
                  <Link href="/"><a aria-label="Navigate to Our Work" className="underline tracking-tight text-lg inline-block items-center">
                    <div className="flex items-center">
                      <span className="w-3 h-3 mt-px bg-off-black rounded-full mr-1 block"></span>
                      <span className="block">See our work</span>
                    </div>
                  </a></Link>
                </div>

                <div className="relative">
                  <span className="block upright font-mono text-xs absolute top-0 left-0 -ml-5 z-0 uppercase tracking-wide leading-none">Our Showreel</span>
                  <div className="w-full bg-green relative z-10">
                    <img src="placeholder.jpeg" alt="Dog Placeholder" className="w-full" />
                  </div>
                  <div className="h-12 md:h-64 w-64 bg-orange absolute bottom-0 left-0 md:left-auto md:right-0 z-0 -m-5"></div>
                </div>
              </div>
            </Container>

            <Container thin>
              <div className="w-full mb-12 md:mb-16 xl:mb-24">
                <div className="flex flex-wrap">
                  <div className="w-full md:w-full max-w-sm">
                    <span className="block text-xs uppercase tracking-tighter leading-none">Information —</span>
                    <h2 className="text-4xl md:text-5xl xl:text-6xl leading-none tracking-tighter">What we do</h2>
                  </div>

                  <div className="w-full md:w-1/2 max-w-md">
                    <p className="text-lg md:text-xl leading-snug tracking-tight mb-5 md:mb-8">The belief that every moment with a viewer is a privilege is central to what we do, which is why you won’t find clickbait or talking heads in our portfolio.</p>

                    <Link href="/"><a aria-label="Navigate to Contact us" className="underline tracking-tight text-lg inline-block items-center">Contact us</a></Link>
                  </div>
                </div>
              </div>

              <div className="w-full mb-12 md:mb-16 xl:mb-24">
                <div className="flex flex-wrap md:-mx-8">
                  <div className="w-full md:w-1/3 md:px-8">
                    <div className="h-full py-6 md:py-10 border-b md:border-b-0 md:border-l border-dotted border-off-black border-opacity-50 md:px-8">
                      <div className="flex flex-wrap -mx-4 md:mx-0">
                        <div className="md:flex w-auto md:w-full px-4 md:px-0 relative z-0" data-scroll data-scroll-speed="1">
                          <div className="w-10 md:w-16 xl:w-20 h-10 md:h-16 xl:h-20 bg-orange rounded-full"></div>
                          <div className="w-10 md:w-16 xl:w-20 h-10 md:h-16 xl:h-20 -mt-5 md:mt-0 md:-ml-8 xl:-ml-10 bg-transparent border border-off-black rounded-full"></div>
                        </div>
                        <div className="flex-1 md:w-full px-2 md:px-0 relative z-10" data-scroll data-scroll-speed="1.5">
                          <h3 className="text-3xl md:text-3xl xl:text-4xl leading-none tracking-tighter">Video<br/>Identity</h3>
                          
                          <p className="font-mono text-sm mb-5 md:mb-8">Video is usually the missing chapter of any brand guideline document. We help brands discover, grow and articulate how their brand looks, moves, sounds and feels in video.</p>

                          <Link href="/"><a aria-label="Navigate to Video identity" className="underline tracking-tight text-lg inline-block items-center">Learn more</a></Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="h-full w-full md:w-1/3 md:px-8">
                    <div className="py-6 md:pb-10 md:pt-64 border-b md:border-b-0 md:border-l border-dotted border-off-black border-opacity-50 md:px-8">
                      <div className="flex flex-wrap -mx-4 md:mx-0">
                        <div className="md:flex w-auto md:w-full px-4 md:px-0 relative z-0" data-scroll data-scroll-speed="3">
                          <div className="w-10 md:w-16 xl:w-20 h-10 md:h-16 xl:h-20 bg-green rounded-full"></div>
                          <div className="w-10 md:w-16 xl:w-20 h-10 md:h-16 xl:h-20 -mt-5 md:mt-0 md:-ml-8 xl:-ml-10 bg-transparent border border-off-black rounded-full"></div>
                        </div>
                        <div className="flex-1 md:w-full px-2 md:px-0 relative z-10 md:-mt-6" data-scroll data-scroll-speed="3.5">
                          <h3 className="text-3xl md:text-3xl xl:text-4xl leading-none tracking-tighter">Content &amp;<br/>Creative</h3>
                          
                          <p className="font-mono text-sm mb-5 md:mb-8">We work best with creatively brave multi-channel campaigns, especially when one creative through-line needs to thrive in lots of different places and durations.</p>

                          <Link href="/"><a aria-label="Navigate to Video identity" className="underline tracking-tight text-lg inline-block items-center">Learn more</a></Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-1/3 md:px-8">
                    <div className="h-full py-6 md:pb-10 md:pt-32 border-b md:border-b-0 md:border-l md:border-r border-dotted border-off-black border-opacity-50 md:px-8">
                      <div className="flex flex-wrap -mx-4 md:mx-0">
                        <div className="md:flex w-auto md:w-full px-4 md:px-0 relative z-0" data-scroll data-scroll-speed="2.5">
                          <div className="w-10 md:w-16 xl:w-20 h-10 md:h-16 xl:h-20 bg-purple rounded-full"></div>
                          <div className="w-10 md:w-16 xl:w-20 h-10 md:h-16 xl:h-20 -mt-5 md:mt-0 md:-ml-8 xl:-ml-10 bg-transparent border border-off-black rounded-full"></div>
                        </div>
                        <div className="flex-1 md:w-full px-2 md:px-0 relative z-10 md:-mt-6" data-scroll data-scroll-speed="3">
                          <h3 className="text-3xl md:text-3xl xl:text-4xl leading-none tracking-tighter">Team<br/>Empowerment</h3>
                          
                          <p className="font-mono text-sm mb-5 md:mb-8">We don’t believe in “video strategy”, so we wrote our own model instead. Our video cycle starts and ends with the viewer. It gives clarity and direction to any sized team. We help put it into practice. </p>

                          <Link href="/"><a aria-label="Navigate to Video identity" className="underline tracking-tight text-lg inline-block items-center">Learn more</a></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </motion.div>
        </motion.div>

        <Footer />
      </Layout>
    </SmoothScrollProvider>
  );
}

export async function getStaticProps() {
  const graphqlRequest = {
    query: `
      {
        site: _site {
          favicon: faviconMetaTags {
            ...metaTagsFragment
          }
        }
        home {
          seo: _seoMetaTags {
            ...metaTagsFragment
          }
        }
      }

      ${metaTagsFragment}
    `
  };

  return {
    props: {
      subscription: {
        enabled: false,
        initialData: await request(graphqlRequest),
      }
    },
  };
}