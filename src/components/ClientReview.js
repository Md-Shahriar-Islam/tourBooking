import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

const ClientReview = () => {
    const [users, showUsers] = useState([])
    useEffect(() => {
        fetch('http://localhost/review.php')
            .then(res => res.json())
            .then(data => showUsers(data))

    }, [])
    return (
        <div className=' mx-24 my-5'>
            <p className='mb-7 text-center text-2xl font-semibold'>Our Happy Clients</p>
            <p className='text-2xl mb-4 text-center text-lime-500 font-extrabold'>
                Their Valuable reviews
            </p>
            <table class=" table w-full">
                <thead>
                    <tr>
                        <th>S.I. No</th>
                        <th>Email</th>
                        <th>Review</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <tr>
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.review}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div >
    );
};

export default ClientReview;