import { Component } from "react";
import { Image } from "react-datocms";
import Link from 'next/link'
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
      <Link href={this.props.link}>
        <a
          aria-label="Navigate to Work Item"
          className="flex flex-wrap group items-center"
          onMouseEnter={this.playVideo}
          onMouseLeave={this.pauseVideo}
        >
          <div className="relative overflow-hidden mb-3 w-full md:w-8/12">
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
                <video loop={true} autoPlay={this.props.videoAlwaysOn ? 'autoplay' : false } muted preload="none" className="w-full h-full object-cover z-10" ref={videoRef => this.videoRef = videoRef}>
                  <source src={ this.props.video } type="video/mp4" />
                  
                  Sorry. Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>
          <div className="w-full md:w-4/12">
            <div className="w-full md:pl-12">
              <div className="relative overflow-hidden mb-3 md:mb-5">
                <motion.span variants={reveal} className="block text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl leading-none tracking-tighter max-w-md">{ this.props.title }</motion.span>
              </div>

              { this.props.text && (
                <div className="w-full">
                  <span className="font-mono text-sm mb-5 md:mb-8 content block max-w-xs">{ this.props.text }</span>
                </div>
              )}
              <div className="relative overflow-hidden">
                <motion.span variants={reveal} className="block underline text-lg md:text-xl">Learn more</motion.span>
              </div>
            </div>
          </div>
        </a>
      </Link>
    )
  }
}

export default TeaserFull