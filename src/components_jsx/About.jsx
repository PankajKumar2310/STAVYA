import React from 'react';
import deepjyoti01 from '../images/deepjyoti01.png';
import deepjyoti02 from '../images/deepjyoti02.png';
import eyes from '../images/eyes.png';
import chakra04 from '../images/chakra04.png';
import stavyalogo from '../images/stavyalogo.png';
import '../components_css/About.css';
import '../components_res/About.css';

// Framer Motion
import { motion } from 'framer-motion';

// Variants for animation
const fadeIn = (direction = "up", delay = 0) => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
    x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
  },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 1.2,
      delay,
      ease: "easeOut",
    },
  },
});

export default function About() {
  return (
    <div className="about-main-div">
      {/* Section with Text Animation */}
      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="about-para"
      >
        <h3 className="about">ABOUT</h3>
        <hr className="about-line" />
        <img className="dp-01" src={deepjyoti01} alt="deepjyoti01" />
        <img className="img-eyes" src={eyes} alt="eyes" />

        <motion.div
          variants={fadeIn("left", 0.1)}
          className="para-01"
        >
          Stavya is the annual cultural festival of Indian Institute of Information Technology Vadodara-ICD Stavya
          serves as a platform for students to show their talents in performing arts and aesthetic arts, where
          students can collaborate and team up with other students to bring out the best in them.
        </motion.div>

        <motion.div
          variants={fadeIn("right", 0.1)}
          className="para-02"
        >
          The Annual Cultural Festival of IIIT Vadodara-ICD gets its name from the Esperanto word "Stavya", meaning
          "Creativity". Since its inception in 2022 as an intra-institute fest in 2022, it has consistently been a
          huge platform for individuals to showcase their talents. A spectacular extravaganza, Stavya is home to
          expression through art, music, drama, dance, and culture.
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.1)}
          className="para-03"
        >
          Join us to celebrate creativity, join us, to celebrate Stavya !!
        </motion.div>
      </motion.div>

      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="chakra-div"
      >

        <motion.h4
          variants={fadeIn("right", 0.3)}
          className="ch-h4-01"
        >
          <span className="span-01">60k+</span> worth prizes to win
        </motion.h4>

        <motion.h4
          variants={fadeIn("right", 0.5)}
          className="ch-h4-02"
        >
          <span className="span-02">12+</span> events to participate
        </motion.h4>

        <motion.h4
          variants={fadeIn("right", 0.7)}
          className="ch-h4-03"
        >
          <span className="span-03">7D+</span> long fest to participate
          <motion.img
            variants={fadeIn("right", 1.3)}
            className="ch-04-03"
            src={chakra04}
            alt="chakra"

          />
        </motion.h4>


        <motion.img
          variants={fadeIn("right", 0.9)}
          className="ch-04-01"
          src={chakra04}
          alt="chakra"
        />
        <motion.img
          variants={fadeIn("right", 1.1)}
          className="ch-04-02"
          src={chakra04}
          alt="chakra"
        />
        {/* <motion.img
          variants={fadeIn("right", 1.3)}
          className="ch-04-03"
          src={chakra04}
          alt="chakra"
          
        /> */}

        <img className="dp-02" src={deepjyoti02} alt="deepjyoti02" />
        <hr className="dp-line" />
        <img className="stv-logo" src={stavyalogo} alt="stavyalogo" />
      </motion.div>
    </div>
  );
}
