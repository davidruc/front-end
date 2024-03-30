// HomePage.tsx
import React from 'react';
import Header from '../components/header';
import MainSection from '../components/mainSection';
import Footer from '../components/footer';

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <MainSection />
      <Footer />
    </div>
  );
};

export default HomePage;
