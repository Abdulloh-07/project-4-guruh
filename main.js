let images = ["./uzum-1.png", "./uzum-2.jpg", "./uzum-3.jpg", "./uzum-4.jpg", "./uzum-5.jpg", "./uzum-6.jpg", "./uzum-7.jpg", "./uzum-8.jpg", "./uzum-9.jpg"];
let imgIndex = 0;

let karuselImg = document.getElementById("carouselImage")
let rightBtn = document.getElementById("rightBtn")
let leftBtn = document.getElementById("leftBtn")

rightBtn.addEventListener("click", function() {
    if(imgIndex < images.length - 1){
        imgIndex++
    }
    else{
        imgIndex = 0
    }
    karuselImg.src = images[imgIndex]
})

leftBtn.addEventListener("click", function() {
    if(imgIndex > 0){
        imgIndex--
    }
    else{
        imgIndex = images.length - 1
    }
    karuselImg.src = images[imgIndex]
})