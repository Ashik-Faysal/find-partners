import { FcSearch, FcGraduationCap } from "react-icons/fc";
import { FaPeopleCarry } from "react-icons/fa";
import { BiBookBookmark } from "react-icons/bi";
const AllInOne = () => {
  return (
    <div className="my-12 grid md:grid-cols-2 justify-between">
      <div className="flex flex-col items-center  p-8 mx-auto">
        <h1 className="text-5xl font-bold  mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500">
            All-In-One
          </span>
          &nbsp;platform that Makes Easier
        </h1>
        <p>
          Wer more than a platform; We are your success partner. Discover our
          services to achieve your business and education goals.
        </p>
        <div className="grid grid-cols-2 justify-between gap-6 p-8">
          <div className="flex items-center gap-4 ">
            <FcSearch size={32} />
            <p>
              <span className="font-bold">Search</span> &nbsp;for vital company
              information
            </p>
          </div>
          <div className="flex justify-between items-center gap-4">
            <FaPeopleCarry size={32} />
            <p>
              <span className="font-bold">Connect</span> &nbsp;with the
              resources to meet your business needs.
            </p>
          </div>
          <div className="flex justify-between items-center gap-4">
            <BiBookBookmark size={32} />
            <p>
              <span className="font-bold uppercase">Research</span> &nbsp; and
              generate reports that drive growth.
            </p>
          </div>
          <div className="flex justify-between items-center gap-4">
            <FcGraduationCap size={32} />
            <p>
              <span className="font-bold">Academy</span> &nbsp;to give you the
              skills for success in your career.
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <div className="md:flex items-center">
          <div className="py-8">
            <div className="chat chat-end">
              <div className="chat-bubble bg-[#EFD9F9] text-black">
                Hey, check out loremipum services
              </div>
            </div>
            <div className="chat chat-end">
              <div className="chat-bubble bg-[#EFD9F9] text-black">
                I learned from their videos, got my first job.
              </div>
            </div>
            <div className="chat chat-end">
              <div className="chat-bubble bg-[#EFD9F9] text-black">
                You won't be disappointed with their services.
              </div>
            </div>
            <div className="chat chat-end">
              <div className="chat-bubble bg-[#DDF3FF] text-black">
                I got a perfect analysis report form them too
              </div>
            </div>
            <div className="chat chat-end">
              <div className="chat-bubble bg-[#DDF3FF] text-black">
                Oh, that's great
              </div>
            </div>
          </div>
          <img
            className="w-[281px] h-[336px] rounded-2xl"
            src="https://i.ibb.co/r52zB0f/Pexels-Photo-by-Charlotte-May.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-[281px] h-[336px] rounded-2xl"
            src="https://i.ibb.co/3pvVzYz/Pexels-Photo-by-MART-PRODUCTION.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AllInOne;
