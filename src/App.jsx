import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="app-body">
      <div className="app-table">
        <div className="app-table-list">
          <h1 className="first-title">DISCORD.BAND</h1>
          <h2 className="second-title">
            FROM IDEA TO REALIZATION IS JUST ONE STEP.
          </h2>
          <div className="app-projects">
            <h3 className="third-title">PROJECTS</h3>
            <div className="projects-hrefs">
              <a className="projects-href" href="https://discordserver.info/">
                DiscordServer
              </a>
              <a className="projects-href" href="https://discordtools.cc/">
                DTools
              </a>
              <a className="projects-href" href="https://findteam.cc/">
                FindTeam
              </a>
              <a className="projects-href" href="https://t.me/unknownqqw">
                Contact us on Telegram
              </a>
            </div>
          </div>
        </div>
        <div className="text-with-image">
          <img
            src="/images/anime-girl.png"
            alt="anime-girl"
            className="img-anime-girl"
          />
        </div>
      </div>
    </div>
  );
};
export default App;
