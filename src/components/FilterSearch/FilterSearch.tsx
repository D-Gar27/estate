import { useNavigate } from 'react-router';
import './FilterSearch.scss';

interface Props {
  setQuery: any;
  query: {
    for: string | any;
    type: string | any;
    price: string | any;
  };
}

const Filter = ({ setQuery, query }: Props) => {
  const navigate = useNavigate();
  const goToSearch = () =>
    navigate({
      pathname: `/search?purpose=for-${query.for}&typeID=${query.type}${
        query.price === 'random' ? '' : '&sort=' + query.price
      }`,
    });
  return (
    <div className="filter-search">
      <div className="query">
        <label htmlFor="for">For</label>
        <select
          defaultValue={query.for === 'for-sale' ? 'sale' : 'rent'}
          name="for"
          id="for"
          onChange={(e) => setQuery({ ...query, for: e.target.value })}
        >
          <option value="sale">Sale</option>
          <option value="rent">Rent</option>
        </select>
      </div>
      <div className="query">
        <label htmlFor="type">Type</label>
        <select
          defaultValue={
            query.type === '4'
              ? '4'
              : query.type === '16'
              ? '16'
              : query.type === '3'
              ? '3'
              : query.type === '7'
              ? '7'
              : query.type === '6'
              ? '6'
              : query.type === '24'
              ? '24'
              : '22'
          }
          name="type"
          id="type"
          onChange={(e) => setQuery({ ...query, type: e.target.value })}
        >
          <option value="4">Apartment</option>

          <option value="16">Townhouses</option>

          <option value="3">Villas</option>

          <option value="7">Warehouse </option>

          <option value="6">Shop</option>

          <option value="24">Showroom</option>

          <option value="22">Industrial Land</option>
        </select>
      </div>

      <div className="query">
        <label htmlFor="price">Price</label>
        <select
          defaultValue={
            query.price === 'price-asc'
              ? 'price-asc'
              : query.price === 'price-desc'
              ? 'price-desc'
              : 'random'
          }
          name="price"
          id="price"
          onChange={(e) => setQuery({ ...query, price: e.target.value })}
        >
          <option value="price-asc">Low to high</option>

          <option value="price-desc">High to low</option>

          <option value="random">Random</option>
        </select>
      </div>
      <button className="search-btn" onClick={goToSearch}>
        Search
      </button>
    </div>
  );
};

export default Filter;
