import React, { Component } from "react";
import { motion } from "framer-motion";
import { Col, Container, Row } from "react-bootstrap";
import phone from "../img/phone.svg";
import check from "../img/check.svg";
import marker from "../img/marker.svg";
import mail from "../img/mail.svg";

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
          <h3 className="pageTitle">İletişim</h3>

          <Row>
            <Col md className="_card">
              <img src={phone} className="card-svg"></img>
              <h6>0534-841-78-37</h6>
            </Col>
            <Col md className="_card">
              <img src={marker} className="card-svg"></img>
              <h6>İstanbul</h6>
            </Col>
            <Col md className="_card">
              <img src={mail} className="card-svg"></img>
              <h6>iletisim@suleymantasci.com</h6>
            </Col>
            <Col md className="_card">
              <img src={check} className="card-svg"></img>
              <h6>Freelance veya Tam zamanlı</h6>
            </Col>
          </Row>
        </motion.div>
      </Container>
    );
  }
}
