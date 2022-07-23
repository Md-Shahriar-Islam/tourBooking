import Cookies from 'js-cookie';
import React from 'react';
import { useForm } from 'react-hook-form';

const CreatePackage = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = async data => {
        console.log(data);

        fetch('http://localhost/package.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex items-center justify-center mt-10 flex-col">
                <input type="name" placeholder="package name" className=" input input-bordered w-full max-w-xs" {...register("name")} /><br></br>
                <input type="text" placeholder="area" className=" input input-bordered w-full max-w-xs" {...register("zone")} /><br></br>
                <input type="number" placeholder="spots " className=" input input-bordered w-full max-w-xs" {...register("spots")} /><br></br>
                <input type="number" placeholder="price" className=" input input-bordered w-full max-w-xs" {...register("price")} /><br></br>
                <input type="text" placeholder="please give image link" className=" input input-bordered w-full max-w-xs" {...register("image")} /><br></br>
                <input type="text" placeholder="duration" className=" input input-bordered w-full max-w-xs" {...register("duration")} /><br></br>
                <input className="btn btn-wide mt-2 relative" type="submit" value="Add packages" />

            </form>

        </div>
    );
};

export default CreatePackage;