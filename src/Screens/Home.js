import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import stImg from "../img/st.jpg";
import { motion } from "framer-motion";
import react from "../img/react.svg";
import html from "../img/html.svg";
import algoritma from "../img/algoritma.svg";
import clean from "../img/clean.svg";
import responsive from "../img/responsive.svg";
import wordpress from "../img/wordpress.svg";

export default class Home extends Component {
  render() {
    return (
      <Container className="homeContainer" fluid>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition="linear"
        >
          <Row>
            <Col md className="paddingZero">
              <div className="imgContainer">
                <img className="imgHome" src={stImg} alt="Süleyman TAŞÇI"></img>
              </div>
            </Col>
            <Col md className="homeAboutContainer">
              <div>
                <span className="myTitles"></span>
                <h3>Süleyman TAŞÇI</h3>
                <p>
                  1995 yılının Temmuz ayında Malatya ilinin Arapgir ilçesinde
                  doğdum. 1999 marmara depreminden sonra henüz dört yaşımda iken
                  ailemle birlikte istanbula yerleştik. İlköğretim eğitimimi 75.
                  yıl İlköğretim Okulu’nda tamamladım. İstanbul'un eski
                  liselerinden biri sayılan Osman Ülkümen Anadolu lisesinde
                  eğitimime devam ettim. Lise yıllarımda almış olduğum eğitim ve
                  öğretimin, kazandığım sosyal ve teknolojik becerilerin,
                  edindiğim hayat tecrübesinin ilerlememde büyük rol oynadığını
                  söyleyebilirim. 2014 yılında Nişantaşı Üniversitesi İnşaat
                  Mühendisliği Bölümü’nü kazandım. 2018 haziran ayında lisans
                  eğitimimi tamamlayarak mezun oldum. Yapmak istediğim işin
                  okuduğum lisans bölümünden farklı olduğunu anladıktan sonra
                  uzun yıllardır hobi olarak yaptığım yazılım geliştiriciliğine
                  yöneldim.
                </p>
               {/**<button>Özgemiş İndir</button> */} 
              </div>
            </Col>
          </Row>
          <div className="myJobContainer">
            <h4 className="_title">
              <span className="_titleİn">Ne Yaparım</span>
            </h4>
            <Row>
              <Col md>
                <div className="items">
                  <img src={html} className="items-svg"></img>
                  <div>
                    <h4>Html - Css - Javascript </h4>
                    <p>
                      Front-end developer kullanıcının etkileşime girdiği
                      önyüzün (client-side), HTML, CSS ve JS teknolojilerini
                      kullanarak geliştiren kişiye front-end developer (önyüz
                      geliştirici) denir.
                      <p>
                        Bende bu gereksinimleri karşılamak için html, css ve
                        Javascript üçlüsüne teknik anlamda hakimiyet sağladım.
                      </p>
                    </p>
                  </div>
                </div>
                <div className="items">
                  <img src={responsive} className="items-svg"></img>
                  <div>
                    <h4>Mobil - Responsive Tasarım</h4>
                    <p>
                      Tasarımları koda dökerken farklı çözünürlükteki cihazlara
                      uyum sağlaması masaüstü, tablet ve akıllı telefonlarda
                      platformdan bağımsız bir şekilde en iyi şekilde
                      görüntülenmesi için mobil öncelikli çalışırım.
                    </p>
                  </div>
                </div>
                <div className="items">
                  <img src={algoritma} className="items-svg"></img>
                  <div>
                    <h4>Algoritmik Düşünme ve Problem çözme </h4>
                    <p>
                      Sorunların üstünü kapatmaktan ziyade çözüm odaklı
                      çalışmayı severim. Her sorunun bir yerlerde mutlaka bir
                      çözümü vardır sadece ne kadar zaman alacağını kestirmek ve
                      bu zamanı bu amaç doğrultusunda kullanıp kullanmayacağımı
                      kararlaştırmam gerekir.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md>
                <div className="items">
                  <img src={clean} className="items-svg"></img>
                  <div>
                    <h4>Temiz Kodlama Ve dokümantasyon</h4>
                    <p>
                      Yeni bir teknoloji öğrenirken mutlaka ilgili
                      dokümantasyonu okur ve global kelimelere aşinalık
                      kazanmaya çalışırım. Kodlama yaparkende herkesin
                      anlayacağı ve herkesin kullandığı kelimeleri seçmeye özen
                      gösteririm.
                    </p>
                  </div>
                </div>
                <div className="items">
                  <img src={react} className="items-svg"></img>
                  <div>
                    <h4>React.js - React Native</h4>
                    <p>
                      <p>
                        "Interactive UI tasarımlarını acısız bir şekilde
                        yapmanızı sağlar."
                      </p>
                      React’ın resmi sitesindeki tanımı bu. Facebook tarafından
                      geliştirilen kütüphane gerçekten çok iyi işler
                      çıkartmamızı sağlıyor. Şuan bulunduğunuz bu web sitesini
                      de React kullanarak kodladım. Ama asıl beğendiğim kısmı
                      react-native ile tek kod yazıp iki farklı mobil platformda
                      kullanabilmek.
                    </p>
                  </div>
                </div>
                <div className="items">
                  <img src={wordpress} className="items-svg"></img>
                  <div>
                    <h4>Wordpress Site Kurulumu</h4>
                    <p>
                      Wordpress benim nezlimde en populer içerik yönetim
                      sistemidir. 2003te ilk kurulduğunda amacı sadece blog
                      oluşturmak olsada günümüzde her türlü web sitesini
                      oluşturabileceğimiz bir platforma dönüşmüştür. Hal böyle
                      olunca ilgisiz kalamazdım. Wordpress kurulumu, tema ve
                      eklenti kurulumları gibi pek çok konuda bilgi ve fikir
                      sahibiyim.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </motion.div>
      </Container>
    );
  }
}
