import './DisplayCart.css'
const CartData=(props)=>{
    const{picture,name,time,age,about}=props.infoDetail
    return(
       <div className="single-cart">
         <img src={picture} alt="" />
         <div className='cartInfo'>
            <h3 >{name}</h3>
            <p>{about}</p>
            <div className='ageAndTime'>
            <p>For Age : {age}</p>
            <p>Time required :{time}</p>
            </div>
         </div>
         <button className='cartBtn'>Add to list</button>
       </div>
    )
}

export {CartData}
