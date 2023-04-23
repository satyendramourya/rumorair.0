import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCategory } from '../reduxManage/action';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";


const menu = <svg xmlns="http://www.w3.org/2000/svg" fill='white' width="28px" height="28px" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>

const close = <svg xmlns="http://www.w3.org/2000/svg" fill='white' width="28px" height="28px" viewBox="0 0 512 512"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" /></svg>


const Navbar = () => {
    const navigate = useNavigate();
    const [toggle, setToggel] = useState(false)
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        dispatch(setCategory(e));
        setToggel(false)
        navigate("/");
    }


    return (

        <div className='sticky z-50 top-0 bg-gray-900 border-b-2 flex items-center justify-around mx-auto py-6'>
            <p className='font-bold rounded-md lg:text-[24px] text-[20px]  bg-gradient-to-r from-red-500 pl-1' href="/" >RumorAir</p>
            <div className=' hidden lg:flex items-center justify-center gap-12'>
                <button className=' font-semibold cursor-pointer hover:scale-125 ease px-2 py-1' onClick={() => handleSearch("General")}  > Home </button>
                <button className=' font-semibold cursor-pointer hover:scale-125 ease px-2 py-1' onClick={() => handleSearch("Sports")}> Sports </button>
                <button className=' font-semibold cursor-pointer hover:scale-125 ease px-2 py-1' onClick={() => handleSearch("Anime")}> Anime</button>
                <button className=' font-semibold cursor-pointer hover:scale-125 ease px-2 py-1' onClick={() => handleSearch("Technology")}>Technology</button>
            </div>

            <div className='sm:hidden flex flex-1 justify-end items-center absolute right-1 top-24' onClick={() => setToggel(!toggle)}>
                {!toggle ? menu : close}
            </div >

            <div className={`${!toggle ? 'hidden' : 'flex'} sm:hidden absolute right-9 top-16 bg-gray-900  flex flex-col z-30  border-none w-[100%] gap-2  rounded-md`}>
                <button className=' font-semibold cursor-pointer hover:bg-gradient-to-r from-red-500 ease-in-out px-2 py-3' onClick={() => handleSearch("General")}  > Home </button>
                <button className=' font-semibold cursor-pointer hover:bg-gradient-to-r from-red-500 ease-in-out px-2 py-3' onClick={() => handleSearch("Sports")}> Sports </button>
                <button className=' font-semibold cursor-pointer hover:bg-gradient-to-r from-red-500 ease-in-out px-2 py-3' onClick={() => handleSearch("Anime")}> Anime</button>
                <button className=' font-semibold cursor-pointer hover:bg-gradient-to-r from-red-500 ease-in-out px-2 py-3' onClick={() => handleSearch("Technology")}>Technology</button>
            </div>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSearch(e.target[0].value);

                }}
                // className='flex items-center justify-center gap-2 bg-red-300'
                className='flex flex-row  justify-center items-center gap-2'
            >


                <input
                    type="text"
                    placeholder='search..' className=' w-[80%] rounded-md lg:pl-4 pl-2 lg:py-2 py-1 ml-4::placeholder ml-2 placeholder:text-gray-800 text-black'
                />
                <button type='submit'>
                    <FaSearch size="20px" />
                </button>
            </form>

        </div>
    )
}

export default Navbar