import Container from './container'
import Marquee from "react-fast-marquee";
import BigX from "./big-x";
import FancyLink from "../components/fancy-link";
import ShowreelModal from "../components/showreel-modal";
import FancyLinkExternal from "../components/fancy-link-external";
// import Vimeo from '@u-wave/react-vimeo';

export default function Footer({ hideMarquee, disciplines }) {
  return (
    <footer className="relative z-20">
      { !hideMarquee && (
        <>
        { disciplines && (
          <div className="border-t border-off-black pt-1 pb-2 relative overflow-hidden z-0">
            <div className="w-full whitespace-no-wrap text-4xl md:text-5xl xl:text-6xl tracking-tighter leading-tight relative overflow-hidden z-0">
              <Marquee pauseOnHover={true} gradient={false} speed={75}>
                {disciplines.map((discipline, i) => (
                  <span className="block" key={i} className="mb-1 md:mb-2">
                    <FancyLink link={`/disciplines/${discipline.slug}`} a11yText={`Navigate to ${discipline.title} work`} text={discipline.title} extraClasses="mx-2 md:mx-3"/>
                    <span className="inline-block mx-3 md:mx-3 align-top mt-8 md:mt-8 xl:mt-10 w-3 md:w-4 rounded-full h-3 md:h-4 bg-off-black"></span>
                  </span>
                ))}
                {disciplines.map((discipline, i) => (
                  <span className="block" key={i} className="mb-1 md:mb-2">
                    <FancyLink link={`/disciplines/${discipline.slug}`} a11yText={`Navigate to ${discipline.title} work`} text={discipline.title} extraClasses="mx-2 md:mx-3"/>
                    <span className="inline-block mx-3 md:mx-3 align-top mt-8 md:mt-8 xl:mt-10 w-3 md:w-4 rounded-full h-3 md:h-4 bg-off-black"></span>
                  </span>
                ))}
                {disciplines.map((discipline, i) => (
                  <span className="block" key={i} className="mb-1 md:mb-2">
                    <FancyLink link={`/disciplines/${discipline.slug}`} a11yText={`Navigate to ${discipline.title} work`} text={discipline.title} extraClasses="mx-2 md:mx-3"/>
                    <span className="inline-block mx-3 md:mx-3 align-top mt-8 md:mt-8 xl:mt-10 w-3 md:w-4 rounded-full h-3 md:h-4 bg-off-black"></span>
                  </span>
                ))}
              </Marquee>
            </div>
          </div>
        )}
        </>
      )}

      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 py-12 md:py-20 xl:pt-32 bg-green text-white relative overflow-hidden">
          <div className="relative z-0">
            <div className="hidden md:block" data-scroll data-scroll-speed="1.25">
              <BigX color="text-green-dark" left bottom />
            </div>
          </div>
          <div className="max-w-xl px-6 md:mx-auto flex flex-wrap relative z-40">
            <nav className="w-full mb-6 md:mb-10 xl:mb-16">
              <span className="block text-xs font-mono uppercase tracking-tight leading-none mb-5">What Now?</span>
              <ul>
                <ShowreelModal>
                  <div className="flex flex-wrap w-full">
                    <div className="bg-off-white p-3 lg:p-5 xl:p-8">
                      <video 
                        controls={true}
                        preload="metadata"
                        className="w-full home-video object-cover block"
                      >
                        <source src="https://player.vimeo.com/external/521509719.hd.mp4?s=e8606428a6bbe63e4ffa0029463f09267de421d0&profile_id=175" type="video/mp4"/>
                        Sorry. Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </ShowreelModal>

                <li className="block text-3xl md:text-3xl xl:text-4xl 2xl:text-5xl text-off-white w-full">
                  <FancyLink extraClasses="block" link="/work" a11yText="Navigate to about work page" text="See Our Portfolio" opaque circleColor="text-off-black opacity-0" number="02"/>
                </li>


                <li className="block text-3xl md:text-3xl xl:text-4xl 2xl:text-5xl text-off-white w-full">
                  <FancyLink extraClasses="block" link="/contact" a11yText="Navigate to contact page" text="Get In Touch" opaque circleColor="text-off-black opacity-0" number="03"/>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="w-full md:w-1/2 py-12 md:py-20 xl:py-32 bg-orange text-off-white flex items-center">
          <div className="max-w-2xl px-6 mx-auto text-center">
            <span className="block mb-6 md:mb-8 text-5xl md:text-5xl lg:text-6xl xl:text-6xl leading-none tracking-tighter">Stay in the loop</span>
            <p className="font-mono text-sm xl:text-base mb-6 md:mb-6 max-w-sm md:max-w-xs xl:max-w-lg mx-auto">When we've got something great to say, we write a newsletter for brand teams. We curate the best of video, creativity and insights to inspire and delight.</p>
            
            <div className="text-lg md:text-xl xl:text-2xl">
              <FancyLinkExternal link="https://fatfreemedia.us2.list-manage.com/subscribe/post?u=0707fd5fce6636484cfe36669&amp;id=f4fff79bc3" a11yText="Sign up to our newsletter!" text="Sign up to our Newsletter" newTab />
            </div>

            <div id="mc_embed_signup">              
              {/* <form className="newsletter-form max-w-xs w-full mx-auto relative validate" action="https://fatfreemedia.us2.list-manage.com/subscribe/post?u=0707fd5fce6636484cfe36669&amp;id=f4fff79bc3" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" noValidate>
                <div id="mc_embed_signup_scroll">
                  <div className="mc-field-group">
                    <label htmlFor="mce-EMAIL" className="sr-only">Email Address</label>
                    <input name="EMAIL" type="email" id="mce-EMAIL" className="bg-transparent border-b border-off-white appearance-none text-lg text-off-white font-mono block py-3 w-full px-2 focus:border-none focus:outline-none required email" placeholder="Your email address" />
                  </div>

                  <div id="mce-responses" className="clear">
                    <div className="response" id="mce-error-response" className="hidden"></div>
                    <div className="response" id="mce-success-response" className="hidden"></div>
                  </div>

                  <div className="sr-only" aria-hidden="true">
                    <input type="text" name="b_0707fd5fce6636484cfe36669_f4fff79bc3" tabIndex="-1" />
                  </div>
                  <button type="submit" name="subscribe" id="mc-embedded-subscribe" className="absolute bottom-0 right-0 text-3xl leading-none pb-0 h-full w-10 bg-orange mb-px mr-0 hover:-mr-2 focus:-mr-2 transition-all duration-300 ease-in-out">
                    <span className="-mt-2 block">→</span>
                  </button>
                </div>
              </form> */}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-off-white text-off-black py-6 md:py-8">
        <Container>
          <div className="flex flex-wrap items-center lg:-mx-4">
            <nav className="w-full lg:w-7/12 lg:px-4 mb-5 lg:mb-0">
              <span className="block text-xs font-mono uppercase tracking-tight leading-none mb-3">Useful Links</span>
              <ul>
                <li className="inline-block mr-3 text-xl md:text-2xl 3xl:text-3xl">
                  <FancyLink link="/about" a11yText="Navigate to about us page" text="About Us" />
                </li>
                <li className="inline-block mr-3 text-xl md:text-2xl 3xl:text-3xl">&bull;</li>
                <li className="inline-block mr-3 text-xl md:text-2xl 3xl:text-3xl">
                  <FancyLink link="/services/video-identity" a11yText="Navigate to video identity page" text="Video Identity" />
                </li>
                <li className="inline-block mr-3 text-xl md:text-2xl 3xl:text-3xl">&bull;</li>
                <li className="inline-block mr-3 text-xl md:text-2xl 3xl:text-3xl">
                  <FancyLink link="/services/content-and-creative" a11yText="Navigate to content &amp; creative page" text="Content &amp; Creative" />
                </li>
                <li className="inline-block mr-3 text-xl md:text-2xl 3xl:text-3xl">&bull;</li>
                <li className="inline-block mr-3 text-xl md:text-2xl 3xl:text-3xl">
                  <FancyLink link="/services/strategy-and-consultancy" a11yText="Navigate to strategy &amp; consultancy page" text="Strategy &amp; Consultancy" />
                </li>
              </ul>
            </nav>

            <nav className="w-full lg:w-5/12 lg:px-4">
              <span className="block text-xs font-mono uppercase tracking-tight leading-none lg:text-right mb-3">Let's talk</span>
              <ul className="lg:text-right">
                <li className="inline-block mr-3 lg:mr-0 lg:ml-3 text-xl md:text-2xl 3xl:text-3xl">
                  <FancyLinkExternal link="tel:0115 857 7502" a11yText="Call us" text="0115 857 7502" />
                </li>
                <li className="inline-block mr-3 lg:mr-0 lg:ml-3 text-xl md:text-2xl 3xl:text-3xl">&bull;</li>
                <li className="inline-block mr-3 lg:mr-0 lg:ml-3 text-xl md:text-2xl 3xl:text-3xl">
                  <FancyLinkExternal link="mailto:hello@hellofatfree.com" a11yText="Email us" text="hello@hellofatfree.com" />
                </li>
              </ul>
            </nav>
          </div>
        </Container>
      </div>

      <div className="bg-off-black-dark text-white pt-4 pb-5">
        <Container>
          <div className="flex flex-wrap items-center">
            <div className="w-full md:flex-1 mb-3 md:mb-0">
              <small className="tracking-tight block leading-tight">&copy; { new Date().getFullYear() } by Fat Free Media Ltd, Video Strategy &amp; Production, Nottingham, UK, All rights reserved.</small>
            </div>

            <div className="w-full md:w-auto md:text-right text-sm">
              <nav>
                <li className="inline-block mx-3 ml-0">
                  <FancyLink link="/terms-of-use" a11yText="Navigate to site terms page" text="Site Terms" noCircle />
                </li>

                <li className="inline-block mx-3">
                  <FancyLink link="/privacy-policy" a11yText="Navigate to privacy policy page" text="Privacy Policy" noCircle />
                </li>

                <li className="inline-block mx-3 mr-0">
                  Site by
                  <span className="inline-block mx-1">
                    <FancyLinkExternal link="https://ijpowell.co.uk" a11yText="Navigate to Isaac Powell Portfolio in a new tab" text="IJP" noCircle newTab />
                  </span>
                  &amp;
                  <span className="inline-block mx-1">
                    <FancyLinkExternal link="https://samgoddard.co.uk" a11yText="Navigate to Sam Goddard Portfolio in a new tab" text="SG" noCircle newTab />
                  </span>
                </li>
              </nav>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}
