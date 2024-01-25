gsap.from("#page1 #box",{
    scale:0,
    delay:1,
    duartion:1,
    rotate:360,
    scrollTrigger:{
        trigger:"#page1 #box",
        scroller:"body",
        start:"top 70%",
        end:"top 30%",
        scrub:5
    }
})
gsap.from("#page2 #box",{
    scale:0,
    delay:1,
    duartion:1,
    rotate:360,
    scrollTrigger:{
        trigger:"#page2 #box",
        scroller:"body",
        start:"top 70%",
        end:"top 30%",
        scrub:5
    }
})
gsap.from("#page3 #box",{
    scale:0,
    delay:1,
    duartion:1,
    rotate:360,
    scrollTrigger:{
        trigger:"#page3 #box",
        scroller:"body",
        start:"top 70%",
        end:"top 30%",
        scrub:5
    }
})