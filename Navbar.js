import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthEurope } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <nav>
      <FontAwesomeIcon icon={faEarthEurope} className="navlogo" />
      
      <h1 className="navtitle">my travel journal.</h1>
      
    </nav>
  );
}
