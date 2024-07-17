var curs=document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets){
    curs.style.left=dets.x+30+"px"
    curs.style.top=dets.y+"px"
})

var cursb=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    cursb.style.left=dets.x-150+"px"
    cursb.style.top=dets.y-150+"px"
})

gsap.to("#nav",{
    backgroundColor:"black",
    height:"110px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start :"top -10%",
        end:"top -11%",
        scrub:2
    }
})

gsap.to("#main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers:true,
        start :"top -25%",
        end:"top -70%",
        scrub:2
    }
})

var h4all=document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        curs.style.scale=3
        curs.style.border="1px solid #fff"
        curs.style.backgroundColor="transparent"
    })
    elem.addEventListener("mouseleave",function(){
        curs.style.scale=1
        curs.style.border="0px solid  #95C11E"
        curs.style.backgroundColor= "#95C11E"
    })
})

gsap.from("#about-us img,#about-us-in",{
    y:90,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        scroller:"body",
        trigger:"#about-us",
        // markers:true,
        start:"top 70%",
        end:"top 60%",
        scrub:2
    }
})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.2,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})

gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });
  gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });

  gsap.from("#page4 h1",{
    y:50,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        // markers:true,
        start: "top 75%",
        end: "top 70%",
        scrub: 2,
      },
  })

