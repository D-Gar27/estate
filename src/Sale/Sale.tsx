import './Sale.scss';
import { fetchData } from '../utils/fetchApi';
import { useEffect, useState } from 'react';
import Property from '../components/Property/Property';
import { BsArrowRightCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';

interface Props {
  id: number;
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
}

const Sale = () => {
  const [properties, setProperties] = useState<Props[]>();
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchForSale = async () => {
      try {
        const res = await fetchData(
          'properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=5'
        );
        setProperties(res?.hits);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchForSale();
  }, []);
  return (
    <>
      <section className="sale-section">
        <div className="container">
          <h3 className="property-type">FOR SALE</h3>
          <div className="sale-container">
            {loading ? (
              <p className="loading">Loading...</p>
            ) : properties && !loading ? (
              <>
                {properties?.map((property) => {
                  return <Property key={property.id} property={property} />;
                })}
                <Link to={`/search?purpose=for-sale`} className="more">
                  <div>
                    <BsArrowRightCircle className="icon" />
                    <span>More</span>
                  </div>
                </Link>
              </>
            ) : (
              <p className="went-wrong">Something went wrong</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Sale;
