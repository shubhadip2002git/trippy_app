import "./Hero.css";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Hero(props) {
  const { loginWithRedirect } = useAuth0();
  const { logout, isAuthenticated } = useAuth0();
  return (
    <>
      <div className={props.cname}>
        <img src={props.heroImg} alt="hero" />
        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <div className="herobtn">
            <Link to="/" className={props.btnclass}>
              {" "}
              {isAuthenticated ? (
                <button
                  className="btn btn-primary"
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Log Out
                </button>
              ) : (
                <button
                  onClick={() => loginWithRedirect()}
                  className="btn btn-primary"
                >
                  Log In
                </button>
              )}
            </Link>
          </div>
          <div className="herobtn">
            {/* <Link to={props.url2} className={props.btnclass2}>
            {" "}
            <button className="btn btn-primary my-2" >{props.btntext2}</button>
          </Link> */}
          </div>
        </div>
      </div>
    </>
  );
}
export default Hero;
