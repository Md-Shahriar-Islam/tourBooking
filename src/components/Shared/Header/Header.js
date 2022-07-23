import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import useAdmin from '../../admin/useAdmin'
import Cookies from 'js-cookie';

const Header = () => {
    const navigate = useNavigate()
    const [user] = useAuthState(auth);
    const [a, setA] = useAdmin()
    let cookie = Cookies.get('login')
    const logout = () => {
        signOut(auth);
        navigate("/home")
        sessionStorage.clear()
    };
    let r
    let normal
    if (user) {
        // console.log(user?.email)
        sessionStorage.setItem('email', JSON.stringify(user?.email))
        let search = sessionStorage.getItem('email')
        search = JSON.parse(search)
        // console.log('search', search)
        const c = a.find(user => search == user?.email)
        // console.log(c)
        let role = c?.role

        if (role == 'admin') {
            sessionStorage.setItem('role', 'admin')
            r = 1

        }
        else {
            sessionStorage.setItem('role', 'user')
            normal = 1
        }
    }
    else {
        sessionStorage.clear()
    }


    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/home">HOME</Link></li>
                            <li><Link to="/show">USERS</Link></li>
                            <li><Link to="/client">REVIEWS</Link></li>
                            {
                                r ?
                                    <li><Link to="/create">ADD PACKAGE</Link></li>
                                    :
                                    <></>
                            }
                            {
                                normal ?
                                    <li><Link to="/review">ADD Review</Link></li>
                                    :
                                    <></>
                            }
                            {
                                user ?
                                    <>
                                        <li className="mt-3 mx-2 uppercase">{user.displayName}</li>
                                        <li className="mt-3 uppercase">{user.email}</li>
                                        <button onClick={logout} class="btn btn-ghost font-normal text-red-600">LOGOUT</button>

                                    </>
                                    :
                                    <>
                                        <li><Link to="/login">LOGIN</Link></li>
                                        <li><Link to="/registartion">REGISTER</Link></li>
                                    </>
                            }

                        </ul>
                    </div>
                    <Link to='/home' className="btn btn-ghost normal-case text-xl">TOURHOUSE</Link>
                </div>
                <div className="navbar-center hidden  lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to="/home">HOME</Link></li>
                        <li><Link to="/show">USERS</Link></li>
                        <li><Link to="/client">REVIEWS</Link></li>
                        {
                            r ?
                                <li><Link to="/create">ADD PACKAGE</Link></li>
                                :
                                <></>
                        }
                        {
                            normal ?
                                <li><Link to="/review">ADD Review</Link></li>
                                :
                                <></>
                        }
                        {
                            user ?
                                <>
                                    <li className="mt-3 mx-2 uppercase">{user.displayName}</li>
                                    <li className="mt-3 uppercase">{user.email}</li>
                                    <button onClick={logout} class="btn btn-ghost font-normal text-red-600">LOGOUT</button>

                                </>
                                :
                                <>
                                    <li><Link to="/login">LOGIN</Link></li>
                                    <li><Link to="/registartion">REGISTER</Link></li>
                                </>
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="/package" className="btn">OUR PACKAGES</Link>

                </div>
            </div>
        </div>
    );
};

export default Header;