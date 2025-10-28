import React from 'react';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';

function App() {
  return (
    <div>
      <Header variant="main-screen" />
      <div style={{ minHeight: '100vh' }} />
      <Footer />
    </div>
  );
}

export default App;