import React from 'react';
import Footer from './Footer';
import Header from './Header';
import SearchBar from './SearchBar';

const Layout = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      <Header />

      <main
        style={{
          flex: 1,
        }}
        className="mx-auto w-screen max-w-screen-xl px-4  sm:px-6 lg:px-8"
      >
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
