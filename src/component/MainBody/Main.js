import React, { useEffect, useState } from 'react';
import { CartData } from '../Excercic-cart-disply/DisplayCart';
import './Main.css'
const Main = () => {

const [cartInfo,setCartInfo]=useState([])
    useEffect(()=>{
        fetch('cartInfo.json')
        .then(res=>res.json())
        .then(data=>setCartInfo(data))
    },[])
    return (
        <div className='main-container'>
            <div className='body-left'>
                <div className="header-titl">
                    <h1>physical-fitness-activity</h1>
                    <h4>Select today’s activity</h4>
                    <div className='carts'>
                    {
                     cartInfo.map(singleCartInfo=><CartData
                         infoDetail = {singleCartInfo}
                         key = {singleCartInfo.id}
                     ></CartData>)   
                    }
                    </div>
                </div>

            </div>
            <div className='ExerciseDetails'>
<h1>this is my web</h1>
            </div>
        </div>
    );
};

export default Main;