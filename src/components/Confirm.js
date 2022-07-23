import React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';

const Confirm = () => {
    let email = sessionStorage.getItem('email')
    let key = JSON.parse(email)

    let pckage = localStorage.getItem(key)
    pckage = JSON.parse(pckage)
    const { name, zone, spots, price, duration, image } = pckage
    const packageConfirm = () => {
        const confirmation = window.confirm('are you sure')
    }


    return (
        <div>
            <div className="card">
                <img className="top" src={image}></img>
                <div className='flex items-center text-2xl'><AiFillCheckCircle />{name} package</div>
                <div className='flex items-center text-2xl'><AiFillCheckCircle />{zone}</div>
                <div className="flex items-center text-2xl"><AiFillCheckCircle />{spots} spots</div>
                <div className="flex items-center text-2xl"><AiFillCheckCircle />{price} </div>
                <div className="flex items-center text-2xl"><AiFillCheckCircle />{duration}</div>
                <button onClick={packageConfirm} className="btn btn-wide mt-2">BOOK NOW</button>
            </div>
        </div>
    );
};

export default Confirm;