"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Products" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: { rotate: 0 },
    opened: { rotate: 45, backgroundColor: "rgb(255,255,255)" },
  };
  const centerVariants = {
    closed: { opacity: 1 },
    opened: { opacity: 0 },
  };
  const bottomVariants = {
    closed: { rotate: 0 },
    opened: { rotate: -45, backgroundColor: "rgb(255,255,255)" },
  };

  const listVariants = {
    closed: { x: "100vw" },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: { x: -10, opacity: 0 },
    opened: { x: 0, opacity: 1 },
  };

  return (
    <div className="h-full w-full relative">
      {/* Social Icons - Top Right */}
      <div className="absolute top-4 right-4 flex gap-4 z-50">
        <Link href="https://www.instagram.com/stylizeunique16" target="_blank">
          <Image src="/instagram.png" alt="Instagram" width={32} height={32} />
        </Link>
        <Link href="https://facebook.com" target="_blank">
          <Image src="/facebook.png" alt="Facebook" width={32} height={32} />
        </Link>
        <Link href="https://pinterest.com" target="_blank">
          <Image src="/pinterest.png" alt="Pinterest" width={32} height={32} />
        </Link>
      </div>

      {/* Main Navbar */}
      <div className="flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
        {/* LINKS */}
        <div className="hidden md:flex gap-4 w-1/3">
          {links.map((link) => (
            <NavLink link={link} key={link.title} />
          ))}
        </div>

        {/* Placeholder for spacing (instead of old social icons) */}
        <div className="hidden md:flex gap-4 w-1/3 justify-end"></div>

        {/* MOBILE MENU */}
        <div className="md:hidden">
          <button
            className="w-10 h-8 flex flex-col justify-between z-50 relative"
            onClick={() => setOpen((prev) => !prev)}
          >
            <motion.div
              variants={topVariants}
              animate={open ? "opened" : "closed"}
              className="w-10 h-1 bg-black rounded origin-left"
            />
            <motion.div
              variants={centerVariants}
              animate={open ? "opened" : "closed"}
              className="w-10 h-1 bg-black rounded"
            />
            <motion.div
              variants={bottomVariants}
              animate={open ? "opened" : "closed"}
              className="w-10 h-1 bg-black rounded origin-left"
            />
          </button>

          {/* MOBILE MENU LIST */}
          {open && (
            <motion.div
              variants={listVariants}
              initial="closed"
              animate="opened"
              className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
            >
              {links.map((link) => (
                <motion.div
                  variants={listItemVariants}
                  key={link.title}
                >
                  <Link href={link.url}>{link.title}</Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
