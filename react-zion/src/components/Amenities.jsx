import React from "react";

const Amenities = () => {
  return (
    <div className="container mx-auto px-10">
      <div className="p-12 text-3xl font-header text-center border-b border-gray-200">
        Our Amenities
      </div>

      <div className="grid lg:grid-cols-3  md:grid-cols-2 gap-6 p-5 text-center">
        <div className="p-8">
          <h2 className="pb-3 font-title text-xl font-bold">Wifi Access</h2>
          <p>
            Stay connected even while camping with our complimentary WiFi
            service. Whether you want to share your camping experience with
            friends or catch up on important emails, our reliable WiFi will
            ensure you're connected throughout your stay.
          </p>
        </div>
        <div className="p-8">
          <h2 className="pb-3 font-title text-xl font-bold">Nipa hut</h2>
          <p>
            Enjoy the traditional Filipino experience of staying in a kubo (a
            small native hut) at no additional cost. Our campsite offers
            complimentary use of these charming and cozy huts, providing a
            unique and authentic accommodation option for our guests.
          </p>
        </div>
        <div className="p-8">
          <h2 className="pb-3 font-title text-xl font-bold">Comfort Room</h2>
          <p>
            We understand the importance of providing essential facilities for
            your comfort. Our campsite has a basic Comfort Rooms
          </p>
        </div>
        <div className="p-8">
          <h2 className="pb-3 font-title text-xl font-bold">Bonfire</h2>
          <p>
            Gather around the warm glow of a bonfire and experience the joy of
            sharing stories, laughter, and togetherness. Our campsite provides
            the opportunity to enjoy a mesmerizing bonfire experience, creating
            lasting memories under the starry sky.
          </p>
        </div>
        <div className="p-8">
          <h2 className="pb-3 font-title text-xl font-bold">Grill</h2>
          <p>
            Embrace the outdoor cooking experience with our provided grill.
            Whether you want to savor a delicious barbeque meal or roast
            marshmallows for a sweet treat, our grills are at your disposal,
            allowing you to enjoy the pleasures of open-air cooking.
          </p>
        </div>
        <div className="p-8">
          <h2 className="pb-3 font-title text-xl font-bold">Solar lights</h2>
          <p>
            Embracing sustainability and eco-friendliness, our campsite is
            equipped with solar lights. These lights harness the power of the
            sun, ensuring an eco-conscious and energy-efficient lighting
            solution for your nighttime activities. Enjoy the serene ambiance of
            the campsite while minimizing environmental impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
