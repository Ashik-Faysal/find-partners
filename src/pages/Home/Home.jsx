import React from "react";
import FrontPage from "../../components/FrontPage";
import JoinWithUs from "../../components/JoinWithUs";
import AllInOne from "../../components/AllInOne";
import Recommended from "../../components/Recommended";

const Home = () => {
  return (
    <>
      <FrontPage />
      <JoinWithUs />
      <AllInOne />
      <Recommended/>
    </>
  );
};

export default Home;
