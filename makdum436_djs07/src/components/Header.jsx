/**
 * Renders the Header component which displays the title and project information of the Meme Generator application.
 *
 * @return {JSX.Element} The Header component.
 */
export default function Header() {
  return (
    <header className="header">
      <img src="./images/troll-face.png" className="header--image"></img>
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">React Course - Project 3</h4>
    </header>
  );
}
