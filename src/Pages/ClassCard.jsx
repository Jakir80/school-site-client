import React from 'react';

const ClassCard = ({ popular }) => {
    const { picture, students_enrolled, class_name } = popular;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Class Name:  {class_name}</h2>
                    <p> How Much Student Buy it :  {students_enrolled}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;