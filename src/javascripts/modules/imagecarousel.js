import Flickity from 'flickity'
require('flickity-imagesloaded')

export default class imagecarousel {
  constructor(el) {

    let carouselCells = el.getElementsByClassName('carousel-cell')
      if(
        carouselCells.length > 1
      ){


    var flkty = new Flickity( el, {
      draggable: true,
      // draggable: detectIt.hasTouch,
      pageDots: true,
      imagesLoaded: true,
      prevNextButtons: false,
      wrapAround: true,
      autoPlay: 8000,
      groupCells: false,
    });
  }


  }
}
