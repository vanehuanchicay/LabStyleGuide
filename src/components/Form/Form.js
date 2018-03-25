import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div className=' row '>
        <div className='col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 buttons'>
          <div className='row contain-button'>
            <div className='col-md-12 col-lg-12'>
              <h2>Form</h2>
              <p> Usa este componente si necesita agrupar una lista relacionada de opciones interactivas.</p>
            </div>
          </div>
          <div className='row contain-btn'>
            <div className='col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2'>
              <div className='row'>
                <div className='col-md-12'>
                  <h3>Visualización</h3>
                   <form className="form_group">
                      <input type="hidden" name="variant" value="K"></input>
                        <div className="input-holder field-text">
                          <label >Nombre</label>
                          <div className="field-element">
                            <input  type="text"  ></input>
                          </div>
                        </div>
                        <div className="input-holder field-text">
                          <label>Apellido</label>
                          <div className="field-element ">
                            <input type="text" ></input>
                          </div>
                        </div>
                        <div className="input-holder field-text">
                          <label>DNI /DNI / RUT / RFC / CURP</label>
                          
                          <div className="field-element ">
                            <input type="text"></input>
                          </div>
                        </div>
                        <div className="input-holder field-text">
                          <label >Correo Electrónico</label>
                          
                          <div className="field-element ">
                            <input type="text"></input>
                          </div>
                        </div>
                        <div className="input-holder field-text">
                          <label>Celular</label>  
                            <div className="field-element ">
                              <input type="text"></input>
                            </div>
                        </div>

                        <div className="input-holder field-select">
                          <label>¿Cómo te enteraste de Laboratoria?</label>       
                            <div className="field-element ">
                              <div className="select-outer">
                                <select>
                                 <option style={{color:'#000000'}} style={{display:'none'}}>-- Selecciona uno --</option>
                                  <option value="Google">Google</option>
                                  <option value="Redes sociales">Redes sociales</option>
                                  <option value="Periódico">Periódico</option>
                                  <option value="Televisión">Televisión</option>
                                  <option value="Radio">Radio</option>
                                  <option value="Referencia de otra persona">Referencia de otra persona</option>
                                  <option value="Otro">Otro</option>
                                </select>
                              </div>
                            </div>
                        </div>
                      <div>
                        <label>¿A qué sede deseas postular?</label>  
                        <div>
                          <div>
                        <select label-position="outside-top" className="label_one">
                          <option >-- Selecciona uno--</option>
                          <option value="Ciudad de México">Ciudad de México</option>
                          <option value="Guadalajara">Guadalajara</option>
                          <option value="Lima">Lima</option>
                           <option value="Santiago de Chile">Santiago de Chile</option>
                        </select>
                          </div>
                        </div>
                      </div>
                    <div>
                  </div>     
                </form>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-12'>
                  <h4>Codigo</h4>
                  <figure className="highlight">
                    <pre>
                      <code className="language-html" data-lang="html">
                        <span className="code">&lt;form className='form_group'&gt;</span><br/>
                        <span className="code">&lt;/form'&gt;</span><br/>

                      </code>
                    </pre>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    )
  }
}

export default Form;

