import Link from "next/link";
import { Image } from "react-datocms";
import { motion } from "framer-motion"
import { reveal } from "../helpers/transitionHelper"

export default function MenuItem({link, animation, image, video, heading, text}) {
  return (
    <Link href={link} className="block w-full">
      <a aria-label={`Navigate to ${heading}`} className="group block py-5 md:py-10 border-b md:border-b-0 md:border-l border-dotted border-orange-light border-opacity-50 md:px-8 transition ease-in-out duration-500 focus:outline-none text-white hover:text-off-white focus:text-off-white">
        <motion.div variants={animation}>
          <div className="transition-transform ease-in-out duration-500 md:transform group-hover:-translate-y-12 group-focus:-translate-y-12">
            
            <div className="relative overflow-hidden transform skew-y-2">
              <div className="relative transition ease-in-out duration-500 opacity-75 group-hover:opacity-100 group-focus:opacity-100 mb-10 hidden md:block z-0 w-10/12 transform scale-105 group-hover:scale-110">
                <Image
                  data={{
                    ...image.responsiveImage,
                    alt: image.alt ? image.alt : image.title,
                  }}
                  className="w-full"
                />

                {/* { video && (
                  <div className="absolute top-0 left-0 right-0 bottom-0 z-10 opacity-0 group-hover:opacity-100 transition ease-in-out duration-300">
                    <video loop={true} playsInline autoPlay="autoplay" muted className="w-full h-full object-cover z-10">
                      <source src={ video } type="video/mp4" />
                      
                      Sorry. Your browser does not support the video tag.
                    </video>
                  </div>
                )} */}
              </div>
            </div>

            <motion.div
              initial="initial"
              animate="enter"
              exit="exit"
              variants={{
                enter: { transition: { staggerChildren: 0.125 } }
              }}
            >
              <div className="relative overflow-hidden mb-2 md:mb-3">
                <motion.h3 variants={reveal} className="text-4xl md:text-3xl lg:text-4xl xl:text-5xl leading-none tracking-tighter mb-0">{ heading }</motion.h3>
              </div>

              <div className="relative overflow-hidden">
                <motion.p variants={reveal} className="font-mono text-sm mb-0 pb-0">{ text }</motion.p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </a>
    </Link>
  )
}
