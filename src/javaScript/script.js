let handleCaruousel = {
    /*declared variables that will work on all hadle Carousel*/
    carousel: document.getElementById('carousel'),
    actualyWidht: carousel.offsetWidth,
    //function that will return my carousel View Width
    carouselVisibleWidth(){
       return handleCaruousel.carousel.offsetWidth
    },
    //function that will return the carousel total widht
    carouselTotalWidth(){
        
        return handleCaruousel.carousel.scrollWidth
    },
    //function that will move my carrousel Scrool to right 
    scrollToRight(){
        if(handleCaruousel.actualyWidht <= 20){
            handleCaruousel.actualyWidht = handleCaruousel.carouselVisibleWidth()
        }
        handleCaruousel.actualyWidht += handleCaruousel.carouselVisibleWidth()
        handleCaruousel.carousel.scrollLeft += handleCaruousel.carouselVisibleWidth()
        handleArrow.exucute()
      
    },
    //function that will move my carrousel Scrool to left
    scrollToLeft(){
        if(handleCaruousel.actualyWidht >= handleCaruousel.carouselTotalWidth()){
            handleCaruousel.actualyWidht = handleCaruousel.carouselTotalWidth()
        }
       
        handleCaruousel.actualyWidht -= handleCaruousel.carouselVisibleWidth()
        handleCaruousel.carousel.scrollLeft -= handleCaruousel.carouselVisibleWidth()
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
        console.log(
           `actualyWidht = ${actualyWidht}
            visible = ${carouselVisibleWidth()}
            totalWidht${carouselTotalWidth()}`)
    }
}






