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
        if(this.actualyWidht <= 20){
            this.actualyWidht = this.carouselVisibleWidth()
        }
        this.actualyWidht += this.carouselVisibleWidth()
        handleCarosel.carousel.scrollLeft += this.carouselVisibleWidth()
        handleArrow.exucute()

        
     
        
       
      
    },
    scrollToLeft(){
       
        this.actualyWidht -= this.carouselVisibleWidth()
        handleCarosel.carousel.scrollLeft -= this.carouselVisibleWidth()
        handleArrow.exucute()
      
    },
    
}
let handleArrow = {
    count:0,
        
    leftArrow(){
        let {actualyWidht,carouselTotalWidth,carouselVisibleWidth} = handleCarosel
       
        if(actualyWidht > carouselVisibleWidth()){
            let leftArrow = document.getElementById('leftArrow')
            leftArrow.style.opacity = 1
            

        }
        else{
            let leftArrow = document.getElementById('leftArrow')
            leftArrow.style.opacity = 0

        }
        
        
    },
    rightArrow(){
        let {actualyWidht, carouselTotalWidth, carouselVisibleWidth} = handleCarosel
        if(actualyWidht >= carouselTotalWidth()){
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
        
        if(actualyWidht > carouselTotalWidth()){
            actualyWidht = 0
            actualyWidht= 2500
            
            
            
        }
        
        try {
            this.rightArrow()
            this.leftArrow()
            
        } catch (error) {
            console.error(error)
            
        }
        console.log(`actualyWidht = ${actualyWidht}
        visible = ${carouselVisibleWidth()}
        totalWidht${carouselTotalWidth()}`)
    }
}






