import React, { useState } from 'react';

export default function Image({ index, image, handleRemove }) {
  const [isHovering, setIsHovering] = useState(-1);
  return (
    <div className='w-1/3 my-4 flex justify-center' key={index}>
      <div
        className='relative'
        onMouseEnter={() => setIsHovering(index)}
        onMouseLeave={() => setIsHovering(-1)}
      >
        {/* icon ekleme */}
        <i
          className={`fas fa-times absolute right-0 cursor-pointer opacity-25 hover:opacity-100 ${
            isHovering === index ? '' : 'hidden'
          }`}
          onClick={() => handleRemove(index)}
        ></i>
        <img src={image} width='150' />
      </div>
    </div>
  );
}
