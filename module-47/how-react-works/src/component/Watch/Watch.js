import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';


const Watch = () => {
const [count, seCount] = useState(0)

const handleIncrease = () =>{
    const prevCount = count
    const newCount = prevCount + 1
    seCount(newCount)
    // console.log(count);
    }

    useEffect(() => {
    console.log(count);
    }, [count])

    return (
    <>
        <div style={{border: '1px solid red', margin: '10px',padding: '10px'}}>
            <h3>Watch: {count} </h3>
            <button onClick={handleIncrease}>Increase.......</button>
           <Display name={'watch'} step={count}></Display>
        </div>
       
     </>
    );
};

export default Watch;