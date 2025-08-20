"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const VarmalaPage = () => {
  const item = {
    id: 1,
    color: "from-red-300 to-blue-300",
    titleMobile: "Varmala",
    titleTablet: "Varmala Preserve",
    titleDesktop: "Varmala Preservation",
    desc: "Your varmala is more than just a wedding garland—it's a symbol of sacred vows and emotional memories. Through delicate resin preservation, we transform your varmala into a timeless piece of art that captures the beauty and sentiment of your special day. Each piece is custom-designed, embellished with elements like names, wedding dates, dried florals, pearls, or gold foil, and sealed in premium-grade resin. Perfect as a centerpiece, wall frame, or tabletop décor—this is not just preservation, it's your love story, beautifully frozen in time.",
    img: "/varmala.jpg",
    link: "/contact", // Changed link to contact page
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <section
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
              aria-label={`Contact us about ${item.titleDesktop}`}
            >
              Contact Us
            </button>
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default VarmalaPage;