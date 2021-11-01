import React from 'react';
import './menu-item.scss';

const MenuItem = ({title, imageUrl, size}) => (
    <div className={`${size} menu-item`}
        //template string allows dynamic flexibility for each component
    >
        <div className='background-img' 
            //react gives html elements a style feature that takes in 
            //an object with prop values equal to css values
            style={{
                backgroundImage: `url(${imageUrl})`
        }} />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)

export default MenuItem;