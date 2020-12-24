import { motion } from 'framer-motion';
import React from 'react';

export default function Home() {
  return (
    <div className='flex h-screen'>
      <motion.h1
        // initial={{ y: -400 }}
        // animate={{ scale: 2, y: 0, transition: { duration: 1 }, rotate: 720 }}
        className='m-auto text-3xl'
      >
        Welcome Home
      </motion.h1>
    </div>
  );
}
