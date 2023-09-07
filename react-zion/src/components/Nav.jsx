import logo from "../assets/tranparentLogo.png";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";

const Nav = () => {
  const [Istoggled, setIsToggled] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [isTop, setIsTop] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setIsNavbarVisible(prevScrollPos > currentScrollPos);
    setPrevScrollPos(currentScrollPos);

    currentScrollPos <= 100
      ? setIsTop(true) || setIsNavbarVisible(true)
      : setIsTop(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  // Animation
  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.1,
        delay: 0.1,
      },
    },
  };

  return (
    <>
      <div
        className={`${
          isNavbarVisible
            ? "translate-y-0 transition ease-in-out delay-1000 duration-500"
            : "-translate-y-28 transition ease-in-out delay-200 duration-500"
        } ${
          isTop ? "bg-opacity-25" : "bg-opacity-60"
        } fixed top-0 z-40  w-full flex justify-between items-center px-4 md:px-12 bg-gray-800 backdrop-filter backdrop-blur-sm`}
      >
        <Link to="hero" spy={true} smooth={true} offset={-100} duration={1500}>
          <img
            className="bg-blend-luminosity h-20 hover:cursor-pointer"
            src={logo}
            alt="logo"
          />
        </Link>

        <div className="hidden md:flex justify-end w-full space-x-8 text-sm uppercase text-white font-navFont">
          {/* desktop menu items */}
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1500}
            className="hover:cursor-pointer hover:underline underline-offset-8 "
          >
            Home
          </Link>
          <Link
            to="amenities"
            spy={true}
            smooth={true}
            offset={50}
            duration={1500}
            className="hover:cursor-pointer hover:underline underline-offset-8"
          >
            Amenities
          </Link>
          <Link
            to="gallery"
            spy={true}
            smooth={true}
            offset={50}
            duration={1500}
            className="hover:cursor-pointer hover:underline underline-offset-8"
          >
            Gallery
          </Link>
          <Link
            to="findus"
            spy={true}
            smooth={true}
            offset={0}
            duration={1500}
            className="hover:cursor-pointer hover:underline underline-offset-8"
          >
            Location
          </Link>
          <Link
            to="faq"
            spy={true}
            smooth={true}
            offset={0}
            duration={1500}
            className="hover:cursor-pointer hover:underline underline-offset-8"
          >
            FAQ
          </Link>
        </div>

        <div className="relative ">
          <motion.button
            animate={Istoggled ? "open" : "closed"}
            className="md:hidden flex flex-col space-y-1 relative"
            // onClick={() => toggleMobileNav()}
            onClick={() => setIsToggled(!Istoggled)}
          >
            {/* hamburger */}
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 5 },
              }}
              className="w-5 h-[2px] bg-white block"
            ></motion.span>
            <motion.span
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              className="w-5 h-[2px] bg-white block"
            ></motion.span>
            <motion.span
              variants={{
                closed: { rotate: 0 },
                open: { rotate: -45, y: -8 },
              }}
              className="w-5 h-[2px] bg-white block"
            ></motion.span>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {Istoggled && (
          <motion.div
            className="fixed inset-0 z-30 bg-gray-800 backdrop-filter backdrop-blur-sm bg-opacity-70  space-y-10 p-6 flex flex-col justify-center items-center text-center"
            variants={item}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            transition={{ duration: 0.4 }}
            exit="exit"
          >
            <div>
              <ul className="space-y-4 text-white leading-loose uppercase md:relative font-navFont text-md">
                <li>
                  <Link
                    to="hero"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={1500}
                    onClick={() => setIsToggled(!Istoggled)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="amenities"
                    spy={true}
                    smooth={true}
                    offset={10}
                    duration={1500}
                    onClick={() => setIsToggled(!Istoggled)}
                  >
                    Amenities
                  </Link>
                </li>
                <li>
                  <Link
                    to="gallery"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1500}
                    onClick={() => setIsToggled(!Istoggled)}
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    to="findus"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1500}
                    onClick={() => setIsToggled(!Istoggled)}
                  >
                    Location
                  </Link>
                </li>
                <li>
                  <Link
                    to="faq"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1500}
                    onClick={() => setIsToggled(!Istoggled)}
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
