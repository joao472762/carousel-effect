let handleCaruousel = {
    carousel: document.getElementById('carousel'),
    actualyWidht: carousel.offsetWidth,

    carouselVisibleWidth(){
       return handleCaruousel.carousel.offsetWidth
    },

    carouselTotalWidth(){
        
        return handleCaruousel.carousel.scrollWidth
    },
    scrollToRight(){
        if(handleCaruousel.actualyWidht <= 20){
            handleCaruousel.actualyWidht = handleCaruousel.carouselVisibleWidth()
        }
        handleCaruousel.actualyWidht += this.carouselVisibleWidth()
        handleCaruousel.carousel.scrollLeft += this.carouselVisibleWidth()
        handleArrow.exucute()
      
    },
    scrollToLeft(){
        if(handleCaruousel.actualyWidht >= handleCaruousel.carouselTotalWidth()){
            handleCaruousel.actualyWidht = handleCaruousel.carouselTotalWidth()
        }
       
        this.actualyWidht -= this.carouselVisibleWidth()
        handleCaruousel.carousel.scrollLeft -= this.carouselVisibleWidth()
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
        let {actualyWidht, carouselTotalWidth, carouselVisibleWidth} = handleCaruousel
        if(actualyWidht < 0){
            actualyWidht = carouselVisibleWidth()
        }
        if(actualyWidht >= carouselTotalWidth()){
            actualyWidht = carouselTotalWidth()
        }
        

        try {
            handleArrow.rightArrow(actualyWidht,carouselTotalWidth())
            handleArrow.leftArrow(actualyWidht,carouselVisibleWidth())
            
        } catch (error) {
            console.error(error)
            
        }
        console.log(`actualyWidht = ${actualyWidht}
        visible = ${carouselVisibleWidth()}
        totalWidht${carouselTotalWidth()}`)
    }
}






