import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import aboutMeImg from "../images/aboutme.jpg";

/**
 * Represents the About Me section.
 * Displays information about the user.
 * Not currently in use.
 *
 * @component
 * @param {string} name - The name of the user.
 */

const AboutMe = ({ name }) => {
  // Using react-intersection-observer to determine if the component is in view
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  // Variants for staggered animations
  const staggerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Variants for paragraph animations
  const paragraphVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="about">
      <div className="aboutContainer container">
        <div className="row">
          <motion.div
            className="personalImage col-12 col-lg-6"
            ref={ref}
            initial={{ x: "-10vw", opacity: 0, scale: 0.5 }}
            animate={inView ? { x: 0, opacity: 1, scale: 1 } : { x: "-10vw", opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Display the personal image */}
            <motion.img src={aboutMeImg} alt={name} />
          </motion.div>
          <div className="personalInfo col-12 col-lg-6">
            <motion.div className="contentContainer" variants={staggerVariants}>
              {/* Display greeting and job title with animation */}
              <motion.h4 variants={paragraphVariants}>Nice to meet you! 👋🏻</motion.h4>
              <motion.h5 variants={paragraphVariants}>I'm a Junior Full-Stack Devoloper.</motion.h5>

              {/* Display content description with animation */}
              <motion.div
                className="contentDescription"
                variants={staggerVariants}
                initial="initial"
                animate={inView ? "animate" : "initial"}
              >
                {/* Paragraphs with animation */}
                <motion.p variants={paragraphVariants}>
                  I'm still finding my way in the vast world of coding,
                  diving into the <span style={{ color: "var(--hl-color)" }}>MERN stack </span>with 
                  <span style={{ color: "var(--hl-color)" }}> MongoDB, </span>
                  <span style={{ color: "var(--hl-color)" }}>Express.js </span>,
                  <span style={{ color: "var(--hl-color)" }}> React.js</span>, and
                  <span style={{ color: "var(--hl-color)" }}> Node.js</span>.
                  My coding journey is a work in progress,
                  but I'm passionate about<span style={{ color: "var(--hl-color)" }}> learning</span> and 
                  <span style={{ color: "var(--hl-color)" }}> growing </span>in the tech space.
                </motion.p>
                <br />
                <motion.p variants={paragraphVariants}>
                  I may not have all the answers yet, but I'm eager to tackle challenges head-on and expand my skills.
                  Every project is a chance for me to <span style={{ color: "var(--hl-color)" }}>improve </span>and discover something new.
                  I'm open to <span style={{ color: "var(--hl-color)" }}>collaboration </span>and excited about the opportunities to connect with fellow developers.
                </motion.p>

              </motion.div>

              {/* Button to view the portfolio */}
              <NavLink to="/portfolio">
                <Button name="View Portfolio" />
              </NavLink>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
