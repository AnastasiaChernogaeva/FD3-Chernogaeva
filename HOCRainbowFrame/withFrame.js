import React from 'react';

function withFrame(colors) {
    return colors.forEach(color=>{
        (function(component){
      return props => (
        <div style={{border:`6px solid ${color}`}}>
          <Component {...props} />
        </div>
      );
    })();
    }
    );
}

export { withFrame };