import React, { useEffect, useState } from "react";
import Card from "./Card";

const JoinWithUs = () => {
  const [cardData, setCardData] = useState();
  useEffect(() => {
    fetch("joinUs.json")
      .then((res) => res.json())
      .then((data) => setCardData(data));
  }, []);
  return (
    <>
      <div className="text-center font-semibold mb-4">
        <h1 className="text-5xl font-bold  mb-4">
          Want to
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500">
            Join
          </span>
          Us?
        </h1>
        <p className="my-4">
          To remain with us, it is essential that you dilligently follow the
          steps provided
        </p>
      </div>
      <div>
        {cardData && (
          <div className="grid md:grid-cols-3 gap-4">
            {cardData.map((card) => (
              <Card key={card.id} card={card} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default JoinWithUs;
