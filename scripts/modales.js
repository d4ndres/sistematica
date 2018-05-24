const $activadorModalCadenas = document.getElementById('activadorModalCadenas')
const $activadorModalParalelo = document.getElementById('activadorModalParalelo')
const $activadorModalMatriz = document.getElementById('activadorModalMatriz')

const $containerCadenas = document.getElementById('containerCadenas')
const $containerParalelo = document.getElementById('containerParalelo')
const $containerMatriz = document.getElementById('containerMatriz')

const $modal = document.getElementById('modal')
const $overlay = document.getElementById('overlay')
const $xbtn = document.getElementById('xbtn')


$activadorModalCadenas.addEventListener('click', showCadenas)
$activadorModalParalelo.addEventListener('click', showParalelo)
$activadorModalMatriz.addEventListener('click', showMatriz)

$xbtn.addEventListener('click', closeAll)
$overlay.addEventListener('click', close)



function showCadenas(){
  $overlay.classList.add('active')
  $containerCadenas.classList.add('active')
  containerHeader.style.zIndex = '0'
}
function showParalelo(){
  $overlay.classList.add('active')
  $containerParalelo.classList.add('active')
  containerHeader.style.zIndex = '0'
}
function showMatriz(){
  $overlay.classList.add('active')
  $containerMatriz.classList.add('active')
  containerHeader.style.zIndex = '0'
}
function closeAll(){
  $containerParalelo.classList.remove('active')
  $containerCadenas.classList.remove('active')
  $containerMatriz.classList.remove('active')
  $overlay.classList.remove('active')
  containerHeader.style.zIndex = '1'
}
function close(event){
   if((event.target) == $overlay){
     closeAll()
   }
}
