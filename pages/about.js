import Head from "next/head";
import Link from "next/link";
import { renderMetaTags, Image } from "react-datocms";
import Layout from "../components/layout";
import Header from "../components/header";
import { request } from "../lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "../lib/fragments";
import Container from "../components/container";
import Footer from "../components/footer";
import CircleInfinity from "../components/circle-infinity";
import BigX from "../components/big-x";
import FancyLink from "../components/fancy-link";
import TeamModal from "../components/team-modal";
import AboutHero from "../components/about-hero";
import BeliefHover from "../components/belief-hover";
import { motion } from "framer-motion"
import { fade, reveal } from "../helpers/transitionHelper"
import { SmoothScrollProvider } from '../contexts/SmoothScroll.context'

export default function About({ data: { site, about, team, services } }) {
  const metaTags = about.seo.concat(site.favicon);

  return (
    <SmoothScrollProvider options={{ smooth: true, lerp: 0.13 }}>
      <Layout>
        <Head>{renderMetaTags(metaTags)}</Head>
        
        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
          className="mb-20 md:mb-20"
        >
          <Header theme="white" />
          <motion.div variants={fade} className="mb-20 md:mb-20 overflow-hidden relative">
            <AboutHero 
              defaultVideo={about.defaultHeroVideoUrl}
              feelingVideo={about.feelingHeroVideoUrl}
              heartVideo={about.heartHeroVideoUrl}
              changeVideo={about.changeHeroVideoUrl}
            />

            <Container thin>
              <div className="w-full mb-12 md:mb-16 xl:mb-24 relative z-10" data-scroll data-scroll-speed="1">
                <div className="flex flex-wrap">
                  <div className="w-full md:w-full max-w-md">
                    <div className="overflow-hidden relative">
                      <motion.span variants={reveal} className="block text-xs uppercase tracking-tighter leading-none">Information —</motion.span>
                    </div>
                    <h2 className="text-5xl md:text-6xl xl:text-7xl leading-none tracking-tighter">Our Team</h2>
                  </div>

                  <div className="w-full md:w-1/2 max-w-md">
                    <div dangerouslySetInnerHTML={{ __html: about.ourTeamText }} className="text-lg md:text-xl leading-snug tracking-tight md:mt-8"></div>
                  </div>
                </div>
              </div>

              <div className="w-full mb-12 md:mb-16 xl:mb-24 relative z-10">
                <div className="flex flex-wrap">

                  {team.map((team, i) => {
                    let scrollSpeed = 1.5;
                    let spacing = `py-8`
                    
                    if (i === 0) {
                      scrollSpeed = 2.25;
                      spacing = `py-8 md:py-10 md:pt-32`
                    } else if (i === 1) {
                      scrollSpeed = 1.25;
                      spacing = `py-8 md:py-10 md:pt-0`
                    } else if (i === 2) {
                      scrollSpeed = 1.75;
                      spacing = `py-8 md:py-10 md:pt-64`
                    }

                    return (
                      <div className="flex flex-col w-full md:w-1/3" key={i}>
                        <div className={`h-full border-b md:border-b-0 md:border-l border-dotted border-off-black border-opacity-50 md:px-8 lg:px-12 xl:px-16 ${spacing}`}>
                          <div data-scroll data-scroll-speed={scrollSpeed}>
                            <div className="relative mr-5 mb-5">
                              <Image
                                data={{
                                  ...team.image.responsiveImage,
                                  alt: team.image.alt ? team.image.alt : team.image.title,
                                }}
                                className="w-full relative z-0"
                              />
                              <span className="block upright font-mono text-xs absolute top-0 right-0 -mr-5 z-0 uppercase tracking-wide leading-none">{ team.jobTitle }</span>
                            </div>

                            <div className="relative overflow-hidden mb-3 md:mb-5">
                              <motion.h3 variants={reveal} className="text-3xl md:text-3xl xl:text-4xl leading-none tracking-tighter mb-0 pb-0">{ team.name }</motion.h3>
                            </div>
                              
                            <div dangerouslySetInnerHTML={{ __html: team.shortBio }} className="font-mono text-sm mb-3 md:mb-5"></div>

                            <span className="text-lg">
                              <TeamModal>
                                <div className="flex flex-wrap w-full">
                                  <div className="w-full lg:w-1/3 bg-off-white p-6 lg:p-10 xl:p-12">
                                    <div className="relative overflow-hidden mb-1">
                                      <span className="block text-xs uppercase leading-none">{ team.jobTitle }</span>
                                    </div>
                                    <div className="relative overflow-hidden mb-2">
                                      <h3 className="text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl leading-none w-full tracking-tighter mb-2 lg:mb-3 pb-0 md:pr-12 xl:pr-24">{ team.name }</h3>
                                    </div>
                                    <div className="block lg:hidden">
                                      <Image
                                        data={{
                                          ...team.mobileImage.responsiveImage,
                                          alt: team.mobileImage.alt ? team.mobileImage.alt : team.mobileImage.title,
                                        }}
                                        className="w-full relative z-0 mb-0 pb-0"
                                      />
                                    </div>
                                    <div className="hidden lg:block">
                                      <Image
                                        data={{
                                          ...team.image.responsiveImage,
                                          alt: team.image.alt ? team.image.alt : team.image.title,
                                        }}
                                        className="w-full lg:w-10/12 relative z-0 mb-0 pb-0 hidden lg:block"
                                      />
                                    </div>
                                  </div>

                                  <div className="w-full lg:w-2/3 p-6 lg:p-10 xl:p-12">
                                    <div className="flex flex-wrap h-full">
                                      <div className="w-full">
                                        <div className="relative overflow-hidden mb-4 lg:mb-8 w-full">
                                          <span className="block text-xs uppercase leading-none">Biography</span>
                                        </div>
                                        <div dangerouslySetInnerHTML={{ __html: team.fullBio ? team.fullBio : team.shortBio }} className="leading-none tracking-tighter text-lg xl:text-2xl content mb-3 md:mb-5 w-full lg:w-10/12"></div>
                                      </div>
                                      
                                      { team.linkedinUrl || team.instagramUrl ? (
                                        <div className="flex flex-wrap items-center justify-end mt-auto w-full">
                                          { team.instagramUrl && (
                                            <a href={team.instagramUrl} target="_blank" rel="noopener noreferrer" className="w-8 lg:w-12 h-8 lg:h-12 mr-3 rounded-full bg-off-white text-off-black hover:bg-off-black hover:text-off-white focus:bg-off-black focus:text-off-white transition ease-in-out duration-300 flex items-center justify-center">
                                              <svg className="w-4 lg:w-6" viewBox="0 0 511 511.9" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="m510.949219 150.5c-1.199219-27.199219-5.597657-45.898438-11.898438-62.101562-6.5-17.199219-16.5-32.597657-29.601562-45.398438-12.800781-13-28.300781-23.101562-45.300781-29.5-16.296876-6.300781-34.898438-10.699219-62.097657-11.898438-27.402343-1.300781-36.101562-1.601562-105.601562-1.601562s-78.199219.300781-105.5 1.5c-27.199219 1.199219-45.898438 5.601562-62.097657 11.898438-17.203124 6.5-32.601562 16.5-45.402343 29.601562-13 12.800781-23.097657 28.300781-29.5 45.300781-6.300781 16.300781-10.699219 34.898438-11.898438 62.097657-1.300781 27.402343-1.601562 36.101562-1.601562 105.601562s.300781 78.199219 1.5 105.5c1.199219 27.199219 5.601562 45.898438 11.902343 62.101562 6.5 17.199219 16.597657 32.597657 29.597657 45.398438 12.800781 13 28.300781 23.101562 45.300781 29.5 16.300781 6.300781 34.898438 10.699219 62.101562 11.898438 27.296876 1.203124 36 1.5 105.5 1.5s78.199219-.296876 105.5-1.5c27.199219-1.199219 45.898438-5.597657 62.097657-11.898438 34.402343-13.300781 61.601562-40.5 74.902343-74.898438 6.296876-16.300781 10.699219-34.902343 11.898438-62.101562 1.199219-27.300781 1.5-36 1.5-105.5s-.101562-78.199219-1.300781-105.5zm-46.097657 209c-1.101562 25-5.300781 38.5-8.800781 47.5-8.601562 22.300781-26.300781 40-48.601562 48.601562-9 3.5-22.597657 7.699219-47.5 8.796876-27 1.203124-35.097657 1.5-103.398438 1.5s-76.5-.296876-103.402343-1.5c-25-1.097657-38.5-5.296876-47.5-8.796876-11.097657-4.101562-21.199219-10.601562-29.398438-19.101562-8.5-8.300781-15-18.300781-19.101562-29.398438-3.5-9-7.699219-22.601562-8.796876-47.5-1.203124-27-1.5-35.101562-1.5-103.402343s.296876-76.5 1.5-103.398438c1.097657-25 5.296876-38.5 8.796876-47.5 4.101562-11.101562 10.601562-21.199219 19.203124-29.402343 8.296876-8.5 18.296876-15 29.398438-19.097657 9-3.5 22.601562-7.699219 47.5-8.800781 27-1.199219 35.101562-1.5 103.398438-1.5 68.402343 0 76.5.300781 103.402343 1.5 25 1.101562 38.5 5.300781 47.5 8.800781 11.097657 4.097657 21.199219 10.597657 29.398438 19.097657 8.5 8.300781 15 18.300781 19.101562 29.402343 3.5 9 7.699219 22.597657 8.800781 47.5 1.199219 27 1.5 35.097657 1.5 103.398438s-.300781 76.300781-1.5 103.300781zm0 0"/><path fill="currentColor" d="m256.449219 124.5c-72.597657 0-131.5 58.898438-131.5 131.5s58.902343 131.5 131.5 131.5c72.601562 0 131.5-58.898438 131.5-131.5s-58.898438-131.5-131.5-131.5zm0 216.800781c-47.097657 0-85.300781-38.199219-85.300781-85.300781s38.203124-85.300781 85.300781-85.300781c47.101562 0 85.300781 38.199219 85.300781 85.300781s-38.199219 85.300781-85.300781 85.300781zm0 0"/><path fill="currentColor" d="m423.851562 119.300781c0 16.953125-13.746093 30.699219-30.703124 30.699219-16.953126 0-30.699219-13.746094-30.699219-30.699219 0-16.957031 13.746093-30.699219 30.699219-30.699219 16.957031 0 30.703124 13.742188 30.703124 30.699219zm0 0"/></svg>
                                            </a>
                                          )}
                                          { team.linkedinUrl && (
                                            <a href={team.linkedinUrl} target="_blank" rel="noopener noreferrer" className="w-8 lg:w-12 h-8 lg:h-12 rounded-full bg-off-white text-off-black hover:bg-off-black hover:text-off-white focus:bg-off-black focus:text-off-white transition ease-in-out duration-300 flex items-center justify-center">
                                              <svg className="w-3 lg:w-5" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="m23.994 24v-.001h.006v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07v-2.185h-4.773v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243v7.801z"/><path fill="currentColor" d="m.396 7.977h4.976v16.023h-4.976z"/><path fill="currentColor" d="m2.882 0c-1.591 0-2.882 1.291-2.882 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909c-.001-1.591-1.292-2.882-2.882-2.882z"/></svg>
                                            </a>
                                          )}
                                        </div>
                                      ) : (
                                        <></>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </TeamModal>
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </Container>

            <div className="mb-20 md:mb-24 xl:mb-32 2xl:mb-40">
              <Container>
                <div className="relative about-text">
                  <div className="w-full h-full absolute top-0 left-0 right-0 bottom-0 flex flex-wrap items-center justify-center">
                    <span data-scroll data-scroll-speed="2.75" className="block w-32 md:w-48 xl:w-64 h-32 md:h-48 xl:h-64 bg-yellow rounded-full"></span>
                  </div>
                  <span className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 3xl:text-8xl leading-none w-full tracking-tighter pr-8 md:pr-16 z-10 block mb-8 md:mb-5 relative" dangerouslySetInnerHTML={{ __html: about.aboutText }}></span>
                </div>
              </Container>
            </div>

            <div className="mb-20 md:mb-24 xl:mb-32 2xl:mb-40">
              <Container thin>
                <span className="block text-xs uppercase tracking-tighter leading-none pb-6 md:pb-10 border-b border-dotted border-off-black border-opacity-50">What We Do —</span>

                {services.map((service, i) => {
                  let paddingClass = 'pl-0';

                  if (i === 0) {
                  } else if (i === 1) {
                    paddingClass = 'pl-0 md:pl-24 xl:pl-32';
                  } else if (i === 2) {
                    paddingClass = 'pl-0 md:pl-12 xl:pl-16';
                  }
                  
                  let colour = { color: service.shapeColour.hex };
                  return(
                    <div key={i} className={`py-6 md:py-10 border-b border-dotted border-off-black border-opacity-50 ${paddingClass}`}>
                      <div className="flex flex-wrap -mx-2 md:mx-0">
                        <div className="w-auto md:pr-12" style={ colour }>
                          <CircleInfinity />
                        </div>
                        <div className="flex-1 flex flex-wrap px-2 md:px-0">
                          <div className="w-full md:w-48 xl:w-56 2xl:w-64">
                            <h3 className="text-3xl md:text-3xl xl:text-4xl leading-none tracking-tighter md:pr-8 xl:pr-16">{ service.title }</h3>
                          </div>
                          <div className="flex-1 md:w-full relative z-10 pr-5">
                            <div className="font-mono text-sm mb-2 md:max-w-xl" dangerouslySetInnerHTML={{ __html: service.heroText }}></div>


                            <span className="text-lg">
                              <FancyLink link={`/services/${service.slug}`} text="Learn more" a11yText={`Navigate to ${service.title} page`} />
                            </span>
                        </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </Container>
            </div>

            <div className="bg-yellow yellow-highlight pt-8 pb-16 md:pt-12 md:pb-20 lg:pt-16 lg:pb-24 xl:pt-20 xl:pb-32 overflow-hidden relative">
              <div data-scroll data-scroll-speed="-1.25">
                <BigX color="text-yellow-dark" />
              </div>
              <Container>
                <div className="flex flex-wrap items-center md:-mx-12 relative z-20">
                  <div className="w-full md:w-1/2 md:px-12 mb-6 md:mb-0" data-scroll data-scroll-speed="0.25">
                    <Image
                      data={{
                        ...about.calloutImage.responsiveImage,
                        alt: about.calloutImage.alt ? about.calloutImage.alt : about.calloutImage.title,
                      }}
                      className="w-full relative z-0"
                    />
                  </div>
                  <div className="w-full md:w-1/2 md:px-12 text-black" data-scroll data-scroll-speed="1.05">
                    { about.calloutMetaText && (
                      <span className="block text-xs uppercase tracking-tighter leading-none mb-6 md:mb-10">{ about.calloutMetaText } —</span>
                    )}
                    <p className="text-3xl md:text-4xl xl:text-5xl leading-none tracking-tighter pr-8 md:pr-8 lg:pr-16 xl:pr-20 mb-6 md:mb-10">{ about.calloutHeading }</p>

                    {/* <FancyLink href="/"><a aria-label="Navigate to Start a project" className="underline tracking-tight text-lg inline-block items-center">Start a project</a></FancyLink> */}

                    <FancyLink link={`/contact`} text="Start a project" a11yText={`Navigate to Contact page`} circleColor={'text-off-white'} />
                  </div>
                </div>
              </Container>
            </div>

            { about.beliefs.length > 0 && (
                <div className="bg-yellow text-black yellow-highlight pb-12 md:pb-24 xl:pb-32 -mt-1">
                  <Container thin>
                  <div className="relative overflow-hidden mb-12 md:mb-12 xl:mb-20">
                    <motion.span variants={reveal} className="block text-xs uppercase tracking-tighter leading-none">Our beliefs —</motion.span>
                  </div>
                    <ul className="border-t-2 border-black">
                      {
                        about.beliefs.map((block, i) => {
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
                            <BeliefHover
                              alignClass={alignClass}
                              paddingClass={paddingClass}
                              scrollAmount={scrollAmount}
                              index={ i > 8 ? properIndex : properIndexTrimmed }
                              title={block.title}
                              text={"This is some placeholder text that Sam needs @todo"}
                              key={block.id}
                            />
                          )
                        })
                      }
                    </ul>
                  </Container>
                </div>
              )}

            <div className="bg-off-white pt-6 md:pt-8 pb-6 md:pb-10 block text-center text-off-black text-4xl md:text-5xl xl:text-6xl tracking-tighter leading-none">
              <FancyLink link="/contact" a11yText="Navigate to contact page" text="Let's talk about it" thicc />
            </div>
            <Footer hideMarquee />
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
    team: allTeams {
      id
      name
      shortBio
      fullBio
      linkedinUrl
      instagramUrl
      slug
      jobTitle
      image {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 600, h: 850 }) {
          ...responsiveImageFragment
        }
      }
      mobileImage: image {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 600, h: 320 }) {
          ...responsiveImageFragment
        }
      }
    }
    services: allServices(orderBy: position_ASC) {
      title
      shapeColour {
        hex
      }
      heroText
      slug
    }
    about {
      seo: _seoMetaTags {
        ...metaTagsFragment
      }
      title
      ourTeamText
      aboutText
      defaultHeroVideoUrl
      feelingHeroVideoUrl
      heartHeroVideoUrl
      changeHeroVideoUrl
      calloutImage {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 800, h: 1050 }) {
          ...responsiveImageFragment
        }
        title
        alt
      }
      calloutMetaText
      calloutHeading
      beliefs {
        text
        title
      }
    }
  }
  ${metaTagsFragment}
  ${responsiveImageFragment}
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