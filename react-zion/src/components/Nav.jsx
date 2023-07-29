import { duration } from "@mui/material";
import logo from "../assets/tranparentLogo.png";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";

// event listener on-scroll
// const changeBg = () => {
//   console.log(window.scrollY);
// };
// window.addEventListener("scroll", changeBg);

const Nav = () => {
  const [mobileNav, toggleMobileNav] = useCycle(false, true);

  // Animation
  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.3,
        delay: 0.1,
      },
    },
  };

  return (
    <>
      <div className="fixed top-0 z-40  w-full flex justify-between items-center px-4 md:px-12 bg-gray-800 backdrop-filter backdrop-blur-sm bg-opacity-60">
        <a href="#">
          <img className="bg-blend-luminosity h-28" src={logo} alt="logo" />
        </a>

        <div className="hidden md:flex justify-end w-full space-x-8 text-sm uppercase text-white">
          {/* Your desktop menu items */}
          <Link to="hero" spy={true} smooth={true} offset={-100} duration={500}>
            Home
          </Link>
          <Link
            to="amenities"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Amenities
          </Link>
          <Link
            to="gallery"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Gallery
          </Link>
          <Link to="findus" spy={true} smooth={true} offset={0} duration={500}>
            Location
          </Link>
          <Link to="faq" spy={true} smooth={true} offset={50} duration={500}>
            FAQ
          </Link>
        </div>

        <div className="relative ">
          <motion.button
            animate={mobileNav ? "open" : "closed"}
            className="md:hidden flex flex-col space-y-1 relative"
            onClick={() => toggleMobileNav()}
          >
            {/* hamburger */}
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 5 },
              }}
              className="w-5 h-px bg-white block"
            ></motion.span>
            <motion.span
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              className="w-5 h-px bg-white block"
            ></motion.span>
            <motion.span
              variants={{
                closed: { rotate: 0 },
                open: { rotate: -45, y: -5 },
              }}
              className="w-5 h-px bg-white block"
            ></motion.span>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {mobileNav && (
          <motion.div
            className="fixed inset-0 z-30 bg-gray-800 backdrop-filter backdrop-blur-sm bg-opacity-70  space-y-10 p-6 flex flex-col justify-center items-center text-center"
            variants={item}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit="exit"
          >
            <div>
              <ul className="space-y-4 text-white leading-loose md:relative ">
                <li>
                  <Link
                    to="hero"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => toggleMobileNav()}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="amenities"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    onClick={() => toggleMobileNav()}
                  >
                    Amenities
                  </Link>
                </li>
                <li>
                  <Link
                    to="gallery"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    onClick={() => toggleMobileNav()}
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
                    duration={500}
                    onClick={() => toggleMobileNav()}
                  >
                    Location
                  </Link>
                </li>
                <li>
                  <Link
                    to="faq"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    onClick={() => toggleMobileNav()}
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
