import React, { useEffect, useState } from 'react';
import { getReadBooks } from '../LocalStorage/LocalStorage';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';
const getPath = (x, y, width, height) => (
    `M${x},${y + height}
     C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
     C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
     Z`
  );
  const TriangleBar = (props) => {
    const {
      fill, x, y, width, height,
    } = props;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };


//   const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}]

const PagesToRead = () => {


    // for data get from storage
    const [books,setBooks]=useState([])
    console.log(books)
    useEffect(()=>{
        const book=getReadBooks()
        setBooks(book)
    },[])
    return (
        <div className=''>
            
            <BarChart width={600} height={300} data={books}>
    <XAxis dataKey="bookName"  />
    <YAxis />
    <Bar dataKey="totalPages" fill="#8884d8"
      shape={<TriangleBar />} />
  </BarChart>

        </div>
    );
};

export default PagesToRead;