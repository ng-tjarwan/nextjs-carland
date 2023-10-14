"use client";

// image
import Image from "next/image";

// motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../../variants";

export default function Brands() {
  return (
    <section className="xl:pt-16 xl:h-[200px] bg-white flex flex-col justify-center">
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.6 }}
        className="container mx-auto"
      >
        {/* brands */}
        <div className="grid grid-cols-3 gap-6 place-items-center xl:flex xl:flex-wrap xl:gap-x-6 xl:justify-between">
          <div>
            <Image src="/icons/brands/ford.svg" alt="" width={85} height={32} />
          </div>
          <div>
            <Image
              src="/icons/brands/mercedes.svg"
              alt=""
              width={60}
              height={60}
            />
          </div>
          <div>
            <Image src="/icons/brands/audi.svg" alt="" width={85} height={50} />
          </div>
          <div>
            <Image src="/icons/brands/bmw.svg" alt="" width={60} height={60} />
          </div>
          <div>
            <Image src="/icons/brands/vw.svg" alt="" width={60} height={60} />
          </div>
          <div>
            <Image
              src="/icons/brands/skoda.svg"
              alt=""
              width={60}
              height={60}
            />
          </div>
          <div>
            <Image
              src="/icons/brands/mazda.svg"
              alt=""
              width={62}
              height={50}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
