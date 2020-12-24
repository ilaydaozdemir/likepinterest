import { AnimateSharedLayout, AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import useDebounce from '../utils/hooks/useDebounce';
import useFetchImage from '../utils/hooks/useFetchImage';

import Image from './image';
import Loading from './Loading';

export default function Images() {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(null);
  const [images, setImages, errors, isLoading] = useFetchImage(
    page,
    searchTerm
  );

  function handleRemove(index) {
    //setimages(images.filter((image, i) => i !== index));

    setImages([
      ...images.slice(0, index),
      ...images.slice(index + 1, images.length),
    ]);
  }

  function ShowImage(params) {
    const [showPreview, setShowPreview] = useState(false);
    return (
      <AnimateSharedLayout>
        <InfiniteScroll
          dataLength={images.length}
          next={() => setPage(page + 1)}
          hasMore={true}
          className='flex flex-wrap'
        >
          {images.map((img, index) => (
            <Image
              show={() => setShowPreview(img.urls.regular)}
              image={img.urls.regular}
              handleRemove={handleRemove}
              index={index}
              key={index}
            />
          ))}
        </InfiniteScroll>
        <AnimatePresence>
          {showPreview && (
            <motion.section
              exit={{ opacity: 0 }}
              className='fixed w-full h-full flex justify-center items-center top-0 left-0 z-40'
              onClick={() => setShowPreview(false)}
            >
              <div className='bg-white'>
                <img src={showPreview} width='300' height='auto' />
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    );
  }

  const debounce = useDebounce();
  function handleInput(e) {
    const text = e.target.value;
    debounce(() => setSearchTerm(text));
  }

  return (
    <section>
      <div className='my-5'>
        <input
          type='text'
          onChange={handleInput}
          className='w-full border rounded shadow p-2'
          placeholder='Search Photos Here'
        />
      </div>
      {errors.length > 0 && (
        <div className='flex h-screen'>
          <p className='m-auto'> {errors[0]}</p>
        </div>
      )}

      <ShowImage />

      {isLoading && <Loading />}
    </section>
  );
}
