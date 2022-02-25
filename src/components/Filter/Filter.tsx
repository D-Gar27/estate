import { motion } from 'framer-motion';
import './Filter.scss';

interface Props {
  setQuery: any;
  query: {
    for: string;
    type: string;
    price: string;
  };
}

const Filter = ({ setQuery, query }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          type: 'tween',
          duration: 1,
          delay: 2.5,
        },
      }}
      className="filter"
    >
      <div className="query">
        <label htmlFor="for">For</label>
        <select
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
          name="price"
          id="price"
          onChange={(e) => setQuery({ ...query, price: e.target.value })}
        >
          <option value="price-asc">Low to high</option>
          <option value="price-desc">High to low</option>
          <option value="random">Random</option>
        </select>
      </div>
    </motion.div>
  );
};

export default Filter;
