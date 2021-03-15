import { Component } from "react";
import { Image } from "react-datocms";
import Link from 'next/link'
import FancyLink from "../components/fancy-link";
import { motion } from "framer-motion"
import { reveal } from "../helpers/transitionHelper"

class TeaserFull extends Component {
  constructor(props){
    super(props);
    this.videoRef = null;
  }

  playVideo = () => {
    !this.props.videoAlwaysOn && this.videoRef.play();
  };

  pauseVideo = () => {
    !this.props.videoAlwaysOn && this.videoRef.pause();
  };

  render() {
    return (
      <div className="flex flex-wrap items-center">
        <Link href={this.props.link}>
          <a
            aria-label="Navigate to Work Item"
            className="relative overflow-hidden mb-3 w-full md:w-8/12 block z-10 group"
            onMouseEnter={this.playVideo}
            onMouseLeave={this.pauseVideo}
          >
            { this.props.image && (
              <Image
                data={{
                  ...this.props.image.responsiveImage,
                  alt: this.props.image.alt ? this.props.image.alt : this.props.image.title,
                }}
                className="w-full relative z-0 transform group-hover:scale-110 transition ease-in-out duration-500"
              />
            )}
            { this.props.video && (
              <div className={`transform transition ease-in-out duration-500 absolute top-0 left-0 right-0 bottom-0 ${this.props.videoAlwaysOn ? 'opacity-100' : 'hidden md:block opacity-0 group-hover:opacity-100' }`}>
                <video loop={true} autoPlay={this.props.videoAlwaysOn ? 'autoplay' : false } muted preload="meta" className="w-full h-full object-cover z-10" ref={videoRef => this.videoRef = videoRef}>
                  <source src={ this.props.video } type="video/mp4" />
                  
                  Sorry. Your browser does not support the video tag.
                </video>
              </div>
            )}
          </a>
        </Link>
        <div className="w-full md:w-4/12">
          <div className="w-full md:pl-12">
            <div className="relative overflow-hidden mb-3 md:mb-5">
              <motion.span variants={reveal} className="block text-3xl md:text-4xl xl:text-4xl 2xl:text-5xl leading-minimal tracking-tighter max-w-md">{ this.props.title }</motion.span>
            </div>

            { this.props.text && (
              <div className="w-full">
                <span className="font-mono text-sm lg:text-base mb-5 md:mb-8 content block max-w-xs pt-1 md:pt-1 lg:pt-3">{ this.props.text }</span>
              </div>
            )}
            <div className="relative text-lg md:text-xl">
              <FancyLink link={this.props.link} a11yText="Navigate to Work Item" text="Learn More" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TeaserFull