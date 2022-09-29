import React, { useEffect, useState } from 'react';
import { CartData } from '../Excercic-cart-disply/DisplayCart';
import './Main.css'

import Sidebar from '../BodySidebar/Sidebar';
const Main = () => {

const [cartInfo,setCartInfo]=useState([])
const[cart,setCart]=useState([])
    useEffect(()=>{
        fetch('cartInfo.json')
        .then(res=>res.json())
        .then(data=>setCartInfo(data))
    },[])
    const addTimeInExcercise  =(infoDetail)=>{
        
        const addedCart = [...cart,infoDetail]
        setCart(addedCart)
    }
    return (
        <div className='main-container'>
            <div className='body-left'>
                <div className="header-titl">
                    <h1 className='excerciseHading'>physical-fitness-activity</h1>
                    <h4>Select today’s activity</h4>
                    <div className='carts'>
                    {
                     cartInfo.map(singleCartInfo=><CartData
                         infoDetail = {singleCartInfo}
                         key = {singleCartInfo.id}
                         evenHandler = {addTimeInExcercise}
                     ></CartData>)   
                    }
                    </div>
                </div>

            </div>
            <div className='ExerciseDetails'>
              <Sidebar
              cart={cart}></Sidebar>
            </div>
        </div>
    );
};

export default Main;