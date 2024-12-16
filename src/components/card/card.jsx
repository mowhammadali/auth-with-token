import React from 'react'

export default function Card({ name , image , price }) {
    return (
        <div className='w-[250px] h-[450px] shadow-2xl rounded-2xl flex flex-col justify-between overflow-hidden'>
            <section className='w-full h-[70%]'>
                <img className='w-full h-full object-cover' src={`./assets/images/${image}.jpg`} alt={name}/>
            </section>
            <section className='w-full h-[30%] flex flex-col justify-end p-4'>
                <h2 className='text-primary text-2xl font-bold'>{name}</h2>
                <p className='text-primary font-semibold'>price: {price}$</p>
            </section>
        </div>
    )
}