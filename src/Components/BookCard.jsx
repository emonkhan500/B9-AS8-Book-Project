import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({book}) => {
    console.log(book)
    const{bookName,bookId,
        category,image,
        publisher,rating,
        tags,
        yearOfPublishing,
        
totalPages

        }=book
    return (
        <Link>
        <div>
        <div className="card w-96 bg-base-100 border mt-11">
  <figure className="px-10 pt-10">
    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>  
        </div>
        </Link>
    );
};

export default BookCard;