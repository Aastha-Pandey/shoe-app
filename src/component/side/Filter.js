import { useEffect, useState } from 'react';
import {
  getCategory,
  getShoesByCategory,
  getShoesByRange,
  getShoesBySize,
  getSizes,
} from '../../services/apiservice';

const Filter = ({ setProducts }) => {
  const [sizes, setSizes] = useState([]);
  const [checked, setChecked] = useState(new Array(getCategory().length).fill(false));
  const [category, setCategory] = useState([]);
  const [range, setRange] = useState('900');
  useEffect(() => {
    if (category.length !== 0) {
      let data = getShoesByCategory(category);
      setProducts(data);
    }
  }, [category]);

  useEffect(() => {
    if (sizes.length !== 0) {
      let data = getShoesBySize(sizes);
      setProducts(data);
    }
  }, [sizes]);

  return (
    <>
      <div
        style={{
          backgroundColor: 'white',
          width: '25%',
          display: 'flex',
          flexDirection: 'column',

          borderRight: '1px solid rgba(229, 231, 235, 1)',
        }}
      >
        <div
          style={{
            borderBottom: '1px solid rgba(229, 231, 235, 1)',
          }}
        >
          <h2
            style={{
              borderBottom: '1px solid rgba(229, 231, 235, 1)',
              paddingRight: '2.5rem',
              paddingLeft: '2.5rem',
              paddingTop: '1rem',
              paddingBottom: '1rem',
              color: 'rgba(31, 41, 55, 1)',
              fontWeight: '600',
              fontSize: '1rem',
              lineHeight: '1.5rem',
            }}
          >
            Categories
          </h2>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              paddingRight: '2.5rem',
              paddingLeft: '2.5rem',
            }}
          >
            {getCategory().map((item, index) => (
              <label
                style={{
                  color: 'rgba(107, 114, 128, 1)',
                  fontSize: '0.75rem',
                  lineHeight: '1rem',
                  fontWeight: '600',
                }}
              >
                <input
                  value={item}
                  onChange={(event) => {
                    event.persist();
                    let result = checked.map((item, i) => (i === index ? !item : item));
                    setChecked(result);

                    if (result[index]) {
                      setCategory((category) => [...category, event.target.value]);
                    }
                  }}
                  checked={checked[index]}
                  style={{
                    margin: '0.5rem',
                  }}
                  type='checkbox'
                />
                <span></span>
                {item}
              </label>
            ))}
          </div>
        </div>
        <div
          style={{
            borderBottom: '1px solid rgba(229, 231, 235, 1)',
            paddingRight: '2.5rem',
            paddingLeft: '2.5rem',
          }}
        >
          <h2
            style={{
              color: 'rgba(31, 41, 55, 1)',
              fontWeight: '600',
              fontSize: '1rem',
              lineHeight: '1.5rem',
              paddingTop: '1rem',
              paddingBottom: '1rem',
            }}
          >
            Price range
          </h2>

          <input
            type='range'
            min='300'
            max='900'
            value={range}
            onChange={(event) => {
              let data = getShoesByRange(event.target.min, event.target.value);
              setProducts(data);
              return setRange(event.target.value);
            }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            borderBottom: '1px solid rgba(229, 231, 235, 1)',
            paddingRight: '2.5rem',
            paddingLeft: '2.5rem',
          }}
        >
          <h2
            style={{
              color: 'rgba(31, 41, 55, 1)',
              fontWeight: '600',
              fontSize: '1rem',
              lineHeight: '1.5rem',
              paddingTop: '1rem',
              paddingBottom: '1rem',
            }}
          >
            Size
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'auto auto auto auto',
            }}
          >
            {getSizes().map((item) => (
              <button
                value={item}
                onClick={(event) => {
                  event.persist();
                  setSizes((prev) => [...prev, event.target.value]);
                }}
                style={{
                  border: '1px solid rgba(229, 231, 235, 1)',
                  borderRadius: '8px',
                  padding: '10px',
                  width: '2.5rem',
                  height: '2.5rem',
                  backgroundColor: 'rgba(249, 250, 251, 1)',
                  color: 'rgba(75, 85, 99, 1)',
                  fontWeight: '600',
                  fontSize: '0.875rem',
                  lineHeight: '1.25rem',
                  textAlign: 'center',
                  marginBottom: '0.5rem',
                  cursor: 'pointer',
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
