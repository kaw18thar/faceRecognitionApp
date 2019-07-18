import React from 'react';
import tachyons from 'tachyons';
import './imagelink.css'
const ImageLink = ({onInputChange, onButtonSubmit}) =>{
 return (<div className=''>
              <p className='f3 tc white '>
              {'This magic box will detect faces in your image. Give it a try!'}

              </p>
              <div className='center'>
                  <div className='form center pa4 br3 shadow-5'>
                        <input className=' pa2 w-70 center' type='text'onChange={onInputChange}/>
                        <button className='w-30 grow ph3  dib white'  onClick={onButtonSubmit}  style={{backgroundColor: '#48B'}}>Detect</button>
                  </div>
              </div>
         </div>);

}
export default ImageLink;
