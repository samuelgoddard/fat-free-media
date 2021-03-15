import Head from "next/head";
import { renderMetaTags } from "react-datocms";
import Header from "../components/header";
import Layout from "../components/layout";
import { request } from "../lib/datocms";
import { metaTagsFragment } from "../lib/fragments";
import Container from "../components/container";
import Footer from "../components/footer";
import BigX from "../components/big-x";
import FancyLink from "../components/fancy-link";
import { motion } from "framer-motion"
import { fade } from "../helpers/transitionHelper"
import {  SmoothScrollProvider } from '../contexts/SmoothScroll.context'

export default function ServiceSingle({ data: { site, legal } }) {
  const metaTags = legal._seoMetaTags.concat(site.favicon);

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
            <div className="relative">
              <Container>
                <div className="pt-40 md:pt-48 xl:pt-56 2xl:pt-64 relative pb-8 md:pb-16 xl:pb-20" data-scroll data-scroll-speed="1.4">
                  <div className="flex flex-wrap items-center justify-center md:-mx-2 lg:-mx-8">
                    <div className="flex-1 text-center md:px-2 lg:px-8">
                      <h1 className="text-6xl md:text-7xl xl:text-8xl 2xl:text-9xl leading-none w-full tracking-tighter mt-8 mx-auto md:mx-0">{ legal.title }</h1>
                    </div>
                  </div>
                </div>
              </Container>

              <div className="pb-12 md:pb-20 xl:pb-32 2xl:pb-40">
                <Container thinner>
                  <div className="max-w-4xl mx-auto">
                    <div className="content text-lg" dangerouslySetInnerHTML={{ __html:legal.content}}></div>
                  </div>
                </Container>
              </div>

              <div className="bg-off-black pt-6 md:pt-8 pb-6 md:pb-10 block text-center text-off-white text-4xl md:text-5xl xl:text-6xl tracking-tighter leading-none">
                <FancyLink link="/contact" a11yText="Navigate to contact page" text="Let's talk about it" thicc />
              </div>
              
              <Footer hideMarquee />
            </div>
          </motion.div>
        </motion.div>
      </Layout>
    </SmoothScrollProvider>
  );
}

const LEGAL_SINGLE_QUERY = `
  query LegalSingle($slug: String) {
    site: _site {
      favicon: faviconMetaTags {
        ...metaTagsFragment
      }
    }
    legal: legal(filter: {slug: {eq: $slug}}) {
      _seoMetaTags {
        ...metaTagsFragment
      }
      title
      content
    }
  }
  ${metaTagsFragment}
`


export async function getStaticProps({ params }) {
  const data = await request({
    query: LEGAL_SINGLE_QUERY,
    variables: {
      slug: params.slug,
    },
  })

  return {
      props: {
        data
      }
  }
}

export async function getStaticPaths() {
  const data = await request({ query: `{ allLegals { slug } }` });

  return {
    paths: data.allLegals.map((legal) => `/${legal.slug}`),
    fallback: false,
  };
}