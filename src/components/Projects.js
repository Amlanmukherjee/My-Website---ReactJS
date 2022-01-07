import React, { useState } from 'react';
import data_projects from './data/projects_data'
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion'
const Projects = () => {
    const [projects, setProjects] = useState(data_projects)
    const [active, setActive] = useState('All')


    const handleFilterCategory = (name) => {
        const new_array = data_projects.filter(project => project.category.includes(name))
        setProjects(new_array)
        setActive(name)
    }

    const project_variants = {
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
        <motion.div className="container projects"
            variants={project_variants}
            initial="hidden"
            animate="visible"
            exit="exit"

        >

            <div className="projects__navbar">
                <div className={active === 'All' && 'projects__navbar-active'} onClick={
                    () => {
                        setProjects(data_projects)
                        setActive("All")

                    }


                }><b>All</b></div>
                <div className={active === 'YouTube' && 'projects__navbar-active'} onClick={() => handleFilterCategory('YouTube')}><b>YouTube</b></div>
                <div className={active === 'Graphics' && 'projects__navbar-active'} onClick={() => handleFilterCategory('Graphics')}><b>Graphics</b></div>
                <div className={active === 'DA' && 'projects__navbar-active'} onClick={() => handleFilterCategory('DA')}><b>Data Analysis</b></div>
                <div className={active === 'ML' && 'projects__navbar-active'} onClick={() => handleFilterCategory('ML')}><b>Machine Learning</b></div>
                <div className={active === 'Web' && 'projects__navbar-active'} onClick={() => handleFilterCategory('Web')}><b>Web Development</b></div>
                <div className={active === 'Other' && 'projects__navbar-active'} onClick={() => handleFilterCategory('Other')}><b>Others</b></div>
            </div>

            <div className="row">

                {
                    projects.map(project =>
                        <ProjectCard key={project.name} project={project} />)
                }

            </div>
        </motion.div>
    );
};

export default Projects;