import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { fetchData } from '../utils/fetchApi';
import { FaBath, FaBed } from 'react-icons/fa';
import { BsGrid3X3GapFill } from 'react-icons/bs';
import './Property.scss';
import { motion } from 'framer-motion';

interface Property {
  price: number;
  rentFrequency?: string | any;
  title: string;
  description: string;
  rooms: number;
  baths: number;
  area: number;
  photos: { id: number; url: string; title: string }[];
  phoneNumber: {
    mobile: string;
    number: string;
  };
  agency: {
    name: string;
    logo: {
      url: string;
    };
  };
  cityLevelScore: number;
  purpose: string;
}

const PropertyPage = () => {
  const { slug } = useParams();
  const [property, setProperty] = useState<Property>();
  const [loading, setLoading] = useState<boolean>(true);
  const [width, setWidth] = useState<number>(0);
  const caroselRef: any = useRef();
  useEffect(() => {
    const fetchProperty = async () => {
      setLoading(true);
      try {
        const res = await fetchData(`properties/detail?externalID=${slug}`);
        setProperty(res);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchProperty();
  }, [slug]);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (caroselRef.current) {
      setWidth(
        16 + caroselRef.current.scrollWidth - caroselRef.current.offsetWidth
      );
    }
  }, [property, loading]);
  return (
    <main>
      <section className="property-page">
        {loading ? (
          <p className="loading">Loading...</p>
        ) : !property ? (
          <p>Something went wrong</p>
        ) : (
          <div className="container property-container">
            <motion.div
              className="carosel"
              ref={caroselRef}
              whileTap={{ cursor: 'grabbing' }}
            >
              <motion.div
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
                className="inner-caro"
              >
                {property.photos.map((img) => (
                  <motion.figure key={img.id} className="img-container">
                    <img src={img.url} alt={img.title} />
                  </motion.figure>
                ))}
              </motion.div>
            </motion.div>
            <p>{property.purpose}</p>
            <p className="price">
              $ {property.price}{' '}
              {property.rentFrequency && '/ ' + property.rentFrequency}
            </p>
            <figure className="agency">
              <label>Agency : {property.agency.name}</label>
              <img
                src={property?.agency?.logo.url}
                alt={property.agency?.name}
                className="agency-logo"
              />
            </figure>
            <p>Phone: {property.phoneNumber.mobile}</p>
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
            <p>City level score : {property.cityLevelScore}</p>
            <p className="title">{property.title}</p>
            <p>{property.description}</p>
          </div>
        )}
      </section>
    </main>
  );
};

export default PropertyPage;
