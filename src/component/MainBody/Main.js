import React, { useEffect, useState } from 'react';
import { CartData } from '../Excercic-cart-disply/DisplayCart';
import './Main.css'
import logo from '../../my.jpg'
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
                    <h1 className='excerciseHading'>physical-fitness-activity</h1>
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
                    <div className='aboutMyself'>
                        <img src={logo} alt="" />
                        <div className='myselfInfo'>
                        <h3>Mahamuda</h3>
                        <p><small>Gaizepur,Bangladesh</small></p>
                        </div>
                    </div>
                    <div className='phisicalInfo'>
                        <div >
                            <p> <span className='boltNumber'>40</span ><small className="textDeep">kg</small></p>
                            <p>weight</p>
                        </div>
                        <div >
                            <p className='boltNumber'>6.5 </p>
                            <p>Height</p>
                        </div>
                        <div >
                            <p><span className='boltNumber'>22</span> <small  className="textDeep">yer</small></p>
                            <p>Age</p>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Main;