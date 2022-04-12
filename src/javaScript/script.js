let handleCarosel = {
    carousel: document.getElementById('carousel'),
    
    carouselWidht(){
        console.log(handleCarosel.carousel.offsetWidth)
       return handleCarosel.carousel.offsetWidth
    
       
    },

    scrollToRight(){
        handleCarosel.carousel.scrollLeft += this.carouselWidht()
    },
    scrollToLeft(){
        handleCarosel.carousel.scrollLeft += this.carouselWidht()
    }
}
setTimeout(() => {
    handleCarosel.scrollToRight()
}, 5000);
