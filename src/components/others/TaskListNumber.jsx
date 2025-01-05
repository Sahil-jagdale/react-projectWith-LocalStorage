import React from 'react'

const TaskListNumber = () => {
    return (
        <div className='flex screen justify-between gap-5 mt-10'>
            <div className='w-[45%] rounded-xl bg-red-400 py-8 px-10'>
                <h2 className='text-3xl font-semibold'>0</h2>
                <h3 className='text-xl font-medium'>New task</h3>
            </div>
            <div className='w-[45%] rounded-xl bg-blue-400 py-8 px-10'>
                <h2 className='text-3xl font-semibold'>0</h2>
                <h3 className='text-xl font-medium'>New task</h3>
            </div>
            <div className='w-[45%] rounded-xl bg-yellow-400 py-8 px-10'>
                <h2 className='text-3xl font-semibold'>0</h2>
                <h3 className='text-xl font-medium'>New task</h3>
            </div>
            <div className='w-[45%] rounded-xl bg-green-400 py-8 px-10'>
                <h2 className='text-3xl font-semibold'>0</h2>
                <h3 className='text-xl font-medium'>New task</h3>
            </div>
        </div>
    )
}

export default TaskListNumber