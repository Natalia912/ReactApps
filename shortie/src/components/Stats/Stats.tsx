import Card from '../Card/Card';
import './stats.css';

function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats-text">
          <h2 className="stats-header">Advanced Statistics</h2>
          <p className="stats-description">
            Track how your links are preforming across the web with our advanced
            statistics dashboard
          </p>
        </div>
        <div className="cards-wrapper">
          <div className="line"></div>
          <Card id="1" />
          <Card id="2" />
          <Card id="3" />
        </div>
      </div>
    </section>
  );
}

export default Stats;
