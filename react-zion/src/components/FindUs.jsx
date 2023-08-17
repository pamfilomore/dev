import React from "react";

const FindUs = () => {
  return (
    <div className="mx-auto px-5 md:px-8 lg:container" id="findus">
      <div className="pt-16 pb-5 text-2xl md:text-3xl font-header text-center">
        How to get here
      </div>
      <h1 className="leading-loose text-center max-w-3xl mx-auto pb-5 text-sm md:text-base font-navFont">
        Our location offers convenient accessibility to nearby attractions, with
        just a 5-minute distance from Picnic Grove and a mere 10-minute drive
        from People's Park in the Sky. Situated at Ligaya Drive, Brgy. San
        Guillermo, Talisay, Batangas.
      </h1>

      <section className="">
        <div className="block rounded-lg bg-white shadow-[0_2px_65px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="grid grid-cols-1 gap-4">
            <div className="h-[500px] w-full pt-5 px-5 ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7747.526473750435!2d122.0586400031494!3d13.853245692052997!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd714018150b11%3A0xe3ed3aaa86779bbf!2sZion%20Grace%20Valley%20of%20Worship%20and%20Prayer%20Talisay!5e0!3m2!1sen!2sph!4v1690218215923!5m2!1sen!2sph"
                className="h-full w-full rounded-lg shadow-lg shadow-black/40"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
            <div className="p-2 md:p-4 lg:p-6 leading-loose text-sm md:text-base font-navFont">
              <p className="font-bold text-teal-700 pt-5">
                Getting here by Car or Motorcycle:
              </p>
              <div className="pt-2 pl-2">
                <p>
                  1. For precise navigation, we recommend following the
                  directions provided in this Waze link:{" "}
                  <a
                    href="https://waze.com/ul/hwdw01rtfr"
                    target="_blank"
                    className="italic underline-offset-4"
                  >
                    https://waze.com/ul/hwdw01rtfr
                  </a>
                </p>
                <p>
                  2. Once you arrive at Talisay, Batangas, look out for signs
                  pointing to Zion Grace Valley of Worship and Prayer.
                </p>
                <p>3. We are beside the viewing deck and leuna de taal.</p>
              </div>
            </div>
            <div className="p-2 md:p-4 lg:p-6 leading-loose text-sm md:text-base font-navFont">
              <p className="font-bold text-teal-700">
                Getting here by Public Transportation:
              </p>
              <div className="pt-2 pl-2 pb-10">
                <p>
                  1. Commencing from Metro Manila or nearby places, board a bus
                  heading to Tagaytay.
                </p>
                <p>
                  2. Alight at Olivarez Plaza bus stop and avail yourself of a
                  bokyo tricycle service to transport you to Ligaya Drive.
                </p>
                <p>
                  3. Upon reaching Ligaya Drive, proceed by tricycle towards
                  Zion Grace Campsite, which is also referred to as the viewing
                  deck.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FindUs;

//title arc
