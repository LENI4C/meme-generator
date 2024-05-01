const Main = () => {
    return (
        <section>
            <Form />
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
                    <input type="text" name="" id="" placeholder="first half of phrase"/>
                </div>

                {/* right input text-box */}
                <div className="input-text-box">
                    <label>Bottom text</label>
                    <input type="text" name="" id="" placeholder="last half of phrase"/>
                </div>
            </div>

            <button type="submit">Get a new meme image 🌄 </button>
        </form>
    );
};

export default Main;
