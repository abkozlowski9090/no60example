import * as bodyScrollLock from 'body-scroll-lock'
import detectIt from 'detect-it'

export default class contactshow {
  constructor(el) {

    var contactBtn = el
    var contactPanel = document.getElementsByClassName("js-contact-panel")[0]
    var contactCross = document.getElementsByClassName("js-contact-cross")[0]
    var menuClose = document.getElementsByClassName("burger-nav__menu-item")[0]
    const disableBodyScroll = bodyScrollLock.disableBodyScroll
    const enableBodyScroll = bodyScrollLock.enableBodyScroll

    contactBtn.addEventListener('click', (e) => {
      e.preventDefault()
      contactPanel.classList.toggle('is-hidden');
      document.body.classList.toggle('contact-open')
    })

    contactBtn.addEventListener('click', (e) => {
      contactCross.classList.toggle('is-hidden');
      document.body.classList.remove('nav-open')
      document.body.classList.add('nav-hide')
      menuClose.innerHTML = "Menu";

      if(document.body.classList.contains('contact-open')) {
        disableBodyScroll('.contact-open');
      } else {
        enableBodyScroll('.contact-open');
      }
    })

    contactBtn.addEventListener('click', (e) => {
      contactCross.classList.toggle('is-hidden');
      document.body.classList.remove('nav-hide')
    })

    contactCross.addEventListener('click', (e) => {
      contactCross.classList.toggle('is-hidden');
      document.body.classList.remove('contact-open')
    })


  }
}
