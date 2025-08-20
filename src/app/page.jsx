"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Crafting Resin Art, Preserving Memories.
          </h1>
          {/* DESC */}
          <p className="md:text-xl">            
            Welcome to my creative sanctuary, where cherished moments are transformed into timeless keepsakes. 
            Each piece of resin art is a story—carefully preserved, delicately decorated, and made to last. 
            From wedding varmalas to handwritten notes, from baby clothes to sentimental trinkets, 
            I turn the things you love into beautiful, lasting memories encased in art. This is more than 
            decoration—this is preservation with purpose.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
          <Link href="/portfolio">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              View My Products
            </button>
          </Link>
          <Link href="/contact">
            <button className="p-4 rounded-lg ring-1 ring-black">
              Contact Me
            </button>
          </Link>
        </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
