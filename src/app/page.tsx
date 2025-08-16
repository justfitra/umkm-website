import Comment from "./components/Comment/page";
import Contact from "./components/Contact/page";
import Footer from "./components/Footer/paget";
import Hero from "./components/Hero/page";
import Menu from "./components/Menu/page";
import Testimoni from "./components/Testimoni/page";
import WhatsApp from "./components/Whatsapp/page";

const Home = () => {
  return (
    <>
      <Hero />
      <Menu />
      <Testimoni />
      <Comment />
      <Contact />
      <WhatsApp />
      <Footer />
    </>
  );
};

export default Home;
