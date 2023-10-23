import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const RecommendedCard = ({ card }) => {
  const {id, name, image, rating, review, description, price } = card;
  return (
    <div class="max-w-sm rounded shadow-lg bg-white">
      <img src={image} alt={name} class="w-full h-56" />
      <div class="px-6 py-4">
        <div className="flex justify-between">
          <div class=" font-semibold text-xl mb-2">{name}</div>
          <div class="font-semibold text-xl mb-2">${price}</div>
        </div>
        <p class="text-gray-700 text-base">{description}</p>
        <div class="flex items-center mt-4">
          <div class="flex items-center text-blue-400">
            <AiFillStar />
            <span class=" text-gray-600">
              {rating}&nbsp; ({review})
            </span>
          </div>
        </div>
      </div>
      <div class="px-6 py-4">
        <Link to={`details/${id}`}>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-full px-4 rounded">
            View Services
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RecommendedCard;
