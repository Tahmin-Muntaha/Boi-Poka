import React from 'react';
import { Link } from 'react-router';

const Book = ({book}) => {
    
    return (
       <Link to={`/bookDetails/${book.bookId}`}>
         <div className="card bg-base-100  shadow-sm  w-full text-center md:text-left border  my-3">
  <figure className=' p-4'>
    <img
      src={book.image}
      alt="Book" className='h-[300px] w-[300px] border  p-3'/>
  </figure>
 
  <div className="card-body text-left ml-8">
     <div className='flex justify-between items-center text-green-400'>
    <p>{book.tags[0]}</p>
    <p>{book.tags[1]}</p>
  </div>
    <h2 className="card-title text-3xl">{book.bookName}</h2>
    <p className='text-2xl'>By : {book.author}</p>
    <div className='flex justify-between items-center text-xl'>
        <p>{book.category}</p>
        <p>{book.rating} ⭐</p>
    </div>
  </div>
        </div>
       </Link>
    );
};

export default Book;