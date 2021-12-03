import ProductCard from './ProductCard';

const Product = ({ products, setQuery }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: 'white',
          width: 'auto',

          padding: '1rem',
        }}
      >
        <div
          style={{
            backgroundColor: 'white',
            width: '100%',
            height: '4rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <h3
            style={{
              color: 'rgba(31, 41, 55, 1)',
            }}
          >
            New Arrivals
          </h3>
          <select
            style={{
              color: 'rgba(31, 41, 55, 1)',
              border: '0px solid rgba(229, 231, 235, 1)',
              outline: '2px solid transparent',
              outlineOffset: '2px',
              fontWeight: '600',
              fontSize: '0.875rem',
            }}
            onChange={(event) => {
              if (event.target.value === 'sort by price') {
                setQuery('low');
              } else if (event.target.value === 'all') {
                setQuery('all');
              }
            }}
          >
            <option value='sort by price'>Sort by price</option>
            <option selected value='all'>
              All
            </option>
          </select>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'auto auto auto auto',
            gridGap: '1.5rem 1.5rem',
          }}
        >
          {products &&
            products.map((product) => {
              return <ProductCard product={product} />;
            })}
        </div>
      </div>
    </>
  );
};

export default Product;
