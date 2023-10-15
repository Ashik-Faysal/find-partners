import { FaSearch } from "react-icons/fa";
const FrontPage = () => {
  return (
    <div className="md:flex h-[70vh]">
      <div className="mx-auto w-[50%]">
        <div className="md:p-16 lg:p-32 p-2">
          <h1 className="text-5xl font-bold  mb-4">
            Find
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500">
              Partners
            </span>
            (CAs) Available Online
          </h1>
          <p className=" mb-8">
            <span className="text-xl font-semibold uppercase">Connect</span>{" "}
            with us where your services are listed and visible to a myriad of
            businesses seeking CA's for compliance support.
          </p>
          <div className="flex items-center">
            <div className="md:relative w-full">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 border rounded-l-md w-full focus:outline-none pl-10"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaSearch className="text-gray-400" />
              </div>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600">
              Search
            </button>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
        {/* <!-- Image 1 --> */}
        <div class="group  hidden lg:block md:relative md:top-24">
          <img
            src="https://i.ibb.co/5MFWFB7/Picture.png"
            alt="Image 1"
            class=" w-[198px] h-[403px] rounded-lg group-hover:opacity-80 transition-opacity"
          />
        </div>

        {/* <!-- Image 2 --> */}
        <div class="group  hidden lg:block md:relative md:top-16">
          <img
            src="https://i.ibb.co/Ss2T71n/Picture-4.png"
            alt="Image 2"
            class=" w-[198px] h-[403px] rounded-lg group-hover:opacity-80 transition-opacity"
          />
        </div>

        {/* <!-- Image 3 --> */}
        <div class="group hidden lg:block md:relative md:top-8">
          <img
            src="https://i.ibb.co/fpZ8LfL/Picture-5.png"
            alt="Image 3"
            class=" w-[198px] h-[403px] rounded-lg group-hover:opacity-80 transition-opacity"
          />
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
