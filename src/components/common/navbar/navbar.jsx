import React, { useCallback } from 'react';
import Modal from '../modal/modal';
import { NavLink } from 'react-router-dom';
import { FaPowerOff } from "react-icons/fa6";
import { logoutService } from '../../../services/services';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();

    const logout = useCallback(async () => {
        try {
            const token = localStorage.getItem('refresh-token');
            await logoutService({token});
        }
        catch (error) {}
        finally {
            localStorage.clear();
            navigate('/login')
        }
    } , [])
   
    return (
        <div className="w-full h-20 bg-primary shadow-md flex justify-between items-center text-light px-8">
            <section className='flex text-lg justify-between items-center gap-8'>
                <NavLink to="/" className={({isActive}) => (isActive && "text-success text-2xl")}>Products</NavLink>
                <NavLink to="/profile" className={({isActive}) => (isActive && "text-success text-2xl")}>Profile</NavLink>
            </section>
            <section className="flex items-center gap-8">
                <FaPowerOff className='text-2xl cursor-pointer' onClick={()=>document.getElementById('logout_modal').showModal()}/>
                <h1 className='text-2xl font-bold'>Shop</h1>
            </section>
            <Modal func={logout}/>
        </div>
    )
}