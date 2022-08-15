import React from 'react'

import linkedin from '../assets/icons/linkedin.svg'
import youtube from '../assets/icons/youtube.svg'
import slack from '../assets/icons/slack.svg'
import discord from '../assets/icons/discord.svg'
import twitter from '../assets/icons/twitter.svg'
import behance from '../assets/icons/behance.svg'
import shutterstock from '../assets/icons/shutterstock.svg'
import facebook from '../assets/icons/facebook.svg'
import instagram from '../assets/icons/instagram.svg'
import github from '../assets/icons/github.svg'
import cv_icon from '../assets/icons/cv_icon.svg'
import mightycoder from '../assets/portfolio-dpr.png'
import resume from '../assets/Amlan Mukherjee Resume.pdf'
import { motion } from 'framer-motion'

const Sidebar = () => {
    const handleEmailMe = () => {
        window.open("mailto:amlanph.05@gmail.com")
    }
    const sidebar_variant = {
        hidden: {
            x: '-20vw',

        },
        visible: {
            x: 0,

            transition: {
                delay: 0.1, duration: 0.5, type: 'spring'
            }
        }
    }


    return (
        <motion.div className="sidebar"
            variants={sidebar_variant}
            initial='hidden'
            animate="visible"

        >
            <img src={mightycoder} alt="avatar" className="sidebar__avatar" />
            <div className="sidebar__name">Amlan <span>Mukherjee</span> </div>
            <div className="sidebar__item sidebar__title">Data Engineer</div>
            <a href={resume} download="Amlan's Resume.pdf">
                <div className="sidebar__item sidebar__resume">
                    <img src={cv_icon} alt="resume" className="sidebar__icon" />Download Resume
                </div>
            </a>
            <div className="sidebar__contact"> </div>
            <figure className="sidebar__social-icons my-2" style={{alignContent: 'center'}}>
                <a href="https://www.linkedin.com/in/amlanmukherjee" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin" className="sidebar__icon mr-3" /></a>
                <a href="https://youtube.com/channel/UCxUc4IjD7bTZ4QaXifx-RIA" target="_blank" rel="noopener noreferrer"><img src={youtube} alt="youtube" className="sidebar__icon mr-3" /></a>
                <a href="https://github.com/amlanmukherjee" target="_blank" rel="noopener noreferrer"><img src={github} alt="github" className="sidebar__icon mr-3" /></a>
                <a href="https://amlanmukherjee.slack.com/" target="_blank" rel="noopener noreferrer"><img src={slack} alt="slack" className="sidebar__icon mr-3" /></a>
                <a href="https://discord.gg/ZeFDZP3P9w" target="_blank" rel="noopener noreferrer"><img src={discord} alt="discord" className="sidebar__icon mr-3" /></a>
            </figure>
            <figure className="sidebar__social-icons my-2">
                <a href="https://www.facebook.com/profile.php?id=100007164646914" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="facebook" className="sidebar__icon mr-3" /></a>
                <a href="https://www.instagram.com/amlanmukherjee_/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="instagram" className="sidebar__icon mr-3" /></a>
                <a href="https://twitter.com/amlanmukherjee_" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="twitter" className="sidebar__icon mr-3" /></a>
                <a href="https://www.behance.net/amlanmukherjee" target="_blank" rel="noopener noreferrer"><img src={behance} alt="behance" className="sidebar__icon mr-3" /></a>
                <a href="https://www.shutterstock.com/g/amlanmukherjee/" target="_blank" rel="noopener noreferrer"><img src={shutterstock} alt="shutterstock" className="sidebar__icon mr-3" /></a>
            </figure>
            <div className="sidebar__contact"> </div>
                <div className="sidebar__location">
                    Kolkata, India<br />PIN: 700001</div>
                <div className="sidebar__item">amlanph.05@gmail.com</div>
             
            <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>email me</div>
        </motion.div>
    )
}

export default Sidebar;