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

// let i = 0
// const text = 'Creating websites that engage users.'
// const speed = 50

// window.onload = function typeWriter() {
//     if( i < text.length ) {
//         document.getElementById('typewriter').innerHTML += text.charAt(i);
//         i++
//         setTimeout(typeWriter,speed)
//     }
// }