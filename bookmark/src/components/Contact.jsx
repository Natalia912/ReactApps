import { useState } from 'react'

import styles from '../styles'
import Container from './Container'

const Contact = () => {
  const [isValid, setIsValid] = useState(true)
  const [email, setEmail] = useState('')

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validateEmail(email)) {
      setIsValid(false)
    } else setIsValid(true)
  }
  return (
    <section className='bg-softBlue' id='Contact'>
      <Container>
        <div className='text-center md:py-16 sm:py-12 py-10 flex flex-col items-center max-w-lg mx-auto'>
          <p className='text-white uppercase tracking-[0.4em] text-xs'>35,000+ already joined</p>
          <h2 className='font-medium text-white text-2xl sm:text-3xl sm:my-6 my-2'>
            Stay up-to-date with what we’re doing
          </h2>
          <form className='flex flex-col items-start sm:flex-row gap-4 w-full justify-center'>
            <div className='w-full'>
              <input
                type='email'
                name=''
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter your email address'
                className={`pl-4 min-h-[50px]  w-full ${
                  !isValid ? 'border-2 border-softRed rounded-t-md' : 'rounded-md'
                }`}
              />
              {!isValid && (
                <div className='bg-softRed p-2 rounded-b-md'>
                  <p className='text-white text-xs text-left'>Whoops, make sure it's an email</p>
                </div>
              )}
            </div>
            <button
              onClick={(e) => handleSubmit(e)}
              className={`${styles.redButton} min-h-[50px] min-w-[150px] sm:w-auto w-full`}
            >
              Contact Us
            </button>
          </form>
        </div>
      </Container>
    </section>
  )
}

export default Contact
