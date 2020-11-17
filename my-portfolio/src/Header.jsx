import gamepad from "./gamepad.png";
import ct from "./ct.gif"
import ufo from "./ufo.gif"
function Header() {
  return (
        <header className="header">
          <div className="top-container">
          <img className="top" src={gamepad} alt="gaming.png" />

             <h1>
               Hi! I'am Deepanshu.
             </h1>
            <h2>
               I'm a Game Developer.
            </h2>
          <img className="ufo" src={ufo} alt="ufo.gif" />
          <img className="ct" src={ct} alt="ct.gif" />
            </div>
    </header>
  );
}

export default Header;
