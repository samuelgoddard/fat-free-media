import Head from "next/head";
import Link from "next/link";
import { renderMetaTags, Image } from "react-datocms";
import Header from "../../components/header";
import Layout from "../../components/layout";
import { request } from "../../lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "../../lib/fragments";
import Container from "../../components/container";
import Teaser from "../../components/teaser";
import Footer from "../../components/footer";
import BigX from "../../components/big-x";
import { motion } from "framer-motion"
import { fade } from "../../helpers/transitionHelper"
import { useContext } from 'react'
import { SmoothScrollContext, SmoothScrollProvider } from '../../contexts/SmoothScroll.context'
var at = require('lodash/at');

export default function Work({ data: { site, work } }) {
  // const metaTags = about.seo.concat(site.favicon);

  const gridMainPosts = at(work, [0,2,3,5,7]);
  const gridSidebarPosts = at(work, [1,4,6]);
  const morePosts = work.slice(7);

  return (
    <SmoothScrollProvider options={{ smooth: true, lerp: 0.13 }}>
      <Layout>
        {/* <Head>{renderMetaTags(metaTags)}</Head> */}
        
        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
          className=""
        >
          <motion.div variants={fade} className=" overflow-hidden relative">
            <Header theme="off-black" />
            <BigX color="text-white" />
            <div className="pt-40 md:pt-48 xl:pt-56 relative">
              <Container>
                <h1 className="text-6xl md:text-7xl xl:text-8xl 3xl:text-9xl leading-none w-full max-w-4xl tracking-tighter mb-4 md:mb-6 xl:mb-8">Our Collabs</h1>

                <nav className="border-t border-b border-off-black py-2 mb-8 md:mb-12 xl:mb-20 relative">
                  <ul className="flex flex-wrap">
                    <li className="text-2xl md:text-3xl xl:text-4xl leading-none tracking-tighter relative pr-5 mr-1 md:mr-3 flex my-2 md:my-3">Brand Campaigns <span className="block text-xl tracking-normal -mt-1 ml-1">(3)</span></li>
                    <li className="text-2xl md:text-3xl xl:text-4xl leading-none tracking-tighter relative pr-5 mr-1 md:mr-3 flex my-2 md:my-3">Paid Social <span className="block text-xl tracking-normal -mt-1 ml-1">(11)</span></li>
                    <li className="text-2xl md:text-3xl xl:text-4xl leading-none tracking-tighter relative pr-5 mr-1 md:mr-3 flex my-2 md:my-3">Video Ads <span className="block text-xl tracking-normal -mt-1 ml-1">(7)</span></li>
                    <li className="text-2xl md:text-3xl xl:text-4xl leading-none tracking-tighter relative pr-5 mr-1 md:mr-3 flex my-2 md:my-3">TV &amp; VOD <span className="block text-xl tracking-normal -mt-1 ml-1">(12)</span></li>
                    <li className="text-2xl md:text-3xl xl:text-4xl leading-none tracking-tighter relative pr-5 mr-1 md:mr-3 flex my-2 md:my-3">Concepts <span className="block text-xl tracking-normal -mt-1 ml-1">(2)</span></li>
                    <li className="text-2xl md:text-3xl xl:text-4xl leading-none tracking-tighter relative pr-5 mr-1 md:mr-3 flex my-2 md:my-3">Production <span className="block text-xl tracking-normal -mt-1 ml-1">(6)</span></li>
                    <li className="text-2xl md:text-3xl xl:text-4xl leading-none tracking-tighter relative pr-5 mr-1 md:mr-3 flex my-2 md:my-3">Motion Graphics <span className="block text-xl tracking-normal -mt-1 ml-1">(18)</span></li>

                    <li className="text-2xl md:text-3xl xl:text-4xl leading-none tracking-tighter relative block my-2 md:my-3 ml-auto">
                      <span className="flex relative z-10">All <span className="block text-xl tracking-normal -mt-1 ml-1">(18)</span></span>
                      <span className="w-8 md:w-10 xl:w-12 h-8 md:h-10 xl:h-12 rounded-full bg-yellow absolute top-0 left-0 ml-0 -mt-1 z-0 block"></span>
                    </li>
                  </ul>
                </nav>

                <div className="overflow-hidden mb-12 md:mb-20 xl:mb-24 3xl:mb-32">
                  <div className="flex flex-wrap md:-mx-4 lg:-mx-8 2xl:-mx-12">
                    <div className="w-full md:w-7/12 lg:w-8/12 md:px-4 lg:px-8 2xl:px-12">
                      <div className="flex flex-wrap md:-mx-4 lg:-mx-8">
                        {gridMainPosts.map((work, i) => {
                          let widthClass = 'w-full';
                          let image = work.teaserImage;
                          let innerSpacingClass = '';
                          
                          if (i === 0) { 
                            image = work.teaserImageLandscape;
                          } else if (i === 1 ) {
                            widthClass = 'w-full md:w-1/2';
                            image = work.teaserImageSquare;
                          } else if (i === 2 ) {
                            widthClass = 'w-full md:w-1/2';
                            innerSpacingClass = 'md:p-4 lg:p-8 xl:p-12 2xl:p-16';
                            image = work.teaserImageSquare;
                          } else if (i === 3 ) {
                            widthClass = 'w-full md:w-full';
                            image = work.teaserImageLandscape;
                          } else if (i === 4 ) {
                            widthClass = 'w-full md:w-2/3 md:mx-auto';
                            image = work.teaserImageLandscape;
                          }

                          return (
                            <div key={i} className={`${widthClass} md:px-4 lg:px-8 `}>
                              <div className={`mb-8 md:mb-16 ${innerSpacingClass}`}>
                                <Teaser 
                                  link={`/work/${work.slug}`}
                                  image={image}
                                  video={work.teaserVideo ? work.teaserVideo.video.mp4Url : null}
                                  title={work.title}
                                  meta={'Luxury Fashion'}
                                />
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>

                    {/* Sidebar */}
                    <div className="w-full md:w-5/12 lg:w-4/12 md:px-4 lg:px-8 2xl:px-12">
                      {gridSidebarPosts.map((work, i) => {
                        let widthClass = 'w-full';
                        let image = work.teaserImagePortrait

                        if (i === 2) { 
                          image = work.teaserImageSquare;
                        }
                        
                        return (
                          <div key={i} className={`${widthClass} md:px-4 lg:px-8`}>
                            <div className="mb-8 md:mb-16">
                              <Teaser 
                                link={`/work/${work.slug}`}
                                image={image}
                                video={work.teaserVideo ? work.teaserVideo.video.mp4Url : null}
                                title={work.title}
                                meta={'Luxury Fashion'}
                              />
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </Container>
              <Footer />
            </div>
          </motion.div>
        </motion.div>
      </Layout>
    </SmoothScrollProvider>
  );
}

const WORK_QUERY = `
  query WorkPage {
    site: _site {
      favicon: faviconMetaTags {
        ...metaTagsFragment
      }
    }
    work: allWorks(orderBy: position_ASC) {
      id
      slug
      title
      teaserImageSquare: teaserImage {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 900, h: 900 }) {
          ...responsiveImageFragment
        }
        title
        alt
      }
      teaserImageLandscape: teaserImage {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 1100, h: 620 }) {
          ...responsiveImageFragment
        }
        title
        alt
      }
      teaserImagePortrait: teaserImage {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 600, h: 1000 }) {
          ...responsiveImageFragment
        }
        title
        alt
      }

      teaserVideo {
        video {
          mp4Url
        }
      }
    }
  }
  ${metaTagsFragment}
  ${responsiveImageFragment}
`

export async function getStaticProps() {
  const data = await request({
    query: WORK_QUERY
  })

  return {
    props: {
      data,
    },
  }
}