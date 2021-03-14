import { Component } from "react";
import { Image } from "react-datocms";
import Link from 'next/link'
import { motion } from "framer-motion"
import { reveal } from "../helpers/transitionHelper"

class Teaser extends Component {
  constructor(props){
    super(props);
    this.videoRef = null;
  }

  playVideo = () => {
    if (!this.props.videoAlwaysOn) {
      var playPromise = this.videoRef.play();

      if (playPromise !== undefined) {
        playPromise.then(_ => {
        })
        .catch(error => {});
      }
    }
  };

  pauseVideo = () => {
    if (!this.props.videoAlwaysOn) {
      var pausePromise = this.videoRef.pause();
      if ( pausePromise !== undefined) {
        pausePromise.then(_ => {
        })
        .catch(error => {});
      }
    }
  };

  render() {
    return (
      <Link href={this.props.link}>
        <a
          aria-label="Navigate to Work Item"
          className="w-full block group"
          onMouseEnter={this.playVideo}
          onMouseLeave={this.pauseVideo}
        >
          <div className="relative overflow-hidden mb-2">
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
          <div className="flex flex-wrap items-center">
            <div className="relative overflow-hidden flex-1">
              <motion.span variants={reveal} className="block text-2xl md:text-2xl xl:text-3xl leading-minimal tracking-tighter">{ this.props.title }</motion.span>
            </div>
            { this.props.meta && (
              <div className="relative overflow-hidden w-5/12 text-right">
                <motion.span variants={reveal} className="block text-xs uppercase tracking-tighter leading-none">{ this.props.meta }</motion.span>
              </div>
            )}
          </div>
        </a>
      </Link>
    )
  }
}

export default Teaser