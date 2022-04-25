import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../Hooks/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

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
    }

    return (
        <div className='w-50 mx-auto'>
            <h2>Please Checkout: {service.name}</h2>
            <form>
                <input className='w-100 mb-2' type="text" value={user.displayName} name='name' placeholder='name' required/> <br/>
                <input className='w-100 mb-2' type="email" name='email' value={user.email} placeholder='Email' required/> <br/>
                <input className='w-100 mb-2' type="text" name='service' value={service.name} placeholder='Service' required/> <br/>
                <input className='w-100 mb-2' type="text" name='address' placeholder='Address' required/> <br/>
                <input className='w-100 mb-2'  type="text" name='phone' placeholder='Phone' required/> <br/>
                
                <input className='btn btn-primary w-100 mb-2' type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default Checkout;