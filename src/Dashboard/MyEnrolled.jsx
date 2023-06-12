import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const MyEnrolled = () => {
    const { user } = useContext(AuthContext)
    const [payments, Setpayments] = useState([])
    useEffect(() => {
        fetch(`https://school-site-server.vercel.app/mypayments/${user?.email}`)
            .then(res => res.json())
            .then(data => Setpayments(data))
    }, [user])

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead className='text-white'>
                        <tr>
                            <th>Email</th>
                            <th>ClassName</th>
                            <th>Price</th>
                          <th>Class Image</th>
                        </tr>
                    </thead>
                    <tbody className='text-white '>
                        {
                            payments.map(payment => <>
                                <tr>
                                    <th>  {payment.email}</th>
                                    <td>{payment.itemName}</td>
                                    <td>$ {payment.price
                                    }</td>
                                    <img src={payment.classImageURL} alt="" />
                                </tr>

                            </>)
                        }

                    </tbody>
                </table>
            </div>



        </div>
    );
};

export default MyEnrolled;