import './Property.scss';
import { FaBath, FaBed } from 'react-icons/fa';
import { BsGrid3X3GapFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

interface Props {
  property: {
    coverPhoto?: {
      url: string;
    };
    price?: number;
    rooms?: number;
    title?: string;
    baths?: number;
    agency?: {
      logo: {
        url: string;
      };
      name: string;
    };
    rentFrequency?: string;
    area: number;
    externalID: string;
  };
}

const Property = ({ property }: Props) => {
  return (
    <Link to={`/property/${property.externalID}`}>
      <div className="property">
        <img src={property.coverPhoto ? property.coverPhoto.url : ''} alt="" />
        <div className="room_bath">
          <p>
            <FaBed />
            {property.rooms}
          </p>
          <p>
            <FaBath />
            {property.baths}
          </p>
          <p>
            <BsGrid3X3GapFill />
            {Math.floor(property.area)} sqft
          </p>
        </div>
        {property.title && (
          <p>
            {property.title?.length < 30
              ? property.title
              : property.title?.substring(0, 30) + '...'}
          </p>
        )}
        <div className="price">
          <p>
            {property.price} ${' '}
            {property?.rentFrequency && `/ ${property?.rentFrequency}`}
          </p>
          <img
            src={property?.agency?.logo.url}
            alt={property.agency?.name}
            className="agency-logo"
          />
        </div>
      </div>
    </Link>
  );
};

export default Property;
