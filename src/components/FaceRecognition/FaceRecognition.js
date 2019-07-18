import React from 'react';
import tachyons from 'tachyons';

import './Facerec.css';
const FaceRecognition =({imageUrl, box}) =>{
if (!imageUrl) {
  return(
    <div className='center ma'>
        <div className='absolute mt2 white'>
        <p>  your image will appear here </p>

        </div>
    </div>);
  }

  return(

    <div className='center ma'>
        <div className='absolute mt2'>
          <img id='inputImage' alt=' face detection' src={imageUrl} width='500px' height='auto' />
          <div className='boundingBox' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}} ></div>
        </div>
    </div>
  );
}


export default FaceRecognition;
