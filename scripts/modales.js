const $cadenas = document.getElementById('activadorModalCadenas')
const $overlay = document.getElementById('overlay')
const $xbtn = document.getElementById('xbtn')

$cadenas.addEventListener('click', showCadenas)
$xbtn.addEventListener('click', closeAll)



function showCadenas(){
  $overlay.classList.add('active')
}
function closeAll(){
  $overlay.classList.remove('active')
}
