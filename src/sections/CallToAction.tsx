import ArrowRightIcon from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import Image from "next/image";

export const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-heading relative">
          <h2 className="section-title">Sign up for free today!</h2>
          <p className="section-description mt-5">
            Join our community of developers and start building amazing
            applications with our platform. Sign up now and get access to
            exclusive resources, tutorials, and support from our team.
          </p>
          <Image 
          src={starImage} 
          alt="Star" 
          width={360}
          className="absolute -left-[350px] -top-[137px]" />
          <Image 
          src={springImage} 
          alt="Spring" 
          width={360}
          className="absolute -right-[331px] -top-[19px]" />
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <button className="btn btn-primary">Get for Free</button>
          <button className="btn btn-text">
            <span>Learn More</span>
            <ArrowRightIcon className="h-5 w-5 " />
          </button>
        </div>
      </div>
    </section>
  );
};
