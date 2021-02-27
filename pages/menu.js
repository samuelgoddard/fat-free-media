import Head from "next/head";
import { renderMetaTags, Image } from "react-datocms";
import Header from '../components/header'
import Link from "next/link";
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
          <motion.div variants={fade} className=" bg-orange text-off-white min-h-screen flex flex-wrap items-center md:items-end overflow-hidden relative">
            <Header theme="white" activeMenu />

            <BigX color="text-orange-darker " />

            <Container>
              <div className="relative z-10 hidden md:flex flex-wrap w-full">
                <div className="h-full w-full md:w-1/4">
                  <MenuItem
                    link="/"
                    animation={menuMovement}
                    image={home.menuImage}
                    video={home.menuVideo ? home.menuVideo : null}
                    heading="Home"
                    text={home.menuText}
                  />
                </div>
                <div className="h-full w-full md:w-1/4">
                  <MenuItem
                    link="/work"
                    animation={menuMovementOne}
                    image={work.menuImage}
                    video={work.menuVideo ? work.menuVideo : null}
                    heading="Work"
                    text={work.menuText}
                  />
                </div>
                <div className="h-full w-full md:w-1/4">
                  <MenuItem
                    link="/about"
                    animation={menuMovementTwo}
                    image={about.menuImage}
                    video={about.menuVideo ? about.menuVideo : null}
                    heading="About"
                    text={about.menuText}
                  />
                </div>
                <div className="h-full w-full md:w-1/4">
                  <MenuItem
                    link="/contact"
                    animation={menuMovementThree}
                    image={contact.menuImage}
                    video={contact.menuVideo ? contact.menuVideo : null}
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
                    video={home.menuVideo ? home.menuVideo : null}
                    heading="Home"
                    text={home.menuText}
                  />
                </div>
                <div className="h-full w-full md:w-1/4">
                  <MenuItem
                    link="/work"
                    animation={fade}
                    image={work.menuImage}
                    video={work.menuVideo ? work.menuVideo : null}
                    heading="Work"
                    text={work.menuText}
                  />
                </div>
                <div className="h-full w-full md:w-1/4">
                  <MenuItem
                    link="/about"
                    animation={fade}
                    image={about.menuImage}
                    video={about.menuVideo ? about.menuVideo : null}
                    heading="About"
                    text={about.menuText}
                  />
                </div>
                <div className="h-full w-full md:w-1/4">
                  <MenuItem
                    link="/contact"
                    animation={fade}
                    image={contact.menuImage}
                    video={contact.menuVideo ? contact.menuVideo : null}
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
      menuImage {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 720, h: 1000 }) {
          ...responsiveImageFragment
        }
        title
        alt
      }
      menuVideo {
        video {
          mp4Url
        }
      }
      menuText
    }
    about {
      menuImage {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 720, h: 1000 }) {
          ...responsiveImageFragment
        }
        title
        alt
      }
      menuVideo {
        video {
          mp4Url
        }
      }
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
      menuVideo {
        video {
          mp4Url
        }
      }
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
      menuVideo {
        video {
          mp4Url
        }
      }
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