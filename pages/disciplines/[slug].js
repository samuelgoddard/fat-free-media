import Head from "next/head";
import { renderMetaTags } from "react-datocms";
import Header from "../../components/header";
import Layout from "../../components/layout";
import { request } from "../../lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "../../lib/fragments";
import Container from "../../components/container";
import TeaserFull from "../../components/teaser-full";
import Footer from "../../components/footer";
import BigX from "../../components/big-x";
import FilterLink from "../../components/filter-link";
import { motion } from "framer-motion"
import { fade, reveal } from "../../helpers/transitionHelper"
import Collapsible from "../../components/collapsible";
import { SmoothScrollProvider } from '../../contexts/SmoothScroll.context'

export default function Work({ data: { site, work, current, allDisciplines } }) {
  const metaTags = current.seo.concat(site.favicon);
  const fullWorkLength = work.length;

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
            <BigX color="text-white" />
            <div className="pt-40 md:pt-48 xl:pt-56 2xl:pt-80 relative">
              <Container fullBleed>
                <div className="relative overflow-hidden mb-4 md:mb-6 xl:mb-8">
                  <motion.h1 variants={reveal} className="text-6xl md:text-7xl xl:text-8xl 3xl:text-9xl leading-none w-full max-w-4xl tracking-tighter mb-0 pb-0">{ current.title }</motion.h1>
                </div>

                <nav className="border-t border-b border-off-black py-2 mb-8 md:mb-12 xl:mb-20 md:pb-6 relative">
                  <ul className="hidden md:flex flex-wrap pr-8 md:pr-16 xl:pr-20 pb-2 md:pb-0">
                    {allDisciplines.map((discipline, i) => {
                      let active = false; 
                      if (discipline.slug === current.slug) {
                        active = true;
                      }
                      return (
                        <li key={i} className={`text-base md:text-3xl xl:text-4xl leading-tight tracking-tighter relative pr-2 md:pr-4 flex `}>
                          <motion.span variants={reveal}>
                            <FilterLink link={`/disciplines/${discipline.slug}`} noPad a11yText={`Navigate to ${discipline.title} Discipline page`} text={discipline.title} active={active} amount={discipline.amountOfProjects} extraClasses={active ? 'opacity-100' : 'transition ease-in-out duration-300 opacity-50 hover:opacity-100 focus:opacity-100'}/>
                          </motion.span>
                          { i !== (allDisciplines.length - 1) &&(
                            <motion.span variants={reveal}>
                              <span className={`block text-2xl md:text-3xl xl:text-4xl tracking-normal leading-none mt-1 md:mt-3 ml-2 md:ml-4 ${ active ? 'opacity-100' : 'opacity-50' }`}>&bull;</span>
                            </motion.span>
                          )}
                        </li>
                      )
                    })}

                    <li className="text-2xl md:text-3xl xl:text-4xl leading-none tracking-tighter block pb-3 md:pb-4 ml-auto overflow-hidden absolute bottom-0 right-0">
                      <motion.span variants={reveal}>
                        <FilterLink link={`/work`} a11yText={`Navigate to Work page`} text={"All"} amount={fullWorkLength} active={false} />
                      </motion.span>
                    </li>
                  </ul>

                  <div className="block md:hidden">
                    <Collapsible buttonText="Filter">
                      <ul className="flex flex-wrap pr-8 md:pr-16 xl:pr-20 pb-2 md:pb-0">
                      
                        {allDisciplines.map((discipline, i) => {
                          let active = false; 
                          if (discipline.slug === current.slug) {
                            active = true;
                          }
                          return (
                            <li key={i} className={`text-lg md:text-3xl xl:text-4xl leading-tight tracking-tighter relative pr-2 md:pr-4 flex w-full`}>
                              <motion.span variants={reveal} className="block">
                                <FilterLink link={`/disciplines/${discipline.slug}`} noPad a11yText={`Navigate to ${discipline.title} Discipline page`} text={discipline.title} active={active} amount={discipline.amountOfProjects} extraClasses={active ? 'opacity-100' : 'transition ease-in-out duration-300 opacity-50 hover:opacity-100 focus:opacity-100'}/>
                              </motion.span>
                            </li>
                          )
                        })}

                        <li className="text-2xl md:text-3xl xl:text-4xl leading-none tracking-tighter block pb-3 md:pb-4 ml-auto overflow-hidden absolute bottom-0 right-0">
                          <motion.span variants={reveal} className="block">
                            <FilterLink link={`/work`} a11yText={`Navigate to Work page`} text={"All"} amount={fullWorkLength} active={false} />
                          </motion.span>
                        </li>
                      </ul>
                    </Collapsible>
                  </div>
                </nav>

                <div className="overflow-hidden mb-12 md:mb-20 xl:mb-24 3xl:mb-32">
                  <div className="flex flex-wrap">
                    <div className="w-full">
                      <div className="flex flex-wrap md:-mx-4 lg:-mx-8">
                        {work.map((work, i) => {
                          let image = work.teaserImageLandscape;
                          let exists = work.disciplinesUsed.some( work => work['slug'] === current.slug )

                          return (
                            <div key={i} className="w-full md:px-4 lg:px-8">
                              { exists && (
                                <div>
                                  <div className="mb-8 md:mb-16">
                                    <TeaserFull 
                                      link={`/work/${work.slug}`}
                                      image={image}
                                      video={work.teaserVideo720p ? work.teaserVideo720p : null}
                                      videoAlwaysOn={work.teaserAutoplayAlwaysOn}
                                      title={work.title}
                                      text={work.teaserText}
                                      meta={'Luxury Fashion'}
                                    />
                                  </div>
                                </div>
                              )}
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </Container>
              <Footer disciplines={allDisciplines} />
            </div>
          </motion.div>
        </motion.div>
      </Layout>
    </SmoothScrollProvider>
  );
}

const DISCIPLINE_QUERY = `
  query DisciplinePage($id: [ItemId], $slug: String!) {
    site: _site {
      favicon: faviconMetaTags {
        ...metaTagsFragment
      }
    }
    allDisciplines(orderBy: position_ASC) {
      title
      slug
      amountOfProjects
    }
    current: discipline(filter: {slug: {eq: $slug}}) {
      title
      slug
      seo: _seoMetaTags {
        ...metaTagsFragment
      }
    }
    work: allWorks(
      orderBy: position_ASC,
      filter: {disciplinesUsed: {anyIn: $id}}
    ) {
      id
      slug
      title
      disciplinesUsed {
        slug
      }
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
      teaserText
      teaserVideo720p
      teaserAutoplayAlwaysOn
    }
  }
  ${metaTagsFragment}
  ${responsiveImageFragment}
`

export async function getStaticProps({ params }) {
  const data = await request({
    query: DISCIPLINE_QUERY,
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
  const data = await request({ query: `{ allDisciplines { slug } }` });

  return {
    paths: data.allDisciplines.map((discipline) => `/disciplines/${discipline.slug}`),
    fallback: false,
  };
}