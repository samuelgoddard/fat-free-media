import { motion } from "framer-motion"
import { scaleDown } from "../helpers/transitionHelper"

export default function CircleInfinity({color, small}) {

  let size = 'w-10 md:w-16 xl:w-20 h-10 md:h-16 xl:h-20'
  let offset = 'md:-ml-8 xl:-ml-10'

  if (small) {
    size = 'w-8 md:w-10 xl:w-12 h-8 md:h-10 xl:h-12'
    offset = 'md:-ml-5 xl:-ml-6'
  }
  return (
    <div className="md:flex w-auto md:w-full px-4 md:px-0 relative z-0 md:mb-5">
      <motion.div variants={scaleDown} className={`${size} bg-current rounded-full`}></motion.div>
      <motion.div variants={scaleDown} className={`${size} -mt-5 md:mt-0 ${offset} bg-transparent border border-off-black rounded-full`}></motion.div>
    </div>
  )
}
