import './Hero.scss';
import { motion } from 'framer-motion';
import { HiSearch } from 'react-icons/hi';
import { MdDoubleArrow } from 'react-icons/md';
import Filter from '../components/Filter/Filter';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const Hero = () => {
  const [query, setQuery] = useState<{
    for: string;
    type: string;
    price: string;
  }>({ for: 'sale', type: '4', price: 'price-asc' });
  const navigate = useNavigate();
  const goToSearch = () =>
    navigate({
      pathname: `/search?purpose=for-${query.for}&typeID=${query.type}${
        query.price === 'random' ? '' : '&sort=' + query.price
      }`,
    });
  return (
    <section className="hero_section">
      <motion.div
        initial={{ y: 150, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            type: 'tween',
            duration: 1,
          },
        }}
        className="hero_container"
      >
        <motion.h1 className="hero_text">Your Dream Home Awaits</motion.h1>
        <motion.div
          initial={{ width: '3.25rem' }}
          animate={{
            width: '100%',
            transition: {
              type: 'tween',
              duration: 1,
              delay: 1.1,
            },
          }}
          className="search_box"
        >
          <motion.input
            initial={{ width: 0, opacity: 0 }}
            animate={{
              opacity: 1,
              width: '100%',
              paddingLeft: '0.75rem',
              transition: {
                type: 'tween',
                duration: 0.5,
                delay: 2.1,
              },
            }}
            type="text"
            placeholder="Search"
          />
          <button className="search_btn" onClick={goToSearch}>
            <HiSearch className="search_icon" />
          </button>
        </motion.div>
        <Filter setQuery={setQuery} query={query} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            type: 'tween',
            duration: 1,
            delay: 3,
          },
        }}
        className="explore"
      >
        <p>Explore More</p>
        <motion.span
          transition={{
            y: {
              type: 'spring',
              stiffness: 100,
              duration: 0.5,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeOut',
            },
          }}
          animate={{ y: [-2, -10] }}
        >
          {' '}
          <MdDoubleArrow className="arrow_icon" />
        </motion.span>
      </motion.div>
    </section>
  );
};

export default Hero;
