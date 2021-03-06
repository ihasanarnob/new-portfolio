import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Doughnut } from 'react-chartjs-2';

import Navbar from '../components/Navbar';
import Head from '../components/Head';

function AboutPage({ location }) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Head />
            <div className="h-screen w-screen bg-primary font-mono">
                <Navbar open={open} setOpen={setOpen} location={location} />
                <div className={`flex bg-primary ${open ? 'mt-44' : ''}`}>
                    <div className="p-10 text-info md:p-28">
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{delay: 0.5}}
                            className="text-2xl font-bold md:text-4xl"
                        >
                            About
                        </motion.h1>
                        <div className="flex flex-row my-8 justify-between">
                            <div className="w-5/6">
                                <motion.p
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{delay: 1}}
                                >
                                    Hello, My name is Aayush Kurup. I am a Software Engineer from Bhopal, Madhya Pradesh, India. 
                                    Currently, I am employed by Tata Consultancy Services as an Assistant Software Engineer - Trainee.
                                </motion.p>
                                <br/>
                                <motion.p
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{delay: 1.5}}
                                >
                                    I love working on a variety of technologies including Web Development, Mobile App Development and 
                                    Deep Learning. My goal is to build highly performant applications that solve real-world problems 
                                    and provide users with an awesome experience.
                                </motion.p>
                                <br/>
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{delay: 2}}
                                >
                                    <p>Here are a few technologies that I work with:-</p>
                                    <br/>
                                    <div className="flex flex-row w-full justify-around">
                                        <ul className="list-disc">
                                            <li>HTML and CSS</li>
                                            <li>React.js</li>
                                            <li>Python</li>
                                        </ul>
                                        <ul className="list-disc">
                                            <li>Javascript</li>
                                            <li>Node.js</li>
                                            <li>Flutter</li>
                                        </ul>
                                    </div>
                                </motion.div>
                            </div>
                            <motion.div 
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{delay: 2.5}}
                                className="w-1/3 hidden lg:block"
                            >
                                <Doughnut
                                    options={{
                                        maintainAspectRatio: false,
                                        legend: {
                                            position: 'right'
                                        },
                                        title: {
                                            display: true,
                                            text: "Top languages (Based on lines of code written)",
                                            fontColor: "#D4EAE9",
                                            position: "bottom"
                                        },
                                    }}
                                    data={{
                                        labels: [
                                            "python",
                                            "javascript",
                                            "c",
                                            "typescript",
                                            "dart",
                                            "java"
                                        ],
                                        datasets: [
                                            {
                                                data: [
                                                    9861,
                                                    3032,
                                                    880,
                                                    430,
                                                    351,
                                                    168
                                                ],
                                                backgroundColor: [
                                                    'rgb(209, 140, 29)', // py
                                                    'rgb(217, 214, 26)', // js
                                                    'rgb(104, 112, 117)', // c
                                                    'rgb(29, 137, 209)', //ts
                                                    'rgb(131, 79, 214)', // dart
                                                    'rgb(237, 78, 50)', // java
                                                ],
                                                borderColor: [
                                                    'rgb(209, 140, 29)', // py
                                                    'rgb(217, 214, 26)', // js
                                                    'rgb(104, 112, 117)', // c
                                                    'rgb(29, 137, 209)', //ts
                                                    'rgb(131, 79, 214)', // dart
                                                    'rgb(237, 78, 50)', // java
                                                ]
                                            }
                                        ]
                                    }}
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutPage;