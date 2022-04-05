import React from 'react';
import Tablet from '../Tablet/Tablet';

const Dail = (props) => {
    return (
        <div>
            <h1>Dail: {props.count}</h1>
            <Tablet></Tablet>
        </div>
    );
};

export default Dail;