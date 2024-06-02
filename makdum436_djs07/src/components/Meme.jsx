import React from "react";
//import memesData from "../memesData";

/**
 * Renders a Meme component that allows the user to generate and display custom memes.
 *
 * @return {JSX.Element} The rendered Meme component.
 */
export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = React.useState([]);

  /**
 * Asynchronously fetches memes data from the ImgFlip API and returns it as a JSON object.
 *
 * @return {Promise<Object>} A Promise that resolves to the memes data as a JSON object.
 */
  React.useEffect( () => {
    const getData = async()=>{
      const res = await fetch("https://api.imgflip.com/get_memes");
     return await res.json();
    }
     getData().then((data)=>{setAllMemes(data.data.memes);})
    
  }, []);

  /**
 * Retrieves a random meme image from the API and updates the state with the new image URL.
 *
 * @return {void} This function does not return anything.
 */
  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }
/**
 * Updates the state of the meme object with the new value of the input field.
 *
 * @param {Event} event - The event object containing information about the input field.
 * @return {void} This function does not return anything.
 */
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
