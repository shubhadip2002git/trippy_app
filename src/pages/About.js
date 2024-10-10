import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import Aboutimg from "../assets/about.jpg"
import Footer from "../component/Footer";
import AboutUs from "../component/AboutUs";

function About (){
    return(
         <>
           <Navbar/>
           <Hero
            cname="about-hero"
            heroImg={Aboutimg}
            title="About"
            
            btntext="Travel Plan"
            btnclass2="btnclasshome"
            url="/"
            btnclass="about-btnclass"
           />
           <AboutUs></AboutUs>
           <Footer/>
      

         </>
    )
}
export default About;