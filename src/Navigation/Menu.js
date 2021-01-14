/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import myImg from "./suleymantasci.jpg";
import "./Menu.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Menu extends Component {
  render() {
    return (
      <div className="menuContainer">
        <img className="img1" src={myImg} alt="Süleyman TAŞÇI"></img>
        <h2 className="myTitle">
          <a href="/">Süleyman TAŞÇI</a>
        </h2>
        <ul className="menuItems">
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              Yetenek Ve Tecrübelerim
            </Link>
          </li>
          <li>
            <Link className="link" to="/portfolio">
              Portföy
            </Link>
          </li>
          <li>
            <Link className="link" to="/contact">
              İletişim
            </Link>
          </li>
        </ul>
        <ul className="menuSocials">
          <li>
            <a href="https://twitter.com/suleymntasci" target="_blank">
              <FontAwesomeIcon className="icons" icon={["fab", "twitter"]} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/suleymntasci/" target="_blank">
              <FontAwesomeIcon
                className="icons"
                icon={["fab", "linkedin-in"]}
              />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/suleymntasci/" target="_blank">
              <FontAwesomeIcon className="icons" icon={["fab", "instagram"]} />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
