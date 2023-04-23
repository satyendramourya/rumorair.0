import { React, useState } from "react";
import Axios from "axios";
import { FaSearch } from "react-icons/fa";
import { FcSpeaker } from "react-icons/fc";

const Dictionary = () => {
    // Setting up the initial states using react hook 'useState'

    const [data, setData] = useState("");
    const [searchWord, setSearchWord] = useState("");

    // Function to fetch information on button
    // click, and set the data accordingly
    function getMeaning() {
        Axios.get(
            `https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}`
        ).then((response) => {
            setData(response.data[0]);
        });
    }

    // Function to play and listen the
    // phonetics of the searched word
    function playAudio() {
        let audio = new Audio(data.phonetics[0].audio);
        audio.play();
    }
    return (
        <div className="mx-auto lg:px-32 max-w-2xl lg:max-w-5xl px-5 mt-10 ">
            <h2 className="font-bold text-gray-300 text-center text-3xl">Having difficulty with meaning, try this!</h2>
            <div className="flex flex-col items-start gap-3">
                <div className=" w-[100%] mt-6 flex items-center justify-center gap-2">
                    <input
                        className="rounded-md w-[80%] lg:pl-4 pl-2 lg:py-2 py-1 ml-4::placeholder ml-2 placeholder:text-gray-800 text-black"
                        type="text"
                        placeholder="Search..."
                        onChange={(e) => {
                            setSearchWord(e.target.value);
                        }}
                    />
                    <button
                        onClick={() => {
                            getMeaning();
                        }}
                    >
                        <FaSearch size="20px" />
                    </button>
                </div >
                {data && (
                    <div className=" flex flex-col gap-3">
                        <h2 className="flex flex-row items-center gap-2  text-gray-400 font-bold">
                            {data.word}{" "}
                            <button
                                onClick={() => {
                                    playAudio();
                                }}
                            >
                                <FcSpeaker size="20px" />
                            </button>
                        </h2>
                        {/* <h4>Parts of speech:</h4>
<p>{data.meanings[0].partOfSpeech}</p>
  */}
                        <h4 className=" text-gray-400 font-bold">Definition:</h4>
                        <p>{data.meanings[0].definitions[0].definition}</p>
                        {
                            data.meanings[0].definitions[0].example ?
                                <div>
                                    <h4 className=" text-gray-400 font-bold">Example:</h4>
                                    <p>{data.meanings[0].definitions[0].example}</p>
                                </div>
                                : null
                        }

                    </div>
                )}
            </div>
        </div>
    )
}

export default Dictionary