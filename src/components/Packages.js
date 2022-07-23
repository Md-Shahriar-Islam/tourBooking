import React, { useState } from 'react';
import { useEffect } from 'react';
import Package from './Package';

const Packages = () => {
    const [packages, setPackages] = useState([])
    useEffect(() => {
        fetch('http://localhost/package.php')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])
    return (
        <div clasName="flex justify-content-center">
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 m-14'>
                {
                    packages.map(pckage => <Package key={pckage.id} package={pckage}></Package>)
                }

            </div>
        </div>
    );
};

export default Packages;