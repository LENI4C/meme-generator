import memedata from "../component data/memedata";

const Main = () => {
    return (
        <section>
            <Form />
            <Meme />
        </section>
    );
};

export const Form = () => {
    return (
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

            <button type="submit" onClick={Meme}>
                Get a new meme image 🌄
            </button>
        </form>
    );
};

const Meme = (e) => {
    e.preventDefault();
    const renderMeme = memedata.map((data) => (
        <Memeinfo key={data.id} {...data} />
    ));
    return (
        <div>
            {renderMeme}
        </div>
    );
};

const Memeinfo = ({url}) => {
    return <img src={url} alt="meme-image" />;
};

export default Main;
