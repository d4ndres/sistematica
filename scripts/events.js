const doScroll = document.documentElement
const containerHeader = document.getElementById("containerHeader")
const linkMaker = document.getElementById("linkMaker")
const miniNav1 = document.getElementById("miniNav1")
const column3 = document.getElementById("column3")
const mediaMinLap = window.matchMedia("(max-width: 1230px)")
const SrBody = document.body
let mayor = 0
mediaMinLap.addListener(activadorMediaMinLap)

//scroll
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



//altura
  const heightAllContent = document.getElementById("heightAllContent")
  const heightMainContent1 = document.getElementById("heightMainContent1")
  const heightMainContent2 = document.getElementById("heightMainContent2")




  const buffer = document.getElementById("buffer")
  const heightHeader = document.getElementById("heightHeader")

if(buffer.offsetHeight > heightMainContent2.offsetHeight){
  buffer.style.paddingTop = heightHeader.offsetHeight + "px"
}else{//links
  heightAllContent.style.minHeight = heightMainContent2.offsetHeight + heightMainContent1.offsetHeight + "px"
  buffer.style.paddingTop = heightHeader.offsetHeight + "px"
  activadorMediaMinLap()

}
// medias

function activadorMediaMinLap(){
  if(mediaMinLap.matches){
    let gg = miniNav1.offsetHeight
    column3.style.top = gg + "px"
  }else{
    column3.style.top = 0;
  }
}
