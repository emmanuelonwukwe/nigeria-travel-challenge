import React from "react";
import { Link } from "react-router-dom";
import ".././App.css";
import emma from "../emma.jpg";

const Home = () => {
  return (
    <section className="about">
      [UPDATE] Thank you so much for making this personal project go viral like
      crazy! If you liked this project and want it to be accessible in the
      future as you explore more of the Nigerian, please consider donating by
      reaching me below:
      <br></br>
      <br></br>
      <div className="donate-button">
        <form action="tel:+2349060044077" method="post" target="_top">
          <img
            alt=""
            border="0"
            src="https://www.paypal.com/en_PH/i/scr/pixel.gif"
            width="1"
            height="1"
          />
          <button type="submit">Donate Now</button>
        </form>
      </div>
      <h2>My Nigeria Travel Level</h2>
      <div id="ezoic-pub-ad-placeholder-106"> </div>
      This simple web app helps you visualize how well-travelled you are in the
      Nigeria.
      <br></br>
      <br></br>
      This project was inspired by almighty God and was built using ReactJS. You
      can view the source code
      <div
        className="link"
        onClick={() =>
          window.open(
            "https://github.com/emmanuelonwukwe/nigeria-travel-challenge",
          )
        }
      > here↗
      </div>
      .<h2>How To Use</h2>
      The map is divided into the 36* Nigeria provinces. All you have to do is
      to click on a province and choose the appropriate level of travel.
      <br></br>
      <br></br>
      <div id="ezoic-pub-ad-placeholder-108"> </div>
      Here&apos;s what each level represents:
      <br></br>
      <br></br>
      <li className="bullet">
        <b>Lived there</b> - you spent a significant portion of your life in
        that area.
      </li>
      <li className="bullet">
        <b>Stayed there</b> - you slept at least a night in that area.
      </li>
      <li className="bullet">
        <b>Visited there</b> - you spent some hours exploring the area.
      </li>
      <li className="bullet">
        <b>Alighted there</b> - you just dropped off for a short stopover,
        layover, or transfer.
      </li>
      <li className="bullet">
        <b>Passed there</b> - you passed by that area but did not set foot.
      </li>
      <li className="bullet">
        <b>Never been there</b> - you need to travel there soon.
      </li>
      <br></br>
      <div id="ezoic-pub-ad-placeholder-109"> </div>
      Your total score will be updated accordingly. You can then save the image
      and share on your social media.
      <br></br>
      <br></br>
      <div id="ezoic-pub-ad-placeholder-107"> </div>
      Click{" "}
      <Link className="link" to={"/map"}>
        here
      </Link>{" "}
      to view the map. Enjoy!
      <br></br>
      <br></br>
      <section className="asterisk">
        *Technically, there are only 82 provinces. Metro Manila is an
        administrative region.
      </section>
      <div id="ezoic-pub-ad-placeholder-104"> </div>
      <h2>About Me</h2>
      <img className="dp" src={emma} alt="me" />
      Hello there! My name is Emmanuel Onwukwe a Nigerian software engineer
      currently based in Federal Capital Territory, Abuja, Nigeria. Unfortunately, my Nigeria travel level
      is only 54.
      <br></br>
      <br></br>If you have any comments or if you want to
      contribute to this project, please do reach out!
      <br></br>
      <br></br>
      <div id="ezoic-pub-ad-placeholder-111"> </div>
      Check out my socials:
      <br></br>
      <div
        className="link"
        onClick={() => window.open("https://web.facebook.com/profile.php?id=100092967468832")}
      >
        Facebook↗
      </div>
      <br></br>
      <div
        className="link"
        onClick={() => window.open("https://www.linkedin.com/in/emmanuel-onwukwe-4a732b279")}
      >
        LinkedIn↗
      </div>
      .<br></br>
      <br></br>
      If you liked this project, join me on github.
      <br></br>
      <br></br>
      <div id="ezoic-pub-ad-placeholder-102"> </div>
      <div className="flag-counter">
        <a href="https://info.flagcounter.com/s6dX">
          <img
            src="https://s11.flagcounter.com/count2/s6dX/bg_FFFFFF/txt_000000/border_CCCCCC/columns_4/maxflags_16/viewers_3/labels_0/pageviews_1/flags_0/percent_0/"
            alt="Flag Counter"
            border="0"
          />
        </a>
      </div>
    </section>
  );
};

export default Home;
