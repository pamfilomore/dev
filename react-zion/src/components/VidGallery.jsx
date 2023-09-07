import React, { useState } from "react";
import ReactPlayer from "react-player";

import thumNail1 from "../assets/thumbnail/1.thumbnail.png";
import thumNail2 from "../assets/thumbnail/2.thumbnail.png";
import thumNail3 from "../assets/thumbnail/3.thumbnail.png";
import thumNail4 from "../assets/thumbnail/4.thumbnail.png";
import thumNail5 from "../assets/thumbnail/5.thumbnail.png";
import thumNail6 from "../assets/thumbnail/6.thumbnail.png";
import thumNail7 from "../assets/thumbnail/7.thumbnail.png";
import thumNail8 from "../assets/thumbnail/8.thumbnail.png";
import thumNail9 from "../assets/thumbnail/9.thumbnail.png";

const VidGallery = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [playState, setPlayState] = useState(false);
  const linkList = [
    {
      id: 1,
      url: "https://www.youtube.com/watch?v=Ngf6gXYVgHs",
      title:
        "[ENG SUB] Solo Motocamping overlooking Taal Volcano l Zion Grace Camp |",
      thumbnail: thumNail1,
    },
    {
      id: 2,
      url: "https://www.youtube.com/watch?v=ak4Els0XIZ0",
      title: "A Bugdet Camp Site in Talisay Batangas",
      thumbnail: thumNail2,
    },
    {
      id: 3,
      url: "https://www.youtube.com/watch?v=AdH968Zl5uY",
      title: "Camping with a view of Taal Volcano | Christmas Edition",
      thumbnail: thumNail3,
    },
    {
      id: 4,
      url: "https://www.youtube.com/watch?v=B5kN2QXQ8aU",
      title: "SOLO CAMPING | ZION GRACE CAMP | MOTOCAMPING | PCX 160",
      thumbnail: thumNail4,
    },
    {
      id: 5,
      url: "https://www.youtube.com/watch?v=5Nauy7T1lbE",
      title: "First camping for 2023 | Overlooking Taal Volcano",
      thumbnail: thumNail5,
    },
    {
      id: 6,
      url: "https://www.youtube.com/watch?v=__pj2X_DGGg&t=1s",
      title: "Overnight Camping | Talisay Batangas",
      thumbnail: thumNail6,
    },
    {
      id: 7,
      url: "https://www.youtube.com/watch?v=EOZ5ok9XEww",
      title: "ASMR | Camping by the Taal Lake",
      thumbnail: thumNail7,
    },
    {
      id: 8,
      url: "https://www.youtube.com/watch?v=2g2jUBUShYM",
      title: "Camping in the Rain at Zion Grace Valley Talisay",
      thumbnail: thumNail8,
    },
    {
      id: 9,
      url: "https://www.youtube.com/watch?v=5qFYnZFLhws",
      title: "MOTOCAMPING ADV TALISAY BATANGAS | RIDE AND CAMP |",
      thumbnail: thumNail9,
    },
  ];

  const handleClick = (val) => {
    setCurrentVideo(val);
    setPlayState(true);
  };

  const videoList = linkList.map((link) => (
    <button
      className="bg-gray-400  h-36 text-sm md:text-base font-navFont"
      onClick={() => handleClick(link.id - 1)}
      key={link.id}
    >
      <div className="group relative items-center justify-center overflow-hidden ">
        <div className="h-[160px]">
          <img
            className="h-full w-full object-cover  group-hover:scale-125 transition-transform duration-500"
            src={link.thumbnail}
            alt={link.thumbnail}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-800 backdrop-brightness-90 group-hover:from-black/70 group-hover:via-black/60  group-hover:to-black/70"></div>
        <div className="absolute inset-0 items-center justify-center text-center flex flex-col px-9 text-white uppercase translate-y-[100%] group-hover:translate-y-0 transition-all">
          {link.title}
        </div>
      </div>
    </button>
  ));

  return (
    <div className="mx-auto mt-7 px-5 md:px-8 lg:container" id="gallery">
      <div className="pt-16 pb-5 text-2xl md:text-3xl font-header text-center ">
        Take a look at some videos from our guests.
      </div>
      <h1 className="leading-loose text-center max-w-3xl mx-auto text-sm md:text-base font-navFont">
        Get Inspired by Our Guests' Adventures! Step into the incredible
        experiences shared by fellow campers in our captivating video showcase.
      </h1>

      <div className="rounded-lg bg-white shadow-[0_2px_65px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div className="my-10 grid grid-cols-3 grid-rows-4 gap-1 ">
          <div className="video-player h-[340px] md:h-full w-full row-span-2 col-span-3 md:col-span-2 md:row-span-3">
            <ReactPlayer
              controls={true}
              url={linkList[currentVideo].url}
              light={false}
              height={"100%"}
              width={"100%"}
              playing={playState}
            />
          </div>

          {videoList}
        </div>
      </div>
    </div>
  );
};

export default VidGallery;
