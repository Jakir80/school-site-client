import React, { useEffect, useState } from 'react';
import SingleClassCard from './SingleClassCard';

const Classes = () => {
    const [allclass, SetClass] = useState([])
    useEffect(() => {

        fetch('https://school-site-server.vercel.app/classes')
            .then(res => res.json())
            .then(data => SetClass(data))
    }, [])
    return (
        <div>

            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10">
                {
                    allclass.map(singleclass => <SingleClassCard singleclass={singleclass} key={singleclass._id}></SingleClassCard>)
                }

            </div>
        </div>
    );
};

export default Classes;