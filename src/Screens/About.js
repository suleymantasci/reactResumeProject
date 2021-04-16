import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

export default class About extends Component {
  render() {
    return (
      <Container className="_container" fluid>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition="linear"
        >
          <h3 className="pageTitle">Yetenek ve Tecrübelerim</h3>
          <Row>
            <Col md={7}>
              <h4 className="_title">
                <span className="_titleİn">Deneyimlerim</span>
              </h4>
              <Row>
                <Col className="_right" sm={4}>
                  <h6>02/2021 - Devam Ediyor</h6>
                  <p>Preon</p>
                </Col>
                <Col sm={8}>
                  <h6>Frontend Developer</h6>
                  <p>
                    Preon şirketin geliştirmekte olduğu Bikobi projesinde frontend developer olarak görev almaktayım.
                  </p>
                </Col>
              </Row>
               <Row>
                <Col className="_right" sm={4}>
                  <h6>03/2018 - 11/2018</h6>
                  <p>Baha Otomotiv ve Yedek Parça İnşaat Taahhüt</p>
                </Col>
                <Col sm={8}>
                  <h6>İnşaat Mühendisi</h6>
                  <p>
                    Üç aylık dönem stajımı yapmak için Baha inşaatın kaba
                    işlerini yüklendiği Topkapı yurt şantiyesinde görev aldım.
                    Burada firma adına çalışan tek mühendistim. Kaba inşaat
                    sürecinde ki metraj çıkarımı, proje kontrolü, demir ve
                    kalıpların teslim alınması, beton siparişi gibi işleri
                    yürüttüm. Üç aylık staj süremin bitmesinden sonra baha
                    inşaat bünyesinde kaba inşaat tamamlanana kadar çalışmaya
                    devam ettim.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col className="_right" sm={4}>
                  <h6>07/2016 - 08/2016</h6>
                  <p>Artaş ve İnvest ortak Grişim Projesi - Vadistanbul</p>
                </Col>
                <Col sm={8}>
                  <h6>Stajyer İnşaat Mühendisi</h6>
                  <p>
                  Metraj çıkarımı ve iş takibi, proje pafta kontrolleri, imalatların ön teslimatı, donatı adet, yer ve çap kontrolleri yapılmıştır.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col className="_right" sm={4}>
                  <h6>06/2013 - 02/2015</h6>
                  <p>Turna Büfe</p>
                </Col>
                <Col sm={8}>
                  <h6>İşletmeci</h6>
                  <p>
                    Büfe işletmesinde öngörülen ve öngürülmeyen bütün kalemlerde çalıştım.
                  </p>
                </Col>
              </Row>
            </Col>
            <Col md={5}>
              <h4 className="_title">
                <span className="_titleİn">Kodlama Bilgileri</span>
              </h4>
              <div className="my-skill">
                <span className="skill">
                  <span>Html</span>
                  <span>100%</span>
                </span>
                <div className="skill-bar">
                  <div className="skill-in-all skill-Html"></div>
                </div>
              </div>
              <div className="my-skill">
                <span className="skill">
                  <span>Css</span>
                  <span>95%</span>
                </span>
                <div className="skill-bar">
                  <div className="skill-in-all skill-Css"></div>
                </div>
              </div>
              <div className="my-skill">
                <span className="skill">
                  <span>Javascript</span>
                  <span>90%</span>
                </span>
                <div className="skill-bar">
                  <div className="skill-in-all skill-Javascript"></div>
                </div>
              </div>
              <div className="my-skill">
                <span className="skill">
                  <span>Jquery</span>
                  <span>90%</span>
                </span>
                <div className="skill-bar">
                  <div className="skill-in-all skill-Jquery"></div>
                </div>
              </div>
              <div className="my-skill">
                <span className="skill">
                  <span>Bootstrap</span>
                  <span>90%</span>
                </span>
                <div className="skill-bar">
                  <div className="skill-in-all skill-Bootstrap"></div>
                </div>
              </div>
              <div className="my-skill">
                <span className="skill">
                  <span>React.js - React Native</span>
                  <span>80%</span>
                </span>
                <div className="skill-bar">
                  <div className="skill-in-all skill-React"></div>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={7}>
              <h4 className="_title">
                <span className="_titleİn">Eğitim Bilgilerim</span>
              </h4>

              <Row>
                <Col className="_right" sm={4}>
                  <h6>2019 - Devam Ediyor</h6>
                  <p>Önlisans</p>
                </Col>
                <Col sm={8}>
                  <h6>Anadolu Üniversitesi</h6>
                  <p>Sosyal Medya Yöneticiliği</p>
                </Col>
              </Row>

              <Row>
                <Col className="_right" sm={4}>
                  <h6>2014 - 2018</h6>
                  <p>Lisans</p>
                </Col>
                <Col sm={8}>
                  <h6>Nişantaşı Üniversitesi</h6>
                  <p>İnşaat Mühendisliği</p>
                </Col>
              </Row>
              <Row>
                <Col className="_right" sm={4}>
                  <h6>2009 - 2013</h6>
                  <p>Lise</p>
                </Col>
                <Col sm={8}>
                  <h6>Osman Ülkümen Anadolu Lisesi</h6>
                  <p>Sayısal</p>
                </Col>
              </Row>
            </Col>
            
            <Col md={5}>
              <h4 className="_title">
                <span className="_titleİn">Program Bilgileri</span>
              </h4>

              <div className="my-skill">
                <span className="skill">
                  <span>Autocad</span>
                  <span>80%</span>
                </span>
                <div className="skill-bar">
                  <div className="skill-in-all skill-autocad"></div>
                </div>
              </div>
              <div className="my-skill">
                <span className="skill">
                  <span>Ms Excel</span>
                  <span>90%</span>
                </span>
                <div className="skill-bar">
                  <div className="skill-in-all skill-mcexcel"></div>
                </div>
              </div>
              <div className="my-skill">
                <span className="skill">
                  <span>Ms project</span>
                  <span>70%</span>
                </span>
                <div className="skill-bar">
                  <div className="skill-in-all skill-msproject"></div>
                </div>
              </div>
              <div className="my-skill">
                <span className="skill">
                  <span>Adobe Photoshop</span>
                  <span>80%</span>
                </span>
                <div className="skill-bar">
                  <div className="skill-in-all skill-photoshop"></div>
                </div>
              </div>
              <div className="my-skill">
                <span className="skill">
                  <span>Ms Premiere</span>
                  <span>70%</span>
                </span>
                <div className="skill-bar">
                  <div className="skill-in-all skill-mspremiere"></div>
                </div>
              </div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    );
  }
}
