import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

function App() {
    return (
        <div>
            <Header variant="main-screen"/>
            <div style={{minHeight: '100vh'}}/>
            <Footer/>
        </div>
    );
}

export default App;