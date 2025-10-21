import React from 'react';
import Header1 from './Header/Header1.jsx'; 
import Header2 from './Header/Header2.jsx';
import Header3 from './Header/Header3.jsx';
import Footer from './Footer/Footer.jsx';

export default function AllHeadersAndFooter() {
  return (
    <div className="demo-container">
      <Header1 />
      <Header2 />
      <Header3 />
      {}
      <div style={{ minHeight: '100vh' }} /> {}
      <Footer />
    </div>
  );
}