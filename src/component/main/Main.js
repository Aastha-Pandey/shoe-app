import Filter from '../side/Filter';
import Navbar from '../header/Navbar';
import Product from './Product';
import { useEffect, useState } from 'react';
import { getShoes } from '../../services/apiservice';

const Main = () => {
  const [query, setQuery] = useState('all');
  const [products, setProducts] = useState([]);
  useEffect(() => {
    let data = getShoes(query);
    setProducts(data);
  }, [query]);

  return (
    <>
      <div
        style={{
          backgroundColor: 'rgba(249, 250, 251, 1)',
          height: 'auto',
          width: 'auto',
          padding: ' 1rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid rgba(229, 231, 235, 1)',
            borderRadius: '20px',
            backgroundColor: 'white',
            width: '100%',
            height: '100%',
          }}
        >
          <Navbar />
          <div
            style={{
              display: 'flex',
              width: '100%',
              height: '100%',
            }}
          >
            <Filter setProducts={(product) => setProducts(product)} />
            <Product products={products} setQuery={(query) => setQuery(query)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
