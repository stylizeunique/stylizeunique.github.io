"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Varmala Preservation",
    desc: "Your varmala is more than just a wedding garland&mdash;it&apos;s a symbol of sacred vows and emotional memories. Through delicate resin preservation, we transform your varmala into a timeless piece of art that captures the beauty and sentiment of your special day. Each piece is custom-designed, embellished with elements like names, wedding dates, dried florals, pearls, or gold foil, and sealed in premium-grade resin. Perfect as a centerpiece, wall frame, or tabletop d&eacute;cor&mdash;this is not just preservation, it&apos;s your love story, beautifully frozen in time.",
    img: "/varmala.jpg",
    link: "#",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Rakhi & Platter",
    desc: "Celebrate Raksha Bandhan with a touch of elegance and personalization. This combo includes a beautifully handcrafted resin Rakhi customized with names, initials, or symbols, paired with a matching resin platter designed to complement the occasion. Decorated with dried flowers, shimmer, or traditional motifs, this set is perfect for gifting or keeping as a memorable keepsake.",
    img: "/rakhi_plater.jpg",
    link: "#",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Rakhi Hamper",
    desc: "Make this Raksha Bandhan unforgettable with a handcrafted resin Rakhi, custom-made to hold your love and creativity. Each hamper includes a unique resin Rakhi personalized with names, initials, or tiny elements like dried flowers, glitter, or charms&mdash;sealed forever in glossy resin. Complete with festive packaging and thoughtful add-ons, it&apos;s not just a Rakhi&mdash;it&apos;s a keepsake.",
    img: "/rakhi_hamper.jpg",
    link: "#",
  },
];

const PortfolioPage = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          Products
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col items-center justify-center text-center gap-8 text-white px-4">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative bg-white rounded-lg w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                  <p className="w-80 md:w-96 lg:w-[600px] lg:text-lg xl:w-[700px]">
                    {item.desc}
                  </p>
                  <Link href={item.link}>
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-6 lg:text-lg bg-white text-gray-700 font-semibold rounded shadow-lg hover:scale-105 transition">
                      See More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold">
          Want to be the part of the family?
        </h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px]"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Preserve Memories
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Click Here
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
