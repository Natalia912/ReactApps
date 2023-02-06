import Button from '../../ui/Button/Button';
import './intro.css';

function Intro() {
  return (
    <section className="intro container">
      <div className="intro--content">
        <h1 className="intro--header">More than just shorter links</h1>
        <p className="intro--description">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <Button class="rounded">Get Started</Button>
      </div>
      <div className="intro--hero">
        <img
          className="intro--heroPic"
          src="/assets/illustration-working.svg"
          alt="person working in an office"
        />
      </div>
    </section>
  );
}

export default Intro;
