import React, { useEffect, useState } from "react";
import RecommendedCard from "./recommendedCard";
import Details from "./Details";

const Recommended = () => {
  const [recommendedData, setRecommendedData] = useState();
  useEffect(() => {
    fetch("https://find-partners-server.vercel.app/recommended")
      .then((res) => res.json())
      .then((data) => setRecommendedData(data));
  }, []);

  return (
    <div className="my-12">
      <h1 className="text-4xl font-bold mb-8">
        {" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500">
          Recommended
        </span>
        &nbsp; for you
      </h1>
      <div className="grid md:grid-cols-3">
        {recommendedData?.map((card) => (
          <RecommendedCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Recommended;
