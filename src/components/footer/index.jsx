import { ReactComponent as FacebookLogoSVG } from "../../assets/facebook.svg";
import { ReactComponent as InstagramLogoSVG } from "../../assets/instagram.svg";
import { ReactComponent as TwitterLogoSVG } from "../../assets/twitter.svg";
import { ReactComponent as YoutubeLogoSVG } from "../../assets/youtube.svg";

const swLinks = [
    {
      url: "https://www.facebook.com/StarWars",
      name: "Facebook",
    },
    {
      url: "https://www.instagram.com/starwars/",
      name: "Instagram",
    },
    {
      url: "https://twitter.com/starwars",
      name: "Twitter",
    },
    {
      url: "https://www.youtube.com/user/starwars",
      name: "Youtube",
    },
  ];

export const Footer = () => {
    return (
      <footer className="footer">
        <div className="links-layout-footer">
            {swLinks.map((link) => (
                <a
                    key={link.name}
                    className="link"
                    href={link.url}
                    target="_blank"
                    alt={link.name}
                    rel="noreferrer"
                >
                    {link.name}
                </a>
            ))}
        </div>

      </footer>
    )
}