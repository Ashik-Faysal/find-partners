import { FaSearch } from "react-icons/fa";

const FrontPage = () => {
  return (
    <div className="md:flex h-[70vh]">
      <div className="w-full md:w-[50%] mx-auto">
        <div className="md:p-8 lg:p-16 p-2">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Find&nbsp;
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500">
              Partners
            </span>
            &nbsp;(CAs) Available Online
          </h1>
          <p className="text-lg md:text-xl mb-8">
            <span className="text-lg md:text-xl font-semibold uppercase">
              Connect
            </span>{" "}
            with us where your services are listed and visible to a myriad of
            businesses seeking CAs for compliance support.
          </p>
          <div className="flex items-center">
            <div className="md:relative w-full">
              <input
                type="text"
                className="px-3 md:px-4 py-2 border rounded-l-md w-full focus:outline-none pl-10 text-base md:text-lg"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-2 md:pl-3">
                <FaSearch className="text-gray-400" />
              </div>
            </div>
            <button className="bg-blue-500 text-white px-3 md:px-4 py-2 rounded-r-md hover:bg-blue-600 text-base md:text-lg">
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
        {/* <!-- Image 1 --> */}
        <div className="group hidden lg:block md:relative md:top-12 lg:top-24">
          <img
            src="https://i.ibb.co/5MFWFB7/Picture.png"
            alt="Image 1"
            className="w-full h-[403px] lg:w-[198px] lg:h-[403px] rounded-lg group-hover:opacity-80 transition-opacity"
          />
        </div>

        {/* <!-- Image 2 --> */}
        <div className="group hidden lg:block md:relative md:top-8 lg:top-16">
          <img
            src="https://i.ibb.co/Ss2T71n/Picture-4.png"
            alt="Image 2"
            className="w-full h-[403px] lg:w-[198px] lg:h-[403px] rounded-lg group-hover:opacity-80 transition-opacity"
          />
        </div>

        {/* <!-- Image 3 --> */}
        <div className="group hidden lg:block md:relative md:top-4 lg:top-8">
          <img
            src="https://i.ibb.co/fpZ8LfL/Picture-5.png"
            alt="Image 3"
            className="w-full h-[403px] lg:w-[198px] lg:h-[403px] rounded-lg group-hover:opacity-80 transition-opacity"
          />
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
