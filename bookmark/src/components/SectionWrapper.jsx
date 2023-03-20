import { motion } from 'framer-motion'

import { staggerContainer } from '../motion'

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className='w-screen'
      >
        <span className='hidden' id={idName} />
        <Component />
      </motion.section>
    )
  }

export default SectionWrapper
