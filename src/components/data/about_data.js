import React from 'react';

import cloud from '../../assets/icons/cloud.svg'
import vector from '../../assets/icons/vector.svg'
import frontend from '../../assets/icons/frontend.svg'
import data from '../../assets/icons/data.svg'
import ml from '../../assets/icons/ml.svg'
import ux from '../../assets/icons/ux.svg'


const skills = [
    {
        icon: data,
        title: "DATA ANALYSIS",
        about: ["Data Cleaning ", <strong style={{ color: '#606060' }}>|</strong>, " Data Transformation ", <strong style={{ color: '#606060' }}>|</strong>, " EDA  Data Interpretation ", <strong style={{ color: '#606060' }}>|</strong>, " Data Visualization"]
    },
    {
        icon: ml,
        title: "MACHINE LEARNING",
        about: ["Feature Engineering ", <strong style={{ color: '#606060' }}>|</strong>, " Model Training ", <strong style={{ color: '#606060' }}>|</strong>, " Model- Testing ", <strong style={{ color: '#606060' }}>|</strong>, " Hyperparameter Tuning ", <strong style={{ color: '#606060' }}>|</strong>, " Prediction"]
    },
    {
        icon: cloud,
        title: "CLOUD DEPLOYMENT",
        about: [<strong style={{ color: '#606060' }}>AWS</strong>," CloudFormation ", <strong style={{ color: '#606060' }}>|</strong>," Elastic Beanstalk ", <strong style={{ color: '#606060' }}></strong>," CodeDeploy ", <strong style={{ color: '#606060' }}>|</strong>," ECS ", <strong style={{ color: '#606060' }}>|</strong>," EKS ", <strong style={{ color: '#606060' }}>|</strong>," OpsWorks "]
    },
    {
        icon: frontend,
        title: "FRONTEND DEVELOPMENT",
        about: ["HTML ", <strong style={{ color: '#606060' }}>|</strong>," CSS ", <strong style={{ color: '#606060' }}>|</strong>," JavaScript ", <strong style={{ color: '#606060' }}>|</strong>," Bootstrap ", <strong style={{ color: '#606060' }}>|</strong>," ReactJS ", " PHP "]
    },
    {
        icon: ux,
        title: "UI/UX DESIGNING",
        about: ["Minimalistic ", <strong style={{ color: '#606060' }}>|</strong>," Cost Efficient ", <strong style={{ color: '#606060' }}>|</strong>," Adobe XD ", <strong style={{ color: '#606060' }}></strong>," Origami Studio ", <strong style={{ color: '#606060' }}>|</strong>," Framer ", <strong style={{ color: '#606060' }}>|</strong>," Figma "]
    },
    {
        icon: vector,
        title: "GRAPHICS DESIGNING/ VECTOR ART",
        about: ["Latest Design Trends ", <strong style={{ color: '#606060' }}>|</strong>," Originals ", <strong style={{ color: '#606060' }}>|</strong>," Adobe Photoshop ", <strong style={{ color: '#606060' }}>|</strong>," Adobe Illustrator ", <strong style={{ color: '#606060' }}>|</strong>," Adobe Animate "]

    },
]

export default skills;