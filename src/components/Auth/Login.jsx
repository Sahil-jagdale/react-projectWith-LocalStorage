import React, { useState } from 'react'

const Login = ({ handleLogin }) => {

    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        console.log("email is", Email);
        console.log("password is", Password);
        handleLogin(Email, Password)
        setEmail("")
        setPassword("")
    }
    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className="border-2  border-emerald-600 rounded-xl p-20">
                <form
                    onSubmit={(e) => {
                        submitHandler(e)
                    }}
                    className='flex flex-col items-center justify-center'>
                    <input
                        value={Email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        required
                        className=' outline-none bg-transparent border-2 border-emerald-600 px-5 py-3 text-xl rounded-full placeholder:text-grey-400' type="email" placeholder='Enter your Email' />
                    <input
                        value={Password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        required
                        className=' outline-none bg-transparent border-2 border-emerald-600 px-5 py-3 text-xl rounded-full placeholder:text-grey-400 mt-3' type="password" placeholder='Enter Password' />
                    <button className=' outline-none border-none bg-emerald-600 px-5 py-2 text-xl rounded-full placeholder:text-grey-400 mt-6'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login