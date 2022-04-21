import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='w-50 mx-auto'>
            <h2>Please add a service.</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-1' placeholder='name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-1' placeholder='description' {...register("description")} />
                <input className='mb-1' placeholder='price' type="number" {...register("price")} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;