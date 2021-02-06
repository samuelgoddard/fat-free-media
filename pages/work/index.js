import Head from "next/head";
import Link from "next/link";
import { renderMetaTags } from "react-datocms";
import Layout from "../../components/layout";
import { request } from "../../lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "../../lib/fragments";
import Container from "../../components/container";
import Footer from "../../components/footer";
import BigX from "../../components/big-x";
import { motion } from "framer-motion"
import { fade } from "../../helpers/transitionHelper"
import { useContext } from 'react'
import { SmoothScrollContext, SmoothScrollProvider } from '../../contexts/SmoothScroll.context'

export default function Work({ data: { site, work } }) {
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
            <BigX color="text-white" />
            <div className="pt-40 md:pt-48 xl:pt-56 relative">
              <Container>
                <h1 className="text-6xl md:text-7xl xl:text-8xl leading-none w-full max-w-4xl tracking-tighter mb-4 md:mb-6 xl:mb-8">Our Collabs</h1>

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

                <div className="overflow-hidden">
                  <div className="flex flex-wrap md:-mx-8">
                    {work.map((post, i) => (
                      <div className="w-full md:w-1/2 mb-8 md:mb-16 md:px-8" key={i}>
                        <Link href={`/work/${post.slug}`}>
                          <a aria-label="Navigate to Work Item" className="w-full block">
                            <div className="w-full h-48 bg-off-black mb-2"></div>
                            <div className="flex flex-wrap items-center">
                              <span className="text-2xl md:text-2xl xl:text-3xl leading-none tracking-tighter">{ post.title }</span>
                              <span className="block text-xs uppercase tracking-tighter leading-none ml-auto">Luxury Fashion</span>
                            </div>
                          </a>
                        </Link>
                      </div>
                    ))}
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
    work: allWorks {
      id
      slug
      title
    }
  }
  ${metaTagsFragment}
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