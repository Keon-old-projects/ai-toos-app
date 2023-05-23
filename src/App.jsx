import { useState } from 'react';
import logo from './assets/logo.png';
import Card from './components/card/card';
import Footer from './pages/Footer';
import Header from './pages/Header';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header />

      <section className="container mt-d3">
        <Card />
      </section>
      <section className="container mt-d3">
        <Card />
      </section>
      <section className="container mt-d3">
        <Card />
      </section>
      <Footer logo={logo} />
    </>
  );
}

export default App;
