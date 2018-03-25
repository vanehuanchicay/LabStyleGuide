import React, { Component } from 'react';


class Buttons extends Component {
  constructor (){
    super();
    this.state ={
      styles1 : 'button',
      styles2 : 'button',
      styles3 : 'button'
    }
  }

  default = () => {
    this.setState ({
      styles1:'button default'
    })
    
  }

  change = () => {
    this.setState ({
      styles2:'button change'
    })
  }

  active = () => {
    this.setState ({
      styles3:'button active'
    })
  }

  render() {
    return (
      <div className=' row ' id=' button '>
        <div className='col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 buttons'>
          <div className='row contain-button'>
            <div className='col-md-12 col-lg-12'>
              <h2>Buttons</h2>
              <p>Los botones hacen que las acciones comunes sean inmediatamente visibles y fáciles de realizar con un solo clic o toque. Se pueden usar para cualquier tipo de acción, incluida la navegación.</p>
            </div>
          </div>
          <div className='row contain-btn'>
            <div className='col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2'>
              <div className='row'>
                <div className='col-md-12'>
                  <h3>Dimensiones</h3>
                  <button className='but-small sm' type='sumbit'>{this.state.styles1}</button>
                  <button className='but-medium md' type='sumbit'>{this.state.styles1}</button>
                  <button className='but-large lg' type='sumbit'>{this.state.styles1}</button>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-12'>
                  <h4>Codigo</h4>
                  <figure className="highlight">
                    <pre>
                      <code className="language-html" data-lang="html">
                        <span className="code">&lt;button className='but-small sm' type='sumbit'&gt;{this.state.styles1}&lt;/button&gt;</span><br/>
                        <span className="code">&lt;button className='but-medium sm' type='sumbit'&gt;{this.state.styles1}&lt;/button&gt;</span><br/>
                        <span className="code">&lt;button className='but-large sm' type='sumbit'&gt;{this.state.styles1}&lt;/button&gt;</span>
                      </code>
                    </pre>
                  </figure>
                </div>
              </div>
            </div>
          </div>
          <div className='row contain-btn'>
            <div className='col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2'>
              <div className='row'>
                <div className='col-md-12'>
                  <h3>Funcionalidad</h3>
                  <button className='but-default' type='sumbit' onClick={this.default}>{this.state.styles1}</button>
                  <button className='but-chage' type='sumbit' onClick={this.change}>{this.state.styles2}</button>
                  <button className='but-active' type='sumbit' onClick={this.active}>{this.state.styles3}</button>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-12'>
                  <h4>Codigo</h4>
                  <figure className="highlight">
                    <pre>
                      <code className="language-html" data-lang="html">
                        <span className="code">class Buttons extends Component &#123; </span><br/>
                        <span className="code">&nbsp;constructor ()&#123;</span><br/>
                        <span className="code">&nbsp;super();</span><br/>
                        <span className="code">&nbsp;&nbsp;this.state =&#123;</span><br/>
                        <span className="code">&nbsp;&nbsp;&nbsp;styles1 : 'button',</span><br/>
                        <span className="code">&nbsp;&nbsp;&nbsp;styles2 : 'button',</span><br/>
                        <span className="code">&nbsp;&nbsp;&nbsp;styles3 : 'button'</span><br/>
                        <span className="code">&nbsp;&nbsp;&nbsp;&#125;</span><br/>
                        <span className="code"> &#125;</span><br/>

                        <span className="code"> default = () => &#123;</span><br/>
                        <span className="code">  this.setState (&#123;</span><br/>
                        <span className="code">    styles1:'button default'</span><br/>
                        <span className="code">  &#125;)</span><br/>
    
                        <span className="code"> &#125;</span><br/>

                        <span className="code"> change = () => &#123;</span><br/>
                        <span className="code">   this.setState (&#123;</span><br/>
                        <span className="code">     styles2:'button change'</span><br/>
                        <span className="code">  &#125;)</span><br/>
                        <span className="code"> &#125;</span><br/>

                        <span className="code"> active = () => &#123;</span><br/>
                        <span className="code">   this.setState (&#123;</span><br/>
                        <span className="code">     styles3:'button active'</span><br/>
                        <span className="code">  &#125;)</span><br/>
                        <span className="code"> &#125;</span><br/>

                        <span className="code">&nbsp;render() &#123;</span><br/>
                         <span className="code">&nbsp;&nbsp;return (</span><br/>
                        <span className="code">&nbsp;&nbsp;&nbsp;&lt;button className='but-default' type='sumbit' onClick=&#123;this.default}&gt;&#123;this.state.styles1}&lt;/button&gt;</span><br/>
                        <span className="code">&nbsp;&nbsp;&nbsp;&lt;button className='but-change' type='sumbit' onClick=&#123;this.default}&gt;&#123;this.state.styles1}&lt;/button&gt;</span><br/>
                        <span className="code">&nbsp;&nbsp;&nbsp;&lt;button className='but-active' type='sumbit' onClick=&#123;this.default}&gt;&#123;this.state.styles1}&lt;/button&gt;</span><br/>
                        <span className="code">   )</span><br/>
                        <span className="code">&nbsp;&#125;</span><br/>
                        <span className="code">&#125;</span>
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

export default Buttons;