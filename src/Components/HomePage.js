import ResAppBar from "./ResAppBar";
import SweetDreams from "./SweetDreams";
import InstagramFeed from "./InstagramFeed";
import Footer from "./Footer";
import { useState } from "react";
import Modal from "./Modal";

const HomePage = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <Modal isOpen={isOpen} setOpen={setOpen} />
      <ResAppBar isOpen={isOpen} setOpen={setOpen} />
      <div className="main-img-parent"></div>
      <SweetDreams />
      <InstagramFeed />
      <Footer />
    </div>
  );
};

export default HomePage;
