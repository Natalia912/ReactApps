import Container from './Container'
import AccordionItem from './AccordionItem'
import styles from '../styles'
import { questions } from '../content'

const Questions = () => {
  return (
    <Container>
      <section className='flex flex-col justify-center w-full lg:mt-32 lg:mb-24 sm:mt-30 my-10 '>
        <div className='text-center mx-auto'>
          <h2 className={`${styles.sectionHeader} mb-2 sm:mb-6`}>Frequently Asked Questions</h2>
          <p className={`${styles.sectionText} max-w-xl`}>
            Here are some of our FAQs. If you have any other questions you’d like answered please
            feel free to email us.
          </p>
        </div>
        <div className='max-w-xl mx-auto sm:mt-16 mt-8 w-full'>
          {questions.map((item) => (
            <AccordionItem key={item.question} question={item.question} answer={item.answer} />
          ))}
        </div>
        <div className='flex items-center justify-center sm:my-10 my-8'>
          <a href='#' className={styles.blueButton}>
            More Info
          </a>
        </div>
      </section>
    </Container>
  )
}

export default Questions
