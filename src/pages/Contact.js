import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import contimg from "../assets/contact.jpg"
import Footer from "../component/Footer";
import ContactFrom from "../component/ContactFrom";
function Contact (){
    return(
         <>
           <Navbar/>
           <Hero
            cname="about-hero"
            heroImg={contimg}
            
            title="Contact With Us"
           
            btntext="Travel Plan"
            btnclass2="btnclasshome"
            url="/"
            btnclass="about-btnclass"
           /> 
           <ContactFrom></ContactFrom>
           <Footer/>
         </>
    )
}
export default Contact;