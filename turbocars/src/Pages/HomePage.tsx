import VideoHeader from "../Components/video-header-Component/VideoHeader";
import Navbar from "../Components/Navbar-Component/Navbar";
import Info from "../Components/Info-Component/Info";

const HomePage = () => {
  return (
    <>
      <VideoHeader>
        <Navbar />
      </VideoHeader>
      <Info />
    </>
  );
};

export default HomePage;
