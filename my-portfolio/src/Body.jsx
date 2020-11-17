import circle from "./circle.png";
import editing from "./editing.gif";
import anime from "./anime.gif";
import giphy from "./giphy.gif";
function Body(){
return(
  <bodi>
  <div className="middle-container">
    <div className="profile">
      <img className="profil" src={circle} alt="profilepicture.jpg"/>
      <h2>Hello.</h2>
        <p className="intro">I'm a Game Developer and Animator.Also runs a smol <a className="footer-link1" href="https://www.youtube.com/channel/UCkTfygej8sKTSw8xDLAYttA?view_as=subscriber">Youtube channel</a>. I ♥ Video editing and Cinematography.</p>
    </div>
    <hr/>
    <div className="skills">
      <h2>My Skills.</h2>
      <div className="skill-row">
        <img className="game" src={giphy} alt="gamelogo"/>
        <h3>Game Developer</h3>
        <p>i started making my own game after high school, I'am nerd for games and game making from begining .</p>
      </div>

      <div className="skill-row">
        <img className="skate" src={anime} alt="anime"/>
        <h3>Animator</h3>
        <p>Anime! who doesn't like anime or animation right? everybody felt for that life cyle scene from movie Up! and 90s anime! that's how i fall in love with animation.</p>
      </div>
      <div className="skill-row">
        <img className="video" src={editing} alt="editing"/>
        <h3>Video Editing And Cinematography</h3>
        <p className="editingp">Who doesnt like the movie Avatar,1917,Inception. I really like the way they create make these movies those epic shots from Inception and video edting of 1917 which made it look like 1 cut movie! .</p>
      </div>
  </div>
  </div>
</bodi>
);
}
export default Body;
