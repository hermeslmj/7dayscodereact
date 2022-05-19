import React from 'react';


function Menu({ items }) {
    return ( 
        <div>
            { 
                items.map((item) => {
                    return <span key={item}>{item}</span>
                })    
            }
        </div>
     );
}

export { Menu };