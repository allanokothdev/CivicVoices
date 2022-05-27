import React from "react";
import './styles/index.css';
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
