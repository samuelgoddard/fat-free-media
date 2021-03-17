import Head from "next/head";
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
import Carousel from "../../components/carousel";
import { motion } from "framer-motion"
import { fade, reveal } from "../../helpers/transitionHelper"
import {  SmoothScrollProvider } from '../../contexts/SmoothScroll.context'
import Marquee from "react-fast-marquee";

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
            <Header theme="off-black" workBack />
            <BigX color="text-white" left />
            <div className="relative">
              <Container>
                <div className="text-center pt-48 md:pt-56 xl:pt-64 2xl:pt-80 relative pb-16 md:pb-16 xl:pb-24">
                  <div className="relative mb-2 lg:mb-0" data-scroll data-scroll-speed="1.4">
                    <motion.span variants={reveal} className="block md:text-lg xl:text-xl md:-mb-2 uppercase tracking-tighter leading-none">{ work.heroHeading }</motion.span>
                  </div>
                  <h1 data-scroll data-scroll-speed="1" className="text-6xl md:text-8xl xl:text-8xl 3xl:text-10xl leading-negative w-full tracking-tighter mb-4 md:mb-6 xl:mb-8 mx-auto"><span className="block">Fat Free x</span>{ work.heroMeta }</h1>
              </div>
              </Container>

              <div data-scroll data-scroll-speed="1" className="border-t border-b border-off-black pt-1 pb-2">
                <div className="w-full whitespace-no-wrap text-3xl md:text-5xl xl:text-6xl tracking-tighter leading-tight align-top">
                  <Marquee pauseOnHover={false} gradient={false} speed={75}>
                    {work.tickerText.map((ticker, i) => (
                      <span className="inline-block align-"key={i}><span className="inline mx-2 md:mx-2">{ ticker.text }</span> <span className="inline-block mx-2 md:mx-2 align-top mt-4 md:mt-6 xl:mt-8 md:mr-3 w-3 md:w-4 rounded-full h-3 md:h-4 bg-off-black"></span></span>
                    ))}
                    {work.tickerText.map((ticker, i) => (
                      <span className="inline-block align-"key={i}><span className="inline mx-2 md:mx-2">{ ticker.text }</span> <span className="inline-block mx-2 md:mx-2 align-top mt-4 md:mt-6 xl:mt-8 w-3 md:w-4 rounded-full h-3 md:h-4 bg-off-black"></span></span>
                    ))}
                    {work.tickerText.map((ticker, i) => (
                      <span className="inline-block align-"key={i}><span className="inline mx-2 md:mx-2">{ ticker.text }</span> <span className="inline-block mx-2 md:mx-2 align-top mt-4 md:mt-6 xl:mt-8 w-3 md:w-4 rounded-full h-3 md:h-4 bg-off-black"></span></span>
                    ))}
                  </Marquee>
                </div>
              </div>

              <div className="relative overflow-hidden pt-6 md:pb-20 xl:pb-32">
                <BigX color="text-white" bottom />
  
                {/* Modular Content */}
                <div className="relative pb-0 md:pb-20 xl:pb-24">
                  {
                    work.contentBlocks.map((block, i) => (
                      <div key={block.id} className={`pb-20 md:pb-32 xl:pb-32 2xl:pb-48 ${(i === 0 && block._modelApiKey === 'text') ? 'pt-12 md:pt-24 xl:pt-32' : 'lg:-mt-8 xl:-mt-16 2xl:-mt-24'}`} data-scroll data-scroll-speed="1.6">
                        {
                          block._modelApiKey === 'text' &&
                          <Container thin>
                            <div className="flex flex-wrap md:-mx-5">
                              <div className="w-full md:w-1/3 md:px-5">
                                <div className="w-full max-w-xs 2xl:max-w-lg lg:pr-8">
                                  { block.headingMetaText && (
                                    <span className="block text-xs uppercase tracking-tighter leading-none mb-1 md:mb-3">— { block.headingMetaText }</span>
                                  )}
                                  { block.heading && (
                                    <h2 className="text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl leading-none tracking-tighter">{ block.heading }</h2>
                                  )}
                                </div>
                              </div>
                              <div className="w-11/12 md:w-1/2 lg:w-7/12 max-w-2xl md:px-5 md:ml-auto md:mr-10 lg:mr-16 md:mt-8">
                                <div className="content text-xl md:text-2xl 2xl:text-3xl tracking-tighter leading-tight max-w-3xl" dangerouslySetInnerHTML={{ __html: block.text }}></div>
                              </div>
                            </div>
                          </Container>
                        }
                        {
                          block._modelApiKey === 'image' &&
                          <Container bleed>
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
                            <Container bleed>
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
                          <Container bleed>
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
                                    <figcaption className="block md:upright md:absolute top-0 right-0 md:-mr-6 z-0 uppercase text-sm md:text-base tracking-tighter leading-none px-6 md:px-0">{block.image1.alt}</figcaption>
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
                                      <figcaption className="block text-sm md:text-base uppercase tracking-tighter leading-none text-right px-6 md:px-0">{block.image2.alt}</figcaption>
                                    )}
                                  </figure>
                                </div>
                              </div>
                            </div>
                          </Container>
                        }
                        {
                          block._modelApiKey === 'image_grid_right' &&
                          <Container bleed>
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
                                      <figcaption className="px-6 md:px-0 block text-sm md:text-base uppercase tracking-tighter leading-none text-right">{block.image1.alt}</figcaption>
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
                                    <figcaption className="px-6 md:px-0 block md:upright md:absolute top-0 left-0 md:-ml-6 z-0 uppercase text-sm md:text-base tracking-tighter leading-none">{block.image2.alt}</figcaption>
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
                                <span className="block text-xs uppercase tracking-tighter leading-none mb-6 md:mb-8 xl:mb-10">{ block.metaText } —</span>
                              </Container>
                            )}
                            <Container>
                              <div className="relative">
                                <div className="w-full h-full absolute top-0 left-0 right-0 bottom-0 flex flex-wrap items-center justify-center">
                                  <span data-scroll data-scroll-speed="2.75" className="block w-32 md:w-48 xl:w-64 h-32 md:h-48 xl:h-64 bg-yellow rounded-full"></span>
                                </div>
                                <span className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 3xl:text-7xl leading-mini w-full tracking-tighter pr-6 md:pr-16 z-10 block mb-10 md:mb-12 xl:mb-16 relative about-text">“ { block.text } ”</span>
                              </div>
                            </Container>
                            <Container thin>
                              <div className="flex">
                                <div className="ml-auto">
                                  <span className="text-3xl md:text-2xl lg:text-3xl xl:text-4xl 3xl:text-5xl leading-none tracking-tighter block mb-2 md:mb-4">– { block.authorName }</span>
                                  { block.authorJobTitle && (
                                    <span className="block text-xs text-right md:text-left md:text-base uppercase tracking-tighter leading-none ml-4 md:ml-6 xl:ml-6">{ block.authorJobTitle }</span>
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
                              <div className="flex flex-wrap items-center md:-mx-12 relative z-20">
                                <div className="w-full md:w-1/2 md:px-12 mb-6 md:mb-0" data-scroll data-scroll-speed="0.25">
                                  <Image
                                    data={{
                                      ...block.image.responsiveImage,
                                      alt: block.image.alt ? block.image.alt : block.image.title,
                                    }}
                                    className="w-full relative z-0 mb-3 md:mb-0"
                                  />
                                </div>
                                <div className="w-full md:w-1/2 md:px-12" data-scroll data-scroll-speed="1.05">
                                  { block.metaText && (
                                    <span className="block text-xs uppercase tracking-tighter leading-none mb-6 md:mb-10">{ block.metaText } —</span>
                                  )}
                                  <div className="font-mono text-2xl md:text-3xl 2xl:text-4xl leading-minimal pr-8 md:pr-8 lg:pr-16 xl:pr-20 mb-6 md:mb-10 content" dangerouslySetInnerHTML={{ __html: block.text }}></div>
                                </div>
                              </div>
                            </Container>
                          </div>
                        }
                        {
                          block._modelApiKey === 'video' &&
                          <Container fullBleed>
                            <VideoRevealer 
                              text="WATCH"
                              videoAutoplayUrl={block.videoUrlAutoplayingCover}
                              videoFullHd={block.videoUrl1080p}
                            />
                          </Container>
                        }
                        {
                          block._modelApiKey === 'supporting_silent_video_portrait' &&
                          <Container bleed>
                            <video loop={true} autoPlay={'autoplay'} playsInline muted preload="meta" className="mx-auto max-w-full object-cover z-10 portrait-video">
                              <source src={ block.videoUrl } type="video/mp4" />
                              
                              Sorry. Your browser does not support the video tag.
                            </video>
                          </Container>
                        }
                        {
                          block._modelApiKey === 'supporting_silent_video_square' &&
                          <Container bleed>
                            <video loop={true} autoPlay={'autoplay'} playsInline muted preload="meta" className="mx-auto max-w-full object-cover z-10 square-video">
                              <source src={ block.videoUrl } type="video/mp4" />
                              
                              Sorry. Your browser does not support the video tag.
                            </video>
                          </Container>
                        }
                        {
                          block._modelApiKey === 'supporting_silent_video_landscape' &&
                          <Container bleed>
                            <video loop={true} autoPlay={'autoplay'} playsInline muted preload="meta" className="mx-auto max-w-full object-cover z-10 md:w-8/12">
                              <source src={ block.videoUrl } type="video/mp4" />
                              
                              Sorry. Your browser does not support the video tag.
                            </video>
                          </Container>
                        }
                        {
                          block._modelApiKey === 'supporting_silent_video_landscape_square' &&
                          <Container bleed>
                            <div className="w-10/12 mx-auto">
                              <div className="flex flex-wrap md:-mx-8">
                                <div className="w-full md:w-2/3 md:px-8 mb-8 md:mb-0">
                                  <video loop={true} autoPlay={'autoplay'} playsInline muted preload="meta" className="max-w-full object-cover z-10 w-full">
                                    <source src={ block.video1Url } type="video/mp4" />
                                    
                                    Sorry. Your browser does not support the video tag.
                                  </video>
                                </div>

                                <div className="w-full md:max-w-none md:w-1/3 md:px-8">
                                  <video loop={true} autoPlay={'autoplay'} playsInline muted preload="meta" className="max-w-full object-cover z-10 w-48 h-48 md:h-full md:w-full mx-auto md:mx-0">
                                  <source src={ block.video2Url } type="video/mp4" />
                                  
                                  Sorry. Your browser does not support the video tag.
                                </video>
                                </div>
                              </div>
                            </div>
                          </Container>
                        }

                        {
                          block._modelApiKey === 'supporting_silent_video_square_square' &&
                          <Container bleed>
                            <div className="w-10/12 mx-auto">
                              <div className="flex flex-wrap md:-mx-8">
                                <div className="w-full md:w-1/2 md:px-8 mb-8 md:mb-0">
                                  <video loop={true} autoPlay={'autoplay'} playsInline muted preload="meta" className="mx-auto max-w-full object-cover z-10 square-video">
                                    <source src={ block.video1Url } type="video/mp4" />
                                    
                                    Sorry. Your browser does not support the video tag.
                                  </video>
                                </div>

                                <div className="w-full md:w-1/2 md:px-8">
                                  <video loop={true} autoPlay={'autoplay'} playsInline muted preload="meta" className="mx-auto max-w-full object-cover z-10 square-video">
                                  <source src={ block.video2Url } type="video/mp4" />
                                  
                                  Sorry. Your browser does not support the video tag.
                                </video>
                                </div>
                              </div>
                            </div>
                          </Container>
                        }

{
                          block._modelApiKey === 'supporting_silent_video_portrait_portrait' &&
                          <Container bleed>
                            <div className="w-10/12 mx-auto">
                              <div className="flex flex-wrap md:-mx-8">
                                <div className="w-full md:w-1/2 md:px-8 mb-8 md:mb-0">
                                  <video loop={true} autoPlay={'autoplay'} playsInline muted preload="meta" className="mx-auto max-w-full object-cover z-10 portrait-video">
                                    <source src={ block.video1Url } type="video/mp4" />
                                    
                                    Sorry. Your browser does not support the video tag.
                                  </video>
                                </div>

                                <div className="w-full md:w-1/2 md:px-8">
                                  <video loop={true} autoPlay={'autoplay'} playsInline muted preload="meta" className="mx-auto max-w-full object-cover z-10 portrait-video">
                                  <source src={ block.video2Url } type="video/mp4" />
                                  
                                  Sorry. Your browser does not support the video tag.
                                </video>
                                </div>
                              </div>
                            </div>
                          </Container>
                        }
                      </div>
                    ))
                  }
                </div>

                <div className="md:-mt-16 lg:-mt-24 xl:-mt-32 mb-16 md:mb-16" data-scroll data-scroll-speed="1.25">
                  <Container thin>
                    <div className="flex flex-wrap relative z-10 border-t border-dotted border-off-black border-opacity-50 pt-12 md:pt-20 xl:pt-24">
                      <div className="w-full md:w-5/12 mb-4 md:mb-0">
                        <span className="block text-xs uppercase tracking-tighter leading-none mb-1">The Team —</span>
                        <h2 className="text-5xl md:text-6xl xl:text-7xl leading-none tracking-tighter">Credits</h2>
                      </div>
                      <div className="w-full md:w-7/12 text-lg md:text-xl xl:text-2xl leading-snug tracking-tighter">
                        {
                          work.credits.map((block, i) => (
                            <div key={i} className="md:flex md:flex-wrap items-start md:max-w-2xl md:ml-auto mb-3 md:mb-3 border-b border-dotted border-off-black border-opacity-50 pt-1 md:pt-0 pb-4 md:pb-0 md:border-b-0">
                              <span className="block md:w-5/12 text-xs uppercase tracking-tighter leading-none mt-1 pt-px mb-2 md:mb-0">{ block.title }</span>
                              <span className="block md:w-7/12 md:text-right text-lg md:text-lg font-mono ml-auto">{ block.name }</span>
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
          headingMetaBullets
          heading
          text
        }
        ... on CalloutYellowRecord {
          id
          _modelApiKey
          metaText
          image {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 1200, h: 1200, auto: format }) {
              ...responsiveImageFragment
            }
            title
            alt
          }
          text
        }
        ... on ImageRecord {
          id
          _modelApiKey
          image {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 1500, h: 740, auto: format }) {
              ...responsiveImageFragment
            }
            title
            alt
          }
        }
        ... on ImagesCarouselRecord {
          id
          _modelApiKey
          images {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 1200, h: 720, auto: format }) {
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
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 900, h: 900, auto: format }) {
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
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 900, h: 900, auto: format }) {
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
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 900, h: 900, auto: format }) {
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
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 900, h: 900, auto: format }) {
              ...responsiveImageFragment
            }
            title
            alt
          }
          image2 {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 700, h: 1200, auto: format }) {
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
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 700, h: 1200, auto: format }) {
              ...responsiveImageFragment
            }
            title
            alt
          }
          image2 {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 900, h: 900, auto: format }) {
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
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 1200, h: 800, auto: format }) {
              ...responsiveImageFragment
            }
            title
            alt
          }
          image2 {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 900, h: 900, auto: format }) {
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
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 900, h: 900, auto: format }) {
              ...responsiveImageFragment
            }
            title
            alt
          }
          image2 {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 1200, h: 800, auto: format }) {
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
        ... on SupportingSilentVideoLandscapeSquareRecord {
          id
          _modelApiKey
          video1Url
          video2Url
        }
        ... on SupportingSilentVideoSquareSquareRecord {
          id
          _modelApiKey
          video1Url
          video2Url
        }
        ... on SupportingSilentVideoPortraitPortraitRecord {
          id
          _modelApiKey
          video1Url
          video2Url
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