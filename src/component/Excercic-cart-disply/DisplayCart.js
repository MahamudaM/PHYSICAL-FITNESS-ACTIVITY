import './DisplayCart.css'
const CartData=(props)=>{
   const{infoDetail,evenHandler}=props
    const{picture,name,time,age,about}= infoDetail
    return(
       <div className="single-cart">
         <img src={picture} alt="" />
         <div className='cartInfo'>
            <h3 >{name}</h3>
            <p>{about}</p>
            <div className='ageAndTime'>
            <p>For Age : {age}</p>
            <p>Time required :{time}s</p>
            </div>
         </div>
         <button className='cartBtn' onClick={()=>evenHandler(infoDetail)}>Add to list</button>
       </div>
    )
}

export {CartData}
