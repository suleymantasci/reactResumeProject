import React, { Component } from "react";
import { motion } from "framer-motion";
import { Container, Row, Col} from "react-bootstrap";
import github from "../img/github.svg"
import codepen from "../img/codepen.svg"

export default class Contact extends Component {
  render() {
    return (
      <Container className="_container" fluid>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition="linear"
        >
          <h3 className="pageTitle">Portföy</h3>
          <Row>
            <Col md className="portfolio-container">
              
              <a href="https://github.com/suleymantasci" target="_blank"><img src={github} className="portfolio-svg"></img><p>Githup profilimi incelemek için tıklayınız.</p></a>
            </Col>
            <Col md className="portfolio-container">
              
              <a href="https://codepen.io/suleymantasci" target="_blank"><img src={codepen} className="portfolio-svg"></img><p>Codepen profilimi incelemek için tıklayınız.</p></a>
            </Col>
          </Row>
        </motion.div>
      </Container>
    );
  }
}
