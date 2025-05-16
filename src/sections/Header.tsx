import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      {/* banner */}
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <div className="inline-flex gap-1 items-center">
          <p className="text-white/60 hidden md:block">Streamline Your Workflow!</p>
          <p>Get Started Today!</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center align-center" />
        </div>
      </div>

      {/* Navbar */}
      <div className="py-5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between ">
            <Image src={Logo} alt="logo" height={40} width={40} />
            <MenuIcon className="h-5 w-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Pricing</a>
              <a href="#">Blog</a>
              <a href="#"> Contact</a>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight">Get for Free!</button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
