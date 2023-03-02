import React from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate, } from 'react-router-dom';
import auth from '../../../firebase.init';
import Cookies from 'js-cookie'


const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    let error
    let useremail
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        lerror,
    ] = useSignInWithEmailAndPassword(auth);
    var inFifteenMinutes = new Date(new Date().getTime() + 30 * 60 * 1000);

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
        useremail = data.email


    }
    if (lerror) {
        error = lerror?.message
    }

    if (user) {
        navigate(from, { replace: true });
        Cookies.set('login', 'true', {
            expires: inFifteenMinutes
        });
    }
    if (loading) {
        return <p>loading....</p>
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex items-center justify-center mt-10 flex-col">
                <input type="email" placeholder="your email" className=" input input-bordered w-full max-w-xs" {...register("email")} /><br></br>
                <input type="password" placeholder="your password " className=" input input-bordered w-full max-w-xs" {...register("password")} /><br></br>
                <input className="btn btn-wide" type="submit" value='login' />
            </form>
            {
                error
            }

        </div>
    );
};

export default Login;