import React, { Component } from 'react';
import logo from '../../logo.png';
import logolab from '../../images/logolab.png';

class NavBar extends Component {
  render() {
    return (
    	<div className=' row '>
				<div className='col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 buttons'>
					<div className='row contain-button'>
						<div className='col-md-12 col-lg-12'>
							<h2>NavBar</h2>
							<p> Logotipo institucional, con tamaño y posición determinada</p>
						</div>
					</div>
					<div className='row contain-btn'>
						<div className='col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2'>
							<div className='row'>
								<div className='col-md-12'>
									<h3>Visualización</h3>

									<div className="nav">
										<header >
									     <img src= {logo} alt="home" className="logo_lab"/>
									  </header>
									</div>

								</div>
							</div>
							<div className='row'>
								<div className='col-md-12'>
									<h4>Codigo</h4>
									<figure className="highlight">
										<pre>
											<code className="language-html" data-lang="html">
												<span className="code">&lt;div className='nav'&gt;</span><br/>
												<span className="code">&lt;header&gt;</span><br/>
												<span className="code">&lt;img className='logo_lab' alt='home'&gt;</span><br/>
												<span className="code">&lt;/header&gt;</span><br/>
												<span className="code">&lt;/div'&gt;</span><br/>

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
                  <h3>Visualización</h3>
                  <nav class="navbar-menu row">
                    <div class="col-md-3 col-lg-3">
                      <img className="logo-navbar" src={ logolab } alt="logo"/>
                    </div>
                    <div class="contain-menu col-md-7 col-md-offset-2">
                      <ul class="menu">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Estudiantes</a></li>
                        <li><a href="#">Empresas</a></li>
                        <li><a href="#">Intranet</a></li>
                      </ul>
                    </div>
                  </nav>
                  <nav class="navbar-menu-blank row">
                    <div class="col-md-3 col-lg-3">
                      <img src= {logo} alt="home" className="logo-navbar-blank"/>
                    </div>
                    <div class="contain-menu col-md-7 col-md-offset-2">
                      <ul class="menu-blank">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Estudiantes</a></li>
                        <li><a href="#">Empresas</a></li>
                        <li><a href="#">Intranet</a></li>
                      </ul>
                    </div>
                  </nav>


                </div>
              </div>
              <div className='row'>
                <div className='col-md-12'>
                  <h4>Codigo</h4>
                  <figure className="highlight">
                    <pre>
                      <code className="language-html" data-lang="html">
                        <span className="code">&lt;nav class="navbar-menu row"&gt;</span><br/>
                        <span className="code">&nbsp;&lt;div class="col-md-3 col-lg-3"&gt;</span><br/>
                        <span className="code">&nbsp;&nbsp;&lt;img className="logo-navbar" src=&#123; logolab &#125; alt="logo"/&gt;</span><br/>
                        <span className="code">&nbsp;&lt;/div&gt;</span><br/>
                        <span className="code">&nbsp;&lt;div class="contain-menu col-md-7 col-md-offset-2"&gt;</span><br/>
                        <span className="code">&nbsp;&nbsp;&lt;ul class="menu"&gt;</span><br/>
                        <span className="code">&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;a href="#"&gt;Home&lt;/a&gt;&lt;/li&gt;</span><br/>
                        <span className="code">&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;a href="#"&gt;Estudiantes&lt;/a&gt;&lt;/li&gt;</span><br/>
                        <span className="code">&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;a href="#"&gt;Empresas&lt;/a&gt;&lt;/li&gt;</span><br/>
                        <span className="code">&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;a href="#"&gt;Intranet&lt;/a&gt;&lt;/li&gt;</span><br/>
                        <span className="code">&nbsp;&nbsp;&lt;/ul&gt;</span><br/>
                        <span className="code">&nbsp;&lt;/div&gt;</span><br/>
                        <span className="code">&lt;/nav&gt;</span><br/>
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

export default NavBar;

