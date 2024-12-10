import Videos from "./VideoChat";
import "../communication/video/VideoChat.css";
import Navbar from "../../common/Navbar";

function communication() {
  return (
    <div className="videos">
      <Navbar />
      <Videos />
    </div>
  );
}

export default communication;
