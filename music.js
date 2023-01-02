gsap.from("#right",{
    width:"0",
duration:2,
ease:Expo.easeInOut
})

gsap.set("#right #yellowCard",{
  opacity:0,
  scale:1.5
})


gsap.from("#right #yellowCard",{
  top:0,
duration:2,
ease:Expo.easeInOut
})




gsap.to("#right #yellowCard",{
 opacity:1,
scale:1,
duration:2,
ease:Expo.easeInOut
})


gsap.set("#right #music",{
opacity:0,
bottom:0,
})
gsap.to("#right #music",{
opacity:1,
delay:1.5,
bottom:"15%",
ease:Expo.ease
})
gsap.from("#left #lnav #circle",{
opacity:0,
delay:2,
duration:2,
ease:Expo.easeOut,
y:30


})

gsap.from("#left #lcenter #inne h1",{
   x:-200,
  y:-10,
 delay:.2,
 duration:1.5,
 opacity:0.05,
ease:Expo.ease

})
