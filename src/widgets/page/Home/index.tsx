import Navbar from "./Navbar";
import Hero from "./Hero";
import Products from "./Products";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="bg-gray-950 min-h-screen text-white">
      <Navbar />
      <Hero />
      <Products />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
