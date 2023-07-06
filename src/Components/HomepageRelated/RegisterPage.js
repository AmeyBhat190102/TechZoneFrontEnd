import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'


const RegisterPage = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({ name: '', email: '', password: '' });
    const [pwd, setpwd] = useState('')

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const repasswordChange = (e) => {
        setpwd(e.target.value);
    }
    const register = async (e) => {
        e.preventDefault();
        if (user.password === pwd) {
            fetch('https://techzonebackenddeploy-q6sk.onrender.com/api/makeNewUserEntry', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log('Form data submitted successfully:', data);
                })
                .catch((error) => {
                    console.error('Error submitting form data:', error);
                });
            navigate('/');
        }
        else {
            alert("Re-Enter password");
        }

    };
    return (
        <div className=" bg-gray-50 min-h-screen flex items-center justify-center">
            <div className="bg-cyan-100 flex rounded-2xl shadow-lg max-w-3xl  items-center">
                <img className="hidden md:block rounded-tl-2xl rounded-bl-2xl md:w-1/2 h-screen" src="https://images.unsplash.com/photo-1564801720666-83b2d7a3de73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" />
                <div className='md:w-1/2 px-8 md:px-16 bg-gray-50 rounded-xl mx-5 py-3 flex flex-col'>
                    <h1 className='flex justify-center  items-center font-bold text-xl mb-1'>Register</h1>
                    <input className="px-2 py-3 my-2 rounded-xl border " type="text" name="name" value={user.name} placeholder="Your Name" onChange={handleChange}></input>
                    <input className="px-2 py-3 my-2 rounded-xl border" type="email" name="email" value={user.email} placeholder="Your Email" onChange={handleChange}></input>
                    <input className="px-2 py-3 my-2 rounded-xl border" type="password" name="password" value={user.password} placeholder="Password" onChange={handleChange}></input>
                    <input className="px-2 py-3 my-2  rounded-xl border" type="password" name="repassword" value={user.repassword} placeholder="Re-enter password" onChange={repasswordChange}></input>
                    <button className="button flex justify-center items-center bg-black text-white my-2 rounded-xl  py-2 hover:scale-105 duration-10" onClick={register} >Register</button>
                    <div className='flex justify-center  items-center  text-s py-4 text-[#020202]'>or</div>
                    <button className="py-2 px-5 bg-blue-100 border rounded-xl hover:scale-110 duration-300" onClick={() => navigate("/")}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage;

    