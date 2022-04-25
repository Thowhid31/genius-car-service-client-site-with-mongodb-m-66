import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../Hooks/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const Checkout = () => {
    const {serviceId} = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user] = useAuthState(auth);

    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('http://localhost:5000/order', order)
        .then(res => {
            console.log(res);
            const {data} = res;
            if(data.insertedId){
                toast('Your order is booked!')
                event.target.reset();
            }
        })
    }

    return (
        <div className='w-50 mx-auto'>
            <h2>Please Checkout: {user?.name}</h2>
            <form onSubmit={handlePlaceOrder} >
                <input className='w-100 mb-2' type="text" value={user?.displayName} name='name' placeholder='name' required/> <br/>
                <input className='w-100 mb-2' type="email" name='email' value={user.email} placeholder='Email' required/> <br/>
                <input className='w-100 mb-2' type="text" name='service' value={service.name} placeholder='Service' required readOnly disabled/> <br/>
                <input className='w-100 mb-2' type="text" name='address' placeholder='Address' required autoComplete='off'/> <br/>
                <input className='w-100 mb-2'  type="text" name='phone' placeholder='Phone' required/> <br/>
                
                <input className='btn btn-primary w-100 mb-2' type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default Checkout;