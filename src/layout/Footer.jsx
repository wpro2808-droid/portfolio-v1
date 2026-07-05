import { useApp } from "../context/AppContext";
import "./Footer.scss";

export default function Footer() {
  const { t } = useApp();
  return (
    <footer className="footer">
      <span className="footer-copy">
        © {new Date().getFullYear()} Konstantin Feoktistov. {t.footer.rights}.
      </span>
    </footer>
  );
}
