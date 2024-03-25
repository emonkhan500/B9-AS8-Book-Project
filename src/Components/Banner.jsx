import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='rounded-lg'>
           <div className=" rounded-lg hero  bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse mt-10 mb-10">
    <img src="https://i.ibb.co/hB1d1Mk/pngwing-1.png" className="max-w-sm rounded-lg " />
    <div>
      <h1 className="text-5xl font-bold mb-9 playfair">Books to freshen up  your own bookshelf.</h1>
      
     <Link to='/listedBook'> <button className="btn btn-success text-white work">View The List</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;