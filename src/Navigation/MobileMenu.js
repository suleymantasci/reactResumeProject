import React, { Component } from "react";
import myImg from "./suleymantasci.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class MobileMenu extends Component {
  state = {
    _toggle: false,
  };

  toggle = () => {
    this.setState({
      _toggle: !this.state._toggle,
    });
  };

  closeMenu = () => {
    this.setState({_toggle: false})
  }
  render() {
    return (
      <div className="menuMargin">
        <div className="mobileMenuContainer">
          <div className="mobileMenu">
            <img className="imgMobile" src={myImg} alt="Süleyman TAŞÇI"></img>
            <h2 className="myTitleMobile">
              <a href="/">Süleyman TAŞÇI</a>
            </h2>
          </div>
          {this.state._toggle && <SidebarMenu closeMenu={this.closeMenu} />}

          <button className="_button" onClick={this.toggle}>
            <FontAwesomeIcon icon="bars" />
          </button>
        </div>
      </div>
    );
  }
}

class SidebarMenu extends Component {
  render() {
    return (
      <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition="linear"
        className="toggleMenu"
      >
        <img className="img1" src={myImg} alt="Süleyman TAŞÇI"></img>
        <h2 className="myTitle">
          <Link onClick={() => this.props.closeMenu()} to="/">Süleyman TAŞÇI</Link>
        </h2>
        <ul className="menuItems">
          <li>
            <Link onClick={() => this.props.closeMenu()} className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={() => this.props.closeMenu()} className="link" to="/about">
              Yetenek Ve Tecrübelerim
            </Link>
          </li>
          <li>
            <Link onClick={() => this.props.closeMenu()} className="link" to="/portfolio">
              Portföy
            </Link>
          </li>
          {/* <li>
            <Link onClick={() => this.props.closeMenu()} className="link" to="/blog">
              Blog
            </Link>
          </li> */}
          <li>
            <Link onClick={() => this.props.closeMenu()} className="link" to="/contact">
              İletişim
            </Link>
          </li>
        </ul>
        <ul className="menuSocials">
          <li>
            <a href="https://twitter.com/suleymntasci">
              <FontAwesomeIcon className="icons" icon={["fab", "twitter"]} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/suleymntasci/">
              <FontAwesomeIcon
                className="icons"
                icon={["fab", "linkedin-in"]}
              />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/suleymntasci/">
              <FontAwesomeIcon className="icons" icon={["fab", "instagram"]} />
            </a>
          </li>
        </ul>
      </motion.div>
    );
  }
}
