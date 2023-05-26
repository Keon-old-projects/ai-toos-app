import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Menu } from './components';
import Footer from './Layout/Footer';
import Header from './Layout/Header';
import Home from './pages/Home';
import NoFound from './pages/NoFound';
import Shop from './pages/Shop';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/menu" element={<Menu instyle="flex-1 d-flex justify-content-center align-items-center" />} />
        <Route path="/*" element={<NoFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
