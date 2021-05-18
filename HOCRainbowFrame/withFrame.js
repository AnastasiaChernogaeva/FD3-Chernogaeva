import React from 'react';


const withFrame=colors=>props=> {
  let ccc=props.children;
   colors.forEach(color=>{
     ccc=<div style={{border:`6px solid ${color}`}}>
        {ccc} 
      </div>
  })
  };



export { withFrame };