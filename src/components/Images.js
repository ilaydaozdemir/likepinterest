import React, { useEffect, useState } from 'react';

export default function Images() {
  const [images, setimages] = useState([
    'https://cdn.pixabay.com/photo/2020/09/17/05/19/women-5578067_960_720.jpg',
    'https://cdn.pixabay.com/photo/2020/01/03/21/32/hoarfrost-4739176_960_720.jpg',
    'https://cdn.pixabay.com/photo/2015/06/19/21/24/the-road-815297_960_720.jpg',
    'https://cdn.pixabay.com/photo/2020/11/17/15/44/cup-5752775_960_720.jpg',
  ]);

  //inner Component
  function ShowImage(params) {
    return images.map(image => {
      return (
        <div className='W-1/3'>
          <img src={image} width='150' />
        </div>
      );
    });
  }

  // improve separate
  function handleAdd() {
    setimages([
      'https://cdn.pixabay.com/photo/2020/11/17/15/44/cup-5752775_960_720.jpg',
      ...images,
    ]);
  }

  function handleChange() {
    console.log('working input');
  }

  return (
    <section>
      <div className='flex  flex-wrap justify-center'>
        <ShowImage />
      </div>
      <div className='flex justify-between my-5 '>
        <input
          type='text'
          className='p-2 border border-gray-800 shadow rounded'
          onChange={handleChange}
        />
        <button className='p-2 bg-green-600 text-white' onClick={handleAdd}>
          Add new
        </button>
      </div>
    </section>
  );
}
