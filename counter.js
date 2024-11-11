let increment=document.querySelector('.increment');
let reset=document.querySelector('.reset');
let decrement=document.querySelector('.decrement');
let values=document.querySelector('.values');
let count=0;
//INCREMENT FUNCTION
increment.addEventListener('click',()=>{
   values.innerHTML=count++; 
});

//RESET FUNCTION
reset.addEventListener('click',()=>{
    values.innerHTML=0; 
    
 });
 
 //DECREMENT FUNCTION
 decrement.addEventListener('click',()=>{
    if(count<=0)
    {
        values.innerHTML=count; 
    }
    else
    {
        values.innerHTML=--count;
    }
  
 });