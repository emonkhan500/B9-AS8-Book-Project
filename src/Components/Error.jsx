import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <div>
            <h4 className="text-center font-extrabold text-4xl mt-80"> 404 Error</h4>
            <Link className="flex  justify-center mt-5 items-center" to='/'><button className="btn btn-error    font-bold">Back</button></Link>
        </div>
        </div>
    );
};

export default Error;