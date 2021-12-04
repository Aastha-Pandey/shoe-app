import { useEffect, useState } from 'react';
import { getCategory, getSizes } from '../../services/apiservice';

const Filter = ({
  category,
  setCategory,
  sizes,
  setSizes,
  range,
  setRange,
  minRange,
  setQuery,
}) => {
  const [checked, setChecked] = useState(new Array(getCategory().length).fill(false));

  const [applyAllClicked, setApplyAllClicked] = useState();

  useEffect(() => {
    if (applyAllClicked && sizes.length !== 0 && category.length !== 0) {
      setQuery('apply three filters');
      setApplyAllClicked(false);
    }
  }, [applyAllClicked, category, sizes, minRange, range]);

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
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <button
              style={{
                borderBottom: '1px solid rgba(229, 231, 235, 1)',
                paddingRight: '2.5rem',
                paddingLeft: '2.5rem',
                textAlign: 'center',
                color: 'rgba(31, 41, 55, 1)',
                fontWeight: '600',
                fontSize: '1rem',
                lineHeight: '1.5rem',
                cursor: 'pointer',
              }}
              onClick={() => {
                setApplyAllClicked(true);
              }}
            >
              Apply all
            </button>
            <button
              style={{
                borderBottom: '1px solid rgba(229, 231, 235, 1)',
                paddingRight: '2.5rem',
                paddingLeft: '2.5rem',
                textAlign: 'center',
                color: 'rgba(31, 41, 55, 1)',
                fontWeight: '600',
                fontSize: '1rem',
                lineHeight: '1.5rem',
                cursor: 'pointer',
              }}
              onClick={() => {
                setQuery('all');
                setChecked(new Array(getCategory().length).fill(false));
                sizes.length = 0;
                category.length = 0;
              }}
            >
              Clear all
            </button>
          </div>
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
                    } else {
                      category.filter((item, i) => {
                        if (item === event.target.value) {
                          return category.splice(i, i + 1);
                        }
                      });
                      setCategory([...category]);
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
            min={minRange}
            max='900'
            value={range}
            onChange={(event) => {
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
