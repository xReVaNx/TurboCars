import VideoHeader from "../Components/video-header-Component/VideoHeader";
import Navbar from "../Components/Navbar-Component/Navbar";
import Description from "../Components/Description-Component/Description";
import Footer from "../Components/Footer-Component/Footer";

const HomePage = () => {
  return (
    <>
      <VideoHeader>
        <Navbar />
      </VideoHeader>
      <Description />
      <Footer />
    </>
  );
};

export default HomePage;
