import React, {useState} from 'react';
import logo from '../../images/nyt-logo.svg';
import Grid from '@material-ui/core/Grid';
// import {Card} from '../card/card.component'
// import './card-list.style.css'

export const Card = ({value}) => {
    const [isShown, setIsShown] = useState(false);
    const {title, multimedia, url} = value

    return (
    <Grid item xs={3}> 
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
    >
        <img alt="1" src={multimedia ? multimedia[0].url : logo}/>
        {isShown ? 
        <figcaption>
            <a href={url}>{title}</a>
        </figcaption>
        : null  }
    </Grid>)
};
 