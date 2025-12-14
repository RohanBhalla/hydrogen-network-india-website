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
import EducationalProducts from './components/EducationalProducts';
import ProductDetail from './components/ProductDetail';
import Products from './components/Products';
import DroneProduct from './components/DroneProduct';
import NanogridProduct from './components/NanogridProduct';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash.startsWith('product/')) {
        const productId = hash.split('/')[1];
        setCurrentPage('product-detail');
        setSelectedProduct(productId);
      } else if (hash === 'products') {
        setCurrentPage('products');
      } else if (hash === 'consulting') {
        setCurrentPage('consulting');
      } else if (hash === 'educational-products') {
        setCurrentPage('educational-products');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, selectedProduct]);

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

  if (currentPage === 'educational-products') {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <EducationalProducts />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentPage === 'products') {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Products />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentPage === 'product-detail' && selectedProduct) {
    let productComponent;
    if (selectedProduct === 'drones') {
      productComponent = <DroneProduct />;
    } else if (selectedProduct === 'nanogrids') {
      productComponent = <NanogridProduct />;
    } else {
      productComponent = <ProductDetail productId={selectedProduct} />;
    }

    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          {productComponent}
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
