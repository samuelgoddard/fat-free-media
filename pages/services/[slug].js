import Head from "next/head";
import Link from "next/link";
import { renderMetaTags, Image } from "react-datocms";
import Layout from "../../components/layout";
import { request } from "../../lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "../../lib/fragments";
import Container from "../../components/container";
import Footer from "../../components/footer";
import BigX from "../../components/big-x";
import CircleInfinity from "../../components/circle-infinity";
import { motion } from "framer-motion"
import { fade } from "../../helpers/transitionHelper"
import {  SmoothScrollProvider } from '../../contexts/SmoothScroll.context'

export default function ServiceSingle({ data: { site, service } }) {
  const metaTags = service._seoMetaTags.concat(site.favicon);

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
            <BigX color="text-white" />
            <div className="relative">
              <Container>
                <div className="pt-40 md:pt-48 xl:pt-56 2xl:pt-64 relative pb-8 md:pb-16 xl:pb-20" data-scroll data-scroll-speed="1.4">
                  <div className="flex flex-wrap items-center justify-center md:-mx-2 lg:-mx-8">
                    <div className="w-auto md:w-2/12 lg:w-3/12 md:px-2 lg:px-8 hidden md:block">
                      <CircleInfinity color="bg-orange" small />
                      <div className="flex-1 h-px -mt-3 bg-off-black"></div>
                    </div>
                    <div className="flex-1 text-center md:px-2 lg:px-8">
                      <h1 className="text-6xl md:text-7xl xl:text-8xl 2xl:text-9xl leading-none w-full tracking-tighter max-w-sm md:max-w-xl xl:max-w-2xl mt-8 mx-auto md:mx-0">{ service.heroHeading }</h1>
                    </div>
                  </div>
                </div>
              </Container>

              <Container thin>
                <div className="relative pb-12 md:pb-12 xl:pb-12" data-scroll data-scroll-speed="1.4">
                  <div className="text-xl md:text-xl xl:text-2xl leading-none w-full tracking-tighter max-w-sm md:max-w-xl xl:max-w-xl uppercase" dangerouslySetInnerHTML={{ __html: service.heroText }}></div>
                </div>
              </Container>

              <div className="relative pb-12 md:pb-20 xl:pb-32">
                {
                  service.contentBlocks.map((block) => (
                    <div key={block.id} className="pb-8 md:pb-16 xl:pb-20" data-scroll data-scroll-speed="1.6">
                      {
                        block._modelApiKey === 'text' &&
                        <Container thin>
                          <div className="flex flex-wrap md:-mx-5">
                            <div className="w-full md:w-1/3 md:px-5">
                              <div className="w-full max-w-xs">
                                { block.headingMetaText && (
                                  <span className="block text-xs uppercase tracking-tighter leading-none">— { block.headingMetaText }</span>
                                )}
                                { block.heading && (
                                  <h2 className="text-4xl md:text-5xl xl:text-6xl leading-none tracking-tighter">{ block.heading }</h2>
                                )}
                              </div>
                            </div>
                            <div className="w-full md:w-2/3 md:px-5">
                              <div className="content text-xl md:text-2xl tracking-tighter leading-tight max-w-3xl" dangerouslySetInnerHTML={{ __html: block.text }}></div>
                            </div>
                          </div>
                        </Container>
                      }
                      {
                        block._modelApiKey === 'image' &&
                        <Container>
                          <Image
                            data={{
                              ...block.image.responsiveImage,
                              alt: block.image.alt ? block.image.alt : block.image.title,
                            }}
                            className="w-full"
                          />
                        </Container>
                      }
                      {
                        block._modelApiKey === 'video' &&
                        <Container>
                          <video controls={true} className="w-full home-video object-cover">
                            <source src={ block.videoUrl } type="video/mp4" />
                            
                            Sorry. Your browser does not support the video tag.
                          </video>
                        </Container>
                      }
                    </div>
                  ))
                }
              </div>
              
              { service.services.length > 0 && (
                <div className="bg-yellow text-black yellow-highlight py-12 md:py-24 xl:py-32">
                  <Container>
                    <ul>
                      {
                        service.services.map((block, i) => {
                          let scrollAmount = -1.3;
                          let paddingClass = 'pl-0 md:pl-8 xl:pl-12';
                          let alignClass = 'justify-start';

                          if (i === 0) {
                            scrollAmount = 0.4;
                            paddingClass = 'pl-0 md:pl-8 xl:pl-12';
                            alignClass = 'justify-start'
                          } else if (i === 1) {
                            scrollAmount = 0.95;
                            paddingClass = 'pl-12 md:pl-48 xl:pl-64';
                            alignClass = 'justify-center'
                          } else if (i === 2) {
                            scrollAmount = -0.45;
                            paddingClass = 'pr-0 md:pr-12 xl:pr-16';
                            alignClass = 'justify-center'
                          } else if (i === 3) {
                            scrollAmount = 0.65;
                            paddingClass = 'pr-0 md:pr-24 xl:pr-32';
                            alignClass = 'justify-end'
                          } else if (i === 4) {
                            scrollAmount = -0.96;
                            paddingClass = 'pr-0 md:pr-16 xl:pr-24';
                            alignClass = 'justify-center'
                          } else if (i === 5) {
                            scrollAmount = 0.85;
                            paddingClass = 'pl-0 md:pl-16 xl:pl-24';
                            alignClass = 'justify-start'
                          } else if (i === 6) {
                            scrollAmount = -0.45;
                            paddingClass = 'pl-0 md:pr-16 xl:pr-20';
                            alignClass = 'justify-end'
                          } else if (i === 7) {
                            scrollAmount = -0.95;
                            paddingClass = 'pl-0 md:pl-12 xl:pl-16';
                            alignClass = 'justify-start'
                          } else if (i === 8) {
                            scrollAmount = 0.75;
                            paddingClass = 'pl-0 md:pl-8 xl:pl-12';
                            alignClass = 'justify-center'
                          } else if (i === 9) {
                            scrollAmount = -0.9;
                            paddingClass = 'pl-0 md:pl-8 xl:pl-12';
                            alignClass = 'justify-center'
                          }

                          return ( 
                            <li key={block.id} className={`pb-4 lg:pb-6 pt-3 lg:pt-4 text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tighter leading-tight block border-b-2 border-black ${paddingClass}`}>
                              { i > 8 ? (
                                <span className={`flex ${alignClass}`} data-scroll data-scroll-direction="horizontal" data-scroll-speed={scrollAmount}>
                                  <span className="text-xl lg:text-3xl mr-1 lg:mr-3">{ i + 1 }</span> <span>{ block.title }</span>
                                </span>
                              ) : (
                                <span className={`flex ${alignClass}`} data-scroll data-scroll-direction="horizontal" data-scroll-speed={scrollAmount}>
                                  <span className="text-xl lg:text-3xl mr-1 lg:mr-3">0{ i + 1 }</span> <span>{ block.title }</span>
                                </span>
                              )}
                            </li>
                          )
                        })
                      }
                    </ul>
                  </Container>
                </div>
              )}

              <div className="bg-off-black">
                <Link href="/contact">
                  <a aria-label="Navigate to Contact Page" className="pt-6 md:pt-8 pb-6 md:pb-10 block text-center text-off-white text-4xl md:text-5xl xl:text-6xl tracking-tighter leading-none">
                    <span className="inline-block border-b-2 border-off-white">
                      Let's talk about it
                    </span>
                  </a>
                </Link>
              </div>
              <Footer hideMarquee />
            </div>
          </motion.div>
        </motion.div>
      </Layout>
    </SmoothScrollProvider>
  );
}

const SERVICE_SINGLE_QUERY = `
  query ServiceSingle($slug: String) {
    site: _site {
      favicon: faviconMetaTags {
        ...metaTagsFragment
      }
    }
    service: service(filter: {slug: {eq: $slug}}) {
      _seoMetaTags {
        ...metaTagsFragment
      }
      title
      heroHeading
      heroText
      slug
      contentBlocks {
        ... on TextRecord {
          id
          _modelApiKey
          headingMetaText
          heading
          text
        }
        ... on ImageRecord {
          id
          _modelApiKey
          image {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 1600, h: 920 }) {
              ...responsiveImageFragment
            }
            title
            alt
          }
        }
        ... on VideoRecord {
          id
          _modelApiKey
          videoUrl
        }
      }
      services {
        text
        title
      }
    }
  }
  ${metaTagsFragment}
  ${responsiveImageFragment}
`


export async function getStaticProps({ params }) {
  const data = await request({
    query: SERVICE_SINGLE_QUERY,
    variables: {
      slug: params.slug,
    },
  })
  
  // key is needed here
  data.key = params.slug 

  return {
      props: {
        data
      }
  }
}

export async function getStaticPaths() {
  const data = await request({ query: `{ allServices { slug } }` });

  return {
    paths: data.allServices.map((service) => `/services/${service.slug}`),
    fallback: false,
  };
}