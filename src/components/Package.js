import React from 'react';
import "./Package.css"
import { AiFillCheckCircle } from 'react-icons/ai';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { useNavigate } from 'react-router-dom'

const Package = (props) => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate()

    const { image, name, zone, spots, price, duration } = props.package
    const packageSelect = () => {
        if (user) {
            let email = sessionStorage.getItem('email')
            let key = JSON.parse(email)
            localStorage.setItem(key, JSON.stringify(props.package))
            navigate('/confirm')
        }
        else {
            navigate('/login')

        }

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
                <button onClick={packageSelect} className="btn btn-wide mt-2">BOOK NOW</button>
            </div>

        </div>
    );
};

export default Package;