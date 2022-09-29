import React, { useEffect, useState } from 'react';
import './Sidebar.css'
import logo from '../../my.jpg'
// toset import data

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addTimeLocalStorag, getStorTime } from '../../Utilities/LoadTimeLocalStorg';


const Sidebar = (props) => {
    let {cart}=props
    
let initalTime = 0;
for(const times of cart){
   initalTime = initalTime + times.time;
}
// break time
const [breakTimeValue,setBreakTimeValue]=useState([0])
const breakTime= [10,20,30,40,50]

const breakTimeClick = (time)=>{
   const breakTim =time;
setBreakTimeValue(breakTim)
addTimeLocalStorag(time)
}

// get time from local storage
// useEffect(()=>{
//     const storeTimes = getStorTime()
//     const saveTime=[]
//     for(const time in storeTimes)
//     console.log(breakTimeValue)
//     const adedTimes = breakTimeValue.find(times=>times===time);
//     if(adedTimes){
//         saveTime.push(adedTimes)
//     }
   
// },[breakTimeValue])
 // toast notification
    
 const notify =()=>  {
    toast("Congratulation ! You submit assingment on time",{
        position:'top-center',
        
    });
 }


    return (
        <div className='sidebarContainer'>
            
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
{/* botton section */}
<p>Add A Break</p>
<div className='breakBtnContainer'>
{
    breakTime.map(time=><button className='breakBtn' onClick={()=>breakTimeClick(time)} key={time.toString()}
    >{time}s</button>)
}

</div>

<p>Exercise Details</p>
<div className='btnGroup'>
    <p className='totalTimeCountBtn'>Exercise time <span className='timeCountBtnSpan'>{initalTime}s</span> </p><br />
    <p className='totalTimeCountBtn'>Break time <span className='timeCountBtnSpan'>{breakTimeValue}s</span></p><br />
    <button className='ExcerciseTimeBtn' onClick={()=>notify()}>Activity Completed </button>
    <ToastContainer></ToastContainer>
</div>
        </div>
    );
};



export default Sidebar;