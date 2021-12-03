const ProductCard = ({ product }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: 'white',
          width: '12rem',
          height: '18rem',
          border: '1px solid rgba(229, 231, 235, 1)',
          borderRadius: '20px',
          display: 'flex',
          flexDirection: 'column',
          padding: '1rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              color: 'rgba(156, 163, 175, 1)',
              fontWeight: 'lighter',
              paddingBottom: '0.5rem',
            }}
          >
            {product.description}
          </div>
          <div
            style={{
              color: 'rgba(31, 41, 55, 1)',
              fontWeight: '600',
            }}
          >
            {product.name}
          </div>
        </div>
        <img
          style={{
            paddingBottom: '0.5rem',
          }}
          src={`${product.displayPicture}`}
        ></img>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                color: 'rgba(156, 163, 175, 1)',
                fontSize: ' 0.875rem',
              }}
            >
              Price
            </div>
            <div
              style={{
                color: 'rgba(31, 41, 55, 1)',
                fontWeight: '600',
              }}
            >
              ${product.price}
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              height: '2rem',
            }}
          >
            <img
              style={{
                objectFit: 'scale-down',
                border: '1px solid rgba(229, 231, 235, 1)',
                borderRadius: '8px',
                marginRight: '0.5rem',
              }}
              src={`${product.displayPicture}`}
            ></img>
            <img
              style={{
                objectFit: 'scale-down',
                border: '1px solid rgba(229, 231, 235, 1)',
                borderRadius: '8px',
              }}
              src={`${product.displayPicture}`}
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
