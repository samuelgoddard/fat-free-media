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
import { fade, reveal, scaleDown } from "../../helpers/transitionHelper"
import { useContext } from 'react'
import { SmoothScrollContext, SmoothScrollProvider } from '../../contexts/SmoothScroll.context'
var at = require('lodash/at');

export default function Work({ data: { site, work, current, allDisciplines } }) {
  // const metaTags = about.seo.concat(site.favicon);

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
                <div className="relative overflow-hidden mb-4 md:mb-6 xl:mb-8">
                  <motion.h1 variants={reveal} className="text-6xl md:text-7xl xl:text-8xl 3xl:text-9xl leading-tight w-full max-w-4xl tracking-tighter mb-0 pb-0">{current.title}</motion.h1>
                </div>

                <nav className="border-t border-b border-off-black py-2 mb-8 md:mb-12 xl:mb-20 relative">
                  <ul className="flex flex-wrap">
                  
                    {allDisciplines.map((discipline, i) => {
                      return (
                        <li key={i} className="text-2xl md:text-3xl xl:text-4xl leading-tight tracking-tighter relative pr-5 mr-1 md:mr-3 flex my-2 md:my-3 overflow-hidden">
                          <motion.span variants={reveal}>
                            <Link href={`/disciplines/${discipline.slug}`}>
                              <a aria-label={`Navigate to ${discipline.title} Discipline page`} className="flex">
                                {discipline.title} <span className="block text-xl tracking-normal -mt-1 ml-1">(3)</span>
                              </a>
                            </Link>
                          </motion.span>
                        </li>
                      )
                    })}
                    <li className="text-2xl md:text-3xl xl:text-4xl leading-none tracking-tighter relative block my-2 md:my-3 ml-auto overflow-hidden">
                      <motion.span variants={reveal}>
                        <Link href={`/work`}>
                          <a aria-label={`Navigate to Work page`} className="flex">
                            <span className="relative z-10 flex">All <span className="block text-xl tracking-normal -mt-1 ml-1">(3)</span></span>

                            <motion.span variants={scaleDown} className="w-6 md:w-8 xl:w-10 h-6 md:h-8 xl:h-10 rounded-full bg-yellow absolute top-0 left-0 ml-0 mt-0 z-0 block"></motion.span>
                          </a>
                        </Link>
                      </motion.span>
                    </li>
                  </ul>
                </nav>

                <div className="overflow-hidden mb-12 md:mb-20 xl:mb-24 3xl:mb-32">
                  <div className="flex flex-wrap md:-mx-4 lg:-mx-8 2xl:-mx-12">
                    <div className="w-full md:w-7/12 lg:w-8/12 md:px-4 lg:px-8 2xl:px-12">
                      <div className="flex flex-wrap md:-mx-4 lg:-mx-8">
                        {work.map((work, i) => {
                          let image = work.teaserImageLandscape;
                          let exists = work.disciplinesUsed.some( work => work['slug'] === current.slug )

                          return (
                            <div key={i} className="w-full md:px-4 lg:px-8">
                              { exists && (
                                <div>
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
                              )}
                            </div>
                          )
                        })}
                      </div>
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

const DISCIPLINE_QUERY = `
  query DisciplinePage($id: [ItemId], $slug: String!) {
    site: _site {
      favicon: faviconMetaTags {
        ...metaTagsFragment
      }
    }
    allDisciplines {
      title
      slug
    }
    current: discipline(filter: {slug: {eq: $slug}}) {
      title
      slug
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

export async function getStaticProps({ params }) {
  const data = await request({
    query: DISCIPLINE_QUERY,
    variables: {
      slug: params.slug,
      // I want to get the ID here....
      id: data.id,
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