"use client";

// next image
import Image from "next/image";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// react icons
import { FaQuoteLeft } from "react-icons/fa";

// motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../../variants";

// swiper styles
import "swiper/css";
import "swiper/css/pagination";

// data
const testimonialData = [
  {
    message:
      "They truly exceeded my expectations and made my car rental experience a delight",
    avatar: "/images/testimonial/avatar.png",
    name: "John Doe",
    job: "Photographer & Videographer",
  },
  {
    message:
      "They truly exceeded my expectations and made my car rental experience a delight",
    avatar: "/images/testimonial/avatar.png",
    name: "John Doe",
    job: "Photographer & Videographer",
  },
];

export default function TestimonialSlider() {
  return (
    <motion.div
      variants={fadeIn("up", 0.8)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.6 }}
      className="container mx-auto"
    >
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="h-[450px] xl:h-[400px]"
      >
        {testimonialData.map((item, index) => {
          const { message, job, avatar, name } = item;
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col justify-center items-center text-center">
                <FaQuoteLeft className="text-7xl text-accent mb-6" />
                <div className="text-2xl xl:text-4xl max-w-[874px] mb-12 font-medium">
                  {message}
                </div>
                <Image
                  src={avatar}
                  alt=""
                  width={64}
                  height={64}
                  className="mb-4"
                />
                <div className="text-lg font-medium">{name}</div>
                <div className="text-secondary">{job}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
}
