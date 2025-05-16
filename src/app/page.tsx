import { div } from "framer-motion/client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-[#EAEEFE]">
      <h1 className="text-4xl font-bold text-center text-gray-800">
        Welcome to the SAAS Landing Page
      </h1>
      <p className="mt-4 text-lg text-center text-gray-600">
        This is a simple landing page template built with Next.js and Tailwind
        CSS.
      </p>
    </div>
  );
}
