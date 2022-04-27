import {Routes , Route} from 'react-router-dom'
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import Card from './components/Card/Card';
import Nav from './components/Nav/Nav';
import { ReactComponent as LogoZip } from './assets/logo__zip.svg';
import CatalogPage  from './pages/CatalogPage';
import HomePage from './pages/HomePage';
import CheckoutPage from './pages/CheckoutPage';
import CategoryPage from './pages/CategoryPage/CategoryPage'
function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/category/:name" element={<CategoryPage />}/>
        <Route path="/checkout" element={<CheckoutPage />}/>
      </Routes>
    </div>
  );
}

export default App;
