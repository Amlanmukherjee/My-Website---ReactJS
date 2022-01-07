import React from 'react';

import Bar from './Bar';
import { motion } from 'framer-motion'
import { tools, languages, Interpersonal, Other } from './data/resume_data'


const Resume = () => {

    const resume_variants = {
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
        <motion.div className="container resume"

            variants={resume_variants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="row">
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                        Education
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            B.Tech in Information Technology
                        </h5>
                        <p className="resume-card__name">
                            Techno Main Salt Lake(2017-2021)<br/><em>DGPA - 8.59 /10</em>
                        </p>
                        {/* <p className="resume-card__details">Enter text here.</p> */}
                    </div>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            CBSE [AISSCE 2016] (12th)
                        </h5>
                        <p className="resume-card__name">
                            Burnpur Riverside School, Asansol<br/><em>Precentage - 83.00%</em>
                        </p>
                        {/* <p className="resume-card__details">Enter text here.</p> */}
                    </div>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            CBSE [AISSE 2014] (10th)
                        </h5>
                        <p className="resume-card__name">
                            Burnpur Riverside School, Asansol<br/><em>CGPA - 9.0 /10</em>
                        </p>
                        {/* <p className="resume-card__details">Enter text here.</p> */}
                    </div>
                    <br />
                </div>
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                        Experience
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Tata Consultancy Services (TCS)  
                        </h5>
                        {/* <p className="resume-card__name">
                            ENTER TEXT
                        </p> */}
                        <ul className="ulx">
                            <li className="lix"><p><b>Systems Engineer</b><br />August 2021 - Present</p></li>
                            <li className="lix"><p><b>Joined TCS</b><br />August 2021</p></li>
                            
                        </ul>  
                    </div>
                </div>
            </div>

            <h4 className="resume-card__heading">
                Skill Set
            </h4>

            <div className="row">
                <div className="col-lg-6 resume-languages">
                    <h5 className="resume-card__title">
                        Languages and Frameworks
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            languages.map(language =>
                                <Bar value={language} />
                            )
                        }
                    </div>
                </div>
                <div className="col-lg-6 resume-languages">
                    <h5 className="resume-card__title">
                        Tools and Softwares
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            tools.map(tool => <Bar value={tool} />)
                        }
                    </div>
                </div>
                <div className="col-lg-6 resume-languages">
                    <h5 className="resume-card__title">
                        Interpersonal Skills
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            Interpersonal.map(Interpersonal => <Bar value={Interpersonal} />)
                        }
                    </div>
                </div>
                <div className="col-lg-6 resume-languages">
                    <h5 className="resume-card__title">
                        Other Skills
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            Other.map(Other => <Bar value={Other} />)
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Resume;