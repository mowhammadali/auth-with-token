import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
    const navigate = useNavigate();

    const goBack = () => navigate('/');

    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <section className='flex flex-col items-center gap-12'>
                <h1 className='text-4xl'>Page not found</h1>
                <button className="btn btn-active btn-primary text-light" onClick={goBack}>Go back</button>
            </section>
        </div>
    )
}