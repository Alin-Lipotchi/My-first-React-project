import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Description from './components/Desctiption';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Products />
      <Description />
      <Footer />
      <p className="copyright">All rights reserved &copy;</p>
    </div>
  );
}

export default App;
