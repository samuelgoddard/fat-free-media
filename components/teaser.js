import styles from './button.module.css'
import { Image } from "react-datocms";
import Link from 'next/link'
import { motion } from "framer-motion"
import { reveal, scaleDown } from "../helpers/transitionHelper"
import cn from 'classnames'

export default function Teaser({link, image, video, title, meta}) {
  return (
    <Link href={link}>
      <a aria-label="Navigate to Work Item" className="w-full block group">
        <div className="relative overflow-hidden mb-2">
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
            <div className="transform group-hover:scale-110 transition ease-in-out duration-500 absolute top-0 left-0 right-0 bottom-0">
              <video loop={true} playsInline autoPlay="autoplay" muted className="w-full h-full object-cover z-10">
                <source src={ video } type="video/mp4" />
                
                Sorry. Your browser does not support the video tag.
              </video>
            </div>
          )}
        </div>
        <div className="flex flex-wrap items-center">
          <div className="relative overflow-hidden">
            <motion.span variants={reveal} className="block text-2xl md:text-2xl xl:text-3xl leading-none tracking-tighter">{ title }</motion.span>
          </div>
          { meta && (
            <div className="relative overflow-hidden ml-auto">
              <motion.span variants={reveal} className="block text-xs uppercase tracking-tighter leading-none">{ meta }</motion.span>
            </div>
          )}
        </div>
      </a>
    </Link>
  )
}
