import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../Utility/addToDB';
import Book from '../../Componenta/Book/Book';
import { added } from '../../Utility/addtoWishlist';
const ReadList = () => {
    const [readList,setReadList]=useState([])
    const [wishList,setWishList]=useState([])
    const [sort,setSort]=useState("")
    const data=useLoaderData()
    useEffect(()=>{
        const storeData=getStoredBook()
        const ids= storeData.map(s=>parseInt(s))
        const myReadList=data.filter(book=>ids.includes(book.bookId))
        
        setReadList(myReadList)
    },[])
    useEffect(()=>{
        const wishData=added()
        const ids=wishData.map(s=>parseInt(s))
        const myWishList=data.filter(book=>ids.includes(book.bookId))
        setWishList(myWishList)
    },[])
    const handleSort=((sortType)=>{
        setSort(sortType)
        if(sortType==='pages'){
            const sortedByPages=[...readList].sort((a,b)=>
            a.totalPages-b.totalPages)
            setReadList(sortedByPages)
            
        }
        if(sortType==='pages'){
            const sortedByPages=[...wishList].sort((a,b)=>
            a.totalPages-b.totalPages)
            setWishList(sortedByPages)
            
        }
        if(sortType==='ratings'){
            const sortedByPages=[...readList].sort((a,b)=>
                    a.rating-b.rating)
                    
            setReadList(sortedByPages)
            
            

        }
        if(sortType==='ratings'){
            const sortedByPages=[...wishList].sort((a,b)=>
                    a.rating-b.rating)
                    
            setWishList(sortedByPages)
            
            

        }
    })
    return (
        <div>
            <div className="dropdown">
  <div tabIndex={0} role="button" className="btn m-1">Sort By : {sort?sort:""}</div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={()=>handleSort('pages')}>Pages</a></li>
    <li><a onClick={()=>handleSort('ratings')}>Ratings</a></li>
  </ul>
</div>
            <Tabs>
    <TabList>
      <Tab>Read Book List</Tab>
      <Tab>My Wish List</Tab>
    </TabList>

    <TabPanel>
      <h2>Read books : {readList.length}</h2>
      <div className='md:grid grid-cols-2 gap-4'>
        {
        readList.map(b=><Book book={b}></Book>
            
        )}
      </div>
      
    </TabPanel>
    <TabPanel>
      <h2>My Wish List : {wishList.length}</h2>
      <div className='md:grid grid-cols-2 gap-4'>
        {
        wishList.map(b=><Book book={b}></Book>
            
        )}
      </div>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ReadList;