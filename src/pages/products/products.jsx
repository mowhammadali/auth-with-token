import React , {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import { getProdcutsService } from "../../services/services";

export default function Products() {
    const [products , setProducts] = useState([]);
    const [isPending , setIsPending] = useState(true);
    const [errorMessage , setErrorMessage] = useState("");

    const getProducts = async () => {
        try {
            const { data } = await getProdcutsService();
        }
        catch (error) {

        }
        finally {

        }
    }

    useEffect(() => {

    } , [])
    return (
        <div>
            <NavLink to="/profile">Profile</NavLink>
        </div>
    );
}