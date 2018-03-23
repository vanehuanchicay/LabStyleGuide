import React, { Component } from 'react';
import logo from '../../logo.png';

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
				</div>
			</div>

      
    )
  }
}

export default NavBar;

