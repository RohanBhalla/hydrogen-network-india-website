import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsBanner from './components/StatsBanner';
import Services from './components/Services';
import EnergySystems from './components/EnergySystems';
import Resources from './components/Resources';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ConsultingPage from './components/ConsultingPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash === 'consulting') {
        setCurrentPage('consulting');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (currentPage === 'consulting') {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <ConsultingPage />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <StatsBanner />
        <Services />
        <EnergySystems />
        <Resources />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
