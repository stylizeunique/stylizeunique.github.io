"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    titleMobile: "Varmala",
    titleTablet: "Varmala Preserve",
    titleDesktop: "Varmala Preservation",
    img: "/varmala.jpg",
    link: "/products/varmala",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    titleMobile: "Rakhi + Platter",
    titleTablet: "Rakhi & Platter",
    titleDesktop: "Rakhi & Platter Combo",
    img: "/rakhi_plater.jpg",
    link: "/products/rakhi-platter",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    titleMobile: "Rakhi Hamper",
    titleTablet: "Rakhi Hamper",
    titleDesktop: "Personalized Rakhi Hamper",
    img: "/rakhi_hamper.jpg",
    link: "/products/rakhi-hamper",
  },
];

const PortfolioPage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["-12%", "-75%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* Wrapper with reduced total height on small screens */}
      <div
        ref={ref}
        className="
          relative
          h-[350vh] sm:h-[450vh] lg:h-[600vh]
        "
      >
        {/* Section Header */}
        <div className="
          w-screen
          h-[calc(100vh-6rem)]
          flex items-center justify-center
          text-center
          px-4
        ">
          <h1 className="
            font-bold leading-tight
            text-[clamp(2rem,6vw,6rem)]
          ">
            Products
          </h1>
        </div>

        {/* Horizontal Scroller */}
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            {/* Intro spacer panel */}
            <div className="h-screen w-screen hidden sm:flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <section
                key={item.id}
                className={`
                  h-screen w-screen
                  flex items-center justify-center
                  bg-gradient-to-r ${item.color}
                  px-4 sm:px-6 md:px-10
                `}
              >
                <div
                  className="
                    mx-auto
                    flex flex-col items-center justify-center text-center gap-6
                    text-white
                    max-w-[90rem]
                  "
                >
                  {/* Responsive / dynamic title (changes text across breakpoints) */}
                  <h2
                    className="
                      font-bold
                      leading-[1.1]
                      text-[clamp(1.5rem,6vw,5rem)]
                      tracking-tight
                    "
                  >
                    <span className="sm:hidden">{item.titleMobile}</span>
                    <span className="hidden sm:inline md:hidden">{item.titleTablet}</span>
                    <span className="hidden md:inline">{item.titleDesktop}</span>
                  </h2>

                  {/* Image card with responsive sizing */}
                  <div
                    className="
                      relative bg-white rounded-lg
                      shadow-xl
                      overflow-hidden
                      w-[min(88vw,28rem)]
                      sm:w-[min(75vw,34rem)]
                      md:w-[min(65vw,40rem)]
                      lg:w-[min(55vw,46rem)]
                      xl:w-[min(50vw,52rem)]
                      aspect-[4/3]
                    "
                  >
                    <Image
                      src={item.img}
                      alt={item.titleDesktop}
                      fill
                      priority
                      className="object-contain md:object-cover"
                      sizes="
                        (max-width: 640px) 88vw,
                        (max-width: 768px) 75vw,
                        (max-width: 1024px) 65vw,
                        (max-width: 1280px) 55vw,
                        50vw
                      "
                    />
                  </div>

                  {/* Description */}
                  <p
                    className="
                      text-white/90
                      leading-relaxed
                      text-[clamp(0.95rem,1.8vw,1.125rem)]
                      max-w-[88vw] sm:max-w-[70vw] md:max-w-[60rem]
                    "
                  >
                    {item.desc}
                  </p>

                  {/* CTA */}
                  <Link href={item.link} prefetch className="inline-block">
                    <button
                      className="
                        p-2 text-sm
                        md:p-3 md:text-base
                        lg:p-4 lg:text-lg
                        bg-white text-gray-800 font-semibold
                        rounded-xl shadow-lg
                        hover:scale-[1.04] active:scale-[0.98]
                        transition-transform
                        min-w-28
                      "
                      aria-label={`See more about ${item.titleDesktop}`}
                    >
                      See More
                    </button>
                  </Link>
                </div>
              </section>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Footer CTA */}
      <footer className="w-screen min-h-[70vh] md:min-h-screen flex flex-col gap-10 md:gap-16 items-center justify-center text-center px-4">
        <h3 className="font-bold text-[clamp(1.75rem,5vw,6rem)] leading-tight">
          Want to be the part of the family?
        </h3>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-48 h-48 md:w-[420px] md:h-[420px]"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-lg md:text-2xl">
                Preserve Memories
              </textPath>
            </text>
          </motion.svg>

          <Link
            href="/contact"
            className="
              w-14 h-14 md:w-24 md:h-24
              absolute inset-0 m-auto
              bg-black text-white rounded-full
              flex items-center justify-center
              font-medium
            "
          >
            Click Here
          </Link>
        </div>
      </footer>
    </motion.div>
  );
};

export default PortfolioPage;
