// HomePage.tsx
import React from 'react';
import Header from '../components/header';
import MainSection from '../components/mainSection';
import Footer from '../components/footer';
import FirstSecction from './mainView/firstView';

import './home_page.css'

const HomePage: React.FC = () => {
  return (
    <div>
      <FirstSecction />
      <Header />
      <MainSection />
      <Footer />
    </div>
  );
};

export default HomePage;
