import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import Destination from "../component/Destination";
import Trip from "../component/Trip";
import Footer from "../component/Footer";
import homeimg from "../assets/background.jpg"
function Home (){
    return(
         <>
         <Navbar/>
           <Hero
            cname="hero"
            heroImg={homeimg}
            
            title="Your Journey Your Story"
            text="Choose Your Favourite Destination"
            btntext="Travel Plan"
            btnclass2="btnclasshome"
            url="/services"
            btnclass="buttonclass"
           />
           <Destination/>
           <Trip/>
           <Footer/>
         </>
    )
}
export default Home;