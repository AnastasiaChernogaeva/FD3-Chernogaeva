import React from 'react';


const withFrame=colors=>Component=>props=> {
  let ccc=<Component {...props}/>;
   colors.forEach(color=>{
     ccc=<div style={{border:`6px solid ${color}`, padding:'3px', }}> {ccc} </div>
   }
   )
      return ccc ;
  
  };
  
/*
  const withFrame=colors=>DoubleButton=>props=> {
    let x=props.children;
     colors.forEach((color,i)=>{
      x=(colors.length!=i)?<div style={{border:`6px solid ${color}`}}> {x} </div>:<div style={{border:`3px solid ${color}`}}> <DoubleButton {...props}/></div>})
      
  
        return(x) ;
    };*/
/*
  function withFrame(colors){
    return function (Component){
        return props=>( colors.map(color=><div style={{border:`6px solid ${color}`}}><Component {...props}/></div>));
    };
  }

*/

export { withFrame };