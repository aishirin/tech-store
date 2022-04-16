import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import Cards from './components/Cards/Cards';
function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <section>
        <h2>New products</h2>
        <div>
          <Cards 
          inStock={true}
          title="EX DISPLAY : MSI Pro 16 Flex-03AU 15.6 MULTITOUCH All-In-On"
          image="https://some-img.jpg"
          priceOld={499}
          price={499}
          />
        </div>
      </section>
    </div>
  );
}

export default App;