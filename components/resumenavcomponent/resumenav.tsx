import Link from "next/link";

function Resumenav() {
  return (
    <div className="bg-customBlack py-10  border-b border-b-customBlue border-r border-r-customBlue">
      {/*  */}
      <div className="flex flex-col items-center">
        <div className=" w-3/4">
          <div>
            <h1 className="text-white text-3xl">Why Hire me?</h1>
            <p className="text-gray-400 py-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div>
            <nav className="flex flex-col space-y-4 ">
              <Link
                className="p-2 flex justify-center rounded-lg text-white hover:text-customBlack bg-customBluebg hover:bg-customBlue"
                href="/resume/skills"
              >
                Skills
              </Link>
              <Link
                className="p-2 flex justify-center rounded-lg text-white hover:text-customBlack bg-customBluebg hover:bg-customBlue"
                href="/resume/education"
              >
                Education
              </Link>
              <Link
                className="p-2 flex justify-center rounded-lg text-white hover:text-customBlack bg-customBluebg hover:bg-customBlue"
                href="/resume/about"
              >
                About
              </Link>
            </nav>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
}

export default Resumenav;
