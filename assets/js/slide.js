( () => {

  const slideImages = [
    {img: 'assets/images/slide-2.jpg', title: 'Titulación', description: 'Psicología, Neuropiscología, Ciencias de la investigación'},
    {img: 'assets/images/slide-1.jpg', title: 'Neus', description: 'Neuropsicóloga titulada'},
    {img: 'assets/images/slide-6.jpg', title: 'Experiencia laboral', description: 'Ayuntamiento de Martorell, Hospital Sant Pau, Centro de investigación de Terrassa'},
    {img: 'assets/images/slide-3.jpg', title: 'Aptitudes', description: 'Capacidad de empatizar con el paciente y llegar a lo más profundo de su ser'},
    {img: 'assets/images/slide-4.jpg', title: 'Actividades', description: 'Clases dinámicas para fortalecer los lazos sociales'},
    {img: 'assets/images/slide-5.jpg', title: 'Intereses', description: 'Avidez por el aprendizaje continuo'},
  ];

  const createHtmlStructure = ( sliderSelector, images ) => {

    const parent = document.querySelector( sliderSelector, images );

    // Slides
    images.forEach( ( slideImg, index ) => {
      const { img, title, description } = slideImg;
      const slideItem = `
      <div
        class="item"
        style="background-image: url('${ img }')"
        data-attribute="${ index }"
      >
        <div class="content">
          <div class="name">${ title }</div>
          <div class="description">${ description }</div>
          <button>Ver más</button>
        </div>
      </div>
      `;
      const divFragment = document.createRange().createContextualFragment( slideItem );
      parent.appendChild( divFragment );
    } );

    // Buttons
    const html = `
    <div class="buttons">
      <button class="prev"> Prev</button>
      <button class="next"> Next</button>
    </div>
    `;
    const fragment = document.createRange().createContextualFragment( html );
    parent.parentElement.appendChild( fragment );
    
  };

  // Initializations
  createHtmlStructure( '.slider', slideImages );
  
  
  // References
  const $slider = document.querySelector( '.slider' );
  const $next = document.querySelector( '.next' );
  const $prev = document.querySelector( '.prev' );

  // Listeners
  $next.addEventListener( 'click', () => {
    const items = document.querySelectorAll( '.item' );
    $slider.appendChild( items[ 0 ] );
  } );

  $prev.addEventListener( 'click', () => {
    const items = document.querySelectorAll( '.item' );
    $slider.prepend( items[ items.length - 1 ] );
  } );


} )();



