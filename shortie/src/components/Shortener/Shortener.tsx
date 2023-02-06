import { useEffect, useState } from 'react';

import isValidUrl from '../../helpers/isValidUrl';
import useAPI from '../../hooks/useAPI';

import Button from '../../ui/Button/Button';
import Link from '../Link/Link';
import './shortener.css';

interface LinksI {
  originalUrl: string;
  shortUrl: string;
}

function Shortener() {
  const [url, setUrl] = useState('');
  const [validUrl, setValidUrl] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [links, setLinks] = useState<LinksI[] | []>([]);

  const { loading, data } = useAPI(validUrl);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
    if (isValidUrl(event.target.value)) setIsValid(true);
  };

  const submitForm = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (url && isValidUrl(url)) {
      setIsValid(true);
      setValidUrl(url);
    } else {
      setIsValid(false);
    }
  };

  useEffect(() => {
    if (data) {
      const originalUrl = data.originalUrl;
      const shortUrl = data.shortUrl;
      const newLinks = [...links].concat({ originalUrl, shortUrl });
      setLinks(newLinks);
    }
  }, [data]);

  const linksEl = links.map((link) => (
    <Link
      key={link.originalUrl}
      originalUrl={link.originalUrl}
      shortUrl={link.shortUrl}
    />
  ));

  return (
    <section className="shortener">
      <div className="container">
        <div className="shortener-box">
          <form>
            <label htmlFor="url" className="input-label">
              <input
                type="text"
                name="url"
                onChange={(event) => handleChange(event)}
                value={url}
                autoComplete="off"
                placeholder="Shorten a link here..."
                className={`input-url ${!isValid ? 'error' : null}`}
              />
              {!isValid && !url && (
                <p className="error-url">Please add a link</p>
              )}
              {!isValid && url && (
                <p className="error-url">The link is invalid</p>
              )}
            </label>
            <button
              className="submit-button"
              onClick={(event) => submitForm(event)}
            >
              Shorten It!
            </button>
          </form>
        </div>
        <ul className="links-list">{links.length > 0 && linksEl}</ul>
      </div>
    </section>
  );
}

export default Shortener;
