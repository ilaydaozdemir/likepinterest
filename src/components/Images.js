import Axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import Image from './image';

export default function Images() {
  const [images, setimages] = useState([]);

  const inputRef = useRef(null);
  const varRef = useRef(images.length);

  useEffect(() => {
    inputRef.current.focus();
    Axios.get(
      'https://api.unsplash.com/photos/?client_id=VUun1OhcCeeUNBtPleDMgABTbx18eDBmyT4MgwclgpI'
    ).then(res => {
      setimages(res.data);
    });
  }, []);

  useEffect(() => {
    varRef.current = varRef.current + 1;
  });

  const [newImageUrl, setnewImageUrl] = useState('');

  function handleRemove(index) {
    //setimages(images.filter((image, i) => i !== index));

    setimages([
      ...images.slice(0, index),
      ...images.slice(index + 1, images.length),
    ]);
  }

  //inner Component
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
      <h1>{varRef.current} Images</h1>
      <p>Component is updated {varRef.current}times</p>
      <div className='flex  flex-wrap justify-center  mx-5 '>
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
