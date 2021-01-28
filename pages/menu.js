import Head from "next/head";
import { renderMetaTags, useQuerySubscription } from "react-datocms";
import Link from "next/link";
import Layout from "../components/layout";
import { request } from "../lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "../lib/fragments";
import Container from "../components/container";
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
            <svg className="bg-x z-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2293.844 2243.667"><path fill="#ce8860" d="M920.549 960.027c-24.395-206.845-47.501-403.144-70.775-599.46-3.456-29.083-11.867-58.246-10.761-87.096 3.578-93.446 76.297-139.8 159.336-97.5 87.963 44.782 171.734 97.798 264.394 151.295 23.875 143.713 48.933 294.62 75.851 456.633 164.336-68.087 320.902-132.974 474.662-196.673l313.656 218.977c-9.165 90.961-53.964 139.546-129.478 168.1-181.596 68.664-362.23 139.903-543.19 210.34-20.165 7.864-39.744 17.188-70.067 30.395 4.433 41.673 6.69 84.108 13.702 125.738 40.718 242.03 83.188 483.77 123.316 725.893 5.61 33.799 1.604 69.17 2.412 132.113-164.3-80.74-306.613-150.65-438.69-215.568-37.16-210.437-70.797-400.911-106.349-602.23-199.494 78.834-391.113 154.555-578.868 228.755-128.321-86.98-244.42-165.678-383.043-259.626 307.057-162.055 609.898-256.18 903.892-390.086z" data-name="Path 1"/></svg>
            
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
                  <Link href="/"><a aria-label="Navigate to Home" className="group block py-5 md:py-10 border-b md:border-b-0 md:border-l border-dotted border-off-white border-opacity-50 md:px-8 md:opacity-50 hover:opacity-100 focus:opacity-100 transition ease-in-out duration-500 focus:outline-none">
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