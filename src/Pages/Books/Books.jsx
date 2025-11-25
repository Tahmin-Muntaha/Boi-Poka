import React, { Suspense } from 'react';
import Book from '../../Componenta/Book/Book';

const Books = ({data}) => {
  
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4'>
            <Suspense fallback={<span>Loading........</span>}>
            {
                data.map((book)=>
                    <Book  key={book.bookId} book={book}></Book>
                )
            }
            </Suspense>
        </div>
    );
};

export default Books;