import { CgArrowBottomRightO } from "react-icons/cg";
import { PiNumberSquareOneFill } from "react-icons/pi";
import { PiNumberSquareTwoFill } from "react-icons/pi";
import { PiNumberSquareThreeFill } from "react-icons/pi";
import { PiNumberSquareFourFill } from "react-icons/pi";
import { PiNumberSquareFiveFill } from "react-icons/pi";
import { PiNumberSquareSixFill } from "react-icons/pi";

export default function ServicesPage() {
  return (
    <div className="space-y-8 py-20 bg-customBlack">
      <div className="flex flex-col items-center space-y-8 sm:flex-row sm:justify-evenly">
        {/*  */}
        <div className=" w-3/4   border-b  sm:w-2/6">
          <div className="flex justify-between">
            <div>
              <PiNumberSquareOneFill className=" text-customBlue h-16 w-16  animate-pulse " />
            </div>
            <div>
              <CgArrowBottomRightO className="text-customBlue  h-16 w-16  transform transition duration-300 ease-in-out hover:rotate-45 " />
            </div>
          </div>
          <h1 className="text-white text-3xl">Web-Development</h1>
          <p className="text-gray-400">
          Fully Frontent website using with Next.js/React.js,
          Typescript/Javascript & Tailwind CSS
          </p>
        </div>

        <div className=" w-3/4  border-b sm:w-2/6">
          {" "}
          <div className="flex justify-between">
            <div>
              <PiNumberSquareTwoFill className="text-customBlue  h-16 w-16 animate-pulse" />
            </div>
            <div>
              <CgArrowBottomRightO className="text-customBlue  h-16 w-16  transform transition duration-300 ease-in-out hover:rotate-45   " />
            </div>
          </div>
          <h1 className="text-white text-3xl">Cli-Projects</h1>
          <p className="text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing 
          elit. Dolor est suscipit nulla maiores,
          </p>
        </div>
      </div>
      <div className=" flex flex-col items-center space-y-8 sm:flex-row sm:justify-evenly">
        <div className=" w-3/4  border-b sm:w-2/6">
          {" "}
          <div className="flex justify-between">
            <div>
              <PiNumberSquareThreeFill className="text-customBlue  h-16 w-16 animate-pulse" />
            </div>
            <div>
              <CgArrowBottomRightO className="text-customBlue  h-16 w-16 transform transition duration-300 ease-in-out hover:rotate-45 " />
            </div>
          </div>
          <h1 className="text-white text-3xl">React.js Projects</h1>
          <p className="text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing 
          elit. Dolor est suscipit nulla maiores,
          </p>
        </div>
        <div className=" w-3/4 border-b sm:w-2/6">
          {" "}
          <div className="flex justify-between">
            <div>
              <PiNumberSquareFourFill className="text-customBlue  h-16 w-16 animate-pulse " />
            </div>
            <div>
              <CgArrowBottomRightO className="text-customBlue  h-16 w-16 transform transition duration-300 ease-in-out hover:rotate-45 " />
            </div>
          </div>
          <h1 className="text-white text-3xl">HTMl & CSS Projects</h1>
          <p className="text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing 
          elit. Dolor est suscipit nulla maiores,
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-8 sm:flex-row sm:justify-evenly">
        <div className=" w-3/4 border-b sm:w-2/6">
          {" "}
          <div className="flex justify-between">
            <div>
              <PiNumberSquareFiveFill className="text-customBlue  h-16 w-16 animate-pulse" />
            </div>
            <div>
              <CgArrowBottomRightO className="text-customBlue  h-16 w-16 transform transition duration-300 ease-in-out hover:rotate-45 " />
            </div>
          </div>
          <h1 className="text-white text-3xl">Type/Javscript Projects</h1>
          <p className="text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing 
          elit. Dolor est suscipit nulla maiores,
          </p>
        </div>
        <div className=" w-3/4 border-b  sm:w-2/6">
          {" "}
          <div className="flex justify-between">
            <div>
              <PiNumberSquareSixFill className="text-customBlue  h-16 w-16 animate-pulse" />
            </div>
            <div>
              <CgArrowBottomRightO className="text-customBlue  h-16 w-16 transform transition duration-300 ease-in-out hover:rotate-45 " />
            </div>
          </div>
          <h1 className="text-white text-3xl">Next.js Projects</h1>
          <p className="text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing 
          elit. Dolor est suscipit nulla maiores,
          </p>
        </div>
      </div>
    </div>
  );
}
