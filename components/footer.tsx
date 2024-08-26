"use client";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useState } from "react";
 
 export default function Footer (){
    const [buttonhover, setButtonhover] = useState(false);
    const [buttonhover2, setButtonhover2] = useState(false);
    const [buttonhover3, setButtonhover3] = useState(false);
    const [buttonhover4, setButtonhover4] = useState(false);
    return (
        <div className="bg-customNav w-screen  flex justify-evenly">
          <div className="h-20 text-gray-400 text-center flex flex-col justify-center">
          <h1>All Rights Reserved</h1>
          <h1>Muhammad Hassaan Arain</h1>
          </div>
          <div  className="flex items-center">
            <nav className="flex">
      <a target="_blank" href="https://github.com/MuhammadHassaanArain">
        <FaGithub
          style={{
            marginRight: "12px",
            // backgroundColor: "black",
            borderRadius: "50%",
            padding: "5px",
            height: "30px",
            width: "30px",
            border: "1px solid  #0b62d4",
            // color: "#0b62d4",
            color: buttonhover ? "#010512" : "#0b62d4",
            backgroundColor: buttonhover ? "#0b62d4" : "#010512",
          }}
          onMouseEnter={() => setButtonhover(true)}
          onMouseLeave={() => setButtonhover(false)}
        />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/hassaan-arain-a56123290/"
      >
        <FaLinkedinIn
          style={{
            marginRight: "12px",
            border: "1px solid #0b62d4",
            // color: "#0b62d4",
            // backgroundColor: "black",
            height: "30px",
            width: "30px",
            padding: "5px",
            borderRadius: "50%",
            color: buttonhover2 ? "#010512" : "#0b62d4",
            backgroundColor: buttonhover2 ? "#0b62d4" : "#010512",
          }}
          onMouseEnter={() => setButtonhover2(true)}
          onMouseLeave={() => setButtonhover2(false)}
        />
      </a>
      <a
        target="_blank"
        href="https://www.facebook.com/profile.php?id=100094421088969"
      >
        <FaFacebook
          style={{
            marginRight: "12px",
            border: "1px solid #0b62d4",
            // color: "#0b62d4",
            // backgroundColor: "black",
            height: "30px",
            width: "30px",
            padding: "5px",
            borderRadius: "50%",
            color: buttonhover3 ? "#010512" : "#0b62d4",
            backgroundColor: buttonhover3 ? "#0b62d4" : "#010512",
          }}
          onMouseEnter={() => setButtonhover3(true)}
          onMouseLeave={() => setButtonhover3(false)}
        />
      </a>
      <a target="_blank" href="https://twitter.com/shutuphassaan">
        <FaSquareXTwitter
          style={{
            marginRight: "12px",
            border: "1px solid #0b62d4",
            // color: "#0b62d4",
            // backgroundColor: "black",
            height: "30px",
            width: "30px",
            padding: "5px",
            borderRadius: "50%",
            color: buttonhover4 ? "#010512" : "#0b62d4",
            backgroundColor: buttonhover4 ? "#0b62d4" : "#010512",
          }}
          onMouseEnter={() => setButtonhover4(true)}
          onMouseLeave={() => setButtonhover4(false)}
        />
      </a>
    
            </nav>
          </div>
        </div>
    )
}