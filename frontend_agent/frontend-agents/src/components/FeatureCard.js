import React from 'react';
import { Link } from 'react-router-dom';
import 'FeatureCard.css';

function FeatureCard ({title, description, path}){
    return (
        <Link to={path} className='feature-card-link'>
            <div classnName='feature-card'>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </Link>
    )
}

export default FeatureCard;