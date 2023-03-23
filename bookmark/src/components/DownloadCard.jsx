import { motion } from 'framer-motion'
import { fadeIn } from '../motion'

import useWindowWidth from '../useWindowWidth'

import styles from '../styles'

const DownloadCard = ({ icon, name, version, index }) => {
  const { windowWidth } = useWindowWidth()

  const withDelay = windowWidth >= 900

  const margin = index === 0 ? 'lg:mt-0' : index === 1 ? 'lg:mt-[50px]' : 'lg:mt-[100px]'
  return (
    <motion.div
      className={`shadow-lg rounded-lg ${margin}`}
      variants={fadeIn('right', 'spring', withDelay ? 0 + index * 0.5 : 0, 0.5)}
      initial='hidden'
      whileInView='show'
    >
      <div className='p-10 text-center flex flex-col items-center'>
        <img src={icon} alt={name} />
        <h3 className='mt-6 font-medium text-veryDarkBlue text-lg'>Add to {name}</h3>
        <p className='text-grayishBlue text-sm'>Minimum version {version}</p>
      </div>
      <div className='w-full h-[2px] bg-dots object-contain bg-no-repeat'></div>
      <div className='my-8 mx-4'>
        <a href='/' className={styles.blueButton}>
          Add & Install Extension
        </a>
      </div>
    </motion.div>
  )
}

export default DownloadCard
