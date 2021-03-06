import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from 'gatsby';

import Head from '../components/Head';
import Navbar from '../components/Navbar';

function Home({ location }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Head />
      <div className="overflow-hidden h-screen bg-primary font-mono">
        <Navbar open={open} setOpen={setOpen} location={location}/>
        <div className={`px-12 py-24 ${open ? 'mt-28': ''} text-info w-screen flex flex-col z-0 lg:px-24 md:p-48`}>
          <motion.h4
            initial={{y: 10, opacity: 0}}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-base font-semibold  md:text-2xl"
          >
            Hi there,
          </motion.h4>
          <motion.h1
            initial={{ y:10, opacity: 0 }}
            animate={{ y:0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-xl mb-2 font-bold md:text-5xl md:my-4"
          >
            My name is <span className="text-highlight">Aayush Kurup</span>
          </motion.h1>
          <motion.h2
            initial={{ y:10, opacity: 0 }}
            animate={{ y:0, opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="text-lg mb-8 font-semibold text-muted md:text-3xl md:mb-16"
          >
            I am a Full-Stack Developer
          </motion.h2>
          <motion.div
            initial={{ y:10, opacity: 0 }}
            animate={{ y:0, opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="flex justify-between md:justify-start"
          >
            <Link to="/contact" className="bg-highlight p-2 font-bold rounded text-center text-light w-2/5 md:mr-2 lg:w-1/5">Get In Touch</Link>
            <a href="/Aayush_Kurup_Resume.pdf" target="_blank" className="border-highlight border-2 p-2 rounded w-2/5 text-highlight font-bold hover:bg-highlight hover:text-light text-center lg:ml-2 lg:w-1/5">Download Resume</a>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Home;