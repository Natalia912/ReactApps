import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import useWindowWidth from '../useWindowWidth'

import Container from './Container'

import { IconClose, IconHamburger, LogoBookmark } from '../assets'
import { navigation } from '../content'
import Logo from '../assets/Logo'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  const { windowWidth } = useWindowWidth()

  const mobile = windowWidth < 640

  return (
    <Container>
      <div className='my-6 sm:my-8 flex items-center justify-between min-h-[40px]'>
        <a
          href='/'
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`${mobile && toggle ? 'hidden' : 'block'}`}
        >
          <img src={LogoBookmark} alt='logo' className='' />
        </a>

        <nav>
          <ul className='hidden sm:flex sm:gap-6 md:gap-10 items-center'>
            {navigation.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className='uppercase font-normal tracking-wider text-sm hover:text-softRed focus:text-softRed duration-300'
                >
                  {item}
                </a>
              </li>
            ))}
            <li>
              <button className='uppercase font-normal tracking-wider text-sm border-2 rounded-md px-6 py-[10px] text-white border-softRed bg-softRed hover:text-softRed hover:bg-white duration-300 focus:text-softRed focus:bg-white'>
                Login
              </button>
            </li>
          </ul>
        </nav>

        <button
          className={`sm:hidden ${toggle ? 'hidden' : 'block'}`}
          onClick={() => setToggle(true)}
        >
          <img src={IconHamburger} alt='menu' className='w-[24px] h-[20px]' />
        </button>

        <AnimatePresence>
          {toggle && (
            <motion.div
              initial={{ scale: 0, x: 0, borderBottomLeftRadius: 10000 }}
              animate={{ opacity: 1, scale: 1, borderBottomLeftRadius: 0 }}
              exit={{ scale: 0, borderBottomLeftRadius: 2000 }}
              style={{ originX: 1, originY: 0 }}
              transition={{ ease: 'easeInOut' }}
              className={`flex z-[999] absolute w-screen h-screen bg-veryDarkBlue bg-opacity-90 sm:hidden top-0 left-0`}
            >
              <Container>
                <div className='pt-6 flex items-center justify-between'>
                  <a
                    href='/'
                    onClick={() => {
                      setToggle(false)
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                  >
                    <Logo text='white' circle='white' bookmark='hsl(229, 31%, 21%)' />
                  </a>
                  <button onClick={() => setToggle(false)}>
                    <img src={IconClose} alt='close button' className='w-[20px] h-auto' />
                  </button>
                </div>
                <nav className='mt-10'>
                  <ul className='flex flex-col items-center'>
                    {navigation.map((item) => (
                      <li
                        key={item}
                        className='border-t-[1px] border-grayishBlue w-full text-center py-5'
                      >
                        <a
                          href={`#${item}`}
                          onClick={() => setToggle(false)}
                          className='uppercase font-normal tracking-wider text-lg text-white hover:opacity-50 duration-300'
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                    <li className='border-t-[1px] border-grayishBlue w-full text-center py-5'>
                      <button className='uppercase font-normal w-full tracking-wider text-lg border-2 rounded-md px-6 py-[10px] text-white border-white bg-transparent hover:text-veryDarkBlue hover:bg-white duration-300'>
                        Login
                      </button>
                    </li>
                  </ul>
                </nav>
              </Container>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Container>
  )
}

export default Navbar
