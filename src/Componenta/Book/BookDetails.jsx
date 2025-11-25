import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../Utility/addToDB';
import { addtoWishList } from '../../Utility/addtoWishlist';
//import Swal from 'sweetalert2'



const BookDetails = () => {
    const {id}=useParams()
    const data=useLoaderData()
    const singleBook=data.find(book=>
        book.bookId===parseInt(id)
    )


    const {bookName,image,author,review,totalPages,rating,category,tags,publisher,yearOfPublishing}=singleBook
    const handleMarksAsRead=(id)=>{
        addToStoredDB(id)

//         Swal.fire({
//   position: "top-end",
//   icon: "success",
//   title: "Your work has been saved",
//   showConfirmButton: false,
//   timer: 1500
// });


    }

    const handleWishList=(id)=>{
        addtoWishList(id)

//        Swal.fire({
//   position: "top-end",
//   icon: "success",
//   title: "Your work has been saved",
//   showConfirmButton: false,
//   timer: 1500
// });

    }
    return (
        <div className='flex flex-col-reverse md:flex-row justify-between items-center m-5'>
            <div className='m-4'>
                <h1 className='text-7xl  text-bold'>{bookName}</h1>
                <p className='text-xl'>Author : {author}</p>
                <p className='text-bold'>Review : {review}</p>
                <p>Total Page : {totalPages}</p>
                <p>Rating : {rating}</p>
                <p>Category : {category}</p>
                <p>Tags : {tags}</p>
                <p>Publisher : {publisher}</p>
                <p>Year of Publishing :{yearOfPublishing}</p>
                <button onClick={()=>handleMarksAsRead(id)} className='bg-green-400 py-4 px-8 rounded-2xl m-4'>Mark As Read</button>
                <button onClick={()=>handleWishList(id)} className='bg-blue-400 py-4 px-8 rounded-2xl'>Add to WishList</button>
            </div>
            <img src={image} className='w-[300px]'></img>
        </div>
    );
};

export default BookDetails;






