import { ReactComponent as Twitter } from '/src/assets/icon-twitter.svg';
import { ReactComponent as Facebook } from '/src/assets/icon-facebook.svg';
import { ReactComponent as Pinterest } from '/src/assets/icon-pinterest.svg';
import { ReactComponent as Instagram } from '/src/assets/icon-instagram.svg';

import './footer.css';

function Footer() {
  const columnOne = [
    'Features',
    'Link Shortening',
    'Branded Links',
    'Analytics'
  ];
  const columnTwo = ['Resources', 'Blog', 'Developers', 'Support'];
  const columnThree = ['Company', 'About', 'Our Team', 'Careers', 'Contact'];

  const footerColumn = (column: string[]) => {
    return column.map((item, index) => (
      <li className={index === 0 ? 'column-header' : 'column-item'} key={item}>
        {item}
      </li>
    ));
  };
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="column column-1">
          <h2>Shortie</h2>
        </div>
        <ul className="column-text column-2">{footerColumn(columnOne)}</ul>
        <ul className="column-text column-3">{footerColumn(columnTwo)}</ul>
        <ul className="column-text column-4">{footerColumn(columnThree)}</ul>
        <ul className="column column-5">
          <li className="column-social">
            <Facebook />
          </li>
          <li className="column-social">
            <Twitter />
          </li>
          <li className="column-social">
            <Pinterest />
          </li>
          <li className="column-social">
            <Instagram />
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
