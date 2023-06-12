import { useState } from "react";
const imagehostingtoken = import.meta.env.VITE_IMAGE_UPLOAD

const AddClass = () => {
  const [className, setClassName] = useState('');
  const [classImage, setClassImage] = useState('');
  const [availableSeats, setAvailableSeats] = useState('');
  const [price, setPrice] = useState('');
  const image_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=${imagehostingtoken}`
  const handleSubmit = (e) => {
    e.preventDefault();
    const FormData = new FormData();
    FormData.append('image', e.image[0])

    fetch(image_hosting_url, {
      method: 'POST',
      body: FormData
    })



    const classData = {
      className,
      classImage,
      availableSeats,
      price,
      status: 'pending',
    };

    setClassName('');
    setClassImage('');
    setAvailableSeats('');
    setPrice('');

    // console.log(classData); // You can remove this line, it's just for demonstration purposes
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

      {/* <label htmlFor="classImage">Class Image:</label>
      <input
        type="file"
        id="classImage"
        onChange={(e) => setClassImage(e.target.files[0])}
        required
      /> */}

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