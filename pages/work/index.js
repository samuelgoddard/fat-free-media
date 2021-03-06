import Head from "next/head";
import { renderMetaTags } from "react-datocms";
import Header from "../../components/header";
import Layout from "../../components/layout";
import { request } from "../../lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "../../lib/fragments";
import Container from "../../components/container";
import Teaser from "../../components/teaser";
import Footer from "../../components/footer";
import BigX from "../../components/big-x";
import { motion } from "framer-motion"
import FilterLink from "../../components/filter-link";
import { fade, reveal } from "../../helpers/transitionHelper"
import { SmoothScrollProvider } from '../../contexts/SmoothScroll.context'
import Collapsible from "../../components/collapsible";
var at = require('lodash.at');

export default function Work({ data: { site, work, disciplines, workLanding } }) {
  const metaTags = workLanding.seo.concat(site.favicon);

  const fullWorkLength = work.length;
  const gridMainPosts = at(work, [0,2,3,5,7]);
  const gridSidebarPosts = at(work, [1,4,6]);
  const morePosts = work.slice(8);

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
          <motion.div variants={fade} className="overflow-hidden relative">
            <Header theme="off-black" />
            <BigX color="text-white" />
            <div className="pt-40 md:pt-48 xl:pt-56 2xl:pt-80 relative">
              <Container fullBleed>
                <div className="relative overflow-hidden mb-4 md:mb-6 xl:mb-8">
                  <motion.h1 variants={reveal} className="text-6xl md:text-7xl xl:text-8xl 3xl:text-9xl leading-none w-full max-w-4xl tracking-tighter mb-0 pb-0">Our Work</motion.h1>
                </div>
                <nav className="border-t border-b border-off-black py-2 mb-8 md:mb-12 xl:mb-20 md:pb-6 relative">
                  <ul className="hidden md:flex flex-wrap pr-8 md:pr-16 xl:pr-20 pb-2 md:pb-0">
                    {disciplines.map((discipline, i) => {
                      return (
                        <li key={i} className="text-base md:text-3xl xl:text-4xl leading-tight tracking-tighter relative pr-2 md:pr-4 flex  overflow-hidden">
                          <motion.span variants={reveal}>
                            <FilterLink link={`/disciplines/${discipline.slug}`} a11yText={`Navigate to ${discipline.title} Discipline page`} text={discipline.title} noPad amount={discipline.amountOfProjects} />
                          </motion.span>
                          { i !== (disciplines.length - 1) &&(
                            <motion.span variants={reveal}>
                              <span className="block text-2xl md:text-3xl xl:text-4xl tracking-normal leading-none mt-1 md:mt-3 ml-2 md:ml-4">&bull;</span>
                            </motion.span>
                          )}
                        </li>
                      )
                    })}

                    <li className="text-2xl md:text-3xl xl:text-4xl leading-none tracking-tighter block pb-3 md:pb-4 ml-auto overflow-hidden absolute bottom-0 right-0">
                      <motion.span variants={reveal}>
                        <FilterLink link={`/work`} a11yText={`Navigate to Work page`} text={"All"} amount={fullWorkLength} active={true} />
                      </motion.span>
                    </li>
                  </ul>
                  
                  <div className="block md:hidden">
                    <Collapsible buttonText="Filter">
                      <ul className="flex flex-wrap pr-8 md:pr-16 xl:pr-20 pb-2 md:pb-0">
                        {disciplines.map((discipline, i) => {
                          return (
                            <li key={i} className="text-base md:text-3xl xl:text-4xl leading-tight tracking-tighter relative pr-2 md:pr-4 flex  w-full">
                              <motion.span variants={reveal} className="block">
                                <FilterLink link={`/disciplines/${discipline.slug}`} noPad a11yText={`Navigate to ${discipline.title} Discipline page`} text={discipline.title} amount={discipline.amountOfProjects} />
                              </motion.span>
                            </li>
                          )
                        })}

                        <li className="text-2xl md:text-3xl xl:text-4xl leading-none tracking-tighter block pb-3 md:pb-4 ml-auto absolute bottom-0 right-0">
                          <motion.span variants={reveal} className="block">
                            <FilterLink link={`/work`} a11yText={`Navigate to Work page`} text={"All"} amount={fullWorkLength} active={true} />
                          </motion.span>
                        </li>
                      </ul>
                    </Collapsible>
                  </div>
                </nav>

                <div className="overflow-hidden mb-12 md:mb-20 xl:mb-24 2xl:mb-32 3xl:mb-32">
                  <div className="flex flex-wrap md:-mx-4 lg:-mx-8 2xl:-mx-12 mb-6 md:mb-8 xl:mb-16">
                    <div className="w-full md:w-7/12 lg:w-8/12 md:px-4 lg:px-8 2xl:px-12">
                      <div className="flex flex-wrap md:-mx-4 lg:-mx-8">
                        {gridMainPosts.map((work, i) => {
                          let widthClass = 'w-full';
                          let image = work.teaserImageLandscape;
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
                              <div className={`mb-12 md:mb-20 xl:mb-24 2xl:mb-32 ${innerSpacingClass}`}>
                                <Teaser 
                                  link={`/work/${work.slug}`}
                                  image={image}
                                  video={work.teaserVideo720p ? work.teaserVideo720p : null}
                                  videoAlwaysOn={work.teaserAutoplayAlwaysOn}
                                  title={work.heroMeta}
                                  meta={work.heroHeading}
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
                          <div key={i} className={`${widthClass} md:pl-4 lg:pl-8`}>
                            <div className="mb-12 md:mb-20 xl:mb-24 2xl:mb-32">
                              <Teaser 
                                link={`/work/${work.slug}`}
                                image={image}
                                video={work.teaserVideo720p ? work.teaserVideo720p : null}
                                videoAlwaysOn={work.teaserAutoplayAlwaysOn}
                                title={work.heroMeta}
                                meta={work.heroHeading}
                              />
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                    
                  <div className="border-b border-black mb-8">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-3 pb-0 tracking-tighter">More Work</h2>
                  </div>
                  <div className="flex flex-wrap md:-mx-4 lg:-mx-8">
                    {morePosts.map((work, i) => {
                      let widthClass = 'w-full md:w-1/2';
                      let image = work.teaserImageLandscape;
                      let innerSpacingClass = '';

                      return (
                        <div key={i} className={`${widthClass} md:px-4 lg:px-8 `}>
                          <div className={`mb-12 md:mb-20 ${innerSpacingClass}`}>
                            <Teaser 
                              link={`/work/${work.slug}`}
                              image={image}
                              video={work.teaserVideo720p ? work.teaserVideo720p : null}
                              videoAlwaysOn={work.teaserAutoplayAlwaysOn}
                              title={work.heroMeta}
                              meta={work.heroHeading}
                            />
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </Container>
              <Footer disciplines={disciplines} />
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
    disciplines: allDisciplines(orderBy: position_ASC) {
      id
      slug
      title
      amountOfProjects
    }
    workLanding {
      seo: _seoMetaTags {
        ...metaTagsFragment
      }
    }
    work: allWorks(orderBy: position_ASC) {
      id
      slug
      title
      teaserImageSquare: teaserImage {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 900, h: 900, auto: format }) {
          ...responsiveImageFragment
        }
        title
        alt
      }
      teaserImageLandscape: teaserImage {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 1100, h: 620, auto: format }) {
          ...responsiveImageFragment
        }
        title
        alt
      }
      teaserImagePortrait: teaserImage {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 600, h: 1000, auto: format }) {
          ...responsiveImageFragment
        }
        title
        alt
      }
      heroMeta
      heroHeading
      teaserVideo720p
      teaserAutoplayAlwaysOn   
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