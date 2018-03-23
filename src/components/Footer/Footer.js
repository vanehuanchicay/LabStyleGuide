import React from 'react';
import logolab from '../../images/logolab.png';



const Footer = () => (
	<div className=' row'>
    <div className='col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2'>
      <div className='row contain-footer'>
        <div className='col-md-12 col-lg-12'>
          <h2>Footer</h2>
          <p>El footer es la parte inferior de una estructura web en la que generalmente se incluyen links de navegación, enlaces de interés, copyright o botones a las redes sociales del site.</p>
        </div>
      </div>
      <div className='row contain-foot'>
        <div className='col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2'>
          <h3>Visualización</h3>
          <div className='row footer '>
            <div className='col-md-7 col-md-offset-1 col-lg-7 col-lg-offset-1'>
              <img className="logo-footer" src={ logolab } alt="logo"/>
              <p>Trabajamos para ser la principal fuente de talento tech femenino de América Latina para el mundo, transformando el futuro de miles de mujeres y las empresas que las reciben.</p>
            </div>
            <div className='col-md-3 col-lg-3 foo-cont'>
              <p>Contactanos</p><br/>
              <p>Trabaja con nosotros</p><br/>
              <p>Blog</p><br/>
              <p>Intranet</p><br/>
            </div>
          </div>
          <div className='row contain-cod'>
            <div className='col-md-12'>
              <h4>Codigo</h4>
                <figure className="highlight">
                  <pre>
                    <code className="language-html" data-lang="html">
                      <span className="code">&lt;div className='row'&gt;</span><br/>
                      <span className="code">&nbsp;&lt;div className='col-md-6 col-md-offset-1 col-lg-6 col-lg-offset-1'&gt;</span><br/>
                      <span className="code">&nbsp;&nbsp;&lt;img className="logo-footer" src=&#123;logolab}  alt="logo" /&gt;</span><br/>
                      <span className="code">&nbsp;&nbsp;&lt;h4&gt;Trabajamos para ser la principal fuente de talento tech femenino de &nbsp;&nbsp;América Latina para el mundo, transformando el futuro de miles de mujeres y &nbsp;&nbsp;las empresas que las reciben.&lt;/h4&gt;</span><br/>
                      <span className="code">&nbsp;&lt;/div&gt;</span><br/>
                      <span className="code">&nbsp;&lt;div className='col-md-4 col-lg-6'&gt;</span><br/>
                      <span className="code">&nbsp;&nbsp;&lt;h4&gt;Contactanos&lt;/h4&gt;</span><br/>
                      <span className="code">&nbsp;&nbsp;&lt;h4&gt;Trabaja con nosotros&lt;/h4&gt;</span><br/>
                      <span className="code">&nbsp;&nbsp;&lt;h4&gt;Blog&lt;/h4&gt;</span><br/>
                      <span className="code">&nbsp;&nbsp;&lt;h4&gt;Intranet&lt;/h4&gt;</span><br/>
                      <span className="code">&nbsp;&lt;/div&gt;</span><br/>
                      <span className="code">&lt;/div&gt;</span>
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
export default Footer;