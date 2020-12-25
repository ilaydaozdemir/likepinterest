import '@tensorflow/tfjs';
import React, { useEffect, useRef } from 'react';
import * as mobilenet from '@tensorflow-models/mobilenet';

export default function Tensorflow() {
  const imageRef = useRef();

  useEffect(() => {
    const img = imageRef.current;

    // mobilenet.load().then(model => {
    //   model.classify(img).then(predictions => {
    //     console.log('Predictions:');
    //     console.log(predictions);
    //   });
    // });
  }, []);
  return (
    <div className='flex justify-center'>
      <div className='w-1/3'>
        <h1 className='text-center'>Tensorflow Example</h1>
        <img
          src='https://images.unsplash.com/photo-1608821328028-679ca8b76080?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxOTA3OTV8MHwxfGFsbHw0fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=1080'
          width='400'
          ref={imageRef}
        />
      </div>
    </div>
  );
}
