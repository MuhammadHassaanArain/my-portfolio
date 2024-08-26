import Link from "next/link";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
export default function Homepage() {
  return (
    <div>
      <div className="text-white bg-customBlack pt-32 pl-[10%]">
        <h2>Frontend Developer</h2>
        <h1 className="text-5xl py-3">Hello I am</h1>
        <h1 className="text-customBlue text-5xl py-3">Hassaan Arain</h1>
        <p className="text-gray-400">
          A passoniate Web developer from Hyderabad Pakistan.
          <br /> currently enrollled in Governor Initiate For Artificial <br />
          Intelligence web 3.0 and Metaverce Advanced Courses.
        </p>

        <div className="flex py-10">
          <button className=" w-24  rounded-3xl p-2 border border-customBlue mr-[12%] hover:bg-customBlue hover:text-customBlack">
            Contact
          </button>
          <nav className="p-2  flex text-customBlue">
            <Link
              className="mx-2 hover:text-customBlack hover:bg-customBlue border-customBlue border p-1 rounded-full h-8 w-8 flex justify-center items-center"
              href=""
            >
              <FaGithub />
            </Link>
            <Link
              className="mx-2  hover:text-customBlack hover:bg-customBlue border-customBlue border p-1 rounded-full h-8 w-8 flex justify-center items-center"
              href=""
            >
              <FaLinkedin />
            </Link>
            <Link
              className="mx-2  hover:text-customBlack hover:bg-customBlue  border-customBlue border p-1 rounded-full h-8 w-8 flex justify-center items-center"
              href=""
            >
              <FaFacebook />
            </Link>
            <Link
              className="mx-2  hover:text-customBlack hover:bg-customBlue  border-customBlue border p-1 rounded-full h-8 w-8 flex justify-center items-center"
              href=""
            >
              <FaSquareXTwitter />
            </Link>
          </nav>
        </div>
        <div className="flex justify-center py-10">
          <div className="space-y-5 sm:flex sm:justify-between sm:w-screen sm:space-y-0 sm:px-3 sm:pr-40">
            <div className="flex">
              <h1 className="text-6xl sm:text-3xl pr-4 sm:pr-3 ">08</h1>
              <h1 className="text-xl sm:text-xs">
                Months of
                <br />
                Experience
              </h1>
            </div>
            <div className="flex">
              <h1 className="text-6xl sm:text-3xl pr-4 sm:pr-3 ">15</h1>
              <h1 className="text-xl sm:text-xs">
                Projects
                <br />
                Completed
              </h1>
            </div>
            <div className="flex">
              <h1 className="text-6xl sm:text-3xl pr-4 sm:pr-3 ">09</h1>
              <h1 className="text-xl sm:text-xs">
                Technology
                <br />
                Mastered
              </h1>
            </div>
            <div className="flex">
              <h1 className="text-6xl sm:text-3xl pr-4 sm:pr-3 ">120</h1>
              <h1 className="text-xl sm:text-xs">
                code
                <br /> commits
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* <div>right</div> */}
    </div>
  );
}
