import React from 'react';


const Colors = () => (
  <div className=' row'>
    <div className='col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2'>
      <div className='row contain-colors'>
        <div className='col-md-12 col-lg-12'>
          <h2>Colors</h2>
          <p>Haga fácilmente uso de dos esquemas de color: la semántica incluye varios colores asignados a valores contextuales significativos.</p>
        </div>
      </div>
      <div className='row contain-colors'>
        <div className='col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2'>
          <h3>Visualización</h3>
          <div className='row'>
            <div className='col-md-2 col-lg-2 cont-col'>
              <div className='cont-black'></div>
            </div>
            <div className='col-md-2 col-lg-2 cont-col'>
              <div className='cont-white'></div>
            </div>
            <div className='col-md-2 col-lg-2 cont-col'>
              <div className='cont-yellow'></div>
            </div>
            <div className='col-md-2 col-lg-2 cont-col'>
              <div className='cont-magenta'></div>
            </div>
            <div className='col-md-2 col-lg-2 cont-col'>
              <div className='cont-cyan'></div>
            </div>
          </div>
          <div className='row contain-cod'>
            <div className='col-md-12'>
              <h4>Codigo</h4>
                <figure className="highlight">
                  <pre>
                    <code className="language-html" data-lang="html">
                      <span className="code">&lt;div className='row'&gt;</span><br/>
                      <span className="code">&nbsp;&lt;div className='col-md-2 col-md-offset-1 col-lg-2 col-lg-offset-1'&gt;</span><br/>
                      <span className="code">&nbsp;&nbsp;&lt;div className='cont-black'&gt;&lt;/div&gt;</span><br/>
                      <span className="code">&nbsp;&lt;/div&gt;</span><br/>
                      <span className="code">&nbsp;&lt;div className='col-md-2 col-lg-2'&gt;</span><br/>
                      <span className="code">&nbsp;&nbsp;&lt;div className='cont-white'&gt;&lt;/div&gt;</span><br/>
                      <span className="code">&nbsp;&lt;/div&gt;</span><br/>
                      <span className="code">&nbsp;&lt;div className='col-md-2 col-lg-2'&gt;</span><br/>
                      <span className="code">&nbsp;&nbsp;&lt;div className='cont-yellow'&gt;&lt;/div&gt;</span><br/>
                      <span className="code">&nbsp;&lt;/div&gt;</span><br/>
                      <span className="code">&nbsp;&lt;div className='col-md-2 col-lg-2'&gt;</span><br/>
                      <span className="code">&nbsp;&nbsp;&lt;div className='cont-magenta'&gt;&lt;/div&gt;</span><br/>
                      <span className="code">&nbsp;&lt;/div&gt;</span><br/>
                      <span className="code">&nbsp;&lt;div className='col-md-2 col-lg-2'&gt;</span><br/>
                      <span className="code">&nbsp;&nbsp;&lt;div className='cont-cyan'&gt;&lt;/div&gt;</span><br/>
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
export default Colors;