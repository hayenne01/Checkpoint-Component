import "./App.css";
import NavbarC from "./Components/Navbar/Navbar";
import Carouse from "./Components/Carousel/Carousel"
import Footer from "./Components/Footer/Footer";
import ProductList from "./Components/ProductList/ProductList";
function App() {
  return (
    <div className="App">
      <NavbarC />
      <Carouse />
      <ProductList/>
<Footer/>
    </div>
  );
}

export default App;
