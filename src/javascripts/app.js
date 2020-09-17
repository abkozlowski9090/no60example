import './modules'
import svgSpriteInjector from 'svg-sprite-injector'
import lazySizes from 'lazysizes';
import emergence from 'emergence.js'
import detectIt from 'detect-it'
import SmoothScroll from 'smooth-scroll'

svgSpriteInjector(document.body)


	if(!detectIt.hasTouch) {

	}




emergence.init({
	container: window,
	reset: false,
	handheld: true,
	throttle: 250,
	elemCushion: 0.1
});
