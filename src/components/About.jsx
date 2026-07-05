import { useApp } from "../context/AppContext";
import "./About.scss";

export default function About() {
  const { t } = useApp();

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t.about.title}</h2>
          <div className="section-line" />
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>{t.about.bio}</p>
          </div>

          <div className="about-photo-wrap">
            <div className="photo-card">
              {/* Декоративная рамка на заднем плане */}
              <div className="photo-decoration" />

              {/* Окно терминала */}
              <div className="terminal-window">
                {/* Шапка терминала с кнопками управления */}
                <div className="terminal-bar">
                  <div className="terminal-buttons">
                    <span className="btn-close"></span>
                    <span className="btn-minimize"></span>
                    <span className="btn-maximize"></span>
                  </div>
                  <div className="terminal-title">portfolio.react</div>
                </div>

                {/* Содержимое терминала */}
                <div className="terminal-body">
                  <div className="terminal-line">
                    <span className="terminal-prompt">kostya@portfolio:~$</span>{" "}
                    <span className="terminal-command">profile</span>
                  </div>

                  <div className="neofetch-content">
                    {/* ASCII Кот */}
                    <div className="neofetch-logo">
                      <span> /\_/\</span>
                      <span>( o.o )</span>
                      <span> &gt; ^ &lt; </span>
                    </div>

                    {/* Твоя системная инфа */}
                    <div className="neofetch-info">
                      <p><span className="info-key">NAME</span>: <span className="info-value">{t.hero.name}</span></p>
                      <p><span className="info-key">ROLE</span>: <span className="info-value">{t.about.terminal.role}</span></p>
                      <p><span className="info-key">LOC</span>: <span className="info-value">{t.about.terminal.location}</span></p>
                      <p><span className="info-key">STACK</span>: <span className="info-value">React, Vite, TS, SCSS</span></p>
                      <p><span className="info-key">STATUS</span>: <span className="info-value">{t.about.terminal.status}</span></p>
                    </div>
                  </div>

                  {/* Строка с мигающим курсором */}
                  <div className="terminal-line margin-top">
                    <span className="terminal-cursor">_</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}