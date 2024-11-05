import { Badge, Button, Carousel } from "react-bootstrap";
import perfil from "../../assets/yerick.png";
import cv from "../../assets/cv.svg";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import java from "../../assets/java.svg";
import javascript from "../../assets/javascript.svg";
import css from "../../assets/css.svg";
import sql from "../../assets/sql.svg";
import react from "../../assets/react.svg";
import aws from "../../assets/aws.svg";
import link from "../../assets/link.svg";
import mochila from "../../assets/mochila.svg";

import AWSLogin from "../../assets/AWS/Login AWS.png";
import AWS1 from "../../assets/AWS/AWS page1.png";
import AWS2 from "../../assets/AWS/AWS page2.png";
import AWS3 from "../../assets/AWS/AWS page3.png";
import AWS4 from "../../assets/AWS/AWS page4.png";
import AWS5 from "../../assets/AWS/AWS page5.png";

import "bootstrap/dist/css/bootstrap.min.css";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <div style={{ color: "white", position: "relative", marginTop: "3vh"}}>
      <div className="content">
        <div style={{ display: "flex" }}>
          <img
            src={perfil}
            style={{ height: "15vh", borderRadius: "100%", marginRight: "2vh" }}
          />
          <div>
            <h4 style={{ fontSize: "3vh" }}>Yerick Oseas Aguilar Gramajo</h4>
            <h5 style={{ fontSize: "2.5vh" }}>Programador Full Stack</h5>
            <div style={{ marginTop: "3vh" }}>
              <Badge bg="success">
                <img
                  src="https://img.icons8.com/?size=20&id=PedPR10iVAnY&format=png&color=FFFFFF"
                  style={{ marginRight: "1vh" }}
                />
                yerickaguilar123@gmail.com
              </Badge>
              <a href="CV Yerick Aguilar.pdf" download="CV Yerick Aguilar">
                <Button
                  variant="dark"
                  style={{
                    padding: "0",
                    border: "1px solid #198754",
                    marginLeft: "1vh",
                  }}
                >
                  <img src={cv} style={{ height: "3vh" }} />
                </Button>
              </a>
              <a href="https://github.com/yerick1235">
                <Button
                  variant="dark"
                  style={{
                    padding: "0",
                    border: "1px solid #198754",
                    marginLeft: "1vh",
                  }}
                >
                  <img src={github} style={{ height: "3vh" }} />
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/yerick-aguilar-6b623331a/">
                <Button
                  variant="dark"
                  style={{
                    padding: "0",
                    border: "1px solid #198754",
                    marginLeft: "1vh",
                  }}
                >
                  <img src={linkedin} style={{ height: "3vh" }} />
                </Button>
              </a>
            </div>
          </div>
        </div>
        <br />
        <div style={{ width: "80vh" }}>
          <h4>Sobre mí</h4>
          Tengo 3 años de experiencia desarrollando software. Me apasiona crear
          soluciones y colaborar en proyectos dinámicos. Siempre estoy
          aprendiendo y buscando oportunidades para crecer en el mundo
          tecnológico.
        </div>
        <hr />
        <div>
          <h4>Tecnologías:</h4>
          <div style={{ display: "flex", gap: "1vh" }}>
            <div
              style={{
                backgroundColor: "#202a21",
                border: "1px solid #198754",
                borderRadius: "2px",
                padding: "0 1vh 0 0",
                width: "fit-content",
              }}
            >
              <img src={java} style={{ height: "3vh" }} />
              Java
            </div>

            <div
              style={{
                backgroundColor: "#202a21",
                border: "1px solid #198754",
                borderRadius: "2px",
                padding: "0 1vh 0 0",
                width: "fit-content",
              }}
            >
              <img src={css} style={{ height: "3vh" }} />
              CSS
            </div>

            <div
              style={{
                backgroundColor: "#202a21",
                border: "1px solid #198754",
                borderRadius: "2px",
                padding: "0 1vh 0 0",
                width: "fit-content",
              }}
            >
              <img src={sql} style={{ height: "3vh" }} />
              MySQL
            </div>

            <div
              style={{
                backgroundColor: "#202a21",
                border: "1px solid #198754",
                borderRadius: "2px",
                padding: "0 1vh 0 0",
                width: "fit-content",
              }}
            >
              <img src={javascript} style={{ height: "3vh" }} />
              JavaScript
            </div>

            <div
              style={{
                backgroundColor: "#202a21",
                border: "1px solid #198754",
                borderRadius: "2px",
                padding: "0 1vh 0 0",
                width: "fit-content",
              }}
            >
              <img src={react} style={{ height: "3vh" }} />
              React
            </div>

            <div
              style={{
                backgroundColor: "#202a21",
                border: "1px solid #198754",
                borderRadius: "2px",
                padding: "0 1vh 0 .5vh",
                width: "fit-content",
              }}
            >
              <img
                src="https://img.icons8.com/?size=100&id=8305&format=png&color=198754"
                style={{ height: "2vh" }}
              />
              MongoDB
            </div>
          </div>
          <br />
          <br />
          <h4>Proyectos:</h4>
          <div style={{ display: "flex" }}>
            <img
              src={aws}
              style={{
                height: "6vh",
                backgroundColor: "#202a21",
                borderRadius: "100%",
                padding: ".5vh",
              }}
            />
            <div style={{ width: "40vh", margin: "0 10vh 0 2vh" }}>
              <h5>AWS Inventory</h5>
              Aplicación web para el control de Servidores AWS. Esta aplicación
              a parte de tener un registro de los Servidores, tambien cuenta
              con:
              <br />
              <div style={{ width: "50vh" }}>
                <span style={{ marginLeft: "4vh" }}>
                  • Sistema de Recordatorios para el Cierre de Servidores
                </span>
                <br />
                <span style={{ marginLeft: "4vh" }}>
                  • Creación de Reportes mediante filtrado de Datos
                </span>
                <br />
                <br />
                <div style={{ display: "flex", gap: "1vh" }}>
                  <Badge bg="dark">React</Badge>
                  <Badge bg="dark">NodeJS</Badge>
                  <Badge bg="dark">MySQL</Badge>
                  <Badge bg="dark">Express</Badge>
                </div>
                <br />
                <div>
                  <a href="https://github.com/yerick1235/AWSInventory">
                    <Button
                      variant="dark"
                      style={{
                        padding: ".5vh 1vh .5vh 1vh",
                        border: "1px solid #198754",
                        borderRadius: "30px",
                        marginLeft: "1vh",
                      }}
                    >
                      <img src={github} style={{ height: "3vh" }} />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
            {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD9bl1KPFR_yQ9qiydx8TNu4AqQYsCu19pjQ&s" /> */}
            <div style={{ width: "70vh" }}>
              <Carousel style={{ width: "fit-content" }}>
                <Carousel.Item>
                  <img src={AWSLogin} style={{ height: "30vh" }} />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={AWS1} style={{ height: "30vh" }} />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={AWS2} style={{ height: "30vh" }} />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={AWS3} style={{ height: "30vh" }} />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={AWS4} style={{ height: "30vh" }} />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={AWS5} style={{ height: "30vh" }} />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>

          <hr />
          <h4>Formación:</h4>
          <div style={{display:'flex'}}>
            <img
              src={mochila}
              style={{
                height: "6vh",
                backgroundColor: "#202a21",
                borderRadius: "100%",
                padding: ".5vh",
              }}
            />
            <div style={{marginLeft:'2vh'}}>
              <h5>Colegio el Álamo</h5>
              Primaria - Básicos
              <br />
              2017 - 2021
            </div>
          </div>
          <br />
          <br />
          <div style={{display:'flex'}}>
            <img
              src={mochila}
              style={{
                height: "6vh",
                backgroundColor: "#202a21",
                borderRadius: "100%",
                padding: ".5vh",
              }}
            />
            <div style={{marginLeft:'2vh'}}>
              <h5>Centro Educativo Técnico Laboral Kinal</h5>
              Perito en Informática
              <br />
              2022 - 2024
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
