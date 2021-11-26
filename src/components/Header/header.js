import React from "react";
import "./_header.scss";
import "./_navigation.scss";

const header = () => {
  return (
    <>
      <div className="navigation">
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="navi-toggle"
        />

        <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>

        <div className="navigation__background">&nbsp;</div>

        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item">
              <a href="/" className="navigation__link">
                News
              </a>
            </li>
            <li className="navigation__item">
              <a href="/" className="navigation__link">
                Reports
              </a>
            </li>
            <li className="navigation__item">
              <a href="/" className="navigation__link">
                Letters
              </a>
            </li>
            <li className="navigation__item">
              <a href="/" className="navigation__link">
                Subsidiaries
              </a>
            </li>
            <li className="navigation__item">
              <a href="/" className="navigation__link">
                About
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <header className="header">
        <div className="header__logo-box">
          <a href="/" className="lanpage-title">
            BERKSHIRE HATHAWAY
          </a>
        </div>

        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Risk comes from not</span>
            <span className="heading-primary--sub">
              knowing what you're doing
            </span>
          </h1>

          <a href="/" className="btn btn--white btn--animated">
            Read Owner's Manual
          </a>
        </div>
      </header>
    </>
  );
};

export default header;
