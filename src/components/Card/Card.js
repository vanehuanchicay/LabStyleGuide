import React, { Component } from 'react';


class Card extends Component {
  render() {
    return (
      <div className='row'>
				<div className='col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 cards'>
					<div className='row contain-card'>
						<div className='col-md-12 col-lg-12'>
							<h2>Card</h2>
							<p>Las tarjetas ofrecen una gran cantidad de control y personalización. No tienen margin por defecto, así que use los servicios de separación según sea necesario.</p>
						</div>
					</div>
					<div className='row'>
						<div className='col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2'>
							<div className='row'>
								<div className='col-md-5'>
									<h3>Ejemplo</h3><br/>
                  <div className='card-ex'>
                    <img src=''  alt='' className='card-image-ex' />
                    <div className='card-body'>
                      <h5 className='card-title'>Card title</h5>
                      <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <button className='but-small sm' type='sumbit'>button</button>
                    </div>
                  </div>
								</div>
							</div>
							<div className='row'>
								<div className='col-md-12'>
									<h4>Codigo</h4>
									<figure class="highlight">
										<pre>
											<code class="language-html" data-lang="html">
												<span class="code">&lt;div className='card'&gt;</span><br/>
												<span class="code">&lt;img src='...'  alt='...' className='card-image' /&gt;</span><br/>
                        <span class="code">&lt;div className='card-body'&gt;</span><br/>
                        <span class="code">&lt;h5 className='card-title'&gt;Card title&lt;/h5&gt;</span><br/>
                        <span class="code">&lt;p className='card-text'&gt;Some quick example text to build on the card title and make up the bulk of the card's content.&lt;/p&gt;</span><br/>
                        <span class="code">&lt;button className='but-small sm' type='sumbit'&gt;button&lt;/button&gt;</span>
											</code>
										</pre>
									</figure>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
    );
  }
}

export default Card;
