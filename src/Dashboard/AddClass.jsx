import { useState } from "react";


const AddClass = () => {
    const [className, setClassName] = useState('');
    const [classImage, setClassImage] = useState('');
    const [availableSeats, setAvailableSeats] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const classData = {         
            className,
            classImage,
            availableSeats,
            price,
            status: 'pending',
        };

        // TODO: Send the classData to the backend API for approval

        // Reset form fields after submission
        setClassName('');
        setClassImage('');
        setAvailableSeats('');
        setPrice('');

        console.log(classData); // You can remove this line, it's just for demonstration purposes
    };
    return (
        <form onSubmit={handleSubmit}>
        <label htmlFor="className">Class Name:</label>
        <input
          type="text"
          id="className"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
          required
        />
  
        <label htmlFor="classImage">Class Image:</label>
        <input
          type="text"
          id="classImage"
          value={classImage}
          onChange={(e) => setClassImage(e.target.value)}
          required
        />
  
        <label htmlFor="availableSeats">Available Seats:</label>
        <input
          type="number"
          id="availableSeats"
          value={availableSeats}
          onChange={(e) => setAvailableSeats(e.target.value)}
          required
        />
  
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      <button type="submit">Add</button>
      </form>
    );
};

export default AddClass;