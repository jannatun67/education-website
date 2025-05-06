import React from "react";
import logo from "../assets/logo/Icon.png"

const Footer = () => {
  return (
   <div className="bg-[#0B0C20] text-white">
     <div className="md:w-[1200px] mx-auto">
      <footer className="footer sm:footer-horizontal   p-10">
        <aside>
         <h2 className="flex items-center gap-1"><img src={logo} alt="" /><span className="font-bold text-xl">EduHive</span></h2>
          <p className="mb-4">
          Great lesson ideas and lesson plans for ESL <br />
          teachers! Educators can customize.
          </p>

          <p>+1 (24589) 45699681</p>
          <p>help@eduhive.com</p>
        </aside>
        <nav>
          <h6 className="footer-title">Quick Links</h6>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Career</a>
          <a className="link link-hover">News & Blogs</a>
          <a className="link link-hover">Pricing</a>
        </nav>
        <nav>
          <h6 className="footer-title">Resources</h6>
          <a className="link link-hover">Courses</a>
          <a className="link link-hover">Membership</a>
          <a className="link link-hover">Instructor</a>
          <a className="link link-hover">Faqs</a>
        </nav>
        <nav>
          <h6 className="footer-title">Support</h6>
          <a className="link link-hover">Forums</a>
          <a className="link link-hover">Documentation</a>
          <a className="link link-hover">Tems</a>
          <a className="link link-hover">Community</a>
        </nav>
      </footer>
            <hr className="text-gray-700" />
      <footer className="footer sm:footer-horizontal footer-center   p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} All Rights Reserved
          </p>
        </aside>
      </footer>
    </div>
   </div>
  );
};

export default Footer;
