import ResAppBar from "./ResAppBar";
import SweetDreams from "./SweetDreams";
import InstagramFeed from "./InstagramFeed";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div div style={{ maxWidth: "100vw" }}>
      <div>
        <ResAppBar />
        <div className="main-img-parent"></div>
        <SweetDreams />
      </div>
      <InstagramFeed />
      <Footer />
    </div>
  );
};

export default HomePage;
