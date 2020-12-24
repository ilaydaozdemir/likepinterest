import React, { useState } from 'react';

export default function Image({ index, image, handleRemove, show }) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className='w-1/6 p-1 border flex justify-center'>
      <div
        className='relative'
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* icon ekleme */}
        <i
          className={`fas fa-times absolute right-0 cursor-pointer opacity-25 hover:opacity-100 ${
            isHovering ? '' : 'hidden'
          }`}
          onClick={() => handleRemove(index)}
        ></i>
        <img onClick={show} src={image} width='100%' height='auto' />
      </div>
    </div>
  );
}
