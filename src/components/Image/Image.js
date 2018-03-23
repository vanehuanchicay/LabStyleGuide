import React, { Component } from 'react';


class Image extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 images'>
          <div className='row contain-image'>
            <div className='col-md-12 col-lg-12'>
              <h2>Images</h2>
              <p>Imágenes en un comportamiento receptivo y agregarles estilos ligeros, todo a través de clases.</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2'>
              <div className='row'>
                <div className='col-md-12'>
                  <h3>Imágenes Responsiva</h3>
                  <p>Las imágenes son responsive con className='image-responsive' .Se aplican a la imagen para que se escale con el elemento padre.</p>
                  <div className='contenedor'>
                    <img src='' alt='' className='imageResponsive-ex' />
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-12'>
                  <h4>Codigo</h4>
                  <figure class="highlight">
                    <pre>
                      <code class="language-html" data-lang="html">
                        <span class="code">&lt;img src='...'  alt='...' className='image-responsive' /&gt;</span>
                      </code>
                    </pre>
                  </figure>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-12'>
                  <h3>Imágenes Miniatura</h3>
                  <p>Las imágenes son miniaturas con className='image-thumbnail'</p>
                  <div className='contenedor'>
                    <img src=''  alt='' className='imageThumbnail-ex' />
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-12'>
                  <h4>Codigo</h4>
                  <figure class="highlight">
                    <pre>
                      <code class="language-html" data-lang="html">
                        <span class="code">&lt;img src='...'  alt='...' className='image-thumbnail' /&gt;</span>
                      </code>
                    </pre>
                  </figure>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-12'>
                  <h3>Alineación Imágenes</h3>
                  <p>Alinee las imágenes con las clases className='float-left' y className='float-right'. Las imágenes se pueden centrar utilizando className='image-auto'.</p>
                  <div className='contenedor'>
                    <img src=""  alt="" className='floatLeft-ex' />
                    <img src=""  alt="" className='floatRight-ex' />
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-12'>
                  <h4>Codigo</h4>
                  <figure class="highlight">
                    <pre>
                      <code class="language-html" data-lang="html">
                        <span class="code">&lt;img src='...'  alt='...' className='float-left' /&gt;</span><br/>
                        <span class="code">&lt;img src='...'  alt='...' className='float-right' /&gt;</span>
                      </code>
                    </pre>
                  </figure>
                </div>
              </div><br/><br/>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='contenedor'>
                    <img src=""  alt="" className='imageAuto-ex'/>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-12'>
                  <h4>Codigo</h4>
                  <figure class="highlight">
                    <pre>
                      <code class="language-html" data-lang="html">
                        <span class="code">&lt;img src='...'  alt='...' className='image-auto' /&gt;</span>
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

export default Image;
