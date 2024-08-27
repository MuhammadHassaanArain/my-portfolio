import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandTypescript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io";
export default function Skillspage() {
  return (
    <div className="flex justify-center py-5">
      {/*  */}
      <div className="w-3/4">
        <div>
          <h1 className="text-3xl text-white py-4 border-b-customBlue border-b w-3/6">
            My Skills
          </h1>
          <p className="text-gray-400 pt-6">
            HTML 5 | CSS 3 | Typescript | React.js | Javascript | Next.js
            |Node.js | Tailwind CSS | Git & Github
          </p>
        </div>
        {/*  */}
        <div>
          <div className="space-y-10 py-8 text-customBlue ">
            {/*  */}
            <div className="flex justify-between sm:justify-around">
              <FaHtml5 className="h-2/6 w-2/6 sm:h-1/6 sm:w-1/6 bg-customBluebg p-5 rounded-lg" />
              <FaCss3 className="h-2/6 w-2/6  sm:h-1/6 sm:w-1/6 bg-customBluebg p-5 rounded-lg " />
            </div>

            <div className="flex justify-between sm:justify-around ">
              <TbBrandTypescript className="h-2/6 w-2/6  sm:h-1/6 sm:w-1/6 bg-customBluebg p-5 rounded-lg " />
              <FaReact className="h-2/6 w-2/6  sm:h-1/6 sm:w-1/6 bg-customBluebg p-5 rounded-lg " />
            </div>

            <div className="flex justify-between sm:justify-around">
              <IoLogoJavascript className="h-2/6 w-2/6  sm:h-1/6 sm:w-1/6 bg-customBluebg p-5 rounded-lg " />
              <SiNextdotjs className="h-2/6 w-2/6  sm:h-1/6 sm:w-1/6 bg-customBluebg p-5 rounded-lg " />
            </div>

            <div className="flex justify-between sm:justify-around">
              <RiTailwindCssFill className="h-2/6 w-2/6  sm:h-1/6 sm:w-1/6 bg-customBluebg p-5 rounded-lg " />
              <IoLogoNodejs className="h-2/6 w-2/6  sm:h-1/6 sm:w-1/6 bg-customBluebg p-5 rounded-lg " />
            </div>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
}
