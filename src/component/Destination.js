import homeimg1 from "../assets/nature.jpg";
import homeimg2 from "../assets/mountain.jpg";
import homeimg3 from "../assets/travel.jpg";
import homeimg4 from "../assets/girl.jpg";
import DestinationFile from "./DestinationFile";
import "./Destination.css";
const Destination = () => {
  return (
    <>
      <div className="destination">
        <h1>Popular Destination</h1>
        <p>Tours give you the opportunity to see a lot, within a time frame</p>
      </div>

      <DestinationFile
        className="text-box"
        cname="desti"
        heading="Taal Volcano Batangas"
        heading2=" Embarking on journeys to discover new horizons, cultures, and experiences is my passion. Join me as I explore the world, one destination at a time. Through my travels, I aim to capture the essence of each place, from the bustling streets of vibrant cities to the serene beauty of remote landscapes. Let's embark on this travel project together and uncover the beauty and magic that our world has to offer. Adventure awaits!"
        img1={homeimg1}
        img2={homeimg2}
      />
      <DestinationFile
        className="text-box-reverse"
        cname="desti"
        heading="Taal Volcano Batangas"
        heading2=" Traveling isn't just about visiting new places; it's about immersing oneself in the local way of life, connecting with people, and creating unforgettable memories. Whether it's savoring exotic cuisine, marveling at architectural wonders, or hiking through pristine wilderness, I'm dedicated to sharing the wonders I encounter along the way. In my wanderlust-filled journey, I hope to inspire you to venture beyond your comfort zone, to embrace the unknown, and to celebrate the diversity that enriches our world. "
        img1={homeimg3}
        img2={homeimg4}
      />
    </>
  );
};
export default Destination;
