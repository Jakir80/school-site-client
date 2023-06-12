/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useAxiosSecure from '../AuthProvider/UseAxiosSecure';

const Checkout = ({ payment, amount }) => {
    const [axiosSecure] = useAxiosSecure()
    const [carderror, setError] = useState('')
    const { user } = useContext(AuthContext)
    const stripe = useStripe()
    const elements = useElements()
    const [clientsecret, setClientSecret] = useState('')
    const [Processing, SetProcessing] = useState(false)
    const [transactionId, SettransactionId] = useState("")
    // console.log('client secre',clientsecret)
    // console.log("amount", amount)
    useEffect(() => {
        if (amount > 0) {
            axiosSecure.post('/create-payment-intent', { price: amount }, {
                method: "POST",
                headers: {
                    authorization: `bearer ${localStorage.getItem('access-token')}`
                },
            })
                .then(res => {
                    // console.log("client secret ", res.data.clientSecret)
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [amount, axiosSecure])


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {

            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,


        });
        console.log('payment Method', paymentMethod)

        if (error) {
            console.log('[error]', error);
            setError(error.message)
        } else {
            setError('')
            // console.log('[PaymentMethod]', paymentMethod);
        }


        SetProcessing(true)
        const { paymentIntent, error: confirmedError } = await stripe.confirmCardPayment(
            clientsecret,

            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous User'
                    },
                },
            },
        );
        if (confirmedError) {
            setError(confirmedError.message)
        }
        SetProcessing(false)
        console.log("payment-entend", paymentIntent)
        if (paymentIntent.status === 'succeeded') {
            //send payment information to the server 

            SettransactionId(paymentIntent.id)
            const transactionid = paymentIntent.id;
            const payments = {
                email: user?.email,
                transactionid,
                price: amount,
                bookigid: payment.booked,
                itemsId: payment._id,
                itemName: payment.className,
            }
            axiosSecure.post('/payment', payments)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        toast('product added successfully')
                    }
                })
        }

    };



    return (
        <>
            <form  onSubmit={handleSubmit} className='w-full'>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '20px',
                                color: '#ffffff',
                                '::placeholder': {
                                    color: '#ffffff',
                                },
                            },
                            invalid: {
                                color: '#ffffff',
                            },
                        },
                    }}
                />
                <button type="submit" className='btn btn-accent text-white m-6' disabled={!stripe || !clientsecret || Processing}>
                    Pay Now
                </button>
            </form>
            {carderror && <p className='text-red-400'>{carderror}</p>}
            {transactionId && <p className='text-green-400'>Transaction Complete With transaction id : {transactionId}</p>}

        </>
    );
};

export default Checkout;

