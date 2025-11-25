import { Menu } from 'lucide-react';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const [open,setOpen]=useState('false')
    console.log(open)
    return (
        <div className='flex justify-between items-center  m-2 md:m-8'>
            <div className=' flex gap-2 items-center' onClick={()=>{
                setOpen(!open)
            }}>
                <Menu className='md:hidden'></Menu>
                <h3 className=' font-bold'>Book Vibe</h3>
                {
                    !open &&
                    <div className={`absolute flex flex-col bg-amber-50 text-black p-5 z-10 ${open?"-top-16":"top-12"}`}>
                        <NavLink to="/">Home</NavLink>
                        
                        <NavLink to='/readList'>Read  and Wish List</NavLink>
                        
                    </div>   
                }
            </div>
            <div className='hidden md:flex gap-4 items-center'>
                <NavLink to="/">Home</NavLink>
                
                <NavLink to='/readList'>Read  and Wish List</NavLink>
            </div>
            <div className='flex gap-2 items-center'>
                <button className='bg-green-400 py-2 px-4 rounded-2xl'>Sign In</button>
                <button className='bg-blue-400 py-2 px-4 rounded-2xl'>Sign Up</button>
            </div>

        </div>
    );
};

export default NavBar;