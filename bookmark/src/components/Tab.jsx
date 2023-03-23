import { AnimatePresence, motion } from 'framer-motion'
import { fadeIn, zoomIn } from '../motion'
import styles from '../styles'

const Tab = ({ image, description, header }) => {
  return (
    <div className='sm:flex align-top w-full gap-10 lg:gap-10 min-h-[250px]'>
      <div className='xs:min-h-[300px] xss:min-h-[300px] min-h-[250px] sm:w-[50%] max-w-[90%] lg:ml-[150px] lg:mx-0 mx-auto sm:max-w-[45%]'>
        <motion.img
          src={image}
          alt='section image'
          className='w-auto h-auto'
          variants={zoomIn(0, 0.5)}
          initial='hidden'
          whileInView='show'
          exit='exit'
        />
      </div>
      <motion.div
        variants={zoomIn(0, 0.5)}
        initial='hidden'
        whileInView='show'
        exit='exit'
        className='max-w-md mt-4 sm:mt-0 sm:w-[50%] lg:self-center sm:text-left text-center'
      >
        <h3 className={`${styles.sectionHeader} sm:text-left text-center mb-2`}>{header}</h3>
        <p className={`${styles.sectionText}  mb-8`}>{description}</p>
        <a href='/' className={styles.blueButton}>
          More Info
        </a>
      </motion.div>
    </div>
  )
}

export default Tab
