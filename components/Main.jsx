import React from "react";
import Memedata from "../component data/memedata.js";
const importedMemeData = Memedata;

export const Form = () => {
    const [memeImg, setImageUrl] = React.useState("");

    const HandleMemeDisplay = (e) => {
        e.preventDefault();
        const memeId = Math.floor(Math.random() * importedMemeData.length);
        const imageUrl = importedMemeData[memeId].url;
        setImageUrl(imageUrl);
        return <img src={memeImg} alt="meme-image" />;
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
                            name=""
                            id=""
                            placeholder="first half of phrase"
                        />
                    </div>

                    {/* right input text-box */}
                    <div className="input-text-box">
                        <label>Bottom text</label>
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="last half of phrase"
                        />
                    </div>
                </div>

                <button type="submit" onClick={HandleMemeDisplay}>
                    Get a new meme image 🌄
                </button>
            </form>
        </main>
    );
};

export default Form;
