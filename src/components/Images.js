import React, { useEffect, useState } from 'react';

export default function Images() {
  const Images = [
    'https://cdn.pixabay.com/photo/2020/09/17/05/19/women-5578067_960_720.jpg',
    'https://cdn.pixabay.com/photo/2020/01/03/21/32/hoarfrost-4739176_960_720.jpg',
    'https://cdn.pixabay.com/photo/2015/06/19/21/24/the-road-815297_960_720.jpg',
    'https://cdn.pixabay.com/photo/2020/11/17/15/44/cup-5752775_960_720.jpg',
  ];

  return (
    <section>
      <div className='flex justify-center'>
        {Images.map(image => {
          return (
            <div>
              <img src={image} width='150' />
            </div>
          );
        })}
      </div>
    </section>
  );
}
