import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.scss';

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
    <div className={`${size} menu-item`} 
        onClick={() => history.push(`${match.url}${linkUrl}`)}
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

export default withRouter(MenuItem);