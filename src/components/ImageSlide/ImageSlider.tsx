"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { Images } from "@/types/Meal";

const ImageSlider = ({ images }: { images: Images[] }) => {
  return (
    <Swiper modules={[Pagination]} className="mySwiper">
      {images.map((e) => (
        <SwiperSlide key={e.id}>
          <Image
            src={process.env.NEXT_PUBLIC_IMAGE_URL + e.imageURL}
            alt="Meal"
            width={2000}
            height={325}
            className="w-full h-[325px] object-cover saturate-100"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
