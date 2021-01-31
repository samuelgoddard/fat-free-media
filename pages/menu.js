import Head from "next/head";
import { renderMetaTags, useQuerySubscription } from "react-datocms";
import Link from "next/link";
import Layout from "../components/layout";
import { request } from "../lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "../lib/fragments";
import Container from "../components/container";
import BigX from "../components/big-x";
import { motion } from "framer-motion"
import { fade } from "../helpers/transitionHelper"
import { SmoothScrollProvider } from '../contexts/SmoothScroll.context'

export default function Menu({ data: { site } }) {
  // const metaTags = about.seo.concat(site.favicon);

  return (
    <SmoothScrollProvider options={{ smooth: true, lerp: 0.13 }}>
      <Layout>
        <Head>{renderMetaTags(site.favicon)}</Head>
        
        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <motion.div variants={fade} className="pt-32 md:pt-48 xl:pt-56 bg-orange text-off-white min-h-screen flex flex-wrap items-center md:items-end overflow-hidden relative">
            <BigX color="orange-dark" />

            <Container>
              <div className="flex flex-wrap relative z-10">
                <div className="h-full w-full md:w-1/5">
                  <Link href="/"><a aria-label="Navigate to Home" className="group block py-5 md:py-10 border-b md:border-b-0 md:border-l border-dotted border-off-white border-opacity-50 md:px-8 md:opacity-50 hover:opacity-100 focus:opacity-100 transition ease-in-out duration-500 focus:outline-none">
                    <div className="transition-transform ease-in-out duration-500 md:transform group-hover:-translate-y-12 group-focus:-translate-y-12">
                      
                      <img src="https://placedog.net/650/900" alt="Placeholder" className="transition ease-in-out duration-500 opacity-0 group-hover:opacity-100 group-focus:opacity-100 mb-10 transform skew-y-1 hidden md:block" />

                      <h3 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl leading-none tracking-tighter mb-2 md:mb-5">Home</h3>
                      
                      <p className="font-mono text-sm">An overview of what we’re about.</p>
                    </div>
                  </a></Link>
                </div>
                <div className="h-full w-full md:w-1/5">
                  <Link href="/"><a aria-label="Navigate to Home" className="group block py-5 md:py-10 border-b md:border-b-0 md:border-l border-dotted border-off-white border-opacity-50 md:px-8 md:opacity-50 hover:opacity-100 focus:opacity-100 transition ease-in-out duration-500 focus:outline-none">
                    <div className="transition-transform ease-in-out duration-500 md:transform group-hover:-translate-y-12 group-focus:-translate-y-12">
                      
                      <img src="https://placedog.net/650/900" alt="Placeholder" className="transition ease-in-out duration-500 opacity-0 group-hover:opacity-100 group-focus:opacity-100 mb-10 transform skew-y-1 hidden md:block" />

                      <h3 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl leading-none tracking-tighter mb-2 md:mb-5">Work</h3>
                      
                      <p className="font-mono text-sm">An overview of what we’re about.</p>
                    </div>
                  </a></Link>
                </div>
                <div className="h-full w-full md:w-1/5">
                  <Link href="/about"><a aria-label="Navigate to Home" className="group block py-5 md:py-10 border-b md:border-b-0 md:border-l border-dotted border-off-white border-opacity-50 md:px-8 md:opacity-50 hover:opacity-100 focus:opacity-100 transition ease-in-out duration-500 focus:outline-none">
                    <div className="transition-transform ease-in-out duration-500 md:transform group-hover:-translate-y-12 group-focus:-translate-y-12">
                      
                      <img src="https://placedog.net/650/900" alt="Placeholder" className="transition ease-in-out duration-500 opacity-0 group-hover:opacity-100 group-focus:opacity-100 mb-10 transform skew-y-1 hidden md:block" />

                      <h3 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl leading-none tracking-tighter mb-2 md:mb-5">About</h3>
                      
                      <p className="font-mono text-sm">An overview of what we’re about.</p>
                    </div>
                  </a></Link>
                </div>
                <div className="h-full w-full md:w-1/5">
                  <Link href="/"><a aria-label="Navigate to Home" className="group block py-5 md:py-10 border-b md:border-b-0 md:border-l border-dotted border-off-white border-opacity-50 md:px-8 md:opacity-50 hover:opacity-100 focus:opacity-100 transition ease-in-out duration-500 focus:outline-none">
                    <div className="transition-transform ease-in-out duration-500 md:transform group-hover:-translate-y-12 group-focus:-translate-y-12">
                      
                      <img src="https://placedog.net/650/900" alt="Placeholder" className="transition ease-in-out duration-500 opacity-0 group-hover:opacity-100 group-focus:opacity-100 mb-10 transform skew-y-1 hidden md:block" />

                      <h3 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl leading-none tracking-tighter mb-2 md:mb-5">Journal</h3>
                      
                      <p className="font-mono text-sm">An overview of what we’re about.</p>
                    </div>
                  </a></Link>
                </div>
                <div className="h-full w-full md:w-1/5">
                  <Link href="/"><a aria-label="Navigate to Home" className="group block py-5 md:py-10 border-b md:border-b-0 md:border-l border-dotted border-off-white border-opacity-50 md:px-8 md:opacity-50 hover:opacity-100 focus:opacity-100 transition ease-in-out duration-500 focus:outline-none">
                    <div className="transition-transform ease-in-out duration-500 md:transform group-hover:-translate-y-12 group-focus:-translate-y-12">
                      
                      <img src="https://placedog.net/650/900" alt="Placeholder" className="transition ease-in-out duration-500 opacity-0 group-hover:opacity-100 group-focus:opacity-100 mb-10 transform skew-y-1 hidden md:block" />

                      <h3 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl leading-none tracking-tighter mb-2 md:mb-5">Contact</h3>
                      
                      <p className="font-mono text-sm">An overview of what we’re about.</p>
                    </div>
                  </a></Link>
                </div>
              </div>
            </Container>
          </motion.div>
        </motion.div>
      </Layout>
    </SmoothScrollProvider>
  );
}

const MENU_QUERY = `
  query HomePage {
    site: _site {
      favicon: faviconMetaTags {
        ...metaTagsFragment
      }
    }
  }
  ${metaTagsFragment}
`

export async function getStaticProps() {
  const data = await request({
    query: MENU_QUERY
  })

  return {
    props: {
      data,
    },
  }
}