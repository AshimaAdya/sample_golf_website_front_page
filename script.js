
var crsr=document.querySelector("#cursor")
var crsrblr=document.querySelector("#cursor-blur")
var h4all=document.querySelectorAll("#nav h4")
var footerh3all=document.querySelectorAll("#f3 h3")
var footerh2all=document.querySelectorAll("#f2 h3")
document.addEventListener("mousemove",function(dets){
   crsr.style.left=dets.x+ 30+"px"
   crsr.style.top=dets.y+"px"
   crsrblr.style.left=dets.x -250 +"px"
   crsrblr.style.top=dets.y -250 +"px"
})

h4all.forEach(function(element){
   element.addEventListener("mouseenter",function(){
    crsr.style.scale=3
    crsr.style.border="1px solid #fff"
    crsr.style.backgroundColor="transparent"
    element.style.color="#95C11E"
    element.style.fontWeight = "bold";
   })
   element.addEventListener("mouseleave",function(){
    crsr.style.scale=1
    crsr.style.border="0px solid #95C11E"
    crsr.style.backgroundColor="#95C11E"
    element.style.color="#fff"
    element.style.fontWeight = "normal";
   })
})


footerh3all.forEach(function(element){
    element.addEventListener("mouseenter",function(){
     crsr.style.scale=3
     crsr.style.border="1px solid #fff"
     crsr.style.backgroundColor="transparent"
     element.style.color="#fff"
     element.style.fontWeight = "bold";
    })
    element.addEventListener("mouseleave",function(){
     crsr.style.scale=1
     crsr.style.border="0px solid #95C11E"
     crsr.style.backgroundColor="#95C11E"
     element.style.color="#000"
     element.style.fontWeight = "bold";
    })
 })

 footerh2all.forEach(function(element){
    element.addEventListener("mouseenter",function(){
     crsr.style.scale=3
     crsr.style.border="1px solid #fff"
     crsr.style.backgroundColor="transparent"
     element.style.color="#fff"
     element.style.fontWeight = "bold";
    })
    element.addEventListener("mouseleave",function(){
     crsr.style.scale=1
     crsr.style.border="0px solid #95C11E"
     crsr.style.backgroundColor="#95C11E"
     element.style.color="#000"
     element.style.fontWeight = "bold";
    })
 })
gsap.to("#nav",{
    backgroundColor:"#000",
    height:"110px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
       // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        //markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
    }
)

gsap.from("#about-us img,#about-us-in",{
    y:90,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})

gsap.from(".card",{
   scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})
gsap.from("#colon1",{
    y:-70,
    x:-70,
     scrollTrigger:{
         trigger:"#colon1",
         scroller:"body",
         start:"top 50%",
         end:"top 45%",
         scrub:4
     }
 })

 gsap.from("#colon2",{
    y:70,
    x:70,
     scrollTrigger:{
         trigger:"#colon1",
         scroller:"body",
         start:"top 50%",
         end:"top 45%",
         scrub:4
     }
 })
 gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:4
    }
 })
