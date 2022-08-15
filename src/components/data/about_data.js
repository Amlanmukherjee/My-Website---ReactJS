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
        about: [
                <p className="skill_card__content">E.D.A</p>, <strong> </strong>,
                <p className="skill_card__content">Data Transformation</p>, <strong> </strong>, 
                <p className="skill_card__content">Data Interpretation</p>, <strong> </strong>, 
                <p className="skill_card__content">Data Visualization</p>,  <strong> </strong>,
                <p className="skill_card__content">Data Cleaning</p>, <strong> </strong>
            ]
    },
    {
        icon: ml,
        title: "MACHINE LEARNING",
        about: [<p className="skill_card__content">Feature Engineering</p>, <strong> </strong>, 
                <p className="skill_card__content">Model Training</p>, <strong> </strong>, 
                <p className="skill_card__content">Model- Testing</p>, <strong> </strong>, 
                <p className="skill_card__content">Hyperparameter Tuning</p>, <strong> </strong>, 
                <p className="skill_card__content">Prediction</p>
            ]
    },
    {
        icon: cloud,
        title: "CLOUD DEPLOYMENT",
        about: [<p className="skill_card__content">GCP</p>, <strong> </strong>,
                <p className="skill_card__content">BigQuery</p>, <strong> </strong>,
                <p className="skill_card__content">Cloud Shell</p>, <strong> </strong>,
                <p className="skill_card__content">Compute Engine</p>, <strong> </strong>,
            ]
    },
    {
        icon: frontend,
        title: "FRONTEND DEVELOPMENT",
        about: [<p className="skill_card__content">HTML</p>, <strong> </strong>,
                <p className="skill_card__content">CSS</p>, <strong> </strong>,
                <p className="skill_card__content">JavaScript</p>, <strong> </strong>,
                <p className="skill_card__content">Bootstrap</p>, <strong> </strong>,
                <p className="skill_card__content">ReactJS</p>,
            ]
    },
    {
        icon: ux,
        title: "UI/UX DESIGNING",
        about: [<p className="skill_card__content">Minimalistic</p>, <strong> </strong>,
                <p className="skill_card__content">Cost Efficient</p>, <strong> </strong>,
                <p className="skill_card__content">Adobe XD</p>, <strong> </strong>,
            ]
    },
    {
        icon: vector,
        title: "GRAPHICS DESIGNING/ VECTOR ART",
        about: [<p className="skill_card__content">Latest Design Trends</p>, <strong> </strong>,
                <p className="skill_card__content">Originals</p>, <strong> </strong>,
                <p className="skill_card__content">Adobe Photoshop</p>, <strong> </strong>,

            ]

    },
]

export default skills;