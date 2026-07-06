import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

function MainNavbar() {
  return (
    <>
      <style>{navbarStyles}</style>
      <nav className="site-header">
        <div className="site-header-brand-group">
          <Link to="/">
            <img src={logo} alt="Logo" className="site-header-logo-image" />
          </Link>
          <div className="site-header-nav-links">
            <NavLink to="/introduction" className="site-header-nav-link">
              Introduction
            </NavLink>
            <NavLink to="/components" className="site-header-nav-link">
              Components
            </NavLink>
            <NavLink to="/categories" className="site-header-nav-link">
              Categories
            </NavLink>
            <NavLink to="/favorites" className="site-header-nav-link">
              Favorites
            </NavLink>
            <NavLink to="/colorscombos" className="site-header-nav-link">
              Colors Combos
            </NavLink>
            <NavLink to="/icons" className="site-header-nav-link">
              Icons
            </NavLink>
          </div>
        </div>

        <div className="site-header-actions">
          <div className="site-header-search-bar">
            <input
              type="text"
              placeholder="Search..."
              className="site-header-search-input"
            />
          </div>

          <a
            href="put your github link here"
            target="_blank"
            rel="noopener noreferrer"
            className="site-header-github-link"
            aria-label="GitHub"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.02 2.89-.02 3.29 0 .32.22.7.83.58C20.56 21.79 24 17.29 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>

          <a
            href="put your LinkedIn link here"
            target="_blank"
            rel="noopener noreferrer"
            className="site-header-linkedin-link"
            aria-label="LinkedIn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
            </svg>
          </a>
        </div>
      </nav>
    </>
  );
}
const navbarStyles = `
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  background-color: transparent;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 14px 94px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.site-header-brand-group {
  display: flex;
  align-items: center;
  gap: 90px;
}

.site-header-logo-image {
  width: 53px;
  height: 53px;
  object-fit: contain;
}

.site-header-nav-links {
  display: flex;
  align-items: center;
  gap: 24px;
}

.site-header-nav-link {
  color: #b4b4b4;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  transition: color 0.15s ease;
}

.site-header-nav-link:hover {
  color: #ffffff;
}

.site-header-nav-link.active {
  color: #ffffff;
}

.site-header-actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
}

.site-header-search-bar {
  display: flex;
  align-items: center;
  background-color: #161616;
  border: 2px solid #2a2a2a;
  border-radius: 20px;
  padding: 9px 19px;
  gap: 10px;
  margin-left: 30px;
}

.site-header-search-input {
  background: transparent;
  border: none;
  outline: none;
  color: #e5e5e5;
  font-size: 14px;
  width: 140px;
}

.site-header-search-input::placeholder {
  color: #6b6b6b;
}

.site-header-github-link {
  color: #b4b4b4;
  margin-left: 400px;
  transition: color 0.15s ease;
}

.site-header-github-link:hover {
  color: #ffffff;
}

.site-header-linkedin-link {
  color: #b4b4b4;
  margin-left: 16px;
  transition: color 0.15s ease;
}

.site-header-linkedin-link:hover {
  color: #ffffff;
}

.site-header-theme-toggle-button {
  position: relative;
  width: 40px;
  height: 22px;
  border-radius: 999px;
  border: none;
  background-color: #2a2a2a;
  cursor: pointer;
  padding: 2px;
  transition: background-color 0.2s ease;
}

.site-header-theme-toggle-button.is-dark {
  background-color: #e5e5e5;
}

.site-header-theme-toggle-knob {
  display: block;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: #0a0a0a;
  transition: transform 0.2s ease;
}

.site-header-theme-toggle-button.is-dark .site-header-theme-toggle-knob {
  transform: translateX(18px);
}
`;

export default MainNavbar;
