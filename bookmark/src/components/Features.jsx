import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { fadeIn } from '../motion'
import Container from './Container'
import SectionWrapper from './SectionWrapper'
import Tab from './Tab'
import { Tab1, Tab2, Tab3 } from '../assets'
import styles from '../styles'
import { tabs } from '../content'

const Features = () => {
  const [active, setActive] = useState(0)
  return (
    <Container>
      <div className='flex flex-col justify-center w-full lg:mt-56 sm:mt-32 mt-20 min-h-screen'>
        <div className='text-center mx-auto'>
          <h2 className={`${styles.sectionHeader} mb-2 sm:mb-6`}>Features</h2>
          <p className={`${styles.sectionText}`}>
            Our aim is to make it quick and easy for you to access your favourite websites. Your
            bookmarks sync between your devices so you can access them on the go.
          </p>
        </div>
        <div>
          <ul className='flex my-6 sm:flex-row flex-col max-w-3xl mx-auto'>
            <li
              className={`${styles.tabLi} border-t-2 ${
                active === 0 && `${styles.tabActive} after:w-[200px]`
              }`}
            >
              <button
                onClick={() => setActive(0)}
                className='hover:text-softRed text-veryDarkBlue duration-300'
              >
                Simple Bookmarking
              </button>
            </li>
            <li
              className={`${styles.tabLi} ${active === 1 && `${styles.tabActive} after:w-[180px]`}`}
            >
              <button
                onClick={() => setActive(1)}
                className='hover:text-softRed text-veryDarkBlue duration-300'
              >
                Speedy Searching
              </button>
            </li>
            <li
              className={`${styles.tabLi} ${active === 2 && `${styles.tabActive} after:w-[150px]`}`}
            >
              <button
                onClick={() => setActive(2)}
                className='hover:text-softRed text-veryDarkBlue duration-300'
              >
                Easy Sharing
              </button>
            </li>
          </ul>
          <div className='relative lg:my-20 sm:my-12 my-8'>
            <motion.div
              className='sm:w-[45%] w-[80%] lg:h-[350px] md:h-[210px] sm:h-[45%] xs:h-[45%] xss:h-[200px] h-[160px] left-[-10%] bg-softBlue absolute rounded-r-full lg:top-[20%] md:top-[20%] sm:top-[30%] xs:top-[10%] top-[8%] z-[-55]'
              variants={fadeIn('right', 'linear', 0, 0.5)}
              initial='hidden'
              whileInView='show'
            />
            <AnimatePresence>
              {active === 0 && (
                <Tab image={Tab1} description={tabs[0].description} header={tabs[0].title} />
              )}
              {active === 1 && (
                <Tab image={Tab2} description={tabs[1].description} header={tabs[1].title} />
              )}
              {active === 2 && (
                <Tab image={Tab3} description={tabs[2].description} header={tabs[2].title} />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default SectionWrapper(Features, 'Features')
