import React from 'react';
import { Link } from 'react-router-dom';
import '../Estilos/Inciosesion.css';

export default function Iniciarsesioncapacitador() {

  return (
      <body className="contenedorabsolutodefondo">
          <br />
          <br />

          <div className="App backgroundinicio">
              <div className="Localizacionparalogin">
                  <form className=" p-4">
                      <div className="form-group">
                          <label htmlFor="exampleDropdownFormEmail2 " className="Fondotransparenteparaincioparticular">Correo</label>
                          <input type="email" className="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com" />
                      </div>
                      <div className="form-group">
                          <label htmlFor="exampleDropdownFormPassword2" className="Fondotransparenteparaincioparticular">Contraseña</label>
                          <input type="password" className="form-control" id="exampleDropdownFormPassword2" placeholder="Password" />
                      </div>
                      <div className="form-group">
                          <div className="form-check">
                              <input type="checkbox" className="form-check-input" id="dropdownCheck2" />
                              <label className="form-check-label" htmlFor="dropdownCheck2">
                                  Recuerdame
                              </label>
                          </div>
                      </div>
                      <Link to="/app1"><button type="submit" className="btn btn-outline-light">Ingresar</button></Link>
                  </form>
              </div>
          </div>

      </body>
  );} 