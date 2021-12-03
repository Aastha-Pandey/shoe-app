import { searchIcon } from '../../svg';

const Navbar = () => {
  return (
    <>
      <nav
        style={{
          display: 'flex',
          height: '4rem',
          borderBottom: ' 1px solid rgba(229, 231, 235, 1)',
          justifyContent: 'space-between',
          padding: '0rem 2.5rem 0rem 2.5rem',
          alignItems: 'center',
        }}
      >
        <h1
          style={{
            fontWeight: '600',
            fontSize: '0.875rem',
            lineHeight: '1.25rem',
            color: 'rgba(31, 41, 55, 1)',
          }}
        >
          Shoe
        </h1>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            border: '1px solid rgba(229, 231, 235, 1)',
            borderRadius: '8px',
            height: '2rem',
            width: '35rem',
            justifyContent: 'center',
            color: 'rgba(75, 85, 99, 1)',
          }}
        >
          {searchIcon}
          <input
            style={{
              border: '0px solid rgba(229, 231, 235, 1)',
              outline: '2px solid transparent',
              outlineOffset: '2px',
              width: '90%',
            }}
          ></input>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
