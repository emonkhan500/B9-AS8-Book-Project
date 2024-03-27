

import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';


const ListedBook = () => {
    const [indx, setIndx] = useState(0);
    

    return (
        <div>
            <div className='text-center'>
            <h1 className='work text-center py-9 px-[542px] font-bold text-black bg-slate-100 rounded-xl'>Books</h1>
           
           
           
            </div>
            {/* tab */}
            <div className="flex mt-7 -mx-4 overflow-x-auto overflow-y-hidden  flex-nowrap  text-gray-100">
                <Link to='' onClick={() => setIndx(0)} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  ${indx === 0 ? 'border border-b-0' : 'border-b'} rounded-t-lg border-gray-400 text-gray-50`}>
                    <span className='text-black'>Read Books</span>
                </Link>
                <Link onClick={() => setIndx(1)} to={`wish`} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  ${indx === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg border-gray-400 text-gray-50`}>
                    <span className='text-black'>Wishlist Books</span>
                </Link>
            </div>
  
            <Outlet />
        </div>
    );
};

export default ListedBook;

