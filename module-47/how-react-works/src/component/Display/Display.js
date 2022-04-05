import React from 'react';
import Dail from '../Dail/Dail';

const Display = (props) => {
    return (
        <div style={{border: '1px solid'}}>
            <h2>Display: {props.name}</h2>
            <h3>Watch:: {props.step}</h3>
           <div style={{border: '1px solid', margin: '10px'}}>
           <Dail count={props.step}></Dail>
           </div>
        </div>
    );
};

export default Display;