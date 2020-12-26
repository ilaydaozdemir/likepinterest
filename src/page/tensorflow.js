import '@tensorflow/tfjs';

import React, { useRef } from 'react';
import useTfl from '../utils/hooks/useTfl';

export default function Tensorflow() {
  const imageRef = useRef();

  const { predict, predictions, isLoading } = useTfl();

  return (
    <div className='flex justify-center '>
      <div className='w-1/3'>
        <img
          className='mt-5'
          src='https://images.unsplash.com/photo-1608821328028-679ca8b76080?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxOTA3OTV8MHwxfGFsbHw0fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=1080'
          width='400'
          crossOrigin='anonymous'
          ref={imageRef}
        />
        <div className='text-center my-5'>
          {predictions.length > 0 &&
            predictions.map(predictions => (
              <div className='flex justify-between'>
                <p>{predictions.className}</p>
                <p>{Math.floor(predictions.probability * 100)} %</p>
              </div>
            ))}

          <button
            className='p-2 rounded shadow  bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700 text-white'
            onClick={() => predict(imageRef.current)}
          >
            Predict Result
          </button>
        </div>
      </div>
    </div>
  );
}
