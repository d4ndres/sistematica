window.onscroll = function() {listenerScroll()};

function listenerScroll() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        document.getElementById("containerHeader").classList.add("backgroundScroll")
    } else {
        document.getElementById("containerHeader").classList.remove("backgroundScroll")
    }
}
