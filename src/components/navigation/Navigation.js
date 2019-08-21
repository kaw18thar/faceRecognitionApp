import React from 'react';
import tachyons from 'tachyons';
const Navigation =({onRouteChange}) =>{

  return(
    <nav style = {{display: 'flex', justifyContent: 'flex-end', padding: '15px'}}>
    <a   onClick={()=>onRouteChange('signin')} className='f3 link dim  pa3 pointer deepblue' >
    Sign Out</a>
    </nav>
  )
}


export default Navigation;
