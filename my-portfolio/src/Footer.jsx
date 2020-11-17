import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import twitch_icon from "./twitch_icon.svg";
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="bottom-container">
     <a class="footer-link" href="https://www.linkedin.com/in/deepanshu-sonwane-128a1a166/"><LinkedInIcon/>LinkedIn</a>
        <a className="footer-link" href="https://twitter.com/"><TwitterIcon/>Twitter</a>
              <a className="footer-link" href="https://www.youtube.com/channel/UCkTfygej8sKTSw8xDLAYttA?view_as=subscriber"><YouTubeIcon/>Youtube</a>
            <a className="footer-link" href="https://www.youtube.com/channel/UCkTfygej8sKTSw8xDLAYttA?view_as=subscriber"><img className="twicth" src={twitch_icon} alt="twitch icon"/>Twitch</a>
        <p className="copy">© Deepanshu Sonwane {year}</p>
      </div>

    </footer>
  );
}

export default Footer;
