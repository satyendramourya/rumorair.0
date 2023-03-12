import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCategory } from '../reduxManage/action';

const menu = <svg xmlns="http://www.w3.org/2000/svg" fill='white' width="28px" height="28px" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>

const close = <svg xmlns="http://www.w3.org/2000/svg" fill='white' width="28px" height="28px" viewBox="0 0 512 512"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" /></svg>


const Navbar = () => {
    const [active, setActive] = useState("")
    const [toggle, setToggel] = useState(false)
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        dispatch(setCategory(e));
        setToggel(false)
    }


    return (

        <div className='sticky z-50 top-0 bg-gray-900 border-b-2 flex items-center justify-around mx-auto py-6'>
            <p className='font-bold text-[24px] bg-gradient-to-r from-red-500 pl-1'>RumorAir</p>
            <div className=' hidden lg:flex items-center justify-center gap-12'>
                <button className=' font-semibold cursor-pointer hover:scale-125 ease px-2 py-1' onClick={() => handleSearch("General")}  > Home </button>
                <button className=' font-semibold cursor-pointer hover:scale-125 ease px-2 py-1' onClick={() => handleSearch("Sports")}> Sports </button>
                <button className=' font-semibold cursor-pointer hover:scale-125 ease px-2 py-1' onClick={() => handleSearch("Anime")}> Anime</button>
                <button className=' font-semibold cursor-pointer hover:scale-125 ease px-2 py-1' onClick={() => handleSearch("Technology")}>Technology</button>
            </div>

            <div className='sm:hidden flex flex-1 justify-end items-center absolute right-1 top-24' onClick={() => setToggel(!toggle)}>
                {!toggle ? menu : close}
            </div >

            <div className={`${!toggle ? 'hidden' : 'flex'} sm:hidden absolute right-9 top-16 flex flex-col bg-gradient-to-r z-30 from-slate-900 border-2 rounded-md`}>
                <button className=' font-semibold cursor-pointer hover:bg-gradient-to-r from-red-500 ease-in-out px-2 py-1' onClick={() => handleSearch("General")}  > Home </button>
                <button className=' font-semibold cursor-pointer hover:bg-gradient-to-r from-red-500 ease-in-out px-2 py-1' onClick={() => handleSearch("Sports")}> Sports </button>
                <button className=' font-semibold cursor-pointer hover:bg-gradient-to-r from-red-500 ease-in-out px-2 py-1' onClick={() => handleSearch("Anime")}> Anime</button>
                <button className=' font-semibold cursor-pointer hover:bg-gradient-to-r from-red-500 ease-in-out px-2 py-1' onClick={() => handleSearch("Technology")}>Technology</button>
            </div>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSearch(e.target[0].value);

                }}
                className='flex items-center justify-center gap-2'
            >


                <input
                    type="text"
                    placeholder='search..' className='rounded-md pl-4 py-2 ml-4::placeholder placeholder:text-gray-800 text-black'
                />
                <button type='submit'>
                    <svg height={24} width={24} fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM241 119c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l31 31H120c-13.3 0-24 10.7-24 24s10.7 24 24 24H238.1l-31 31c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l72-72c9.4-9.4 9.4-24.6 0-33.9l-72-72z" /></svg>
                </button>
            </form>

        </div>
    )
}

export default Navbar