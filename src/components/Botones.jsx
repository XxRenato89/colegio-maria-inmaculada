import { FaApple, FaGooglePlay } from "react-icons/fa";
import '../App.css';

export default function Botones() {
  const appStoreLink = "https://apps.apple.com/cl/app/appoderado/id986014721";
  const playStoreLink =
    "https://play.google.com/store/search?q=appoderados&c=apps&hl=es_CL";

  return (
    <div className="store-buttons">
      <a
        href={appStoreLink}
        target="_blank"
        rel="noopener noreferrer"
        className="store-btn apple"
      >
        <FaApple className="store-icon" />
        <span>App Store</span>
      </a>

      <a
        href={playStoreLink}
        target="_blank"
        rel="noopener noreferrer"
        className="store-btn google"
      >
        <FaGooglePlay className="store-icon" />
        <span>Google Play</span>
      </a>
    </div>
  );
}