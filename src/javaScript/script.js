let handleCarosel = {
    carousel: document.getElementById('carousel'),
    actualyWidht: carousel.offsetWidth,
    
    
    Aroow:{
        ShowleftArrow(){
            let {actualyWidht,carouselTotalWidth,carouselVisibleWidth} = handleCarosel
            if(actualyWidht > carouselVisibleWidth()){
                let leftArrow = document.getElementById('leftArrow')
                leftArrow.style.opacity = 1
                

            }
            else{
                let leftArrow = document.getElementById('leftArrow')
                leftArrow.style.opacity = 0

            }
            console.log(`actualyWidht = ${actualyWidht}
            \n visible = ${carouselVisibleWidth()}`)
        }
    },
    
    
    carouselVisibleWidth(){

       return handleCarosel.carousel.offsetWidth
    
       
    },
    carouselTotalWidth(){
        
        return handleCarosel.carousel.scrollWidth
    },
    

    scrollToRight(){
        this.actualyWidht += this.carouselVisibleWidth()
        handleCarosel.carousel.scrollLeft += this.carouselVisibleWidth()

        handleCarosel.Aroow.ShowleftArrow()
     
        
       
      
    },
    scrollToLeft(){
        this.actualyWidht -= this.carouselVisibleWidth()
        handleCarosel.carousel.scrollLeft -= this.carouselVisibleWidth()
        handleCarosel.Aroow.ShowleftArrow()
       
    },
    
}





