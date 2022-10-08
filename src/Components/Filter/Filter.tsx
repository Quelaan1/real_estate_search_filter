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
  const [startDate, setStartDate]: any = useState();
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
              <li className="form__title">Location</li>
              <li>
                <input
                  className='form__input'
                  type="text"
                  name="Location"
                  id="location"
                  placeholder="Enter Location"
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
                />
              </li>
            </div>

            <div className='filter__form-line'></div>

            <div>
              <li className="form__title">When</li>
              <li>
                <DatePicker
                  placeholderText="Select Move-in Date"
                  className="form__input datepicker"
                  selected={startDate}
                  onChange={(date: Date) => setStartDate(date)}
                />
              </li>
            </div>

            <div className='filter__form-line'></div>

            <div>
              <li className="form__title">Price</li>
              <li className='select_box'>
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

            <div className='filter__form-line'></div>

            <div>
              <li className="form__title">Proptery Type</li>
              <li className='select_box'>
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

            <div className='filter__form-line'></div>

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
          </ul>
        </form>
      </div>
    </>
  );
};
