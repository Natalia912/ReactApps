import { AnimatePresence, motion } from 'framer-motion'
import { fadeIn } from '../motion'
import styles from '../styles'

const Tab = ({ image, description, header }) => {
  return (
    <div className='sm:flex justify-start align-top w-full gap-10'>
      <div className='xs:min-h-[300px] min-h-[250px] w-full max-w-[90%] mx-auto sm:max-w-[45%]'>
        <motion.img
          src={image}
          alt='section image'
          className='w-full h-auto'
          variants={fadeIn('down', 'spring', 0.5, 0.5)}
          initial='hidden'
          whileInView='show'
          exit='exit'
        />
      </div>
      <div className='max-w-md mt-4 sm:mt-0 sm:w-[50%] lg:self-center sm:text-left text-center'>
        <h3 className={`${styles.sectionHeader} sm:text-left text-center mb-2`}>{header}</h3>
        <p className={`${styles.sectionText}  mb-8`}>{description}</p>
        <a
          href='/'
          className='sm:text-[16px] text-[14px] rounded-md bg-softBlue text-white px-6 py-[10px] font-medium hover:text-softBlue hover:bg-transparent border-2 border-transparent hover:border-softBlue text-center duration-300'
        >
          More Info
        </a>
      </div>
    </div>
  )
}

export default Tab
