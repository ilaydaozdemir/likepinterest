import React, { useEffect, useRef, useState } from 'react';
import useFetchImage from '../utils/hooks/useFetchImage';
import Image from './image';

export default function Images() {
  const [images, setImages] = useFetchImage();

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const [newImageUrl, setnewImageUrl] = useState('');

  function handleRemove(index) {
    //setimages(images.filter((image, i) => i !== index));

    setImages([
      ...images.slice(0, index),
      ...images.slice(index + 1, images.length),
    ]);
  }

  function ShowImage(params) {
    return images.map((img, index) => (
      <Image
        image={img.urls.regular}
        handleRemove={handleRemove}
        index={index}
        key={index}
      />
    ));
  }

  function handleAdd() {
    if (newImageUrl !== '') {
      setImages([newImageUrl, ...images]);

      //input value null deger alamadıgı ıcın
      //ayrıca ınputu temızler
      setnewImageUrl('');
    }
  }

  function handleChange(event) {
    setnewImageUrl(event.target.value);
  }

  return (
    <section>
      <div className='gap-0' style={{ columnCount: 5 }}>
        <ShowImage />
      </div>
      <div className='flex justify-between my-5 '>
        <div className='w-full'>
          {' '}
          {/* focus */}
          <input
            type='text'
            id='inputBox'
            ref={inputRef}
            className='p-2 border border-gray-800 shadow rounded w-full'
            value={newImageUrl}
            onChange={handleChange}
          />
        </div>
        <div className=''>
          <button
            disabled={newImageUrl === ''}
            className={`p-2  text-white  ml-2 ${
              newImageUrl !== '' ? 'bg-green-600' : 'bg-green-300'
            }`}
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
      </div>
    </section>
  );
}
