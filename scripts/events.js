const doScroll = document.documentElement
const containerHeader = document.getElementById("containerHeader")
const linkMaker = document.getElementById("linkMaker")
const SrBody = document.body
let mayor =0

window.onscroll = function() {listenerScroll()};


function listenerScroll() {
  if (SrBody.scrollTop > 40 || doScroll.scrollTop > 40) {
      containerHeader.classList.add("backgroundScroll")
      console.log("si hay")
      console.log(doScroll.scrollTop)

  } else {
      containerHeader.classList.remove("backgroundScroll")
      console.log("no hay")
      console.log(doScroll.scrollTop)
  }


}

var bLazy = new Blazy({
    selector: 'img'
});


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
