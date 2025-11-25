import React from 'react';
import bannerimage from '../../assets/book.ico'
const Banner = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row justify-between items-center p-8'>
            <div className='text-center md:text-left'>
                <h1 className='text-5xl text-bolder'>Books to freshen up your <br></br>bookshelf</h1>
                <button className='bg-green-400 py-4 px-8 my-4 rounded-2xl text-bold'>View the List</button>
            </div>
            <div>
                <img src={bannerimage} className='h-[150px] w-[150px] md:pr-4'></img>
            </div>
        </div>
    );
};

export default Banner;