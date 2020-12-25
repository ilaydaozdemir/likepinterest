import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import useTfl from '../utils/hooks/useTfl';

function Image({ index, image, handleRemove, show }) {
  const [isHovering, setIsHovering] = useState(false);
  const [predict, predictions, isLoading] = useTfl();
  const imageRef = useRef();

  return (
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
      <i
        className={`fas fa-search absolute left-0 cursor-pointer opacity-25 hover:opacity-100 ${
          isHovering ? '' : 'hidden'
        }`}
        onClick={() => predict(imageRef.current)}
      ></i>
      <img
        ref={imageRef}
        onClick={show}
        src={image}
        width='100%'
        height='auto'
        crossOrigin='anonymous'
      />
    </div>
  );
}

Image.propTypes = {
  show: PropTypes.func,
  index: PropTypes.number,
  image: PropTypes.string,
  handleRemove: PropTypes.func,
};
export default Image;
