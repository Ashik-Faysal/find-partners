import React from "react";

const Card = ({ card }) => {
  const { id, name, description, dueDate, penalty, upperLimit } = card;

  return (
    <div className="relative max-w-md mx-auto p-8 rounded-xl overflow-hidden shadow-2xl bg-white">
      <div>
        <h3 className="text-2xl text-center mb-2">{name}</h3>
        <p className="text-center mb-2">{description}</p>
        <div className="flex justify-around gap-4 px-8 mb-2 bg-[#F4F4F4] rounded-md p-4 h-36">
          <p className="font-semibold">
            <span className="text-blue-500">Due Date</span> <br /> {dueDate}
          </p>
          <div>
            <p className="font-semibold">
              <span className="text-red-500">Penalty fees</span> <br /> $
              {penalty}
            </p>
            {upperLimit && <p>{upperLimit}</p>}
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 bg-gradient-to-tr from-blue-700 via-violet-800 to-fuchsia-900 text-white px-2 p-2 rounded-full">
        {id}
      </div>
    </div>
  );
};

export default Card;
