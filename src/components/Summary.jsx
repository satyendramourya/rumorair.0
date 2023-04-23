import React from 'react'
import { getSummary } from "../services/newsData";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Dictionary from './Dictionary';
import Spinner from "./Spinner";


const Summary = () => {

    const { url } = useParams();
    const [data, setData] = useState('');

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchSummary = async () => {
            setLoading(true);
            const news = await getSummary(url);
            setData(news.summary);
            setLoading(false);
        }
        fetchSummary();
    }, [url])

    return (
        <div className='mx-auto lg:px-16 px-5 mt-10'>

            <div className='flex flex-col gap-3'>
                <h2 className='font-bold text-gray-300 text-4xl'>Article <span >Summary </span></h2>

            </div>
            {
                loading ? <div>
                    <Spinner />
                    <h2 className='mt-4 text-center'>Please Wait, Too many users requesting...</h2>
                </div> : <p>
                    {
                        data
                    }
                </p>
            }
            <div className='mt-10'>
                {
                    !loading ? <Dictionary /> : null
                }
            </div>
        </div>
    )
}

export default Summary;