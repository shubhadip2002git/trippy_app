import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import serimg from "../assets/services.jpg";
import Booking from "../component/Booking";
import Footer from "../component/Footer";

function Services() {
  return (
    <>
      <Navbar />
      <Hero
        cname="about-hero"
        heroImg={serimg}
        title="Our Package"
        btntext="Travel Plan"
        btnclass2="btnclasshome"
        url="/"
        btnclass="about-btnclass"
      />
       <Booking></Booking>
      <Footer/>
    </>
  );
}
export default Services;
