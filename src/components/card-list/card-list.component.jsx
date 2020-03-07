import React from 'react';
import {Card} from '../card/card.component'
// import './card-list.style.css'

export const CardList = ({results}) => {
    console.log(results)
    return (
        results ? 
        <section className="grid">
            { results.map((result,index) => {
                return index < 16 ? <Card key={result.title} value={result}/> : null 
            })}
        </section>
        : null
    )
};
 