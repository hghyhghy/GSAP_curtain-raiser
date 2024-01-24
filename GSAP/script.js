

gsap.to("#box", {

    x:1000,
    duration:2,
    delay:1,
    backgroundColor:"blue",
    rotate:360,
    scale:0.5

})

gsap.from("#box", {
    x:1000,
    duration:2,
    delay:1,
    backgroundColor:"blue",
    rotate:360,
    scale:0.5
 
})

gsap.to("h1", {
    x:600,
    color:"orange",
    duration:2,
    delay:1
})
gsap.to("h2", {
    x:600,
    color:"black",
    duration:2,
    delay:3
})
gsap.to("h3", {
    x:600,
    color:"salmon",
    duration:2,
    delay:5
})
gsap.to("h1",{
    x:600,
    duration:0.5,
    color:"yellow",
    stagger:1,
    repeat:-1,
    yoyo:true

})

var time = gsap.timeline()

time.to("h1", {
    x:500,
    duration:1
})
time.to("h2", {
    x:600,
    duration:1
})
time.to("h3", {
    x:700,
    duration:1
})
