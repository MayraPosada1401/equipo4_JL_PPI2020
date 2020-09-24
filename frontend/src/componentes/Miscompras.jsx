import React from "react";
import "../Estilos/Miscompras.css";
import carrusel1 from "../Imagenes/carrusel1.png";
import carrusel2 from "../Imagenes/carrusel2.png";
import carrusel3 from "../Imagenes/carrusel3.png";
import FRUTA2 from "../Imagenes/Fruta2.png";
import FRUTA3 from "../Imagenes/FRUTA3.png";
import FRUTA4 from "../Imagenes/FRUTA4.png";
import ECOAGRODEFINITIVO1 from "../Imagenes/ECOAGRODEFINITIVO1.png";
function Miscompras() {
  return (
    <div className="App">
      <div ClasName="Header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand">
            <img src={ECOAGRODEFINITIVO1} className="img-fluid" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="">
                  Casa <span class="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item active">
                <a class="nav-link" href="#">
                  Transportador
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Conocenos
                </a>
              </li>

              <li className="nav-item active">
                <a className="nav-link  " href="#">
                  ¿No te haz registrado aún?
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link  " href="#">
                  Quienes somos
                </a>
              </li>

              <a type="button" className="btn1 btn-info1"></a>
              <button type="button" className="btn btn-info">
                Ingresar
              </button>
              <li className="nav-item active"></li>
            </ul>
          </div>
        </nav>
      </div>

      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={carrusel1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={carrusel2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={carrusel3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <br></br>
      <br></br>
      <h1 className="Titulito">Agradecemos su apoyo al campo Colombiano</h1>
      <div class="card-columns">
        <div class="card">
          <img src={FRUTA4} class="card-img-top imagent" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Guayaba</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
        <div class="card p-3">
          <blockquote class="blockquote mb-0 card-body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </p>
            <footer class="blockquote-footer">
              <small class="text-muted">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </div>
        <div class="card">
          <img src={FRUTA3} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Sandia</h5>
            <p class="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div class="card bg-primary text-white text-center p-3">
          <blockquote class="blockquote mb-0">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat.
            </p>
            <footer class="blockquote-footer text-white">
              <small>
                Someone famous in <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </div>
        <div class="card text-center">
          <div class="card-body">
            <h5 class="card-title">fff</h5>
            <p class="card-text">
              This card has a regular title and short paragraphy of text below
              it.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div class="card">
          <img src={FRUTA2} class="card-img-top" alt="..." />
        </div>
        <div class="card p-3 text-right">
          <blockquote class="blockquote mb-0">
            <p>Durazno:</p>
            <footer class="blockquote-footer">
              <small class="text-muted">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is another card with title and supporting text below. This
              card has some additional content to make it slightly taller
              overall.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Miscompras;
