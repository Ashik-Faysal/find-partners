import React, { useEffect, useState } from "react";
import RecommendedCard from "./RecommendedCard";
import Details from "./Details";

const Recommended = () => {
  const [visibleCardCount, setVisibleCardCount] = useState(9); // Initially display 9 cards
  const [recommendedData, setRecommendedData] = useState([]);

  useEffect(() => {
    fetch("https://find-partners-server.vercel.app/recommended")
      .then((res) => res.json())
      .then((data) => setRecommendedData(data));
  }, []);

  const loadMoreCards = () => {
    setVisibleCardCount((prevCount) => prevCount + 9); // Load 9 more cards
  };

  return (
    <div className="my-12">
      <h1 className="text-4xl font-bold mb-8">
        {" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500">
          Recommended
        </span>
        &nbsp; for you
      </h1>
      <div className="grid md:grid-cols-3 gap-3 shadow-2xl">
        {recommendedData?.slice(0, visibleCardCount).map((card) => (
          <RecommendedCard key={card.id} card={card} />
        ))}
      </div>
      {visibleCardCount < recommendedData.length && (
        <button onClick={loadMoreCards} className="mt-4 text-blue-500 bg-slate-300 py-1 px-2 rounded-xl">
          Show More
        </button>
      )}
    </div>
  );
};

export default Recommended;
