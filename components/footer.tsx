import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="bg-customNav w-screen  flex justify-evenly">
      <div className="h-20 text-gray-400 text-center flex flex-col justify-center">
        <h1>All Rights Reserved</h1>
        <h1>Muhammad Hassaan Arain</h1>
      </div>
      <div className="flex items-center">
        <nav className="flex space-x-3 animate-pulse">
          <a target="_blank" href="https://github.com/MuhammadHassaanArain">
            <FaGithub className="h-7 w-7 p-1 bg-customBlack text-customBlue rounded-full border border-customBlue hover:bg-customBlue hover:text-customBlack" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/hassaan-arain-a56123290/"
          >
            <FaLinkedinIn className="h-7 w-7 p-1 bg-customBlack text-customBlue rounded-full border border-customBlue hover:bg-customBlue hover:text-customBlack" />
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100094421088969"
          >
            <FaFacebook className="h-7 w-7 p-1 bg-customBlack text-customBlue rounded-full border border-customBlue hover:bg-customBlue hover:text-customBlack" />
          </a>
          <a target="_blank" href="https://twitter.com/shutuphassaan">
            <FaSquareXTwitter className="h-7 w-7 p-1 bg-customBlack text-customBlue rounded-full border border-customBlue hover:bg-customBlue hover:text-customBlack" />
          </a>
        </nav>
      </div>
    </div>
  );
}
