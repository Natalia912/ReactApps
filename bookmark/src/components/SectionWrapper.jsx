import { motion } from 'framer-motion'

import { staggerContainer } from '../motion'

const SectionWrapper = (Component) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className='w-screen'
      >
        <Component />
      </motion.section>
    )
  }

export default SectionWrapper
