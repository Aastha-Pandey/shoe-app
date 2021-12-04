import Filter from '../side/Filter';
import Navbar from '../header/Navbar';
import Product from './Product';
import { useEffect, useState } from 'react';
import { getShoes } from '../../services/apiservice';

const Main = () => {
  const [query, setQuery] = useState('all');
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [range, setRange] = useState('900');
  const [minRange] = useState('300');
  const [sizes, setSizes] = useState([]);
  useEffect(() => {
    let data = getShoes(query, category, minRange, range, sizes);
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
            <Filter
              setQuery={(query) => {
                return setQuery(query);
              }}
              category={category}
              setCategory={setCategory}
              sizes={sizes}
              setSizes={setSizes}
              range={range}
              setRange={setRange}
              minRange={minRange}
            />
            <Product
              products={products}
              setQuery={(query) => {
                return setQuery(query);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
