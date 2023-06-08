import React from 'react';

const InstructorCard = ({teacher}) => {
    const { picture, students_enrolled, class_name,instructor_name } = teacher;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl">inInstructor Name :{instructor_name}</h2>
                    <h2 className="card-title">Class Name:  {class_name}</h2>
                    <p> How Much Student Buy it :  {students_enrolled}</p>
                    {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;