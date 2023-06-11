import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useLoaderData } from 'react-router-dom';
import Checkout from './Checkout';
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_STRIPE_PK);
const Payment = () => {
    const payment = useLoaderData()
    console.log(payment)
    const { price, className, classImageURL, availableSeats } = payment;
    // const total = price.reduce((sum, item) => sum + item.price, 0);
    const amount=parseFloat(price);
    console.log('payment',amount)
    return (
        <div>

            <div className="overflow-x-auto mb-10">
                <table className="table">
                    {/* head */}
                    <thead className='text-white'>
                        <tr>
                            <th>image</th>
                            <th>ClassName</th>
                            <th>Price</th>
                            <th>Available seat</th>
                   
                        </tr>
                    </thead>
                    <tbody className='text-white'>
                        
                        <tr>
                            
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={classImageURL} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {className}
                            </td>
                            <td>$ {price}</td>
                            <td>{availableSeats}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
           
            <Elements stripe={stripePromise}>
                <Checkout amount={amount} payment={payment}></Checkout>
            </Elements>

        </div>
    );
};

export default Payment;