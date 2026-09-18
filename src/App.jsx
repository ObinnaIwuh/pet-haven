import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Products from "./components/Products";
import WhyChooseUs from "./components/WhyChooseUs";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './App.css'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Categories />
        <Products />
        <WhyChooseUs />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
