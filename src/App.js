import React, { Component } from "react";
import Menu from "./Navigation/Menu";
import MobileMenu from "./Navigation/MobileMenu";
import Home from "./Screens/Home";
import About from "./Screens/About";
import Portfolio from "./Screens/Portfolio";
import Contact from "./Screens/Contact";
import Blog from "./Screens/Blog";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./Components/Icons";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDesktop: false,
    };

    this.updatePredicate = this.updatePredicate.bind(this);
  }
  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 998 });
  }

  render() {
    const isDesktop = this.state.isDesktop;
    return (
      <div className="containerPage" style={{ overflowX: "hidden" }}>
        <Router>
          {isDesktop ? <Menu /> : <MobileMenu />}
          <AnimatePresence>
            <Switch>
              <Route path="/blog">
                <Blog />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/portfolio">
                <Portfolio />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </AnimatePresence>
        </Router>
      </div>
    );
  }
}
