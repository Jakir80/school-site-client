import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
// app.get("/myclass/:email", async (req, res) => {
//     console.log('email',req.params.email)
//     const Class = await ClassesCollection.find({ 
//         instructorEmail: req.params.email }).toArray();
//     res.send(Class);
// });
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
        // console.log(price, description)
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
        <div className=" bg-gray-200 p-10 rounded-lg shadow-lg">
            <form onSubmit={handleupdateClass} >
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="text-gray-700 font-medium">quantity</label>
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
                        <label className="text-gray-700 font-medium">Price</label>
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
                    <label className="text-gray-700 font-medium">Image URl</label>
                    <input
                        type="text"
                        defaultValue={classImageURL}
                        className="w-full border border-gray-400 rounded px-3 py-2"
                        placeholder="Enter Description"
                        name='classImageURL'
                    />
                </div>
                <div className="mb-4">
                    <label className="text-gray-700 font-medium">Available seats</label>
                    <input
                        type="text"
                        defaultValue={availableSeats}
                        className="w-full border border-gray-400 rounded px-3 py-2"
                        placeholder="Enter Description"
                        name='availableSeats'
                    />
                </div>
                <button className="bg-gray-600 btn-block btn  text-white px-4 py-2 rounded hover:bg-gray-800">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default UpdateClass;