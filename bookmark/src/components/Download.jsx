import DownloadCard from './DownloadCard'
import Container from './Container'
import styles from '../styles'
import { cards } from '../content'

function Download() {
  return (
    <section id='Pricing'>
      <Container>
        <div className='flex flex-col justify-center w-full lg:mt-24 sm:mt-30 mt-10 '>
          <div className='text-center mx-auto'>
            <h2 className={`${styles.sectionHeader} mb-2 sm:mb-6`}>Download the extension</h2>
            <p className={`${styles.sectionText} max-w-xl`}>
              We’ve got more browsers in the pipeline. Please do let us know if you’ve got a
              favourite you’d like us to prioritize.
            </p>
          </div>
          <div className='flex items-center justify-center gap-6 mt-10 flex-wrap'>
            {cards.map((card, index) => (
              <DownloadCard
                key={card.name}
                icon={card.icon}
                name={card.name}
                version={card.version}
                index={index}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Download
