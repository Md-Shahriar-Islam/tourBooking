import React from 'react';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate, } from 'react-router-dom';

const Registration = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()
    const location = useLocation()
    const [updateProfile, updating, uerror] = useUpdateProfile(auth);
    let from = location.state?.from?.pathname || "/";
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);



    const onSubmit = async data => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name })

        fetch('http://localhost/index.php', {
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
    if (loading || updating) {
        return <p>loading.......</p>;
    }
    if (user) {
        navigate(from, { replace: true });


    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex items-center justify-center mt-10 flex-col">
                <input type="name" placeholder="your name" className=" input input-bordered w-full max-w-xs" {...register("name")} /><br></br>
                <input type="email" placeholder="your email" className=" input input-bordered w-full max-w-xs" {...register("email")} /><br></br>
                <input type="password" placeholder="your password " className=" input input-bordered w-full max-w-xs" {...register("password")} /><br></br>
                <p className="font-bold mb-2 text-2xl">register as......</p>
                <select className="mb-4 relative"{...register("role")}>
                    <option value="admin">admin</option>
                    <option value="user">user</option>
                </select>
                <input className="btn btn-wide mt-2 relative" type="submit" />

            </form>


        </div>
    );
};

export default Registration;