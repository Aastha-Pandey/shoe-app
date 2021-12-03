import Filter from '../side/Filter';
import Navbar from '../header/Navbar';
import Product from './Product';
import { useEffect, useState } from 'react';
import { getAllShoes } from '../../services/apiservice';

const Main = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let data = getAllShoes();
    setProducts(data);
  }, []);

  return (
    <>
      {' '}
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
            <Filter products={products} />
            <Product products={products} setProducts={setProducts} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
