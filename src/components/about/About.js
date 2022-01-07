import React from 'react';


import Skillcard from './../Skillcard';
import { motion } from 'framer-motion'
import skills from './../data/about_data'
import './about.css'
import face from './face.png'


const About = () => {
    const about_variants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2, duration: 0.6,
            }
        },
        exit: {
            opacity: 0,
            transition: {
                ease: 'easeInOut'
            }
        }
    }
    return (
        <motion.div className="about"

            variants={about_variants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
        
            <h6 className="about__intro">
            <b style={{fontSize: 24}}>S</b>eeking a career that provides an opportunity to capitalize my technical abilities in the fields related to Computer Science, Arts and Business.<br/><br/><span>My work is inspired by Indian identity and biodiversity. I'm trying to make an impact on the world. I would encourage you to visit my YouTube channel, and if you find it interesting then do subscribe and support. <img className="face" src={face} alt={""}/></span>
            </h6>
            {/* <div style={{paddingBottom: 40}}></div> */}
            <div className="container about__container">
                <h6 className="about__heading">Things I do . . .</h6>
                <div className="row" style={{overflow: "hidden"}}>
                    {
                        skills.map(skill =>
                            <Skillcard skill={skill} />

                        )
                    }
                </div>
            </div>
        </motion.div>
    );
};

export default About;