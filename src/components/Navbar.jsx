import React from 'react';
import { useDispatch } from 'react-redux';
import { setCategory } from '../reduxManage/action';


const Navbar = () => {
    // const [search, setSearch] = useState('');
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        dispatch(setCategory(e));
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

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSearch(e.target[0].value);

                }}
                className='flex items-center justify-center gap-2'
            >


                <input
                    type="text"
                    placeholder='search..' className='rounded-md pl-4 ml-4::placeholder placeholder:text-gray-800 text-black'
                />
                <button type='submit'>
                    <svg height={24} width={24} fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM241 119c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l31 31H120c-13.3 0-24 10.7-24 24s10.7 24 24 24H238.1l-31 31c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l72-72c9.4-9.4 9.4-24.6 0-33.9l-72-72z" /></svg>
                </button>
            </form>

        </div>
    )
}

export default Navbar