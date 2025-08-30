import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Rooms from "./Rooms";
import Facilities from "./Facilities";
import Gallery from "./Gallery";
import Footer from "./Footer";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Rooms />
      <Facilities />
      <Gallery />
      <Footer />
    </main>
  );
}
