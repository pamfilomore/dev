import React from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const Gallery = () => {
  return (
    <div className="container mx-auto px-10 pt-5" id="gallery">
      <div className="pt-16 pb-5 text-3xl font-header text-center ">
        Take a look at some videos from our guests.
      </div>
      <h1 className="leading-loose text-center max-w-3xl mx-auto">
        Get Inspired by Our Guests' Adventures! Step into the incredible
        experiences shared by fellow campers in our captivating video showcase.
      </h1>
      <h1 className="py-6 border-b border-gray-200"></h1>
      <div className="pt-6">
        <div className="grid lg:grid-cols-3  md:grid-cols-2 gap-6 p-5 text-center ">
          <div className="">
            <LiteYouTubeEmbed
              id="Ngf6gXYVgHs"
              title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
              poster="maxresdefault"
              aspectHeight={6}
              aspectWidth={10}
            />
          </div>

          <div>
            <LiteYouTubeEmbed
              id="ak4Els0XIZ0"
              title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
              poster="maxresdefault"
              aspectHeight={6}
              aspectWidth={10}
            />
          </div>
          <div>
            <LiteYouTubeEmbed
              id="AdH968Zl5uY"
              title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
              poster="hqdefault"
              aspectHeight={6}
              aspectWidth={10}
            />
          </div>

          <div>
            <LiteYouTubeEmbed
              id="B5kN2QXQ8aU"
              title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
              poster="hqdefault"
              aspectHeight={6}
              aspectWidth={10}
            />
          </div>

          <div>
            <LiteYouTubeEmbed
              id="5Nauy7T1lbE"
              title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
              poster="hqdefault"
              aspectHeight={6}
              aspectWidth={10}
            />
          </div>

          <div>
            <LiteYouTubeEmbed
              id="__pj2X_DGGg"
              title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
              poster="hqdefault"
              aspectHeight={6}
              aspectWidth={10}
            />
          </div>
          <div>
            <LiteYouTubeEmbed
              id="EOZ5ok9XEww"
              title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
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
