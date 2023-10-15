import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaSuitcaseRolling } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const items = useLoaderData();
  const {
    name,
    fullDescription,
    review,
    rating,
    delivers,
    task,
    price,
    peopleSay,
    image,
    from,
    averageResponseTime,
    partnerSince,
    about,
    services,
    whyMe,
  } = items;
  return (
    <>
      <div className="grid md:grid-cols-2">
        <div className=" bg-white shadow-2xl my-4 rounded-none px-12 py-2">
          <div className="p-4">
            <h3 className="text-4xl font-bold mb-2">{name}</h3>
            <p className="text-center mb-2">{fullDescription}</p>
            <div class="flex items-center text-blue-400 p-4 font-bold">
              <AiFillStar />
              <span class=" text-gray-600">
                {rating}&nbsp; ({review})
              </span>
            </div>
          </div>
          <div className="shadow-2xl m-2 p-1 rounded-lg">
            <div className="flex justify-between items-center gap-2 mx-8">
              <p>{task}</p>
              <h4 className="text-2xl font-bold text-center mb-2">${price}</h4>
            </div>
            <p className="flex gap-1 items-center mx-8">
              <FaSuitcaseRolling />
              <span>{delivers}</span>
            </p>
            <div class="flex justify-between gap-2 mt-4 mb-2 mx-8">
              <button class="bg-blue-500 text-white px-4 py-2 rounded">
                Request Proposal
              </button>
              <button class="bg-green-500 text-white px-4 py-2 rounded">
                Chat with me
              </button>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-4xl font-bold text-center mb-2">
              What people say?
            </h3>
            {peopleSay && peopleSay.map((say, index) => <p key={index}>{say}</p>)}
          </div>
        </div>
        <div className="py-4 px-2">
          <img className="w-full rounded-lg" src={image} alt={name} />
          <div className="px-4">
            <h3 className="text-4xl font-bold mb-4">About &nbsp;{name}</h3>
            <div className="flex justify-between font-bold">
              <p>
                <span>From</span> <br />
                {from}
              </p>
              <p>
                <span>Partner Since</span> <br />
                {partnerSince}
              </p>
              <p>
                <span>Average Response Time</span> <br />
                {averageResponseTime}
              </p>
            </div>
            <div className="my-2">
              <h3 className="text-2xl mt-4 font-bold mb-1">About</h3>
              <p>{about}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-2xl font-bold mb-4 ">Services I Prefer</h4>
                {services && services.map((service) => <li>{service}</li>)}
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-4">Why I am?</h4>
                {whyMe && whyMe.map((me) => <li>{me}</li>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
