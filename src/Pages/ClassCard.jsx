import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';

const ClassCard = ({ popular }) => {
  const { classImageURL, className, price, availableSeats } = popular;

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      className="card card-compact w-96 text-white shadow-2xl border-b-sky-600 border-2 bg-emerald-800"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
    >
      <figure>
        <img src={classImageURL} className='h-75 w-75 p-3 rounded-lg' alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Class Name: {className}</h2>
        <h2>Price: {price}</h2>
        <h2>Available Seats: {availableSeats}</h2>
        <div className="card-actions justify-end">
          <Link to="/classes">
            <button className="btn btn-accent p-2">Buy</button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ClassCard;
