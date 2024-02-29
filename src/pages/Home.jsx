import Catalog from "../components/Catalog";
import Footer from "../components/Footer";
import FooterCTA from "../components/FooterCTA";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

  return (
    <>
      <div className="md:mx-20 mx-5 mb-8 font-poppins">
        <Navbar />
        <Hero />
        <Catalog />
        <FooterCTA />
        <Footer />
      </div>
    </>
  );
};

export default Home;
