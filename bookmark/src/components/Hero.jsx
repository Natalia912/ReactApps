import { motion } from 'framer-motion'

import Container from './Container'
import { HeroImage } from '../assets'
import { fadeIn } from '../motion'

const Hero = () => {
  return (
    <Container>
      <div className='flex sm:flex-row flex-col-reverse gap-6 items-center justify-between my-16 sm:my-20 lg:mt-32 relative'>
        <motion.div
          className=' text-center sm:text-left w-[100%]'
          variants={fadeIn('right', 'spring', 0.5, 0.5)}
          initial='hidden'
          whileInView='show'
        >
          <h1 className='sm:text-4xl lg:text-5xl text-3xl font-medium text-veryDarkBlue max-w-xs sm:max-w-sm lg:max-w-md sm:mb-6 mb-2 leading-snug mx-auto sm:mx-0'>
            A Simple Bookmark Manager
          </h1>
          <p className='sm:leading-relaxed sm:text-[18px] text-grayishBlue max-w-lg'>
            A clean and simple interface to organize your favourite websites. Open a new browser tab
            and see your sites load instantly. Try it for free.
          </p>
          <div className='flex gap-4 mt-6 lg:mt-8 flex-wrap items-center justify-center sm:justify-start'>
            <a
              href=''
              className='sm:text-[16px] text-[14px] rounded-md bg-softBlue text-white px-6 py-[10px] font-medium hover:text-softBlue hover:bg-transparent border-2 border-transparent hover:border-softBlue min-w-[185px] text-center duration-300'
            >
              Get it on Chrome
            </a>
            <a
              href=''
              className='sm:text-[16px] text-[14px] min-w-[185px] text-center rounded-md border-2 border-transparent  bg-gray-100 px-6 py-[10px] shadow-md text-veryDarkBlue font-medium hover:border-veryDarkBlue hover:bg-transparent duration-300'
            >
              Get it on Firefox
            </a>
          </div>
        </motion.div>
        <div className='w-full h-full'>
          <motion.img
            src={HeroImage}
            alt='hero'
            className='lg:absolute top-0 lg:top-[-50px] lg:w-[55%] lg:max-w-2xl'
            variants={fadeIn('down', 'spring', 0.5, 0.75)}
            initial='hidden'
            whileInView='show'
          />

          <motion.div
            className='sm:w-[45%] w-[90%] lg:h-[350px] md:h-[210px] sm:h-[45%] xs:h-[45%] xss:h-[35%] h-[30%] right-[-10%] bg-softBlue absolute rounded-l-full lg:top-[20%] md:top-[25%] sm:top-[30%] xs:top-[10%] top-[8%] z-[-55]'
            variants={fadeIn('left', 'linear', 0, 0.5)}
            initial='hidden'
            whileInView='show'
          />
        </div>
      </div>
    </Container>
  )
}

export default Hero
