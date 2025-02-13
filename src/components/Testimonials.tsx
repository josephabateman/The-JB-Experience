"use client";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const reviews = [
  {
    name: "Richard C",
    event: "Corporate Event - Hilton, London",
    text: "Joe and the band were a huge hit at our event! I kept hearing fantastic feedback throughout the night about how talented and engaging they were. They brought great energy and professionalism, making the evening truly memorable. Would highly recommend!",
  },
  {
    name: "Fiona E",
    event: "Wedding - London",
    text: "They were fantastic! The music was lively and engaging, and the way they interacted with the crowd made the evening so enjoyable. I got tons of compliments from our guests about how talented the band was, and it really added a special touch to our event. They definitely made the night a highlight for everyone involved.",
  },
  {
    name: "Olivia H",
    event: "Wedding - Surrey",
    text: "Our wedding was unforgettable thanks to Joe and his band! Their setlist perfectly included our favourite songs, and they had a great way of reading the crowd. The band was not only professional but also friendly and approachable. We’re so grateful they were part of our special day and can’t recommend them enough!",
  },
  {
    name: "Nathan C",
    event: "Private Event - London",
    text: "They did not disappoint! The band was super easy to work with and arrived early, which helped everything run smoothly. They brought so much energy to the night, and everyone kept raving about how great the music was. I was especially impressed when they got my friends—who usually never dance—up on the floor! I highly recommend them for any event!",
  },
  {
    name: "Francesca D",
    event: "Wedding - London",
    text: "We had Joe play at our wedding, and he was amazing! The entire band created a wonderful atmosphere. They were really accommodating with our song requests and kept the dance floor packed all night. We received so many compliments from our guests about how great they were!",
  },
  {
    name: "Felicity B",
    event: "Wedding - London",
    text: "Joe and the band were amazing! We had a very specific style of music we wanted for our wedding, and they absolutely delivered. The band created such a beautiful atmosphere during the day. When the evening hit, they kept the energy high, and the dance floor was packed all night. We couldn’t have asked for more!",
  },
  {
    name: "Adam P",
    event: "Private Event - London",
    text: "I hired this band for a recent event, and I was really impressed. They struck the perfect balance between laid-back background music and lively dance tracks. The band played flawlessly, and they were a fantastic choice for our gathering.",
  },
  {
    name: "Michael H",
    event: "Corporate Event - London",
    text: "The band was the highlight of our corporate event. Their versatility shone through as they moved effortlessly between laid-back acoustic numbers and more upbeat tracks. Our guests kept commenting on how much they enjoyed the music. The band was polished, professional, and incredibly easy to work with!",
  },
  {
    name: "Bethany F",
    event: "New Year’s Eve Party - London",
    text: "Hired for our New Year’s Eve party, and they completely blew us away! The band was super tight, and the performance was unforgettable. It was the perfect way to ring in the new year!",
  },
  {
    name: "Francesca D",
    event: "Company Christmas Party - London",
    text: "We hired Joe and his band for our company’s Christmas party, and they really got everyone in the festive spirit! The energy was fantastic, and they nailed a great mix of Christmas classics and crowd favourites. Everyone was up dancing from the moment they started playing, and it really made the night special. Can’t recommend them enough!",
  },
  {
    name: "Rebecca C",
    event: "Birthday Party - London",
    text: "Joe’s performance was the highlight of the evening at my husband’s birthday. The band really brought the party to life, and everyone loved the mix of covers and originals. By the end, the dance floor was packed! The whole experience—the looping, the musicianship—made it extra special.",
  },
  {
    name: "Sarah D",
    event: "Wedding - London",
    text: "Joe Bateman and his band were exceptional at our wedding! The energy was through the roof, and the whole band had the crowd dancing non-stop. We couldn’t have asked for a more perfect performance to cap off our day. Highly recommend!",
  },
];

export default function ReviewsSlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 7000, disableOnInteraction: false }}
    >
      {reviews.map((review, index) => (
        <SwiperSlide key={index}>
          <div className="m-8 w-5/6 flex flex-col justify-between bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800 mx-auto items-center text-center">
            <p className="text-2xl leading-normal">“{review.text}”</p>
            <div className="text-lg font-medium mt-8">{review.name}</div>
            <div className="text-gray-600 dark:text-gray-400">{review.event}</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}