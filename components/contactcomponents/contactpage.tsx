import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

function ContactPage() {
  return (
    <div className="bg-customBlack py-10 flex flex-col items-center sm:flex-row sm:justify-evenly">
      <div className="bg-customBluebg py-5 pl-5 flex flex-col items-center w-3/4  sm:w-2/6  sm:mr-10 rounded-md">
        <h1 className="text-customBlue text-2xl">Lets Work together</h1>
        <p className="text-gray-400 py-4">
          Contact First to get the Best Deal!
        </p>
        <form
          action=""
          className="text-gray-400 space-y-4  flex flex-col items-center"
        >
          <input
            className="bg-customBlack px-4 p-3 rounded-md w-56  hover:border border-customBlue outline-none"
            type="text"
            placeholder="First name"
          />
          <input
            className="bg-customBlack px-4 p-3 rounded-md w-56  hover:border border-customBlue outline-none"
            type="text"
            placeholder="Last name"
          />
          <input
            className="bg-customBlack px-4 p-3 rounded-md w-56  hover:border border-customBlue outline-none"
            type="email"
            placeholder="Email adress"
          />
          <input
            className="bg-customBlack px-4 p-3 rounded-md w-56  hover:border border-customBlue outline-none"
            type="text"
            placeholder="Phone Number"
          />
          <label>
            <select className="bg-customBlack mt-4 p-2 rounded-md w-56 hover:border border-customBlue">
              <option disabled selected hidden>
                Select A Service.
              </option>
              <option>Frontent Web-Development</option>
              <option>CLI-Projects</option>
              <option>Next.js/React.js Projects</option>
              <option> Javascript/Typescript Projects</option>
              <option>HTML/CSS Projects</option>
            </select>
          </label>
          <textarea
            className="bg-customBlack rounded-md p-3 h-28 w-56 hover:border border-customBlue outline-none"
            name="text"
            placeholder="Type Your Message"
          ></textarea>
          <div>
            {" "}
            <button className="text-customBlue bg-customBlack border hover:bg-customBlue hover:text-customBlack border-customBlue rounded-3xl p-2">
              Send Message
            </button>
          </div>{" "}
        </form>
      </div>
      {/* rihgy */}
      <div className=" my-14 space-y-8">
        <div className="text-white flex space-x-3">
          <div>
            <FaPhoneAlt className="bg-customBluebg h-12 p-3 w-auto rounded-sm" />
          </div>
          <div>
            <h1 className="text-gray-400">Phone</h1>
            <h1>+92-327-3789477</h1>
          </div>
        </div>

        <div className="text-white flex space-x-3">
          <div>
            <MdEmail className="bg-customBluebg h-12 p-3 w-auto rounded-sm" />
          </div>
          <div>
            <h1 className="text-gray-400">Email</h1>
            <h1>hassaanarain008@gmail.com</h1>
          </div>
        </div>

        <div className="text-white flex space-x-3">
          <div>
            <FaLocationDot className="bg-customBluebg h-12 p-3 w-auto rounded-sm" />
          </div>
          <div>
            <h1 className="text-gray-400">Location</h1>
            <h1>Hyderabad,pakistan</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactPage;
