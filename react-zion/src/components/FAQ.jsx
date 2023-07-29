import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};

const FAQ = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="container mx-auto px-20 mb-52" id="faq">
      <>
        <p className="pt-7 my-4 font-header text-center text-3xl">
          Frequently ask questions
        </p>
        <div>
          <Accordion open={open === 1} animate={CUSTOM_ANIMATION}>
            <AccordionHeader
              className="text-md font-bold"
              onClick={() => handleOpen(1)}
            >
              Is this campground suitable for car camping?
            </AccordionHeader>
            <AccordionBody className="text-md">
              The campground is accessible for car camping; however, please note
              that only 4x4 cars are allowed due to the steep terrain when
              descending to the camping area.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 2} animate={CUSTOM_ANIMATION}>
            <AccordionHeader
              className="text-md font-bold"
              onClick={() => handleOpen(2)}
            >
              Are pets permitted within the campground?
            </AccordionHeader>
            <AccordionBody className="text-md">
              Yes, pets are welcome at the campground. We kindly request that
              you look after them during your stay.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 3} animate={CUSTOM_ANIMATION}>
            <AccordionHeader
              className="text-md font-bold"
              onClick={() => handleOpen(3)}
            >
              What is the availability of signal reception at the campsite?
            </AccordionHeader>
            <AccordionBody className="text-md">
              Certainly, the campsite offers fair signal reception for all
              mobile networks. To ensure a seamless experience, we have also
              provided a WiFi to prevent any inconvenience.
            </AccordionBody>
          </Accordion>
        </div>
      </>
    </div>
  );
};

export default FAQ;
