import React, { useEffect, useState } from 'react';

export default function Images() {
  const [images, setimages] = useState([
    'https://cdn.pixabay.com/photo/2020/09/17/05/19/women-5578067_960_720.jpg',
    'https://cdn.pixabay.com/photo/2020/01/03/21/32/hoarfrost-4739176_960_720.jpg',
    'https://cdn.pixabay.com/photo/2015/06/19/21/24/the-road-815297_960_720.jpg',
    'https://cdn.pixabay.com/photo/2020/11/17/15/44/cup-5752775_960_720.jpg',
  ]);

  const [newImageUrl, setnewImageUrl] = useState('');

  function handleRemove(index) {
    //setimages(images.filter((image, i) => i !== index));

    setimages([
      ...images.slice(0, index),
      ...images.slice(index + 1, images.length),
    ]);
  }

  const [isHovering, setIsHovering] = useState(false);
  function handleMouseEnter() {
    setIsHovering(true);
  }
  function handleMouseLeave() {
    setIsHovering(false);
  }

  //inner Component
  function ShowImage(params) {
    return images.map((image, index) => {
      return (
        <div className='w-1/3 my-4 flex justify-center' key={index}>
          <div className='relative'>
            {/* icon ekleme */}
            <i
              className={`fas fa-times absolute right-0 cursor-pointer opacity-25 hover:opacity-100 ${
                isHovering ? '' : 'hidden'
              }`}
              onClick={() => handleRemove(index)}
            ></i>
            <img
              src={image}
              width='150'
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </div>
        </div>
      );
    });
  }

  // improve separate
  function handleAdd() {
    //input un içi bos mu kontrol edıyorum
    if (newImageUrl !== '') {
      setimages([newImageUrl, ...images]);

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
      <div className='flex  flex-wrap justify-center  mx-5 '>
        <ShowImage />
      </div>
      <div className='flex justify-between my-5 '>
        <div className='w-full'>
          {' '}
          <input
            type='text'
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
