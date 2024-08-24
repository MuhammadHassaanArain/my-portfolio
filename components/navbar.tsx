import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-customNav py-5 sm:py-3 text-white sm:flex  sm:justify-around">
      <div>
        <div className="flex justify-start pl-8 text-3xl ">
          <h1 className="sm:mt-3 ">
            Hassaan<span className="text-customBlue text-3xl">.</span>
          </h1>
        </div>
      </div>
      <div>
        <nav className="flex justify-evenly pt-5 sm:flex sm:justify-evenly ">
          <Link
            className="hover:text-customBlue sm:mx-5 hover:border-b-2 border-customBlue"
            href="/home"
          >
            Home
          </Link>
          <Link
            className="hover:text-customBlue  sm:mx-5 hover:border-b-2 border-customBlue"
            href="resume"
          >
            Resume
          </Link>
          <Link
            className="hover:text-customBlue sm:mx-5 hover:border-b-2 border-customBlue"
            href="services"
          >
            Services
          </Link>
          <Link
            className="hover:text-customBlue sm:mx-5 hover:border-b-2 border-customBlue"
            href="contact"
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}
