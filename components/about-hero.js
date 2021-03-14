import { Component } from "react";
import Container from "../components/container"
import { motion } from "framer-motion"
import { Image } from "react-datocms";
import { aboutRevealLast, aboutRevealLastFull } from "../helpers/transitionHelper"

class AboutHero extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){  
  }

  render(){
    return (
      <div className="bg-off-black text-white pt-40 md:pt-48 xl:pt-56 pb-8 md:pb-32 xl:pb-48 relative overflow-hidden">
        <Container thinner>
          <div className="relative z-30">
            { this.props.metaText && (
              <div className="relative overflow-hidden mb-4 md:mb-6">
                <motion.span variants={aboutRevealLastFull} className="block text-md md:text-lg xl:text-xl uppercase tracking-tighter leading-none">{ this.props.metaText }</motion.span>
              </div>
            )}

            <motion.div variants={ aboutRevealLast} className="text-4xl md:text-5xl xl:text-6xl leading-none w-full max-w-4xl tracking-tighter pr-12 xl:pr-0 mb-10 md:mb-0 about-hero" dangerouslySetInnerHTML={{ __html: this.props.text }}></motion.div>

            {/* <h1 className="text-4xl md:text-5xl xl:text-6xl leading-none w-full max-w-4xl tracking-tighter pr-12 xl:pr-0 mb-10 md:mb-0" data-scroll data-scroll-speed="1.1">
              
              <motion.span variants={aboutRevealLast} className="inline">Video carries more </motion.span>
            
              <motion.span variants={aboutRevealFeeling} className="inline feeling text-yellow" onMouseOver={() => this.setState({ feelingHover: true, defaultHover: false })} onMouseOut={() => this.setState({ feelingHover: false, defaultHover: true })}>feeling </motion.span>
            
              <motion.span variants={aboutRevealLast} className="inline">and uses more senses than any other medium. It has the potential to pull at the </motion.span>
              
              <motion.span variants={aboutRevealHearts} className="hearts inline text-yellow" onMouseOver={() => this.setState({ heartHover: true, defaultHover: false })} onMouseOut={() => this.setState({ heartHover: false, defaultHover: true })}>hearts </motion.span>
              
              <motion.span variants={aboutRevealLast} className="inline">and </motion.span>
            
              <motion.span variants={aboutRevealChange} className="change inline text-yellow" onMouseOver={() => this.setState({ changeHover: true, defaultHover: false })} onMouseOut={() => this.setState({ changeHover: false, defaultHover: true })}>change </motion.span>
            
              <motion.span variants={aboutRevealLast} className="inline">the minds of those who watch it more than any other format.</motion.span>
            </h1> */}
          </div>
          
          { this.props.defaultVideo && (
            <>
              <div className="bg-off-black absolute top-0 left-0 right-0 bottom-0 w-full h-full z-20 opacity-25"></div>
              <video loop={true} playsInline autoPlay="autoplay" muted className={`absolute top-0 left-0 transition ease-in-out duration-500 right-0 bottom-0 w-full h-full object-cover opacity-100 z-10 }`}>
                <source src={this.props.defaultVideo} type="video/mp4" />
                
                Sorry. Your browser does not support the video tag.
              </video>
            </>
          )}

          { !this.props.defaultVideo && this.props.defaultImage && (
            <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover">
              <div className="bg-off-black absolute top-0 left-0 right-0 bottom-0 w-full h-full z-10 opacity-75"></div>
              <Image
                data={{
                  ...this.props.defaultImage.responsiveImage,
                  alt: this.props.defaultImage.alt ? this.props.defaultImage.alt : this.props.defaultImage.title,
                }}
                className="z-0 hero-bg-image object-cover absolute top-0 left-0 right-0 bottom-0 w-full h-full"
              />
            </div>
          )}
          
        </Container>
      </div>
    )
  }
}

export default AboutHero