import React from 'react'

const Header = () => {
    return (
        <div className='flex items-end justify-between'>
            <h1 className='text-2xl font-medium'>Hello, <br /> <span className='text-3xl font-semibold'>Sahil 👋</span></h1>
            <button className='bg-red-500 px-5 py-2 rounded-lg text-lg font-medium'>Login</button>
        </div>
    )
}

export default Header