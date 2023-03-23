import Logo from '../assets/Logo'
import { navigation } from '../content'
import Container from './Container'
import { IconTwitter, IconFacebook } from '../assets'

const Footer = () => {
  return (
    <footer className='bg-veryDarkBlue'>
      <Container>
        <div className='flex sm:flex-row flex-col justify-between items-center py-10 gap-8'>
          <Logo text='#fff' />
          <ul className='flex sm:flex-row flex-col sm:gap-10 gap-4 lg:w-[70%] text-center'>
            {navigation.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className='text-white sm:text-sm uppercase tracking-widest opacity-75 hover:text-softRed focus:text-softRed duration-300'
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <ul className='flex gap-10'>
            <li>
              <a href=''>
                <IconTwitter className='[&>path]:hover:fill-softRed [&>path]:duration-300' />
              </a>
            </li>
            <li>
              <a href=''>
                <IconFacebook className='[&>path]:hover:fill-softRed [&>path]:duration-300' />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
