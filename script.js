const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
})

function playButtonAnime(){
    let videoCont = document.querySelector(".video-container");
    let playBtn = document.querySelector(".play");
    
    videoCont.addEventListener("mouseenter",function(){
        gsap.to(playBtn,{
            opacity: 1,
            scale: 1
        })
    })
    
    videoCont.addEventListener("mouseleave",function(){
        gsap.to(playBtn,{
            opacity: 0,
            scale: 0
        })
    })
    
    videoCont.addEventListener("mousemove",function(event){
        gsap.to(playBtn,{
            left: event.x-40 ,
            top: event.y-40
        })
    })    
}
playButtonAnime()

function headingAnime(){
    gsap.from(".firstpage h1 ",{
        y: 100,
        opacity: 0,
        delay: 0.5,
        duration: 0.6,
        stagger: 0.3

    })

    gsap.from(".firstpage .video-container",{
        scale:0.9,
        opacity: 0,
        delay: 1.5,
        duration: 0.4,

    })
}
headingAnime()

function cursorOnProducts(){
    document.addEventListener("mousemove",function(event){
        gsap.to(".cursor",{
            left: event.x,
            top: event.y
        })
})

let a = document.querySelectorAll(".child");
a.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        gsap.to(".cursor",{
            transform: 'translate(-50%,-50%)',
            scale: 1 
        })    
    })

})

a.forEach(function(elem){
    elem.addEventListener("mouseleave", function(){
        gsap.to(".cursor",{
            transform: 'translate(-50%,-50%)',
            scale: 0 
        })    
    })

})

}
cursorOnProducts()