import React from 'react';
import './card.styles.css'


export const Card = props => (
    
        <div className='card-container'>
            <h2 key={props.monster.id}>
                        {props.monster.name}
                    </h2>
        </div>
            
)