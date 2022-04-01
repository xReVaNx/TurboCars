import "./VideoHeader.scss";
import bgVideo from "../../Videos/bgVideo_Trim.mp4";

const VideoHeader = (props: any) => {
  return (
    <div className="videoheader-container">
      <video className="videoheader-video" autoPlay muted loop>
        <source src={bgVideo} type="video/mp4" />
      </video>
      {props.children}
    </div>
  );
};

export default VideoHeader;
