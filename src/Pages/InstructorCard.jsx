import React from 'react';

const InstructorCard = ({teacher}) => {
    const { photoUrl, students_enrolled, class_name,name } = teacher;
    return (
        <div>
            <div className="card card-compact w-96 text-white  shadow-2xl border-b-sky-600  border-2 bg-emerald-800">
                <figure><img src={photoUrl} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">inInstructor Name :{name}</h2>
                    {/* <h2 className="card-title">Class Name:  {class_name}</h2> */}
                    {/* <p> How Much Student Buy it :  {students_enrolled}</p> */}
                    {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;