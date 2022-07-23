import { useEffect, useState } from "react";

const useAdmin = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost/index.php')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, products)

    return [products, setProducts];
}


export default useAdmin;