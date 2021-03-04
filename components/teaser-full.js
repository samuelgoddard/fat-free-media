import styles from './button.module.css'
import { Image } from "react-datocms";
import Link from 'next/link'
import { motion } from "framer-motion"
import { reveal, scaleDown } from "../helpers/transitionHelper"

export default function TeaserFull({link, image, video, title, text, videoAlwaysOn}) {
  return (
    <Link href={link}>
      <a aria-label="Navigate to Work Item" className="flex flex-wrap group items-center">
        <div className="relative overflow-hidden mb-3 w-full md:w-8/12">
          { image && (
            <Image
              data={{
                ...image.responsiveImage,
                alt: image.alt ? image.alt : image.title,
              }}
              className="w-full relative z-0 transform group-hover:scale-110 transition ease-in-out duration-500"
            />
          )}
          { video && (
            <div className={`transform transition ease-in-out duration-500 absolute top-0 left-0 right-0 bottom-0 ${videoAlwaysOn ? 'opacity-100' : 'opacity-0 group-hover:opacity-100' }`}>
              <video loop={true} playsInline autoPlay="autoplay" muted className="w-full h-full object-cover z-10">
                <source src={ video } type="video/mp4" />
                
                Sorry. Your browser does not support the video tag.
              </video>
            </div>
          )}
        </div>
        <div className="w-full md:w-4/12">
          <div className="w-full md:pl-12">
            <div className="relative overflow-hidden mb-3 md:mb-5">
              <motion.span variants={reveal} className="block text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-none tracking-tighter max-w-md">{ title }</motion.span>
            </div>

            { text && (
              <div className="w-full">
                <span className="font-mono text-sm mb-5 md:mb-8 content block max-w-xs">{ text }</span>
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
