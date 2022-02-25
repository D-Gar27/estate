import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../src/components/Navbar/Navbar';
import Hero from './Hero/Hero';
import Sale from './Sale/Sale';
import Rent from './Rent/Rent';
import Footer from './components/Footer/Footer';
import Searched from './Searched/Searched';
import Property from './PropertyPage/Property';
import PageNotFound from './PageNotFound/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Searched />} />
        <Route path="/property/:slug" element={<Property />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

function Home() {
  return (
    <main>
      <Hero />
      <Sale />
      <Rent />
    </main>
  );
}
