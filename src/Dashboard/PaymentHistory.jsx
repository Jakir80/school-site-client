import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PaymentHistory = () => {
    const { user } = useContext(AuthContext)
    const [payments, Setpayments] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/mypayments/${user?.email}`)
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
                            <th>Transaction Id</th>
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
                                    <td>{payment.transactionid}</td>
                                </tr>

                            </>)
                        }

                    </tbody>
                </table>
            </div>



        </div>
    );
};

export default PaymentHistory;