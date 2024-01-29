 function getTicket(n){
    let arr = [];
    for(let i = 0; i<n;i++){
        arr[i] = Math.floor(Math.random()*10)
    }
    return arr
}
function sum(arr){
   return arr.reduce((val,curr)=>val+curr,0)
}

export  {getTicket,sum}