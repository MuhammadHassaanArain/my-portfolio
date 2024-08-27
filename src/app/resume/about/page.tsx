export default function Aboutpage() {
  return (
    <div className="flex justify-center py-5">
      <div className=" w-3/4 sm:w-11/12">
        <div>
          <h1 className="text-white text-3xl  w-2/6 border-b-customBlue border-b">
            About me
          </h1>
          <p className="text-gray-400 py-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
            quibusdam ipsa nobis, quia
          </p>

          <div className="py-6 space-y-3 sm:flex sm:space-x-4">
            {/*  */}
            <div className="space-y-3 sm:pt-3">
              <div className="flex text-gray-400 space-x-3">
                <h1>Name</h1>
                <h1 className="text-white">Muhammad Hassaan Arain</h1>
              </div>
              <div className="flex text-gray-400 space-x-3">
                <h1>Phone</h1>
                <h1 className="text-white">+92-327-3789477</h1>
              </div>
              <div className="flex text-gray-400 space-x-3">
                <h1>Nationality</h1>
                <h1 className="text-white">Pakistani</h1>
              </div>
              <div className="flex text-gray-400 space-x-3">
                <h1>Email</h1>
                <h1 className="text-white">hassaanarain008@gmail.com</h1>
              </div>
            </div>
            {/*  */}
            {/*  */}
            <div className="space-y-3">
              <div className="flex text-gray-400 space-x-3">
                <h1>Experience</h1>
                <h1 className="text-white">08 Months</h1>
              </div>
              <div className="flex text-gray-400 space-x-3">
                <h1>Status</h1>
                <h1 className="text-white">Student</h1>
              </div>
              <div className="flex text-gray-400 space-x-3">
                <h1>Freelance</h1>
                <h1 className="text-white">Available</h1>
              </div>
              <div className="flex text-gray-400 space-x-3">
                <h1>Language</h1>
                <h1 className="text-white">English,Urdu & Punjabi</h1>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
}
