import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import cssNedir from "../img/css-nedir.jpg";
import Blogsingle from "./Blogsingle";



export default class Blog extends Component {
  render() {
    let signleBlog = [
      {
        id:1,
        adress:"cssnedir",
        name:"Css Nedir?",
        desc:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
        arcu tortor, dapibus sit amet ex eget, hendrerit venenatis
        eros. Nullam.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
        arcu tortor, dapibus sit amet ex eget, hendrerit venenatis
        eros. Nullam.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
        arcu tortor, dapibus sit amet ex eget, hendrerit venenatis
        eros. Nullam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
        arcu tortor, dapibus sit amet ex eget, hendrerit venenatis
        eros. Nullam.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
        arcu tortor, dapibus sit amet ex eget, hendrerit venenatis
        eros. Nullam.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
        arcu tortor, dapibus sit amet ex eget, hendrerit venenatis
        eros. Nullam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
        arcu tortor, dapibus sit amet ex eget, hendrerit venenatis
        eros. Nullam.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
        arcu tortor, dapibus sit amet ex eget, hendrerit venenatis
        eros. Nullam.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
        arcu tortor, dapibus sit amet ex eget, hendrerit venenatis
        eros. Nullam.`,
        src: cssNedir,
      },
      {
        id:2,
        adress:"htmlnedir",
        name:"html Nedir?",
        desc:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
        arcu tortor, dapibus sit amet ex eget, hendrerit venenatis
        eros. Nullam.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
        arcu tortor, dapibus sit amet ex eget, hendrerit venenatis
        eros. Nullam.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
        arcu tortor, dapibus sit amet ex eget, hendrerit venenatis
        eros. Nullam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
        arcu tortor, dapibus sit amet ex eget, hendrerit venenatis
        eros. Nullam.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
        arcu tortor, dapibus sit amet ex eget, hendrerit venenatis
        eros. Nullam.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
        arcu tortor, dapibus sit amet ex eget, hendrerit venenatis
        eros. Nullam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
        arcu tortor, dapibus sit amet ex eget, hendrerit venenatis
        eros. Nullam.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
        arcu tortor, dapibus sit amet ex eget, hendrerit venenatis
        eros. Nullam.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
        arcu tortor, dapibus sit amet ex eget, hendrerit venenatis
        eros. Nullam.`,
        src: cssNedir,
      }
    ];
    let menuItems = [];
    for(var i = 0; i < signleBlog.length; i++){
      menuItems.push(
      <Col className="blogItem" xl={9} >
            <Row>
              <Col sm={6} md={5} lg={4}>
                <img className="imgCss" src={signleBlog[i].src} alt="Css Nedir"></img>
              </Col>
              <Col className="descriptionBlog"  sm={6} md={7} lg={8}>
                <h3>{signleBlog[i].name}</h3>
                <p className="paragrafOzet">
                {signleBlog[i].desc}
                </p>
                <a href={signleBlog[i].id +"_"+ signleBlog[i].adress} className="moreButton">Devamını Oku</a>
              </Col>
            </Row>
      </Col>
      );
    }
    return (
      <Container className="_container" fluid>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition="linear"
        >
          <h3 className="pageTitle">Blog Yazılarım</h3>
          <Row className="blogItems">
          {menuItems}
          </Row>
        </motion.div>
      </Container>
    );
  }
}
