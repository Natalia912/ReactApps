import React from "react";
import locationIcon from '../../public/assets/location.png'

function Card(props) {
  return (
    <div className="card">
      <img
        src={`../../public/assets/${props.item.imageUrl}`}
        alt={props.item.title}
        className="card-image"
      />
      <div className="card-info">
        <div className="location">
          <img src={locationIcon} alt="" className="location-icon" />
          <p className="location-name">{props.item.location}</p>
          <a href={props.item.googleMapsUrl} className="location-link">View on Google Maps</a>
        </div>
        <h2 className="card-title">{props.item.title}</h2>
        <p className="dates">
          {props.item.startDate} - {props.item.endDate}
        </p>
        <p className="description">{props.item.description}</p>
      </div>
    </div>
  );
}

export default Card