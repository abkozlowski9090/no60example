import * as bodyScrollLock from 'body-scroll-lock'
import detectIt from 'detect-it'

export default class BurgerNav {
  constructor(el) {


    var menuClose = document.getElementsByClassName("burger-nav__menu-item")[0]
    const disableBodyScroll = bodyScrollLock.disableBodyScroll
    const enableBodyScroll = bodyScrollLock.enableBodyScroll
    const targetElement = document.querySelector(".nav-main")

    el.addEventListener('click', (e) => {
      e.preventDefault()
      document.body.classList.toggle('nav-open')
      document.body.classList.toggle('hide-menu')

      if (menuClose.innerHTML === "Close") {
        menuClose.innerHTML = "Menu";
      } else {
        menuClose.innerHTML = "Close";
      }

      if(detectIt.hasTouch) {
        if(document.body.classList.contains('nav-open')) {
          disableBodyScroll('body');
        } else {
          enableBodyScroll('body');
        }
      }


    })
  }
}
