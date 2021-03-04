import Head from "next/head";
import Link from "next/link";
import { renderMetaTags, Image } from "react-datocms";
import Header from "../../components/header";
import Layout from "../../components/layout";
import { request } from "../../lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "../../lib/fragments";
import Container from "../../components/container";
import Footer from "../../components/footer";
import FancyLink from "../../components/fancy-link";
import BigX from "../../components/big-x";
import VideoRevealer from "../../components/video-revealer";
import { motion } from "framer-motion"
import { fade, reveal, scaleDown } from "../../helpers/transitionHelper"
import {  SmoothScrollProvider } from '../../contexts/SmoothScroll.context'
import Marquee from 'react-double-marquee';

export default function WorkSingle({ data: { site, work } }) {
  const metaTags = work._seoMetaTags.concat(site.favicon);

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
            <Header theme="off-black" />
            <BigX color="text-white" left />
            <div className="relative">
              <Container>
                <div className="text-center pt-40 md:pt-48 xl:pt-56 relative pb-8 md:pb-16 xl:pb-20">
                  <div className="relative overflow-hidden mb-2 md:mb-0" data-scroll data-scroll-speed="1.6">
                    <motion.span variants={reveal} className="block md:text-lg uppercase tracking-tighter leading-none">{ work.heroHeading }</motion.span>
                  </div>
                  <h1 data-scroll data-scroll-speed="1.4" className="text-6xl md:text-7xl xl:text-8xl leading-none w-full tracking-tighter mb-4 md:mb-6 xl:mb-8 max-w-md md:max-w-xl xl:max-w-2xl mx-auto">Fat Free x { work.heroMeta }</h1>
              </div>
              </Container>

              <div data-scroll data-scroll-speed="1.3" className="border-t border-b border-off-black pt-3 pb-4 mb-5 md:mb-8 xl:mb-0">
                <div className="w-full whitespace-no-wrap text-3xl md:text-4xl xl:text-5xl tracking-tighter leading-tight">
                  <Marquee>
                    {work.tickerText.map((ticker, i) => (
                      <span className="inline-block"key={i}><span className="inline mx-1">{ ticker.text }</span> <span className="inline mx-3">•</span></span>
                    ))}
                    {work.tickerText.map((ticker, i) => (
                      <span className="inline-block"key={i}><span className="inline mx-1">{ ticker.text }</span> <span className="inline mx-3">•</span></span>
                    ))}
                    {work.tickerText.map((ticker, i) => (
                      <span className="inline-block"key={i}><span className="inline mx-1">{ ticker.text }</span> <span className="inline mx-3">•</span></span>
                    ))}
                  </Marquee>
                </div>
              </div>

              <div className="relative overflow-hidden pt-6 md:pb-20 xl:pb-32 md:-mt-4 lg:-mt-20 xl:-mt-12 2xl:-mt-16">
                <BigX color="text-white" bottom />
  
                {/* Modular Content */}
                <div className="relative pb-0 md:pb-20 xl:pb-32">
                  {
                    work.contentBlocks.map((block) => (
                      <div key={block.id} className="pb-12 md:pb-12 xl:pb-16" data-scroll data-scroll-speed="1.6">
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
                        {
                          block._modelApiKey === 'image_grid_left' &&
                          <Container>
                            <div className="flex flex-wrap md:-mx-12 xl:-mx-24">
                              <div className="w-full md:w-1/2 md:pl-12 xl:pl-24 mb-12 md:mb-0" data-scroll data-scroll-speed="0.5">
                                <figure className="w-full">
                                  <Image
                                    data={{
                                      ...block.image1.responsiveImage,
                                      alt: block.image1.alt ? block.image1.alt : block.image1.title,
                                    }}
                                    className="w-full mb-3"
                                  />
                                  { block.image1.alt && (
                                    <figcaption className="block md:upright md:absolute top-0 right-0 md:-mr-6 z-0 uppercase text-sm md:text-base tracking-tighter leading-none">{block.image1.alt}</figcaption>
                                  )}
                                </figure>
                              </div>
                              <div className="w-full md:w-1/2 px-8 md:px-12 xl:px-24" data-scroll data-scroll-speed="1.6">
                                <div className="md:pt-24 xl:pt-32 md:px-12 mx-auto">
                                  <figure className="w-full xl:w-10/12 mx-auto">
                                    <Image
                                      data={{
                                        ...block.image2.responsiveImage,
                                        alt: block.image2.alt ? block.image2.alt : block.image2.title,
                                      }}
                                      className="w-full mb-3"
                                    />
                                    { block.image2.alt && (
                                      <figcaption className="block text-sm md:text-base uppercase tracking-tighter leading-none text-right">{block.image2.alt}</figcaption>
                                    )}
                                  </figure>
                                </div>
                              </div>
                            </div>
                          </Container>
                        }
                        {
                          block._modelApiKey === 'image_grid_right' &&
                          <Container>
                            <div className="flex flex-wrap md:-mx-12 xl:-mx-24">
                              <div className="w-full md:w-1/2 px-8 md:px-12 xl:px-24" data-scroll data-scroll-speed="1.6">
                                <div className="md:pt-24 xl:pt-32 md:px-12 mx-auto">
                                  <figure className="w-full xl:w-10/12 mx-auto">
                                    <Image
                                      data={{
                                        ...block.image1.responsiveImage,
                                        alt: block.image1.alt ? block.image1.alt : block.image1.title,
                                      }}
                                      className="w-full mb-3"
                                    />
                                    { block.image1.alt && (
                                      <figcaption className="block text-sm md:text-base uppercase tracking-tighter leading-none text-right">{block.image1.alt}</figcaption>
                                    )}
                                  </figure>
                                </div>
                              </div>
                              <div className="w-full md:w-1/2 md:pr-12 xl:pr-24 mb-12 md:mb-0" data-scroll data-scroll-speed="0.5">
                                <figure className="w-full relative">
                                  <Image
                                    data={{
                                      ...block.image2.responsiveImage,
                                      alt: block.image2.alt ? block.image2.alt : block.image2.title,
                                    }}
                                    className="w-full mb-3"
                                  />
                                  { block.image2.alt && (
                                    <figcaption className="block md:upright md:absolute top-0 left-0 md:-ml-6 z-0 uppercase text-sm md:text-base tracking-tighter leading-none">{block.image2.alt}</figcaption>
                                  )}
                                </figure>
                              </div>
                            </div>
                          </Container>
                        }
                        {
                          block._modelApiKey === 'image_grid_with_text_left' &&
                          <Container>
                            <div className="flex flex-wrap md:-mx-12 xl:-mx-24">
                              <div className="w-full md:w-7/12 xl:w-5/12 md:pl-12 xl:pl-24 mb-12 md:mb-0" data-scroll data-scroll-speed="0">
                                <figure className="w-full mb-8 md:mb-16 xl:mb-24 relative">
                                  <Image
                                    data={{
                                      ...block.image1.responsiveImage,
                                      alt: block.image1.alt ? block.image1.alt : block.image1.title,
                                    }}
                                    className="w-full mb-3"
                                  />
                                  { block.image1.alt && (
                                    <figcaption className="block md:upright md:absolute top-0 right-0 md:-mr-6 z-0 uppercase text-sm md:text-base tracking-tighter leading-none">{block.image1.alt}</figcaption>
                                  )}
                                </figure>

                                <div className="text-2xl md:text-2xl lg:text-3xl xl:text-3xl leading-none w-full tracking-tighter pr-12 md:pr-16 z-10 block mb-8 md:mb-5 relative content" dangerouslySetInnerHTML={{ __html: block.text }}></div>
                              </div>
                              <div className="w-full md:w-5/12 xl:w-7/12 px-8 md:px-12 xl:px-24" data-scroll data-scroll-speed="1.6">
                                <div className="md:pt-24 xl:pt-32">
                                  <figure className="w-full xl:w-11/12 ml-auto mb-8 md:mb-16 xl:mb-24">
                                    <Image
                                      data={{
                                        ...block.image2.responsiveImage,
                                        alt: block.image2.alt ? block.image2.alt : block.image2.title,
                                      }}
                                      className="w-full mb-3"
                                    />
                                    { block.image2.alt && (
                                      <figcaption className="block text-sm md:text-base uppercase tracking-tighter leading-none text-right">{block.image2.alt}</figcaption>
                                    )}
                                  </figure>
                                </div>
                              </div>
                            </div>
                          </Container>
                        }
                        {
                          block._modelApiKey === 'image_grid_with_text_right' &&
                          <Container>
                            <div className="flex flex-wrap md:-mx-12 xl:-mx-24">
                              <div className="w-full md:w-5/12 xl:w-7/12 px-8 md:px-12 xl:px-24" data-scroll data-scroll-speed="1.6">
                                <div className="md:pt-24 xl:pt-32">
                                  <figure className="w-full xl:w-11/12 ml-auto mb-8 md:mb-16 xl:mb-24">
                                    <Image
                                      data={{
                                        ...block.image1.responsiveImage,
                                        alt: block.image1.alt ? block.image1.alt : block.image1.title,
                                      }}
                                      className="w-full mb-3"
                                    />
                                    { block.image1.alt && (
                                      <figcaption className="block text-sm md:text-base uppercase tracking-tighter leading-none text-right">{block.image1.alt}</figcaption>
                                    )}
                                  </figure>
                                </div>
                              </div>
                              <div className="w-full md:w-7/12 xl:w-5/12 md:pr-12 xl:pr-24 mb-12 md:mb-0" data-scroll data-scroll-speed="0">
                                <figure className="w-full mb-8 md:mb-16 xl:mb-24 relative">
                                  <Image
                                    data={{
                                      ...block.image2.responsiveImage,
                                      alt: block.image2.alt ? block.image2.alt : block.image2.title,
                                    }}
                                    className="w-full mb-3"
                                  />
                                  { block.image2.alt && (
                                    <figcaption className="block md:upright md:absolute top-0 left-0 md:-ml-6 z-0 uppercase text-sm md:text-base tracking-tighter leading-none">{block.image2.alt}</figcaption>
                                  )}
                                </figure>

                                <div className="text-2xl md:text-2xl lg:text-3xl xl:text-3xl leading-none w-full tracking-tighter pr-12 md:pr-16 z-10 block mb-8 md:mb-5 relative content" dangerouslySetInnerHTML={{ __html: block.text }}></div>
                              </div>
                            </div>
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
                          block._modelApiKey === 'video' &&
                          <Container bleed>
                            <VideoRevealer 
                              text="WATCH"
                              videoAutoplayUrl={block.videoUrlAutoplayingCover}
                              videoFullHd={block.videoUrl1080p}
                            />
                          </Container>
                        }
                      </div>
                    ))
                  }
                </div>

                <div className="mb-16 md:mb-16 xl:mb-24" data-scroll data-scroll-speed="1.25">
                  <Container thin>
                    <div className="flex flex-wrap relative z-10 border-t border-dotted border-off-black border-opacity-50 pt-12 md:pt-20 xl:pt-24">
                      <div className="w-full md:w-5/12 mb-4 md:mb-0">
                        <span className="block text-xs uppercase tracking-tighter leading-none mb-1">With thanks —</span>
                        <h2 className="text-4xl md:text-5xl xl:text-6xl leading-none tracking-tighter">The Credits</h2>
                      </div>
                      <div className="w-full md:w-7/12 text-lg md:text-xl xl:text-2xl leading-snug tracking-tighter">
                        {
                          work.credits.map((block, i) => (
                            <div key={i} className="flex flex-wrap items-center max-w-xl mb-2 md:mb-3">
                              <span className="block text-xs uppercase tracking-tighter leading-none">{ block.title }</span>
                              <span className="block text-lg font-mono ml-auto">{ block.name }</span>
                            </div>
                          ))
                        }
                      </div>
                    </div>
                  </Container>
                </div>
              </div>
              
              { work.relatedProject && (
                <div className="bg-off-black pt-6 md:pt-8 pb-6 md:pb-10 block text-center text-off-white text-4xl md:text-5xl xl:text-6xl tracking-tighter leading-none">
                  <span className="block text-xs uppercase tracking-tighter leading-none w-full">Next project</span>
                  <FancyLink
                    link={`/work/${work.relatedProject.slug}`}
                    a11yText={`Navigate to ${work.relatedProject.title} project`}
                    text={`Fat Free x ${work.relatedProject.heroMeta}`}
                    thicc
                  />
                </div>
              )}

              <Footer hideMarquee />
            </div>
          </motion.div>
        </motion.div>
      </Layout>
    </SmoothScrollProvider>
  );
}

const WORK_SINGLE_QUERY = `
  query WorkSingle($slug: String) {
    site: _site {
      favicon: faviconMetaTags {
        ...metaTagsFragment
      }
    }
    work: work(filter: {slug: {eq: $slug}}) {
      _seoMetaTags {
        ...metaTagsFragment
      }
      title
      heroHeading
      heroMeta
      tickerText {
        text
      }
      disciplinesUsed {
        slug
        title
      }
      credits {
        title
        name
      }
      contentBlocks {
        ... on TextRecord {
          id
          _modelApiKey
          headingMetaText
          heading
          text
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
        ... on ImageGridLeftRecord {
          id
          _modelApiKey
          image1 {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 1200, h: 1200 }) {
              ...responsiveImageFragment
            }
            title
            alt
          }
          image2 {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 900, h: 1400 }) {
              ...responsiveImageFragment
            }
            title
            alt
          }
        }
        ... on ImageGridRightRecord {
          id
          _modelApiKey
          image1 {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 900, h: 1400 }) {
              ...responsiveImageFragment
            }
            title
            alt
          }
          image2 {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 1200, h: 1200 }) {
              ...responsiveImageFragment
            }
            title
            alt
          }
        }
        ... on ImageGridWithTextLeftRecord {
          id
          _modelApiKey
          image1 {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 1200, h: 800 }) {
              ...responsiveImageFragment
            }
            title
            alt
          }
          image2 {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 1200, h: 1200 }) {
              ...responsiveImageFragment
            }
            title
            alt
          }
          text
        }
        ... on ImageGridWithTextRightRecord {
          id
          _modelApiKey
          image1 {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 1200, h: 1200 }) {
              ...responsiveImageFragment
            }
            title
            alt
          }
          image2 {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 1200, h: 800 }) {
              ...responsiveImageFragment
            }
            title
            alt
          }
          text
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
      }
      relatedProject {
        title
        slug
        heroMeta
      }
      slug
    }
  }
  ${metaTagsFragment}
  ${responsiveImageFragment}
`

export async function getStaticProps({ params }) {
  const data = await request({
    query: WORK_SINGLE_QUERY,
    variables: {
      slug: params.slug,
    },
  })

  return {
    props: {
      data,
    },
  }
}

export async function getStaticPaths() {
  const data = await request({ query: `{ allWorks { slug } }` });

  return {
    paths: data.allWorks.map((work) => `/work/${work.slug}`),
    fallback: false,
  };
}