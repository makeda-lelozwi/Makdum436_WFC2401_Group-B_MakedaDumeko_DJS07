import memesData from "../../../memesData";

export default function Meme() {

  let url;

  const getMemeImage = () => {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    url = memesArray[randomNumber].url;
  };
  
  return (
    <main>
      <form className="form">
        <div>
          <label htmlFor="top-text">Top Text</label>
          <input
            type="text"
            placeholder="Top text"
            className="form--input"
          ></input>
        </div>
        <div>
          <label htmlFor="">Bottom Text</label>
          <input
            type="text"
            placeholder="Bottom text"
            className="form--input"
          ></input>
        </div>
        <button className="form--button">Get a new meme image 🖼</button>
      </form>
    </main>
  );
}
