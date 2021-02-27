import Head from "next/head";
import Link from "next/link";
import { renderMetaTags, Image } from "react-datocms";
import Header from "../../components/header";
import Layout from "../../components/layout";
import { request } from "../../lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "../../lib/fragments";
import Container from "../../components/container";
import Footer from "../../components/footer";
import BigX from "../../components/big-x";
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
                    <motion.span variants={reveal} className="block md:text-lg uppercase tracking-tighter leading-none">{ work.heroMeta }</motion.span>
                  </div>
                  <h1 data-scroll data-scroll-speed="1.4" className="text-6xl md:text-7xl xl:text-8xl leading-none w-full tracking-tighter mb-4 md:mb-6 xl:mb-8 max-w-md md:max-w-xl xl:max-w-2xl mx-auto">{ work.heroHeading }</h1>
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

              <div className="relative overflow-hidden pt-6 md:pb-20 xl:pb-32 xl:-mt-12 2xl:-mt-16">
                <BigX color="text-white" bottom />
  
                {/* Modular Content */}
                <div className="relative pb-12 md:pb-20 xl:pb-32">
                  {
                    work.contentBlocks.map((block) => (
                      <div key={block.id} className="pb-8 md:pb-12 xl:pb-16" data-scroll data-scroll-speed="1.6">
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
                                <span className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 3xl:text-8xl leading-none w-full tracking-tighter pr-12 md:pr-16 z-10 block mb-8 md:mb-5 relative">“ { block.text } ”</span>
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
                          <div className="bg-yellow yellow-highlight pt-8 pb-16 md:pt-12 md:pb-20 lg:pt-16 lg:pb-24 xl:pt-20 xl:pb-32 overflow-hidden relative">
                            <BigX color="text-yellow-dark" />
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
                                  <div className="text-3xl md:text-3xl xl:text-4xl leading-none tracking-tighter pr-8 md:pr-8 lg:pr-16 xl:pr-20 mb-6 md:mb-10 content" dangerouslySetInnerHTML={{ __html: block.text }}></div>
                                </div>
                              </div>
                            </Container>
                          </div>
                        }
                        {
                          block._modelApiKey === 'video' &&
                          <Container bleed>
                            <div className="w-full relative z-10 mb-8 md:mb-12">
                              <div className="relative">
                                <div className="w-full bg-green relative z-10">
                                  <motion.button variants={scaleDown} className="text-yellow absolute top-0 left-0 mt-8 ml-8 md:ml-16 md:mt-16 xl:ml-24 xl:mt-24 z-20">
                                    <span className="absolute top-0 left-0 right-0 bottom-0 text-off-black flex flex-wrap items-center justify-center leading-none tracking-tight text-lg xl:text-2xl px-5">Watch in full</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="block w-24 xl:w-32" viewBox="0 0 85.128 85.499"><path fill="currentColor" d="M15.161 76.238c.132.087.261.181.4.267l.409.256c.542.34 1.054.688 1.472.961a7.266 7.266 0 01.859.59 7.683 7.683 0 00.9.736c.32.215.65.414.985.6.662.393 1.379.685 2.075 1.009l3.62 1.608a6.793 6.793 0 002.108.659l.546.2c.35.118.856.268 1.461.457s1.323.365 2.089.564c.192.047.386.1.585.144l.6.123 1.235.25c.416.072.834.13 1.244.194s.814.134 1.208.167l1.135.117.526.053c.17.013.335.02.493.029l1.528.082c.369.008.581.007.581.007.527.008.607.209 1.36.184.742-.042 1.4-.111 1.991-.163.3-.022.571-.073.833-.108l.738-.111.655-.1c.205-.038.4-.08.58-.117l.982-.2c.591-.109 1.062-.239 1.533-.317s.938-.128 1.5-.2c.293-.033.605-.065.907-.118a2.814 2.814 0 00.839-.254 4.165 4.165 0 011.23-.411c.2-.037.4-.059.6-.084l.591-.085a5.924 5.924 0 001.2-.285 3 3 0 00.61-.309 4.357 4.357 0 00.615-.477 2.863 2.863 0 002.191-.78 3.6 3.6 0 01.633-.335c.215-.1.448-.192.72-.315a9.55 9.55 0 00.961-.5 11.238 11.238 0 001.3-.957q.254-.211.52-.4c.174-.134.348-.269.527-.4.357-.258.725-.5 1.1-.737s.735-.494 1.105-.737l.551-.372.273-.188.262-.2c.388-.3.709-.548.981-.748s.5-.353.678-.493c.368-.272.614-.425.868-.592.127-.083.256-.17.4-.277a5.357 5.357 0 00.507-.407c.193-.173.419-.384.694-.652l.45-.446.256-.258.265-.3c.41-.461.772-.86 1.093-1.207s.577-.669.817-.936.444-.5.628-.7.329-.385.467-.545c.273-.324.482-.579.68-.866a4.727 4.727 0 00.29-.469c.091-.177.185-.375.287-.605a5.692 5.692 0 01.716-1.186c.26-.369.551-.712.857-1.068.152-.178.309-.359.464-.549s.294-.4.439-.611.287-.44.424-.681a5.18 5.18 0 00.375-.783c.124-.319.365-.7.632-1.2a6.226 6.226 0 00.385-.854 9.012 9.012 0 00.332-1.073c0-.009.037-.1.1-.244s.126-.36.215-.611l.3-.855.168-.482.151-.506.3-1 .137-.465.106-.426c.133-.532.229-.9.249-.953a1.8 1.8 0 00.113-.514c.011-.184.009-.374.021-.553a8.185 8.185 0 01.23-1.915c.06-.2.143-.433.261-.844.056-.206.134-.455.2-.769s.132-.692.208-1.151a5.612 5.612 0 00.053-.74c0-.313-.01-.679-.016-1.061 0-.762-.053-1.583 0-2.17.042-.559.068-1.119.072-1.679.2-.262.219-.707-.009-1.416a2.13 2.13 0 01-.047-.16 12.872 12.872 0 00-.445-2.5 2.669 2.669 0 01-.182-1.133 2.524 2.524 0 00-.078-.6 11.52 11.52 0 00-.478-1.616 3.981 3.981 0 01-.055-.165 6.668 6.668 0 00-.1-.909c-.008-.042-.019-.083-.027-.124a2.6 2.6 0 00-.119-.526c-.039-.158-.08-.316-.123-.473-.19-.746-.491-1.46-.753-2.181l-.173-.45a6.24 6.24 0 00-.551-1.778l-.139-.315c-.048-.1-.1-.206-.154-.308l-.313-.6-.093-.241a6.8 6.8 0 00-1.024-1.957l-.246-.526c-.164-.331-.416-.8-.71-1.356s-.677-1.193-1.078-1.876c-.1-.169-.2-.345-.312-.516l-.341-.515-.7-1.05c-.243-.345-.5-.682-.742-1.017s-.481-.671-.737-.972l-.72-.885-.334-.409c-.111-.129-.223-.25-.328-.369l-1.022-1.138a21.722 21.722 0 00-.405-.415c-.367-.379-.281-.577-.831-1.091-.555-.495-1.07-.912-1.524-1.292-.224-.194-.456-.352-.665-.512l-.6-.444-.536-.391c-.172-.119-.338-.224-.492-.327l-.837-.551c-.5-.341-.92-.582-1.308-.86s-.754-.573-1.2-.919c-.231-.184-.474-.382-.725-.558a2.816 2.816 0 00-.773-.413 4.163 4.163 0 01-1.161-.579c-.167-.115-.324-.241-.482-.363l-.478-.358a5.924 5.924 0 00-1.053-.649 3.007 3.007 0 00-.65-.213 4.355 4.355 0 00-.772-.1 2.863 2.863 0 00-2.1-1 3.6 3.6 0 01-.684-.211c-.223-.082-.452-.181-.732-.287a9.584 9.584 0 00-1.031-.328 11.2 11.2 0 00-1.6-.242c-.219-.02-.437-.048-.653-.081s-.437-.056-.654-.092c-.435-.07-.866-.158-1.3-.256s-.869-.17-1.3-.26l-.652-.127-.326-.06-.328-.042c-.489-.06-.889-.114-1.222-.165s-.6-.1-.828-.131c-.453-.068-.734-.134-1.032-.2a8.936 8.936 0 00-.482-.089 5.342 5.342 0 00-.646-.071 23.16 23.16 0 00-.952-.03h-.997l-.4.022c-.616.036-1.154.062-1.627.081s-.881.065-1.239.085-.666.038-.937.05-.5.04-.716.055c-.422.036-.751.068-1.094.132a4.722 4.722 0 00-.536.127c-.19.06-.4.134-.631.225a5.7 5.7 0 01-1.346.332c-.444.077-.893.114-1.361.15-.234.019-.472.035-.716.06s-.489.072-.742.121-.514.108-.782.182a5.192 5.192 0 00-.819.288c-.314.138-.753.237-1.295.4a6.2 6.2 0 00-.876.332 9.045 9.045 0 00-.993.524c-.008 0-.094.043-.24.105s-.344.165-.584.28l-.816.394-.459.222-.465.251-.918.5-.426.232-.377.226c-.47.282-.8.478-.85.5a1.809 1.809 0 00-.443.284c-.138.122-.27.258-.405.376a8.181 8.181 0 01-1.517 1.191c-.183.1-.407.2-.781.412-.185.106-.416.227-.683.405s-.583.4-.961.666a5.583 5.583 0 00-.561.486l-.739.761c-.542.536-1.082 1.157-1.535 1.534a16.312 16.312 0 00-3.765 4.372c-.451.778-.507.774-.673.929a2.519 2.519 0 00-.371.482 11.491 11.491 0 00-.8 1.481 2.655 2.655 0 01-.654.907 5.25 5.25 0 00-.868 1.782 3.539 3.539 0 01-.762 1.48 5.517 5.517 0 00-1.039 1.851l-.125.321c-.04.108-.073.218-.109.327l-.209.656-.206.656-.1.327-.091.331c-.122.441-.251.88-.4 1.315l-.111.326-.1.328q-.107.327-.23.652a6.425 6.425 0 00-.239.8c-.068.272-.1.554-.14.827a70.58 70.58 0 01-.217 1.414q-.088.727-.193 1.481c-.079.5-.125 1.014-.181 1.531l-.086.78-.044.392-.028.395-.122 1.589c-.029.532-.042 1.064-.065 1.595-.008.265-.026.53-.027.794s0 .527 0 .789v.783c0 .26 0 .518.016.774l.076 1.512.021.369.036.364.073.715.075.7.039.34.053.332c.071.44.142.864.215 1.269.039.2.068.4.115.593l.136.559c.09.362.181.7.273 1.019a7.919 7.919 0 00.3.866c.1.261.207.5.31.7a1.518 1.518 0 01.114.458 4.241 4.241 0 00.2.852 4.022 4.022 0 00.267.623 3.4 3.4 0 00.575.778c.378.381.65.595.531 1.263a1.88 1.88 0 00-.015.645 6.33 6.33 0 00.311 1c.085.228.19.5.316.813s.3.674.492 1.1.405.91.692 1.45l.444.872c.08.154.155.317.247.477l.28.5a3.411 3.411 0 00.645.972 2.959 2.959 0 011.023 1.35 14.706 14.706 0 00.895 1.518l.362.547c.133.2.291.394.457.613l.544.7.307.382.349.391c.411.453.755.864 1.08 1.218.28.3.532.563.77.81" data-name="Path 19"/></svg>
                                  </motion.button>
                                  <video controls={ true } className="w-full home-video object-cover">
                                    <source src={ block.videoUrl} type="video/mp4" />
                                    
                                    Sorry. Your browser does not support the video tag.
                                  </video>
                                </div>
                                <div className="h-12 md:h-64 w-64 bg-orange absolute bottom-0 left-0 md:left-auto md:right-0 z-0 -m-5"></div>
                              </div>
                            </div>
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
                            <div key={i} className="flex flex-wrap items-center max-w-sm mb-2 md:mb-3">
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
          videoUrl
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