import { FaArrowRight } from "react-icons/fa";
export default function Educationpage() {
  return (
    <div className="flex  justify-center">
      {/*  */}
      <div className="w-3/4 py-8">
        <div>
          <h1 className="text-3xl text-white border-b-customBlue border-b  w-3/4 sm:w-2/5">
            My Education
          </h1>
          <p className="text-gray-400 py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ipsam
            ducimus eius neque tempore id molestias? Rem esse aperiam recusandae
            corrupti voluptatib
          </p>
        </div>
        <div className="space-y-4 sm:flex sm:space-x-5 sm:space-y-0">
          <div className="bg-customBluebg rounded-sm p-2 sm:w-2/5">
            <h1 className="text-customBlue">Feb-Aug</h1>
            <h1 className="text-white text-2xl py-2">Web Development</h1>
            <div className="flex space-x-2">
              <FaArrowRight className="text-customBlue animate-pulse mt-1" />
              <h1 className="text-gray-400">GIAIC Quarter-1</h1>
            </div>
          </div>

          <div className="bg-customBluebg rounded-sm p-2 sm:w-2/5">
            <h1 className="text-customBlue">2022-2024</h1>
            <h1 className="text-white text-2xl py-2">Matriculation (SSC)</h1>
            <div className="flex space-x-2">
              <FaArrowRight className="text-customBlue animate-pulse mt-1" />
              <h1 className="text-gray-400">FGPS Cantt Hyderabad</h1>
            </div>
          </div>

          <div className="bg-customBluebg rounded-sm p-2 sm:w-2/5">
            <h1 className="text-customBlue">2024</h1>
            <h1 className="text-white text-2xl py-2">React/Next.js</h1>
            <div className="flex space-x-2">
              <FaArrowRight className="text-customBlue animate-pulse mt-1" />
              <h1 className="text-gray-400">IT Mate PK</h1>
            </div>
          </div>

          <div className="bg-customBluebg rounded-sm p-2 sm:w-2/5">
            <h1 className="text-customBlue">2021-2022</h1>
            <h1 className="text-white text-2xl py-2">English Diploma</h1>
            <div className="flex space-x-2">
              <FaArrowRight className="text-customBlue animate-pulse mt-1" />
              <h1 className="text-gray-400">SLEI</h1>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
}
