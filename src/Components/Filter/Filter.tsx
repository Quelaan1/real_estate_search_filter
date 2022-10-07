import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

import './Filter.css';

interface Props {
  properties: Properties[];
  filterProperties: Properties[] | any;
}

export const Filter: React.FC<Props> = ({ properties, filterProperties }) => {
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const formattedDate = moment(`${startDate}`).format('MM/DD/YYYY');
  const [price, setPrice] = useState('');
  const [propertyType, setPropertyType] = useState('');
  let [filteredProperties, setFilteredProperties] = useState(properties);

  useEffect(() => filterProperties(filteredProperties));

  const filterer = () => {
    filteredProperties = properties;

    if (startDate) {
      setFilteredProperties(
        filteredProperties.filter(
          (property) =>
            !moment(`${formattedDate}`, 'MM/DD/YYYY').isBetween(
              moment(property.notAvailabeOn[0], 'MM/DD/YYYY'),
              moment(property.notAvailabeOn[1], 'MM/DD/YYYY')
            )
        )
      );
    }

    if (location) {
      setFilteredProperties((item) =>
        item.filter((property) =>
          property.location.toLowerCase().includes(location.toLowerCase())
        )
      );
    }

    if (price) {
      setFilteredProperties((item) =>
        item.filter(
          (property) =>
            property.price >= parseInt(price.split('-')[0]) &&
            property.price <= parseInt(price.split('-')[1])
        )
      );
    }

    if (propertyType) {
      setFilteredProperties((item) =>
        item.filter((property) => property.propertyType === propertyType)
      );
    }
  };

  return (
    <>
      <div className="filter">
        <form
          action=""
          className="filter__form"
        >
          <ul className="filter__form-list">
            <div>
              <li>Location</li>
              <li>
                <input
                  type="text"
                  name="Location"
                  id="location"
                  placeholder="Enter Location"
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
                />
              </li>
            </div>

            <div>
              <li>When</li>
              <li>
                <DatePicker
                  selected={startDate}
                  onChange={(date: Date) => setStartDate(date)}
                />
              </li>
            </div>

            <div>
              <li>Price</li>
              <li>
                <select
                  name="price"
                  id="price"
                  value={price}
                  onChange={(event) => setPrice(event.target.value)}
                >
                  <option
                    value=""
                    disabled
                  >
                    All price range
                  </option>
                  <option value="500-1000">$500-$1,000</option>
                  <option value="1001-2500">$1000-$2,500</option>
                  <option value="2501-4000">$2500-$4,000</option>
                  <option value="4001-5500">$4000-$5,500</option>
                </select>
              </li>
            </div>

            <div>
              <li>Proptery Type</li>
              <li>
                <select
                  name="propertyType"
                  id="propertyType"
                  value={propertyType}
                  onChange={(event) => setPropertyType(event.target.value)}
                >
                  <option
                    value=""
                    disabled
                  >
                    Select Property Type
                  </option>
                  <option value="house">House</option>
                  <option value="villa">Villa</option>
                  <option value="apartment">Apartment</option>
                </select>
              </li>
            </div>

            <div>
              <li>
                <button
                  className="filter__form-submit"
                  type="submit"
                  onClick={(event) => {
                    event.preventDefault();
                    filterer();
                  }}
                >
                  Search
                </button>
              </li>
            </div>
          </ul>
        </form>
      </div>
    </>
  );
};
