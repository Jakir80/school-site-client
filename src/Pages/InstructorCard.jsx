import { motion } from 'framer-motion';
import React from 'react';
const InstructorCard = ({teacher}) => {
    const { photoUrl,name } = teacher;
    return (
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="card card-compact w-96 text-white shadow-2xl border-b-sky-600 border-2 bg-emerald-800"
      >
        <figure>
          <motion.img
            src={photoUrl}
            alt="instructor"
            className='p-4'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">Instructor Name: <br /> {name}</h2>
          <p>Total enrolled {10}</p>
        </div>
      </motion.div>
      
      
    );
};

export default InstructorCard;