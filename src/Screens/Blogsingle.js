import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";


export default class Blogsignle extends Component {
  render() {
    return (
      <Container className="_container" fluid>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition="linear"
        > 
          <Col className="blogItem" xl={9} >
            <Row>
              <Col sm={6} md={5} lg={4}>
                <img className="imgCss" src={this.props.a} alt="Css Nedir"></img>
              </Col>
              <Col className="descriptionBlog"  sm={6} md={7} lg={8}>
                <h3>{this.props.b}</h3>
                <p className="paragrafOzet">
                {this.props.c}
                </p>
                <a href={this.props.d} className="moreButton">Devamını Oku</a>
              </Col>
            </Row>
      </Col>
        </motion.div>
      </Container>
    );
  }
}
