let handleCarosel = {
    carousel: document.getElementById('carousel'),
    actualyWidht: carousel.offsetWidth,

    carouselVisibleWidth(){
       return handleCarosel.carousel.offsetWidth
    },

    carouselTotalWidth(){
        
        return handleCarosel.carousel.scrollWidth
    },
    

    scrollToRight(){
        if(handleCarosel.actualyWidht <= 20){
            handleCarosel.actualyWidht = handleCarosel.carouselVisibleWidth()
        }
        handleCarosel.actualyWidht += this.carouselVisibleWidth()
        handleCarosel.carousel.scrollLeft += this.carouselVisibleWidth()
        handleArrow.exucute()
      
    },
    scrollToLeft(){
        if(handleCarosel.actualyWidht >= handleCarosel.carouselTotalWidth()){
            handleCarosel.actualyWidht = handleCarosel.carouselTotalWidth()
        }
       
        this.actualyWidht -= this.carouselVisibleWidth()
        handleCarosel.carousel.scrollLeft -= this.carouselVisibleWidth()
        handleArrow.exucute()
      
    },
    
}
let handleArrow = {
        
    leftArrow(actualyWidht=0,carouselVisibleWidth=0){
       
        if(actualyWidht > carouselVisibleWidth){
            let leftArrow = document.getElementById('leftArrow')
            leftArrow.style.opacity = 1
            

        }
        else{
            let leftArrow = document.getElementById('leftArrow')
            leftArrow.style.opacity = 0

        }
        
        
    },
    rightArrow(actualyWidht=0, carouselTotalWidth=0){

        if(actualyWidht +20 >= carouselTotalWidth){
            let rightArrow = document.getElementById('rightArrow');
            rightArrow.style.opacity = 0
        }
        else{
            let rightArrow = document.getElementById('rightArrow');
            rightArrow.style.opacity = 1   
        }
    },
    exucute(){
        let {actualyWidht, carouselTotalWidth, carouselVisibleWidth} = handleCarosel
        if(actualyWidht < 0){
            actualyWidht = carouselVisibleWidth()
        }
        if(actualyWidht >= 2816){
            actualyWidht = carouselTotalWidth()
        }
        
       
        
        try {
            this.rightArrow(actualyWidht,carouselTotalWidth())
            this.leftArrow(actualyWidht,carouselVisibleWidth())
            
        } catch (error) {
            console.error(error)
            
        }
        console.log(`actualyWidht = ${actualyWidht}
        visible = ${carouselVisibleWidth()}
        totalWidht${carouselTotalWidth()}`)
    }
}






