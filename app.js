let slide = 0

function showSlides() {
    const slides = document.querySelectorAll(".mySlides")
    

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }

    if(slide <   slides.length){
        slides[slide].style.display = "block"
        slide++
        setTimeout(showSlides, 4000)
    } else {
        slide = 0
        showSlides()
    }
    console.log(slide)
    
}

showSlides()
