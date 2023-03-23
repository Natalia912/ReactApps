import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { IconArrow } from '../assets'

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <motion.div className='border-t-2 py-4 pr-4 last-of-type:border-b-2 w-full'>
      <div
        className='group flex items-center justify-between cursor-pointer'
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <h3 className='group-hover:text-softRed duration-300 font-medium text-veryDarkBlue text-lg max-w-[75%]'>
          {question}
        </h3>
        {isOpen ? <IconArrow color='hsl(0, 94%, 66%)' className='rotate-180' /> : <IconArrow />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={question}
            initial={{ y: -20, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transitionDuration: 2,
              transitionTimingFunction: 'ease-in-out',
            }}
            exit={{ y: -20, opacity: 0 }}
            className='mt-8 sm:mt-12'
          >
            <p className='text-veryDarkBlue opacity-80 text-md leading-loose'>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default AccordionItem
