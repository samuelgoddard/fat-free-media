import { Component } from "react";
import MagneticButton from "../components/magnetic-button";
import { motion } from "framer-motion"
// import Vimeo from '@u-wave/react-vimeo';

// import gsap from 'gsap';

class VideoRevealer extends Component {
  constructor(props){
    super(props);
    this.videoFullHdRef = null;
  }

  state = {
    overlayCollapsed: false
  };
  
  toggleOverlay = () => {
    this.setState({ overlayCollapsed: !this.state.sidebarCollapsed });
    this.videoFullHdRef.play();
  };

  render(){
    const { overlayCollapsed } = this.state;

    const closed = {
      opacity: 0,
      transitionEnd: { zIndex: 0 },
      transition: { duration: 1.25, ease: [0.83, 0, 0.17, 1] }
    };

    const closedScale = {
      opacity: 0,
      scale: 0,
      transitionEnd: { zIndex: 0 },
      transition: { duration: 1, ease: [0.83, 0, 0.17, 1] }
    };

    const closedScaleUp = {
      transition: { duration: 1, ease: [0.83, 0, 0.17, 1] }
    };

    const open = {
      opacity: 1
    };

    return (
      <div className="relative -mx-6 md:mx-0">
        { this.props.metaText && (
          <span className="block upright font-mono text-xs absolute top-0 left-0 -ml-5 z-0 uppercase tracking-wide leading-none">{ this.props.metaText }</span>
        )}
        <div className="w-full bg-green relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center z-30"
            animate={!overlayCollapsed ? open : closed}
          >
            <div data-scroll data-scroll-speed="2">
              <motion.div 
                className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center z-40"
                animate={!overlayCollapsed ? open : closedScale}
              >
                <MagneticButton text={ "Watch with sound" } function={this.toggleOverlay} />
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-full z-20"
            animate={!overlayCollapsed ? open : closed}
          >
            <video loop={true} playsInline autoPlay="autoplay" muted className="w-full h-auto home-video object-cover">
              <source src={this.props.videoAutoplayUrl} type="video/mp4" />
              Sorry. Your browser does not support the video tag.
            </video>

          </motion.div>

          <motion.div
            animate={!overlayCollapsed ? open : closedScaleUp}
            className="w-full relative z-10"
          >
            { this.props.videoFullHd && (
              <video 
                controls={true}
                preload="metadata"
                className="w-full home-video object-cover relative z-10 block"
                ref={videoFullHdRef => this.videoFullHdRef = videoFullHdRef}
              >
                <source src={this.props.videoFullHd} type="video/mp4"/>
                Sorry. Your browser does not support the video tag.
              </video>

              // <Vimeo
              //   video={503395940}
              //   className="w-full h-auto relative z-10 block"
              //   width={'100%'}
              //   height={'100%'}
              //   responsive={true}
              //   ref={videoFullHdRef => this.videoFullHdRef = videoFullHdRef}
              // />
            )}
          </motion.div>
        </div>
        <div className="h-5 md:h-64 w-64 bg-orange absolute bottom-0 left-0 md:left-auto md:right-0 z-0 -m-5 -mb-3 md:-m-5"></div>
      </div>
    )
  }
}

export default VideoRevealer