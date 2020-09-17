

export default class splash {
  constructor(el) {

    setTimeout(function(){
       document.body.classList.add('splash-anim');
     },
     2000);

     setTimeout(function(){
       document.getElementsByClassName("splash-screen")[0].style.display = "none"
      },
      2500);


  }
}
