import React from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const Gallery = () => {
  return (
    <div className="mx-auto px-5 md:px-8 lg:container" id="gallery">
      <div className="pt-16 pb-5 text-2xl md:text-3xl font-header text-center ">
        Take a look at some videos from our guests.
      </div>
      <h1 className="leading-loose text-center max-w-3xl mx-auto text-sm md:text-base font-navFont">
        Get Inspired by Our Guests' Adventures! Step into the incredible
        experiences shared by fellow campers in our captivating video showcase.
      </h1>

      <div className="pt-10">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-3 lg:gap text-center ">
          <div className="">
            <LiteYouTubeEmbed
              id="Ngf6gXYVgHs"
              title="Whats new in Material Design for the web (Chrome Dev Summit 2019)"
              poster="maxresdefault"
              aspectHeight={6}
              aspectWidth={10}
            />
          </div>

          <div>
            <LiteYouTubeEmbed
              id="ak4Els0XIZ0"
              title="Whats new in Material Design for the web (Chrome Dev Summit 2019)"
              poster="maxresdefault"
              aspectHeight={6}
              aspectWidth={10}
            />
          </div>
          <div>
            <LiteYouTubeEmbed
              id="AdH968Zl5uY"
              title="Whats new in Material Design for the web (Chrome Dev Summit 2019)"
              poster="hqdefault"
              aspectHeight={6}
              aspectWidth={10}
            />
          </div>

          <div>
            <LiteYouTubeEmbed
              id="B5kN2QXQ8aU"
              title="Whats new in Material Design for the web (Chrome Dev Summit 2019)"
              poster="hqdefault"
              aspectHeight={6}
              aspectWidth={10}
            />
          </div>

          <div>
            <LiteYouTubeEmbed
              id="5Nauy7T1lbE"
              title="Whats new in Material Design for the web (Chrome Dev Summit 2019)"
              poster="hqdefault"
              aspectHeight={6}
              aspectWidth={10}
            />
          </div>

          <div>
            <LiteYouTubeEmbed
              id="__pj2X_DGGg"
              title="Whats new in Material Design for the web (Chrome Dev Summit 2019)"
              poster="hqdefault"
              aspectHeight={6}
              aspectWidth={10}
            />
          </div>
          <div>
            <LiteYouTubeEmbed
              id="EOZ5ok9XEww"
              title="Whats new in Material Design for the web (Chrome Dev Summit 2019)"
              poster="hqdefault"
              aspectHeight={6}
              aspectWidth={10}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
