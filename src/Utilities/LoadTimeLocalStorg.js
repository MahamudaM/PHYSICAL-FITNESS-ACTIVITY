const addTimeLocalStorag =(id)=>{
    let time={}
    const storeTime = localStorage.getItem('breack-time')
    if(storeTime){
        time=JSON.parse(storeTime)
    }

let timeCount = time[id];
if(timeCount){
    time[id] = timeCount+1;
}
else{
    time[id]=1;
}

    localStorage.setItem('breack-time',JSON.stringify(time))
}

const getStorTime =()=>{
    let time={}
    const storeTime = localStorage.getItem('breack-time')
    if(storeTime){
        time=JSON.parse(storeTime)
    }
    return time;
}
export {addTimeLocalStorag,getStorTime}