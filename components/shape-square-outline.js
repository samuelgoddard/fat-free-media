import { motion } from "framer-motion"
import { scaleDownSmall } from "../helpers/transitionHelper"

export default function ShapeSquareOutline({color, classes, wrapperClasses}) {
  return (
    <div className={wrapperClasses}>
      <motion.svg variants={scaleDownSmall} className={`${classes} ${color}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90.321 89.388"><path data-name="Path 67" d="M89.799 46.945c-.054-6.664-.22-13.4-.372-20.132q-.114-5.047-.2-10.077l-.065-5.013-.018-2.993q0-2.31-.006-4.613V1.09l-7.918-.028-1.432-.011-1.061-.013-2.117-.03q-4.227-.065-8.412-.16C62.611.727 57.054.587 51.457.5c-10.2.109-20.618.363-30.983.592l-10.675.262-9.173-.009-.056 25.99-.069 22.211c.189 8.775.667 17.694.88 26.48q.059 2.432.088 4.887l.024 3.832.013 3.977h6.648l4.5.019 8.347.07c5.587.052 11.212.1 16.849.076a316.9 316.9 0 0033.732-1.652c2.842-.164 5.727-.378 8.6-.59a15.9 15.9 0 003.068-.653c.165-.05.316-.1.46-.15h1.412s2.732 1.725 3.361-1.277c1-4.763.949-14.273 1.164-20.46.192-5.548.198-11.387.152-17.16z" fill="none" stroke="#000"/></motion.svg>
    </div>
  )
}
