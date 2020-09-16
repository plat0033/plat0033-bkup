const navbar = document.getElementById("navbar")
const sticky = navbar.offsetTop

console.log(sticky)
console.log(window.pageYOffset)


window.onscroll = function() {
    if( window.pageYOffset >= sticky ){
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky")
    }

}