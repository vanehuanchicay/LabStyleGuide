import React from 'react';


const Text = () => (
	<div className=' row'>
    <div className='col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2'>
      <div className='row contain-text'>
        <div className='col-md-12 col-lg-12'>
          <h2>Typography</h2>
          <p>La tipografía aplica al estilo, disposición y apariencia de las letras, números y símbolos creados por el proceso.</p>
        </div>
      </div>
      <div className='row contain-text'>
        <div className='col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2'>
          <h3>Visualización</h3>
          <div className='row'>
            <div className='col-md-12 col-lg-12'>
              <h1 className='title'>Titulos</h1>
              <h5 className='subtitle'>Subtitulos</h5><br/>
              <p className='parraf'>Parrafos</p>
            </div>
          </div>
          <div className='row contain-cod'>
            <div className='col-md-12'>
              <h4>Codigo</h4>
                <figure className="highlight">
                  <pre>
                    <code className="language-html" data-lang="html">
                      <span className="code">&lt;h1 className='title'&gt;Titulos&lt;/h1&gt;</span><br/>
                      <span className="code">&lt;h5 className='subtitle'&gt;Subtitulos&lt;/h5&gt;</span><br/>
                      <span className="code">&lt;p className='parraf'&gt;Parrafos&lt;/p&gt;</span><br/>
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
export default Text;