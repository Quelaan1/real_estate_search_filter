import React, { useState } from 'react';
import classNames from 'classnames';
import './PropertyCard.css';
import './IsPopular.css';
import './FavouriteButton.css';

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
  } = property;

  const [isFavoriteState, setIsFavourite] = useState(isFavorite);

  const addFavourite = () => {
    setIsFavourite(!isFavoriteState);
  };

  return (
    <>
      <div
        className={classNames('property_card', {
          'property_card is_popular': isPopular,
        })}
      >
        <img
          className="property_card__image"
          src={imgUrl}
          alt="property_image"
        />
        <h3
          className={classNames('', {
            is_popular_hidden: !isPopular,
          })}
        >
          <span className="property_card__sparkle"> &#10024; </span>
          Popular
        </h3>
        <div className="property_card__details">
          <div className="property_card__details-price price">
            <p className="price__price">${price}</p>
            <p className="price__month">/month</p>
            <button
              className={classNames(
                { 'like liked': isFavoriteState },
                { 'like unliked': !isFavoriteState }
              )}
              onClick={(event) => {
                event.preventDefault();
                addFavourite();
              }}
            >
              <span
                className="like-icon like-icon-state"
                aria-label="liked"
              >
                Unliked
              </span>
            </button>
          </div>
          <h3>{title}</h3>
          <p className="property_card__details-location">{location}</p>
          <hr />
          <div className="property_card__details2">
            <p className="last_block">
              <span>
                <i className="fa-solid fa-bed"></i>
              </span>{' '}
              {beds} Beds
            </p>
            <p className="last_block">
              <span>
                <i className="fa-solid fa-sink"></i>
              </span>{' '}
              {bathrooms} Bathrooms
            </p>
            <p className="last_block">
              <span>
                <i className="fa-solid fa-diamond"></i>
              </span>{' '}
              {size} m2
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
