import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateClass = () => {
    const updateclasses = useLoaderData();
    const { className,
        classImageURL,
        availableSeats,
        price, _id } = updateclasses;
    const handleupdateClass= (event) => {
        event.preventDefault()
        const form = event.target;
        const price = form.price.value;
        const className = form.className.value;
        const classImageURL = form.classImageURL.value;
        const availableSeats=form.availableSeats.value;
        form.reset() 
     const updatedclass = {
            price, className, classImageURL,availableSeats
        }
        console.log(updatedclass)
        fetch(`http://localhost:5000/updateclass/${_id}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedclass)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    toast("Updated information successfully")
                }

            })
    }

    return (
        <div className="  text-white  shadow-2xl border-b-sky-600  bg-lime-800 p-8">
            <form onSubmit={handleupdateClass} >
                <div className="grid grid-cols-2 gap-4 mb-4 text-white">
                    <div>
                        <label className=" font-medium">Class Name</label>
                        <input
                            type="text"
                            name='className'
                            defaultValue={className}
                            className="w-full border border-gray-400 rounded px-3 py-2"
                            placeholder="Enter product Product category"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="font-medium">Price</label>
                        <input
                            type="text"
                            defaultValue={price}
                            className="w-full border border-gray-400 rounded px-3 py-2"
                            placeholder="Enter price"
                            name='price'
                        />
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-4 mb-4'>
                </div>
                <div className="mb-4">
                    <label className=" font-medium">Image URl</label>
                    <input
                        type="text"
                        defaultValue={classImageURL}
                        className="w-full border border-gray-400 rounded px-3 py-2"
                        placeholder="Enter Description"
                        name='classImageURL'
                    />
                </div>
                <div className="mb-4">
                    <label className=" font-medium">Available seats</label>
                    <input
                        type="text"
                        defaultValue={availableSeats}
                        className="w-full border  rounded px-3 py-2"
                        placeholder="Enter Description"
                        name='availableSeats'
                    />
                </div>
                <button className="btn btn-accent btn-block text-white px-4 py-2 rounded ">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default UpdateClass;