import Head from "next/head";
import { renderMetaTags, Image } from "react-datocms";
import Header from "../../components/header";
import Layout from "../../components/layout";
import { request } from "../../lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "../../lib/fragments";
import Container from "../../components/container";
import Footer from "../../components/footer";
import BigX from "../../components/big-x";
import BeliefHover from "../../components/belief-hover";
// import CircleInfinity from "../../components/circle-infinity";
import AboutHero from "../../components/about-hero";
import FancyLink from "../../components/fancy-link";
import VideoRevealer from "../../components/video-revealer";
import { motion } from "framer-motion"
import Carousel from "../../components/carousel";
import { fade } from "../../helpers/transitionHelper"
import {  SmoothScrollProvider } from '../../contexts/SmoothScroll.context'

export default function ServiceSingle({ data: { site, service } }) {
  const metaTags = service._seoMetaTags.concat(site.favicon);
  // let shapeColour = { color: service.shapeColour.hex };

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
            <Header theme="white" />
            {/* <BigX color="text-white" /> */}
            <div className="relative">
              {/* <Container>
                <div className="pt-40 md:pt-48 xl:pt-56 2xl:pt-64 relative pb-8 md:pb-16 xl:pb-20" data-scroll data-scroll-speed="1.4">
                  <div className="flex flex-wrap items-center justify-center md:-mx-2 lg:-mx-8">
                    <div className="w-auto md:w-2/12 lg:w-3/12 md:px-2 lg:px-8 hidden md:block" style={shapeColour}>
                      <CircleInfinity small />
                      <div className="flex-1 h-px -mt-3 bg-off-black"></div>
                    </div>
                    <div className="flex-1 text-center md:px-2 lg:px-8">
                      <h1 className="text-6xl md:text-7xl xl:text-8xl 2xl:text-9xl leading-none w-full tracking-tighter max-w-sm md:max-w-xl xl:max-w-2xl mt-8 mx-auto md:mx-0">{ service.heroHeading }</h1>
                    </div>
                  </div>
                </div>
              </Container> */}
              <div className="">
                <div className="relative z-0" data-scroll-sticky data-scroll data-scroll-target="#scroll-container">
                  <AboutHero 
                    metaText={service.heroHeading}
                    text={service.heroText}
                    defaultImage={service.heroImage}
                  />
                </div>
              </div>

              {/* <Container thin>
                <div className="relative pb-12 md:pb-12 xl:pb-12" data-scroll data-scroll-speed="1.4">
                  <div className="text-xl md:text-xl xl:text-2xl leading-none w-full tracking-tighter max-w-sm md:max-w-xl xl:max-w-xl uppercase" dangerouslySetInnerHTML={{ __html: service.heroText }}></div>
                </div>
              </Container> */}

              <div className="relative pb-12 md:pb-20 xl:pb-32 relative z-20 bg-off-white pt-16 md:pt-16 xl:pt-24">
                {
                  service.contentBlocks.map((block) => (
                    <div key={block.id} className="pb-12 md:pb-16 xl:pb-20" data-scroll data-scroll-speed="1.6">
                      {
                        block._modelApiKey === 'text' &&
                        <Container thin>
                          <div className="flex flex-wrap md:-mx-5">
                            <div className="w-full md:w-1/3 md:px-5">
                              <div className="w-full max-w-xs lg:pr-8">
                                { block.headingMetaText && (
                                  <span className="block text-xs uppercase tracking-tighter leading-none mb-1 md:mb-3">— { block.headingMetaText }</span>
                                )}
                                { block.heading && (
                                  <h2 className="text-4xl md:text-5xl xl:text-6xl leading-none tracking-tighter">{ block.heading }</h2>
                                )}
                              </div>
                            </div>
                            <div className="w-11/12 md:w-1/2 lg:w-7/12 max-w-2xl md:px-5 md:ml-auto md:mr-10 lg:mr-16 md:mt-8">
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
                          <VideoRevealer 
                            text="WATCH"
                            videoAutoplayUrl={block.videoUrlAutoplayingCover}
                            videoFullHd={block.videoUrl1080p} 
                          />
                        </Container>
                      }
                      {
                          block._modelApiKey === 'quote' &&
                          <div>
                            { block.metaText && (
                              <Container thin>
                                <span className="block text-xs uppercase tracking-tighter leading-none mb-4 md:mb-6 xl:mb-6">{ block.metaText } —</span>
                              </Container>
                            )}
                            <Container>
                              <div className="relative">
                                <div className="w-full h-full absolute top-0 left-0 right-0 bottom-0 flex flex-wrap items-center justify-center">
                                  <span data-scroll data-scroll-speed="2.75" className="block w-32 md:w-48 xl:w-64 h-32 md:h-48 xl:h-64 bg-yellow rounded-full"></span>
                                </div>
                                <span className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 3xl:text-8xl leading-none w-full tracking-tighter pr-6 md:pr-16 z-10 block mb-8 md:mb-5 relative">“ { block.text } ”</span>
                              </div>
                            </Container>
                            <Container thin>
                              <div className="flex">
                                <div className="ml-auto">
                                  <span className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl 3xl:text-5xl leading-none tracking-tighter block mb-2">– { block.authorName }</span>
                                  { block.authorJobTitle && (
                                    <span className="block text-base uppercase tracking-tighter leading-none ml-6 md:ml-6 xl:ml-8">{ block.authorJobTitle }</span>
                                  )}
                                </div>
                              </div>
                            </Container>
                          </div>
                        }
                        {
                          block._modelApiKey === 'callout_yellow' &&
                          <div className="bg-yellow yellow-highlight pt-8 pb-16 md:pt-12 md:pb-20 lg:pt-16 lg:pb-24 xl:pt-20 xl:pb-32 overflow-hidden relative text-black">
                            <div data-scroll data-scroll-speed="-1.5">
                              <BigX color="text-yellow-dark" />
                            </div>
                            <Container>
                              <div className="flex flex-wrap items-start 2xl:items-center md:-mx-12 relative z-20">
                                <div className="w-full md:w-1/2 md:px-12 mb-6 md:mb-0" data-scroll data-scroll-speed="0.25">
                                  <Image
                                    data={{
                                      ...block.image.responsiveImage,
                                      alt: block.image.alt ? block.image.alt : block.image.title,
                                    }}
                                    className="w-full relative z-0"
                                  />
                                </div>
                                <div className="w-full md:w-1/2 md:px-12" data-scroll data-scroll-speed="1.05">
                                  { block.metaText && (
                                    <span className="block text-xs uppercase tracking-tighter leading-none mb-6 md:mb-10">{ block.metaText } —</span>
                                  )}
                                  <div className="text-2xl md:text-3xl xl:text-4xl leading-none tracking-tighter pr-8 md:pr-8 lg:pr-16 xl:pr-20 mb-6 md:mb-10 content" dangerouslySetInnerHTML={{ __html: block.text }}></div>
                                </div>
                              </div>
                            </Container>
                          </div>
                        }
                        {
                          block._modelApiKey === 'images2_square' &&
                          <div className="overflow-hidden">
                            <Container>
                              <div className="flex flex-wrap -mx-5 md:-mx-8 xl:-mx-12">
                                { block.images.map((image, i) => (
                                  <div key={i} className="w-1/2 px-5 md:px-8 xl:px-12">
                                    <Image
                                      data={{
                                        ...image.responsiveImage,
                                        alt: image.alt ? image.alt : image.title,
                                      }}
                                      className="w-full"
                                    />
                                  </div>
                                ))}
                              </div>
                            </Container>
                          </div>
                        }
                        {
                          block._modelApiKey === 'images_carousel' &&
                          <div className="overflow-hidden">
                            <Container>
                              <Carousel images={block.images}/>
                            </Container>
                          </div>
                        }
                        {
                          block._modelApiKey === 'images3_square' &&
                          <div>
                            <div className="flex flex-wrap -mx-24 md:-mx-48 xl:-mx-64">
                              { block.images.map((image, i) => (
                                <div key={i} className="w-1/3 px-5 md:px-8 xl:px-12">
                                  <Image
                                    data={{
                                      ...image.responsiveImage,
                                      alt: image.alt ? image.alt : image.title,
                                    }}
                                    className="w-full"
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        }
                        {
                          block._modelApiKey === 'supporting_silent_video_portrait' &&
                          <Container>
                            <video loop={true} autoPlay={'autoplay'} muted preload="meta" className="mx-auto max-w-full object-cover z-10 portrait-video">
                              <source src={ block.videoUrl } type="video/mp4" />
                              
                              Sorry. Your browser does not support the video tag.
                            </video>
                          </Container>
                        }
                        {
                          block._modelApiKey === 'supporting_silent_video_square' &&
                          <Container>
                            <video loop={true} autoPlay={'autoplay'} muted preload="meta" className="mx-auto max-w-full object-cover z-10 square-video">
                              <source src={ block.videoUrl } type="video/mp4" />
                              
                              Sorry. Your browser does not support the video tag.
                            </video>
                          </Container>
                        }
                        {
                          block._modelApiKey === 'supporting_silent_video_landscape' &&
                          <Container>
                            <video loop={true} autoPlay={'autoplay'} muted preload="meta" className="mx-auto max-w-full object-cover z-10 md:w-8/12">
                              <source src={ block.videoUrl } type="video/mp4" />
                              
                              Sorry. Your browser does not support the video tag.
                            </video>
                          </Container>
                        }
                        {
                          block._modelApiKey === 'images4_square' &&
                          <div>
                            <div className="flex flex-wrap -mx-16 md:-mx-24 xl:-mx-32">
                              { block.images.map((image, i) => (
                                <div key={i} className="w-1/4 px-5 md:px-8 xl:px-12">
                                  <Image
                                    data={{
                                      ...image.responsiveImage,
                                      alt: image.alt ? image.alt : image.title,
                                    }}
                                    className="w-full"
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        }
                    </div>
                  ))
                }
              </div>
              
              { service.services.length > 0 && (
                <div className="bg-yellow text-black yellow-highlight py-12 md:py-24 xl:py-32 relative z-20">
                  <Container>
                    <ul>
                      {
                        service.services.map((block, i) => {
                          let scrollAmount = -1.3;
                          let paddingClass = 'pl-0 md:pl-8 xl:pl-12';
                          let alignClass = 'justify-start';
                          let properIndex = i + 1;
                          let properIndexTrimmed = `0${i + 1}`;

                          if (i === 0) {
                            scrollAmount = 0.4;
                            paddingClass = 'pl-0 md:pl-8 xl:pl-12';
                            alignClass = 'justify-start'
                          } else if (i === 1) {
                            scrollAmount = 0.95;
                            paddingClass = 'pl-0 md:pl-48 xl:pl-64';
                            alignClass = 'md:justify-center'
                          } else if (i === 2) {
                            scrollAmount = -0.45;
                            paddingClass = 'pr-0 md:pr-12 xl:pr-16';
                            alignClass = 'md:justify-center'
                          } else if (i === 3) {
                            scrollAmount = 0.65;
                            paddingClass = 'pr-0 md:pr-24 xl:pr-32';
                            alignClass = 'md:justify-end'
                          } else if (i === 4) {
                            scrollAmount = -0.96;
                            paddingClass = 'pr-0 md:pr-16 xl:pr-24';
                            alignClass = 'md:justify-center'
                          } else if (i === 5) {
                            scrollAmount = 0.85;
                            paddingClass = 'pl-0 md:pl-16 xl:pl-24';
                            alignClass = 'justify-start'
                          } else if (i === 6) {
                            scrollAmount = -0.45;
                            paddingClass = 'pl-0 md:pr-16 xl:pr-20';
                            alignClass = 'md:justify-end'
                          } else if (i === 7) {
                            scrollAmount = -0.95;
                            paddingClass = 'pl-0 md:pl-12 xl:pl-16';
                            alignClass = 'justify-start'
                          } else if (i === 8) {
                            scrollAmount = 0.75;
                            paddingClass = 'pl-0 md:pl-8 xl:pl-12';
                            alignClass = 'md:justify-center'
                          } else if (i === 9) {
                            scrollAmount = -0.9;
                            paddingClass = 'pl-0 md:pl-8 xl:pl-12';
                            alignClass = 'md:justify-center'
                          }

                          return ( 
                            <BeliefHover
                              alignClass={alignClass}
                              paddingClass={paddingClass}
                              scrollAmount={scrollAmount}
                              index={ i > 8 ? properIndex : properIndexTrimmed }
                              title={block.title}
                              text={block.text}
                              key={block.id}
                            />
                          )
                        })
                      }
                    </ul>
                  </Container>
                </div>
              )}

              <div className="bg-off-black pt-6 md:pt-8 pb-8 md:pb-10 block text-center text-off-white text-4xl md:text-5xl xl:text-6xl tracking-tighter leading-none relative z-20">
                <FancyLink link="/contact" a11yText="Navigate to contact page" text="Let's talk about it" thicc />
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
      shapeColour {
        hex
      }
      heroHeading
      heroText
      heroImage {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 1500, h: 1000 }) {
          ...responsiveImageFragment
        }
        title
        alt
      }
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
          videoUrlAutoplayingCover
          videoUrl1080p
        }
        ... on QuoteRecord {
          id
          _modelApiKey
          metaText
          text
          authorName
          authorJobTitle
        }
        ... on ImagesCarouselRecord {
          id
          _modelApiKey
          images {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 1500, h: 1000 }) {
              ...responsiveImageFragment
            }
            title
            alt
          }
        }
        ... on Images2SquareRecord {
          id
          _modelApiKey
          images {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 1200, h: 1200 }) {
              ...responsiveImageFragment
            }
            title
            alt
          }
        }
        ... on Images3SquareRecord {
          id
          _modelApiKey
          images {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 1200, h: 1200 }) {
              ...responsiveImageFragment
            }
            title
            alt
          }
        }
        ... on Images4SquareRecord {
          id
          _modelApiKey
          images {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 1200, h: 1200 }) {
              ...responsiveImageFragment
            }
            title
            alt
          }
        }
        ... on CalloutYellowRecord {
          id
          _modelApiKey
          metaText
          image {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 1200, h: 1200 }) {
              ...responsiveImageFragment
            }
            title
            alt
          }
          text
        }
        ... on SupportingSilentVideoPortraitRecord {
          id
          _modelApiKey
          videoUrl
        }
        ... on SupportingSilentVideoSquareRecord {
          id
          _modelApiKey
          videoUrl
        }
        ... on SupportingSilentVideoLandscapeRecord {
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