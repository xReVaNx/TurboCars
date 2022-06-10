import style from "./VideoHeader.module.scss";
import bgVideo from "../../Videos/bgVideo_Trim.mp4";

const VideoHeader = () => {
  return (
    <div className={style.container}>
      <video className={style.video} autoPlay muted loop>
        <source src={bgVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoHeader;
