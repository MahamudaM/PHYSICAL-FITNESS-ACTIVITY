import React from 'react';
import './Sidebar.css'
import logo from '../../my.jpg'
const Sidebar = (props) => {
    let {cart}=props
let initalTime = 0;
for(const times of cart){
   initalTime = initalTime + times.time;
}

console.log(cart)
    return (
        <div>
            
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
<button className='breakBtn'>10s</button>
<button className='breakBtn'>20s</button>
<button className='breakBtn'>30s</button>
<button className='breakBtn'>40s</button>
<button className='breakBtn'>50s</button>
</div>

<p>Exercise Details</p>
<div>
    <p className='totalTimeCountBtn'>Exercise time <span className='timeCountBtnSpan'>{initalTime}</span> </p><br />
    <p className='totalTimeCountBtn'>Break time <span className='timeCountBtnSpan'>{}</span></p><br />
    <button className='ExcerciseTimeBtn'>Activity Completed</button>
</div>
        </div>
    );
};

export default Sidebar;