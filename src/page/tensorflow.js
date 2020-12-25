import '@tensorflow/tfjs';
import React, { useEffect, useRef, useState } from 'react';
import * as mobilenet from '@tensorflow-models/mobilenet';

export default function Tensorflow() {
  const imageRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [predictions, setPredictions] = useState([]);

  function predict() {
    const img = imageRef.current;

    setIsLoading(true);

    mobilenet.load().then(model => {
      model.classify(img).then(predictions => {
        setPredictions(predictions);
        setIsLoading(false);
      });
    });
  }

  return (
    <div className='flex justify-center '>
      <div className='w-1/3'>
        <h1 className='text-center'>Tensorflow Example</h1>
        <img
          src='https://images.unsplash.com/photo-1608821328028-679ca8b76080?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxOTA3OTV8MHwxfGFsbHw0fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=1080'
          width='400'
          crossOrigin='anonymous'
          ref={imageRef}
        />
        <div className='text-center my-5'>
          {predictions.length > 0 && (
            <div>
              {predictions.map(predictions => (
                <p>{predictions.className}</p>
              ))}
            </div>
          )}

          <button
            className='p-2 rounded shadow  bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700 text-white'
            onClick={predict}
          >
            Predict Result
          </button>
        </div>
      </div>
    </div>
  );
}
