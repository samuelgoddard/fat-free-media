import Container from './container'
import Link from 'next/link'
import Marquee from 'react-double-marquee';
import BigX from "./big-x";

export default function Footer({ hideMarquee }) {
  return (
    <footer>
      { !hideMarquee && (
        <div className="border-t border-off-black py-3">
          <div className="w-full whitespace-no-wrap text-3xl md:text-4xl xl:text-5xl tracking-tighter leading-tight">
            <Marquee>
              <span className="inline mx-1">Video Identity</span> <span className="inline mx-1">•</span> <span className="inline mx-1">TV Commercials</span> <span className="inline mx-1">•</span> <span className="inline mx-1">Creative Campaigns</span> <span className="inline mx-1">•</span> <span className="inline mx-1">Video Brand Strategy</span> <span className="inline mx-1">•</span> <span className="inline mx-1">TV &amp; VOD</span> <span className="inline mx-1">•</span> <span className="inline mx-1">Paid Social Content</span> <span className="inline mx-1">•</span> <span className="inline mx-1">Brand Campaigns</span> <span className="inline mx-1">•</span> <span className="inline mx-1">Video Brand Guidelines</span> <span className="inline mx-1">•</span> <span className="inline mx-1">Production</span> <span className="inline mx-1">•</span> <span className="inline mx-1">Live-action</span> <span className="inline mx-1">•</span> <span className="inline mx-1">Art Direction</span> <span className="inline mx-1">•</span> <span className="inline mx-1">Motion Graphics</span> <span className="inline mx-1">•</span>
            </Marquee>
          </div>
        </div>
      )}

      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 py-12 md:py-20 xl:pt-32 bg-green text-white relative overflow-hidden">
          <BigX color="text-green-dark" left bottom />
          <div className="max-w-xl px-6 md:mx-auto flex flex-wrap relative z-10">
            <nav className="w-full mb-6 md:mb-10 xl:mb-16">
              <span className="block text-xs font-mono uppercase tracking-tight leading-none mb-5">What Now?</span>
              <ul>
                <li className="block"><Link href="#"><a aria-label="Navigate to Portfolio" className="tracking-tight text-off-white text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl mb-1 w-full border-b border-off-white border-dotted border-opacity-25 py-3 flex">
                  <span className="block text-base md:text-lg xl:text-xl mt-1 mr-2 md:mr-4">01</span>
                  <span>Watch Our Showreel</span>
                </a></Link></li>

                <li className="block"><Link href="/work"><a aria-label="Navigate to Portfolio" className="tracking-tight text-off-white text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl mb-1 w-full border-b border-off-white border-dotted border-opacity-25 py-3 flex">
                  <span className="block text-base md:text-lg xl:text-xl mt-1 mr-2 md:mr-4">02</span>
                  <span>See Our Portfolio</span>
                </a></Link></li>

                <li className="block"><Link href="/work"><a aria-label="Navigate to Portfolio" className="tracking-tight text-off-white text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl mb-1 w-full py-3 flex">
                  <span className="block text-base md:text-lg xl:text-xl mt-1 mr-2 md:mr-4">03</span>
                  <span>Get In Touch</span>
                </a></Link></li>
                {/* <li className="inline-block md:block mr-4 md:mr-0"><Link href="/services/video-identity"><a aria-label="Navigate to Video Identity" className="underline tracking-tight xl:text-lg mb-1">Video identity</a></Link></li>
                <li className="inline-block md:block mr-4 md:mr-0"><Link href="/services/content-and-creative"><a aria-label="Navigate to Content &amp; Creative" className="underline tracking-tight xl:text-lg mb-1">Content &amp; Creative</a></Link></li>
                <li className="inline-block md:block mr-4 md:mr-0"><Link href="/services/strategy-and-consultancy"><a aria-label="Navigate to Strategy &amp; Consultancy" className="underline tracking-tight xl:text-lg mb-1">Strategy &amp; Consultancy</a></Link></li> */}
              </ul>
            </nav>
            {/* <nav className="w-full md:w-1/2 mb-6 md:mb-10 xl:mb-16">
              <span className="block text-xs font-mono uppercase tracking-tight leading-none mb-5">Company</span>
              <ul>
                <li className="inline-block md:block mr-4 md:mr-0"><Link href="/about"><a aria-label="Navigate to About Us" className="underline tracking-tight xl:text-lg mb-1">About Us</a></Link></li>
                <li className="inline-block md:block mr-4 md:mr-0"><Link href="/contact"><a aria-label="Navigate to Contact" className="underline tracking-tight xl:text-lg mb-1">Contact</a></Link></li>
              </ul>
            </nav>
            <nav className="w-full md:w-1/2">
              <span className="block text-xs font-mono uppercase tracking-tight leading-none mb-5">Get In Touch</span>
              <ul>
                <li><a href="mailto:hello@hellofatfree.com" className="underline tracking-tight xl:text-lg mb-1">hello@hellofatfree.com</a></li>
                <li><a href="tel:01158577502" className="underline tracking-tight xl:text-lg mb-1">0115 857 7502</a></li>
                <li><a aria-label="Navigate to Instagram" href="/" className="underline tracking-tight xl:text-lg mb-1">Instagram</a></li>
                <li><a aria-label="Navigate to Twitter" href="/" className="underline tracking-tight xl:text-lg mb-1">Twitter</a></li>
              </ul>
            </nav> */}
          </div>
        </div>

        <div className="w-full md:w-1/2 py-12 md:py-20 xl:py-32 bg-orange text-off-white flex items-center">
          <div className="max-w-2xl px-6 mx-auto text-center">
            <span className="block mb-3 md:mb-6 text-4xl md:text-4xl lg:text-5xl xl:text-6xl leading-none tracking-tighter">Stay in the loop</span>
            <p className="font-mono leading-tight tracking-tight mb-3 md:mb-6 max-w-sm md:max-w-xs xl:max-w-lg mx-auto">When we've got something great to say, we write a newsletter for brand teams. We curate the best of video, creativity and insights to inspire and delight.</p>

            <form className="newsletter-form">
              <label htmlFor="email" className="sr-only">Email Address</label>
              <input type="email" id="email" className="bg-transparent border-b border-off-white appearance-none text-lg text-off-white font-mono block py-3 mx-auto px-2 focus:border-none focus:outline-none" placeholder="Your email address" />
            </form>
          </div>
        </div>
      </div>

      <div className="bg-off-white text-off-black py-6 md:py-8">
        <Container>
          <div className="flex flex-wrap items-center lg:-mx-4">
            <nav className="w-full lg:w-7/12 lg:px-4 mb-5 lg:mb-0">
              <span className="block text-xs font-mono uppercase tracking-tight leading-none mb-3">Useful Links</span>
              <ul>
                <li className="inline-block mr-3"><Link href="/about"><a aria-label="Navigate to About Us" className="tracking-tight text-xl md:text-2xl 3xl:text-3xl mb-1">About Us</a></Link></li>
                <li className="inline-block mr-3 text-xl md:text-2xl 3xl:text-3xl">&bull;</li>
                <li className="inline-block mr-3"><Link href="/services/video-identity"><a aria-label="Navigate to Video Identity" className="tracking-tight text-xl md:text-2xl 3xl:text-3xl mb-1">Video identity</a></Link></li>
                <li className="inline-block mr-3 text-xl md:text-2xl 3xl:text-3xl">&bull;</li>
                <li className="inline-block mr-3"><Link href="/services/content-and-creative"><a aria-label="Navigate to Content &amp; Creative" className="tracking-tight text-xl md:text-2xl 3xl:text-3xl mb-1">Content &amp; Creative</a></Link></li>
                <li className="inline-block mr-3 text-xl md:text-2xl 3xl:text-3xl">&bull;</li>
                <li className="inline-block mr-3"><Link href="/services/strategy-and-consultancy"><a aria-label="Navigate to Strategy &amp; Consultancy" className="tracking-tight text-xl md:text-2xl 3xl:text-3xl mb-1">Strategy &amp; Consultancy</a></Link></li>
              </ul>
            </nav>

            <nav className="w-full lg:w-5/12 lg:px-4">
              <span className="block text-xs font-mono uppercase tracking-tight leading-none lg:text-right mb-3">Lets talk</span>
              <ul className="lg:text-right">
                <li className="inline-block mr-3 lg:mr-0 lg:ml-3"><a aria-label="Call us" className="tracking-tight text-xl md:text-2xl 3xl:text-3xl mb-1" href="tel:0115 857 7502">0115 857 7502</a></li>
                <li className="inline-block mr-3 lg:mr-0 lg:ml-3 text-xl md:text-2xl 3xl:text-3xl">&bull;</li>
                <li className="inline-block mr-3 lg:mr-0 lg:ml-3"><a aria-label="Email us" className="tracking-tight text-xl md:text-2xl 3xl:text-3xl mb-1" href="mailto:hello@hellofatfree.com">hello@hellofatfree.com</a></li>
              </ul>
            </nav>
          </div>
        </Container>
      </div>

      <div className="bg-off-black text-white pt-4 pb-5">
        <Container>
          <div className="flex flex-wrap items-center">
            <div className="w-full md:flex-1 mb-3 md:mb-0">
              <small className="tracking-tight block leading-tight">&copy; { new Date().getFullYear() } by Fat Free Media Ltd, Video Strategy &amp; Production, Nottingham, UK, All rights reserved.</small>
            </div>

            <div className="w-full md:w-auto md:text-right">
              <Link href="/"><a aria-label="Navigate to Site Terms" className="underline tracking-tight text-sm inline-block mx-3 ml-0">Site Terms</a></Link>

              <Link href="/"><a aria-label="Navigate to Cookie Policy" className="underline tracking-tight text-sm inline-block mx-3">Cookie Policy</a></Link>

              <Link href="/"><a aria-label="Navigate to Privacy Policy" className="underline tracking-tight text-sm inline-block mx-3 mr-0">Privacy Policy</a></Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}
