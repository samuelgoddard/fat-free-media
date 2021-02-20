import Head from "next/head";
import Link from "next/link";
import { renderMetaTags } from "react-datocms";
import Layout from "../../components/layout";
import { request } from "../../lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "../../lib/fragments";
import Container from "../../components/container";
import Footer from "../../components/footer";
import BigX from "../../components/big-x";
import CircleInfinity from "../../components/circle-infinity";
import { motion } from "framer-motion"
import { fade } from "../../helpers/transitionHelper"
import {  SmoothScrollProvider } from '../../contexts/SmoothScroll.context'

export default function ServiceSingle({ data: { site, service } }) {
  const metaTags = service._seoMetaTags.concat(site.favicon);

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
            <BigX color="text-white" />
            <div className="relative">
              <Container>
                <div className="pt-40 md:pt-48 xl:pt-56 2xl:pt-64 relative pb-8 md:pb-16 xl:pb-20" data-scroll data-scroll-speed="1.4">
                  <div className="flex flex-wrap items-center justify-center md:-mx-2 lg:-mx-8">
                    <div className="w-auto md:w-2/12 lg:w-3/12 md:px-2 lg:px-8 hidden md:block">
                      <CircleInfinity color="bg-orange" small />
                      <div className="flex-1 h-px -mt-3 bg-off-black"></div>
                    </div>
                    <div className="flex-1 text-center md:px-2 lg:px-8">
                      <h1 className="text-6xl md:text-7xl xl:text-8xl 2xl:text-9xl leading-none w-full tracking-tighter max-w-sm md:max-w-xl xl:max-w-2xl mt-8 mx-auto md:mx-0">{ service.heroHeading }</h1>
                    </div>
                  </div>
                </div>
              </Container>

              <Container thin>
                <div className="relative pb-12 md:pb-20 xl:pb-32" data-scroll data-scroll-speed="1.4">
                  <div className="text-xl md:text-xl xl:text-2xl leading-none w-full tracking-tighter max-w-sm md:max-w-xl xl:max-w-xl uppercase" dangerouslySetInnerHTML={{ __html: service.heroText }}></div>
                </div>
              </Container>

              <Container>
              {
                service.contentBlocks.map((block) => (
                  <div key={block.id} className="pb-8 md:pb-16 xl:pb-20" data-scroll data-scroll-speed="1.2">
                    {
                      block._modelApiKey === 'text' &&
                      <div className="flex flex-wrap md:-mx-5">
                        <div className="w-full md:w-1/3 md:px-5">
                          { block.headingMetaText && (
                            <span className="block text-xs uppercase tracking-tighter leading-none">— { block.headingMetaText }</span>
                          )}
                          { block.heading && (
                            <h2 className="text-4xl md:text-5xl xl:text-6xl leading-none tracking-tighter">{ block.heading }</h2>
                          )}
                        </div>
                        <div className="w-full md:w-2/3 md:px-5">
                          <div className="content text-xl md:text-2xl tracking-tighter leading-tight max-w-3xl" dangerouslySetInnerHTML={{ __html: block.text }}></div>
                        </div>
                      </div>
                    }
                  </div>
                ))
              }
              </Container>
              <Footer hideMarquee />
            </div>
          </motion.div>
        </motion.div>
      </Layout>
    </SmoothScrollProvider>
  );
}

const SERVICE_SINGLE_QUERY = `
  query ServiceSingle($slug: String) {
    site: _site {
      favicon: faviconMetaTags {
        ...metaTagsFragment
      }
    }
    service: service(filter: {slug: {eq: $slug}}) {
      _seoMetaTags {
        ...metaTagsFragment
      }
      title
      heroHeading
      heroText
      slug
      contentBlocks {
        _modelApiKey
        id
        headingMetaText
        heading
        text
      }
    }
  }
  ${metaTagsFragment}
`

export async function getStaticProps({ params }) {
  const data = await request({
    query: SERVICE_SINGLE_QUERY,
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
  const data = await request({ query: `{ allServices { slug } }` });

  return {
    paths: data.allServices.map((service) => `/services/${service.slug}`),
    fallback: false,
  };
}