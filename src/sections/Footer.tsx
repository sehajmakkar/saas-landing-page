import logo from "@/assets/logosaas.png";
import Image from "next/image";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";
import SocialPin from "@/assets/social-pin.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="inline-flex relative 
        before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
        <Image
          src={logo}
          alt="Logo"
          height={40}
          className="relative"
        />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="">About</a>
          <a href="">Services</a>
          <a href="">Contact</a>
          <a href="">Privacy Policy</a>
          <a href="">Blog</a>
          <a href="">Careers</a>

        </nav>

        <div className="flex justify-center gap-6 mt-6">
          <SocialX />
          <SocialInsta />
          <SocialLinkedIn />
          <SocialYoutube />
          <SocialPin />

        </div>
        <p className="mt-6">&copy; 2025 Opal, Inc. All rights reserved</p>

      </div>
    </footer>
  );
};
