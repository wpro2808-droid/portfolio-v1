import { useApp } from "../context/AppContext";
import "./Hero.scss";

export default function Hero() {
  const { t } = useApp();

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="dot" />
          {t.hero.greeting}
        </div>

        <h1 className="hero-name">
          {t.hero.name}
        </h1>

        <div className="hero-role">
          <span className="role-prefix"> </span>
          {t.hero.role}
          <span className="cursor">_</span>
        </div>

        <p className="hero-subtitle">
          {t.hero.subtitle}
        </p>

        <div className="hero-btns">
          <a href="#projects" className="btn btn-primary">
            {t.hero.cta}
          </a>
          <a href="#contact" className="btn btn-ghost">
            {t.hero.ctaSecond}
          </a>
        </div>
        <div
          className="hero-scroll"
          onClick={() =>
            document.getElementById("skills")?.scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          <div className="scroll-line" />
          <span>↓ Scroll</span>
        </div>

      </div>

      <div className="hero-avatar-wrap">
        <div className="avatar-frame">
          <div className="avatar-placeholder">
            <img src="/avatar.jpg" alt="Konstantin Feoktistov" className="avatar-photo" />
          </div>
          <div className="avatar-ring" />
          <div className="avatar-tag tag-1">React</div>
          <div className="avatar-tag tag-2">JS</div>
          <div className="avatar-tag tag-3">Vite</div>
        </div>
      </div>
    </section>
  );
}
