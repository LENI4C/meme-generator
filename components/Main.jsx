import React from "react";
import { useState, useEffect } from "react";
import Memedata from "../component data/memedata.js";

export const Form = () => {
    const [memeImgUrl, setmemeImgUrl] = useState(null);
    const [memeText, setMemeText] = useState({
        topText: "",
        bottomText: "",
    });

    const HandleMemeDisplay = (e) => {
        e.preventDefault();
        const memeId = Math.floor(Math.random() * Memedata.length);
        const imageUrl = Memedata[memeId].url;
        setmemeImgUrl(imageUrl);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMemeText((prevVal) => ({
            ...prevVal,
            [name]: value,
        }));
    };

    return (
        <main>
            <form action="" className="meme-data-form">
                <div className="text-box-cont">
                    {/* left input text-box */}
                    <div className="input-text-box">
                        <label>Top text</label>
                        <input
                            type="text"
                            name="topText"
                            value={memeText.topText}
                            onChange={handleChange}
                            id=""
                            placeholder="first half of phrase"
                        />
                    </div>

                    {/* right input text-box */}
                    <div className="input-text-box">
                        <label>Bottom text</label>
                        <input
                            type="text"
                            name="bottomText"
                            value={memeText.bottomText}
                            onChange={handleChange}
                            id=""
                            placeholder="last half of phrase"
                        />
                    </div>
                </div>

                <button type="submit" onClick={HandleMemeDisplay}>
                    Get a new meme image 🌄
                </button>
            </form>

            {memeImgUrl && (
                <div className="meme-image">
                    <img src={memeImgUrl} alt="Meme" />
                    <h2 className="top-meme-text">{memeText.topText}</h2>
                    <h2 className="bottom-meme-text">{memeText.bottomText}</h2>
                </div>
            )}
        </main>
    );
};

export default Form;
