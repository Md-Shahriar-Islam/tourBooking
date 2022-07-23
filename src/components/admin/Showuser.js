import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom'

const Showuser = () => {
    const [users, showUsers] = useState([])
    useEffect(() => {
        fetch('http://localhost/index.php')
            .then(res => res.json())
            .then(data => showUsers(data))

    }, [])
    return (
        <div className=' mx-24 my-5'>
            <p className='mb-7 text-center text-2xl font-semibold'>Our Happy Clients</p>
            <p className='text-2xl mb-4 text-center'>
                <Link to='/registration' className='text-lime-500 font-extrabold'>Come  and lose yourself in the beauty of nature!</Link></p>
            <table class=" table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>User-Name</th>
                        <th>User E-mail</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <tr>
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div >
    );
};

export default Showuser