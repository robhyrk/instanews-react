import React from 'react';
import {Card} from '../card/card.component'
import Grid from '@material-ui/core/Grid';

// import './card-list.style.css'

export const CardList = ({results}) => {
    console.log(results)
    return (
        <Grid container>
            { results.map((result,index) => {
                return index < 16 ? <Card key={result.title} value={result}/> : null 
            })}
        </Grid>

    )
};
 