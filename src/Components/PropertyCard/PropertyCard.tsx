import React from 'react';
import './PropertyCard.css';

interface Props {
  property: Properties;
}

export const PropertyCard: React.FC<Props> = ({ property }) => {
  const {
    imgUrl,
    isPopular,
    price,
    isFavorite,
    title,
    location,
    beds,
    bathrooms,
    size,
    propertyType,
    notAvailabeOn,
  } = property;

  return (
    <>
      <div className="property_card">
        <img
          className="property_card__image"
          src={imgUrl}
          alt="property_image"
        />
        <div className="property_card__details">
          <p>
            ${price} <span>/month</span>
          </p>
          <h3>{title}</h3>
          <p>{location}</p>
          <div className="property_card__details2">
            <p>{beds} Beds</p>
            <p>{bathrooms} Bathrooms</p>
            <p>{size}m2</p>
          </div>
        </div>
      </div>
    </>
  );
};
