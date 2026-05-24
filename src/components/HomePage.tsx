import About from "./About/About";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import HeroSection from "./HeroSection/HeroSection";
import Navbar from "./Navbar/Navbar";
import Skills from "./Skills/Skills";
import Work from "./Work/Work";

const HomePage = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="flex flex-col pt-10">
        <HeroSection />
        <Work />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
