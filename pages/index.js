import Head from "next/head";
import Header from '../components/header'
import { request } from "../lib/datocms";
import Layout from "../components/layout";
import { renderMetaTags, useQuerySubscription } from "react-datocms";
import { metaTagsFragment } from "../lib/fragments";
import Container from "../components/container";
import Footer from "../components/footer";
import BigX from "../components/big-x";
import CircleInfinity from "../components/circle-infinity";
import VideoRevealer from "../components/video-revealer";
import FancyLink from "../components/fancy-link";
import { motion } from "framer-motion"
import { reveal, fade, scaleDown } from "../helpers/transitionHelper"
import { SmoothScrollProvider } from '../contexts/SmoothScroll.context'

export default function Index({ subscription }) {
  const {
    data: { home, site, disciplines },
  } = useQuerySubscription(subscription);

  const metaTags = home.seo.concat(site.favicon);

  return (
    <SmoothScrollProvider options={{ smooth: true, lerp: 0.13 }}>
      <Layout preview={subscription.preview}>
      <Head>
        {renderMetaTags(metaTags)}
      </Head>

        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <Header theme="off-black" />
          
          <motion.div variants={fade} className="mb-16 md:mb-20 pt-32 md:pt-56 xl:pt-64 overflow-hidden relative border-t-4 border-off-black-dark">
            <BigX color="text-white" />
            <Container thin>

              <motion.div
                initial="initial"
                animate="enter"
                exit="exit"
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
                    <motion.span variants={reveal} className="block font-mono text-lg md:text-xl xl:text-2xl leading-none mb-1">2006—{ new Date().getFullYear().toString().substr(2, 2) } </motion.span>
                  </div>
                  <div className="relative overflow-hidden" data-scroll data-scroll-speed="1">
                    <motion.span variants={reveal} className="block text-xs uppercase tracking-tighter leading-none">{ home.heroMetaText }</motion.span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial="initial"
                animate="enter"
                exit="exit"
                className="w-full mb-12 md:mb-10 xl:mb-0 relative z-10"
              >
                <motion.h1 variants={reveal} className="text-5xl md:text-6xl xl:text-7xl leading-negative w-full max-w-4xl tracking-tighter pr-12 xl:pr-0 split" data-scroll data-scroll-speed="1.35">{ home.heroHeading }</motion.h1>
              </motion.div>
            </Container>

            <Container bleed>
              <div className="w-full mb-16 md:mb-24 xl:mb-24 relative z-10" data-scroll data-scroll-speed="1.3">
                <div className="relative overflow-hidden">
                  <motion.div variants={reveal} className="text-right px-6 md:px-0 mb-2 md:mb-4 text-xl text-workLanding">
                    <FancyLink link={`/work`} text="See Our Work" a11yText="Navigate to Our Work Page" />
                  </motion.div>
                </div>

                <VideoRevealer
                  videoAutoplayUrl={home.videoAutoplayUrl}
                  videoFullHd={home.videoFullUrl}
                  metaText="Our Showreel"
                  text="WATCH"
                />
              </div>
            </Container>

            <Container thin>
              <div className="w-full mb-12 md:mb-16 xl:mb-24 relative z-10" data-scroll data-scroll-speed="1">
                <div className="flex flex-wrap">
                  <div className="w-11/12 md:w-full max-w-sm">
                    <span className="block text-xs uppercase mb-1 md:mb-3 tracking-tighter leading-none">Small but mighty —</span>
                    <h2 className="text-5xl md:text-6xl xl:text-7xl leading-none tracking-tighter">We do three things</h2>
                  </div>

                  <div className="w-full md:w-5/12 xl:w-6/12 md:ml-auto xl:mx-auto max-w-xl mt-3">
                    <p className="text-xl lg:text-2xl leading-tight tracking-tight mb-4 md:mb-6">We believe that every moment with a viewer is a privilege, and brands deserve creative bravery without the ego. That’s why you won’t find clickbait or talking heads in our portfolio.</p>

                    <span className="text-xl xl:text-2xl">
                      <FancyLink link="/contact" text="Contact us" a11yText="Navigate to contact us page" />
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-full mb-12 md:mb-16 xl:mb-24 2xl:mb-32 3xl:mb-40 relative z-10">
                <div className="flex flex-wrap border-dotted border-off-black border-opacity-50 border-t md:border-0 md:-mx-8">

                {home.whatWeDoBlocks.map((item, i) => {
                  let color = 'text-orange';
                  let scrollSpeed = 1.25;
                  let paddingClass = 'py-8 md:py-10';
                  
                  if (i === 0) { 
                    color = 'text-orange';
                    scrollSpeed = 1.25;
                    paddingClass = 'py-8 md:py-10';
                  } else if (i === 1 ) {
                    color = 'text-green';
                    scrollSpeed = 2.25;
                    paddingClass = 'py-8 md:pb-10 md:pt-64';
                  } else if (i === 2 ) {
                    color = 'text-purple'
                    scrollSpeed = 1.75;
                    paddingClass = 'py-8 md:pb-10 md:pt-32';
                  }
                  return (
                    <div className="w-full md:w-1/3 md:px-8">
                      <div className={`h-full md:border-l border-dotted border-off-black border-opacity-50 ${ paddingClass} ${ i !== 2 ? 'border-b md:border-b-0 md:pl-8' : 'md:border-b-0 md:border-r md:px-8'}`}>
                        <div className="flex flex-wrap -mx-4 md:mx-0" data-scroll data-scroll-speed={scrollSpeed}>
                          <div className={`${color} w-16 md:w-full`}>
                            <CircleInfinity />
                          </div>
                          <div className="flex-1 md:w-full px-2 md:px-0 relative z-10 ml-2 md:ml-0">
                            <h3 className="text-3xl md:text-3xl xl:text-5xl leading-none tracking-tighter w-full md:w-32 xl:w-48 ">{ item.heading }</h3>
                            
                            <div className="font-mono text-sm xl:text-base mb-4 md:mb-6 w-11/12 md:w-full" dangerouslySetInnerHTML={{ __html: item.text }}></div>

                            <span className="text-lg xl:text-xl">
                              <FancyLink link={`/services/${item.serviceLink.slug}`} text="Learn more" a11yText={`Navigate to ${item.serviceLink.title} page`} />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}

                  {/* <div className="w-full md:w-1/3 md:px-8">
                    <div className="h-full py-6 md:py-10 border-b md:border-b-0 md:border-l border-dotted border-off-black border-opacity-50 md:px-8">
                      <div className="flex flex-wrap -mx-4 md:mx-0" data-scroll data-scroll-speed="1.25">
                        <div className="text-orange w-full">
                          <CircleInfinity />
                        </div>
                        <div className="flex-1 md:w-full px-2 md:px-0 relative z-10">
                          <h3 className="text-3xl md:text-3xl xl:text-4xl leading-none tracking-tighter">Video<br/>Identity</h3>
                          
                          <p className="font-mono text-sm mb-4 md:mb-6">Video identity is the missing chapter of most brand guideline documents. We help brands articulate how their brand looks, moves, sounds and feels in video.</p>

                          <span className="text-lg">
                            <FancyLink link="/services/video-identity" text="Learn more" a11yText="Navigate to video identity page" />
                          </span>
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
                          
                          <p className="font-mono text-sm mb-4 md:mb-6">We work best with creatively brave multi-channel campaigns, especially when one creative through-line needs to thrive in different places and durations.</p>

                          <span className="text-lg">
                            <FancyLink link="/services/content-and-creative" text="Learn more" a11yText="Navigate to content &amp; creative page" />
                          </span>
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
                          
                          <p className="font-mono text-sm mb-4 md:mb-6">We help brands plan, create and measure video. We help upskill internal talent to build and grow your video ecosystem like an extension of the team.</p>

                          <span className="text-lg">
                            <FancyLink link="/services/strategy-and-consultancy" text="Learn more" a11yText="Navigate to strategy &amp; consultancy page" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div> */}
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

export async function getStaticProps({ preview }) {
  const HOMEPAGE_QUERY = {
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
          heroMetaText
          heroHeading
          videoAutoplayUrl
          videoFullUrl
          whatWeDoText
          whatWeDoBlocks {
            heading
            text
            serviceLink {
              title
              slug
            }
          }
        }
        disciplines: allDisciplines {
          slug 
          title
        }
      }
      ${metaTagsFragment}
    `,
    preview,
  };

  return {
    props: {
      subscription: preview
        ? {
            ...HOMEPAGE_QUERY,
            initialData: await request(HOMEPAGE_QUERY),
            token: process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN,
            environment: process.env.NEXT_DATOCMS_ENVIRONMENT || null,
          }
        : {
            enabled: false,
            initialData: await request(HOMEPAGE_QUERY),
          },
    },
  };
}