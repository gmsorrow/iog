import React from 'react';
import './App.css';
import Aside from './navigation/Aside';
import ServicePage from './pages/services/ServicePage';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div id="app">
      <Aside />
      <main>
        <Header />
        <section>
          <ServicePage />
        </section>
        <Footer />
      </main>
    </div>
  );
}

export default App;
