import React from 'react';

//Gif
import spinner from '../gif/loader.gif'

const Loader = () => {
    return (
        <div>
            <img src={spinner} alt='loading'/>
            <h2>Loading...</h2>
        </div>
    );
};

export default Loader;