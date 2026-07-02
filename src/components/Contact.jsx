import { useState } from "react";
import { useApp } from "../context/AppContext";
import "./Contact.scss";

const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

export default function Contact() {
  const { t } = useApp();
  const c = t.contact;
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);

    const text =
      `Новая заявка с сайта%0A` +
      `Имя: ${encodeURIComponent(form.name)}%0A` +
      `Email: ${encodeURIComponent(form.email)}%0A` +
      `Сообщение: ${encodeURIComponent(form.message)}`;

    try {
      await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=${text}`
      );
      setSent(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 3000);
    } catch (err) {
      console.error("Ошибка отправки в Telegram:", err);
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{c.title}</h2>
          <div className="section-line" />
        </div>

        <div className="contact-top">
          <p className="contact-subtitle">{c.subtitle}</p>
          <p className="contact-or">{c.or}</p>
        </div>

        <div className="contact-grid">
          {/* Левая колонка: форма */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder={c.namePlaceholder}
              className="form-input"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder={c.emailPlaceholder}
              className="form-input"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder={c.messagePlaceholder}
              className="form-input form-textarea"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
            />
            <button type="submit" disabled={sending} className={`btn btn-primary send-btn ${sent ? "sent" : ""}`}>
              {sending ? "Отправка..." : sent ? "✓ Отправлено!" : c.send}
            </button>
          </form>

          {/* Правая колонка: карточки соцсетей */}
          <div className="contact-links">
            <div className="social-links">
              <a href="https://github.com/wpro2808-droid" target="_blank" rel="noreferrer" className="social-card">
                {/* твой SVG */}
                <div>
                  <span className="social-name">GitHub</span>
                  <span className="social-handle">@wpro2808-droid</span>
                </div>
              </a>

              <a href="https://t.me/Kostya2026" target="_blank" rel="noreferrer" className="social-card">
                <div>
                  <span className="social-name">Telegram</span>
                  <span className="social-handle">@Kostya2026</span>
                </div>
              </a>

              <a href="mailto:kostyafeoktistov13@gmail.com" className="social-card">
                {/* твой SVG */}
                <div>
                  <span className="social-name">Email</span>
                  <span className="social-handle">kostyafeoktistov13@gmail.com</span>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/костя-феоктистов-610b6141a/"
                target="_blank"
                rel="noreferrer"
                className="social-card"
              >
                <div>
                  <span className="social-name">LinkedIn</span>
                  <span className="social-handle">Konstantin Feoktistov</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}