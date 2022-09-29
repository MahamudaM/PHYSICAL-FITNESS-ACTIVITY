import React, { useEffect, useState } from 'react';
import { CartData } from '../Excercic-cart-disply/DisplayCart';
import './Main.css'

import Sidebar from '../BodySidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faDumbbell  } from '@fortawesome/free-solid-svg-icons';


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
                    
                <div className='hiderIcon'>
                <FontAwesomeIcon icon={faDumbbell} className='icon'></FontAwesomeIcon>
                 <h1 className='excerciseHading'>physical-fitness-activity</h1>
                </div>
                    <h3>Select today’s activity</h3>
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
              cart={cart}
              ></Sidebar>
            </div>
{/* toast */}

        </div>
    );
};

export default Main;