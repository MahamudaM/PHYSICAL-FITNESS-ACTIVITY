import './DisplayCart.css'
const CartData=(props)=>{
    const{picture,name,time,age,about}=props.infoDetail
    return(
       <div className="single-cart">
         <img src={picture} alt="" />
         <div>
            <h3>{name}</h3>
            <p>{about}</p>
            <p>age : {age}</p>
            <p>time :{time}</p>
         </div>
         <button>Add to list</button>
       </div>
    )
}

export {CartData}
