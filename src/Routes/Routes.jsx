import React from 'react';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from '../Pages/Root/Root';
import Erropage from '../Pages/Errorpage/Erropage';
import Home from '../Pages/Home/Home';
import Abput from '../Pages/About/Abput';
import BookDetails from '../Componenta/Book/BookDetails';
import ReadList from '../Pages/ReadList/ReadList';


export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<Erropage></Erropage>,
    children:[
        {
            index:true,
            loader:()=>fetch('/bookdata.json'),

            
            Component:Home
        },
        
        {
            path:'/bookDetails/:id',
            loader:()=>fetch('/bookdata.json'),
            Component:BookDetails
        },
        {
            path:'/readList',
            loader:()=>fetch('/bookdata.json'),
            Component:ReadList
        }
    ]
  },
]);