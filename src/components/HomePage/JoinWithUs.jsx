import React, { useEffect, useState } from "react";
import Card from "./Card";
import ReactPaginate from "react-paginate";

const JoinWithUs = () => {
  const [cardData, setCardData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8; // Display 8 cards on each page

  useEffect(() => {
    fetch("https://find-partners-server.vercel.app/joinUs")
      .then((res) => res.json())
      .then((data) => setCardData(data));
  }, [currentPage]);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentItems = cardData.slice(offset, offset + itemsPerPage);

  return (
    <div className="join-with-us-container">
      <div className="text-center font-semibold mb-4">
        <h1 className="text-5xl font-bold mb-4">
          Want to &nbsp;
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500">
            Join
          </span>
          &nbsp; Us?
        </h1>
        <p className="my-4">
          To remain with us, it is essential that you diligently follow the
          steps provided
        </p>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentItems.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
      <div className="pagination-container">
        <ReactPaginate
          className="flex gap-2 justify-center mt-4"
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={Math.ceil(cardData.length / itemsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
};

export default JoinWithUs;
