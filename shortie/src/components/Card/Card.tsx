import { FC } from 'react';
import './card.css';

interface CardI {
  id: string;
}

const Card: FC<CardI> = ({ id }) => {
  const infoArr = [
    {
      id: '1',
      icon: '/src/assets/icon-brand-recognition.svg',
      title: 'Brand Recognition',
      description:
        'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.'
    },
    {
      id: '2',
      icon: '/src/assets/icon-detailed-records.svg',
      title: 'Detailed Records',
      description:
        'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'
    },
    {
      id: '3',
      icon: '/src/assets/icon-fully-customizable.svg',
      title: 'Fully Customizable',
      description:
        'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'
    }
  ];

  const element = infoArr.find((cardInfo) => cardInfo.id === id);

  return (
    <div className="card">
      <div className="icon-wrapper">
        <img src={element?.icon} alt="icon" className="card-icon" />
      </div>
      <h4 className="card-title">{element?.title}</h4>
      <p className="card-description">{element?.description}</p>
    </div>
  );
};

export default Card;
