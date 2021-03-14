import Head from "next/head";
import { renderMetaTags } from "react-datocms";
import Header from '../components/header'
import Layout from "../components/layout";
import { request } from "../lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "../lib/fragments";
import Container from "../components/container";
import MenuItem from "../components/menu-item";
import BigX from "../components/big-x";
import { motion } from "framer-motion"
import { fade, menuMovement, menuMovementOne, menuMovementTwo, menuMovementThree } from "../helpers/transitionHelper"
import { SmoothScrollProvider } from '../contexts/SmoothScroll.context'

export default function Menu({ data: { site, home, about, work, contact } }) {
  const metaTags = home.seo.concat(site.favicon);

  return (
    <SmoothScrollProvider options={{ smooth: true, lerp: 0.13 }}>
      <Layout>

        <Head>
          {renderMetaTags(metaTags)}
        </Head>
        
        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <motion.div variants={fade} className="bg-orange text-off-white min-h-screen flex flex-wrap items-center md:items-end overflow-hidden relative pb-16 md:pb-0">
            <Header theme="white" activeMenu />

            <motion.div
              initial="initial"
              animate="enter"
              exit="exit"
              className="w-full mb-12 md:mb-10 xl:mb-0 relative z-10"
            >
              <BigX color="text-orange-darker " />
            </motion.div>

            <Container>
              <div className="relative z-10 hidden md:flex flex-wrap w-full">
                <div className="h-full w-full md:w-1/4">
                  <MenuItem
                    link="/"
                    animation={menuMovement}
                    image={home.menuImage}
                    video={home.menuVideoUrl ? home.menuVideoUrl : null}
                    heading="Home"
                    text={home.menuText}
                  />
                </div>
                <div className="h-full w-full md:w-1/4">
                  <MenuItem
                    link="/work"
                    animation={menuMovementOne}
                    image={work.menuImage}
                    video={work.menuVideoUrl ? work.menuVideoUrl : null}
                    heading="Work"
                    text={work.menuText}
                  />
                </div>
                <div className="h-full w-full md:w-1/4">
                  <MenuItem
                    link="/about"
                    animation={menuMovementTwo}
                    image={about.menuImage}
                    video={about.menuVideoUrl ? about.menuVideoUrl : null}
                    heading="About"
                    text={about.menuText}
                  />
                </div>
                <div className="h-full w-full md:w-1/4">
                  <MenuItem
                    link="/contact"
                    animation={menuMovementThree}
                    image={contact.menuImage}
                    video={contact.menuVideoUrl ? contact.menuVideoUrl : null}
                    heading="Contact"
                    text={contact.menuText}
                  />
                </div>
              </div>

              <div className="relative z-10 block md:hidden w-full">
                <div className="h-full w-full md:w-1/4">
                  <MenuItem
                    link="/"
                    animation={fade}
                    image={home.menuImage}
                    video={null}
                    heading="Home"
                    text={home.menuText}
                  />
                </div>
                <div className="h-full w-full md:w-1/4">
                  <MenuItem
                    link="/work"
                    animation={fade}
                    image={work.menuImage}
                    video={null}
                    heading="Work"
                    text={work.menuText}
                  />
                </div>
                <div className="h-full w-full md:w-1/4">
                  <MenuItem
                    link="/about"
                    animation={fade}
                    image={about.menuImage}
                    video={null}
                    heading="About"
                    text={about.menuText}
                  />
                </div>
                <div className="h-full w-full md:w-1/4">
                  <MenuItem
                    link="/contact"
                    animation={fade}
                    image={contact.menuImage}
                    video={null}
                    heading="Contact"
                    text={contact.menuText}
                  />
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
  query MenuPage {
    site: _site {
      favicon: faviconMetaTags {
        ...metaTagsFragment
      }
    }
    home {
      seo: _seoMetaTags {
        ...metaTagsFragment
      }
      menuImage {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 720, h: 1000 }) {
          ...responsiveImageFragment
        }
        title
        alt
      }
      menuText
      menuVideoUrl
    }
    about {
      menuImage {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 720, h: 1000 }) {
          ...responsiveImageFragment
        }
        title
        alt
      }
      menuVideoUrl
      menuText
    }
    work: workLanding {
      menuImage {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 720, h: 1000 }) {
          ...responsiveImageFragment
        }
        title
        alt
      }
      menuVideoUrl
      menuText
    }
    contact {
      menuImage {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 720, h: 1000 }) {
          ...responsiveImageFragment
        }
        title
        alt
      }
      menuVideoUrl
      menuText
    }
  }
  ${metaTagsFragment}
  ${responsiveImageFragment}
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