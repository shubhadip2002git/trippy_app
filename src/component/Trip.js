import "./Trip.css";
import TripFile from "./TripFile";
import Timg from "../assets/indonasia.jpg"
import Timg1 from "../assets/malasia.jpg"
import Timg2 from "../assets/maldiv.jpg"
function Trip() {
  return (
    <>
      <div className="trip">
        <h1>Recent Trips</h1>
        <p>You Can Discover Unique Destination Using Google Maps.</p>
        </div>
      <div className="tripcard">
        <TripFile
        timg={Timg}
          heading="Trip In Indonesia"
          text="Indonesia is an archipelago with diverse attractions. Bali is famous for its beautiful beaches, vibrant nightlife, and cultural experiences. Jakarta, the capital, offers a bustling urban atmosphere, while Yogyakarta showcases Javanese traditions and ancient temples like Borobudur and Prambanan."
        />
      
      
        <TripFile
        timg={Timg1}
          heading="Trip In Malaysia"
          text="Welcome to a land where modernity meets tradition, and where diverse cultures converge to create a tapestry of unique experiences. Malaysia's cities are a blend of old-world charm and contemporary dynamism, offering something for every traveler's taste."
        />
     
      
        <TripFile
        timg={Timg2}
          heading="Trip In Maldives"
          text="The Maldives is a tropical haven known for its overwater bungalows, crystal-clear turquoise waters, and thriving coral reefs. It's a top destination for luxury travelers seeking a serene escape, where they can enjoy world-class snorkeling, diving, and rejuvenating spa experiences."
        />
      </div>
     
    </>
  );
}
export default Trip;
