const doScroll = document.documentElement
const containerHeader = document.getElementById("containerHeader")
const linkMaker = document.getElementById("linkMaker")
const SrBody = document.body
let mayor = 0

window.onscroll = function() {listenerScroll()};


function listenerScroll() {
  if (SrBody.scrollTop > 30 || doScroll.scrollTop > 30) {
      containerHeader.classList.add("backgroundScroll")

  } else {
      containerHeader.classList.remove("backgroundScroll")
  }
}

var bLazy = new Blazy({
    selector: 'img'
});

const heightAllContent = document.getElementById("heightAllContent")
const heightMainContent1 = document.getElementById("heightMainContent1")
const heightMainContent2 = document.getElementById("heightMainContent2")
heightAllContent.style.minHeight = heightMainContent2.offsetHeight + heightMainContent1.offsetHeight + "px"





// if(mayor < doScroll.scrollTop ){
//   mayor = doScroll.scrollTop
// }
// -------------------------------
// if(mayor == doScroll.scrollTop){
//   linkMaker.classList.add("activeLeftZero")
// }else {
//   linkMaker.classList.remove("activeLeftZero")
//
// }
