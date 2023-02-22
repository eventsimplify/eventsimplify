import React from 'react';
import Footer from './Footer';
import Header from './Header';
import SearchBar from './SearchBar';

const Layout = ({ children, showFooter, showHeader }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      {showHeader && <Header />}

      <main
        style={{
          flex: 1,
        }}
        className="mx-auto w-screen max-w-screen-xl px-4  sm:px-6 lg:px-8"
      >
        {children}
      </main>

      {showFooter && <Footer />}
    </div>
  );
};

// default props
Layout.defaultProps = {
  children: null,
  showFooter: true,
  showHeader: true,
};

export default Layout;
