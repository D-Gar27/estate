import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import FilterSearch from '../components/FilterSearch/FilterSearch';
import Property from '../components/Property/Property';
import { fetchData } from '../utils/fetchApi';
import './Searched.scss';

interface Props {
  setQuery: any;
  query: {
    for: string;
    type: string;
    price: string;
  };
}

interface Properties {
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

const Searched = () => {
  const [searchParams] = useSearchParams();
  const forQuery = searchParams.get('purpose');
  const typeQuery = searchParams.get('typeID');
  const sortQuery = searchParams.get('sort');
  const [properties, setProperties] = useState<Properties[]>();
  const [page, setPage] = useState<number>(0);
  const [query, setQuery] = useState({
    for: forQuery?.split('-')[1],
    type: typeQuery || '16',
    price: sortQuery,
  });
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchForSale = async () => {
      setLoading(true);
      try {
        const res = await fetchData(
          `properties/list?locationExternalIDs=5002&purpose=${forQuery}&hitsPerPage=25&page=${page}${
            typeQuery && '&categoryExternalID=' + typeQuery
          }${sortQuery ? '&sort=' + sortQuery : ''}`
        );
        setProperties(res?.hits);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    fetchForSale();
  }, [forQuery, typeQuery, sortQuery, page]);

  return (
    <main className="main">
      <h3 className="purpose-text">
        {forQuery?.split('-').join(' ').toUpperCase()}
      </h3>
      <div>
        <FilterSearch query={query} setQuery={setQuery} />
      </div>
      <section className="container searched-page">
        <div className="container search-container">
          {loading ? (
            <div className="loading">
              <p>Loading...</p>
            </div>
          ) : properties?.length ? (
            <>
              {properties?.map((property) => {
                return <Property key={property.id} property={property} />;
              })}
            </>
          ) : (
            <p className="went-wrong">Something went wrong</p>
          )}
        </div>
        {/* {properties && properties?.length > 24 && (
          <div>
            {page === 0 && <button>Prev</button>}
            <button onClick={() => setPage((p) => p + 1)}>Next</button>
          </div>
        )} */}
      </section>
    </main>
  );
};

export default Searched;
