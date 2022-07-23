import React from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const Review = () => {
    let userName = sessionStorage.getItem('email')
    userName = JSON.parse(userName)
    console.log(userName)
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const data1 = { name: userName, ...data }
        fetch('http://localhost/review.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data1),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });



    }
    useEffect(() => {
        fetch('http://localhost/review.php')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex items-center justify-center mt-10 flex-col">
                <input type="text" placeholder="your review" className=" input input-bordered w-full max-w-xs" {...register("review")} /><br></br>
                <input className="btn btn-wide" type="submit" />
            </form>


        </div>
    );
};

export default Review;