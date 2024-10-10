import "./Trip.css";

function TripFile(props) {
  return (
    <>
      <div className="tfile">
        <div className="t-img">
          <img src={props.timg} alt="timg" />
        </div>
        <h4>{props.heading}</h4>
        <p>
          {props.text}
        </p>
      </div>
    </>
  );
}
export default TripFile;
