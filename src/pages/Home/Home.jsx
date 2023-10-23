import React from "react";
import FrontPage from "../../components/HomePage/FrontPage";
import JoinWithUs from "../../components/HomePage/JoinWithUs";
import AllInOne from "../../components/HomePage/AllInOne";
import Recommended from "../../components/HomePage/Recommended";

const Home = () => {
  return (
    <>
      <FrontPage />
      {/* <JoinWithUs /> */}
      <AllInOne />
      <Recommended/>
    </>
  );
};

export default Home;
