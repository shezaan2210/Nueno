// import Shery from "sheryjs";

// const { default: gsap } = require("gsap")

// const { default: gsap } = require("gsap")


// Shery.mouseFollower({
//     //Parameters are optional.
//     skew: true,
//     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//     duration: 1,
//   });


function menu() {
    var main = document.querySelector(`.main`);
    var page =  document.querySelector('#menu-scr')
var line1 = document.querySelector('.menu>.line1')
var line2 = document.querySelector('.menu>.line2')
flag = 0
var menu = document.querySelector(`.menu`).addEventListener('click',()=>{
    if(flag===0){
        // page.style.opacity = 1
        // page.style.display = `initial`
        main.style.overflowX = `hidden`
        page.style.transform = `translateX(0)`
        flag = 0
        // line1.style.rotate = `45deg`
        // line2.style.rotate = `-45deg`
        // line1.style.marginTop = `8px`
        // line1.style.backgroundColor = `#000`
        // line2.style.backgroundColor = `#000`
        
    }
    else{
        // page.style.display = `block`
        // main.style.overflowX = `hidden`
        // page.style.transform = `translateX(100%)`
        // flag = 0
        // line1.style.rotate = `0deg`
        // line2.style.rotate = `0deg`
        // line1.style.marginTop = `0px`
        // // page.style.opacity = 0
        // line1.style.backgroundColor = `#fff`
        // line2.style.backgroundColor = `#fff`
        // page.style.display = `none`
        
        
    }
    document.querySelector(`.menu2`).addEventListener(`click`,()=>{
        page.style.transform = `translateX(100%)`
    })
   
}) 
}
menu();

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.1,
    spaceBetween: 250,
    pagination: {
    //   el: ".swiper-pagination",
      clickable: true,
    },
  });



  function init(){
    gsap.registerPlugin(ScrollTrigger);
  
//   Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
  getDirection: true,
  mobile: {
    smooth: true
  },
  tablet: {
    smooth: true
  }

  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });
  
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
init();  


var tl = gsap.timeline();

var mm = gsap.matchMedia();

tl.from(`.container>img`,{
    y:100,
    duration: 1,
    opacity: 0
    

})

gsap.to(`.nav`,{
    scrollTrigger:{
        scroller: `.main`,
        trigger: `.nav`,
        start: `top top`,
        end: `bottom 5%`,
        // markers:true
    }
})
mm.add(`min-width: 820px`,()=>{
    gsap.to(`.container>img`,{
        scrollTrigger:{
            scroller: `.main`,
            trigger: `.container>img`,
            start: `-35% top`,
            end: `210% 20%`,
            // markers:true,
            pin:true,
            scrub:true
        }
    });
});


tl.from(`.container>h1`,{
    y:100,
    duration: 1,
    opacity: 0,
    stagger:.2
})

gsap.from(`.container>h6`,{
    scrollTrigger:{
        scroller: `.main`,
        trigger: `.container>h6`,
        start: `top bottom`,
        end: `bottom top`,
        // markers:true,
       
        scrub:true
},
y:100,
duration: 1,
opacity: 0,
stagger:.2
});

gsap.from(`.wrapper`,{
    scrollTrigger:{
        scroller: `.main`,
        trigger: `.wrapper`,
        start: `top bottom`,
        end: `20% top`,
        // markers:true,
       
        scrub:true
},
x:100,
duration: .5,
opacity: 0,
stagger:.2
});

gsap.from(`#page3`,{
    scrollTrigger:{
        scroller: `.main`,
        trigger: `#page3`,
        start: `top bottom`,
        end: `20% top`,
        // markers:true,
       
        scrub:true
},
x:-100,
duration: .5,
opacity: 0,
stagger:.2
});

// gsap.to(`.image>img`,{
//     scrollTrigger:{
//         scroller: `.main`,
//         trigger: `.image>img`,
//         start: `-35% top`,
//         end: `100% 20%`,
//         // markers:true,
//         pin:true,
//         scrub:true
//     }
// });

tl.from(`.BTM>p`,{
    scrollTrigger:{
        scroller: `.main`,
        trigger: `.BTM`,
        start: `20% bottom`,
        end: `50% top`,
        // markers:true,
       
        scrub:2
},
y:100,
duration: .5,
opacity: 0,
stagger:.2
});

tl.from(`.BTM>h2,.BTM>a`,{
    scrollTrigger:{
        scroller: `.main`,
        trigger: `.BTM`,
        start: `25% bottom`,
        end: `50% top`,
        // markers:true,
       
        scrub:2
},
x:100,
// y:100,
duration: .5,
opacity: 0,
stagger:.2
});

gsap.from(`.image>img`,{
    scrollTrigger:{
        scroller: `.main`,
        trigger: `.image`,
        start: `20% bottom`,
        end: `50% top`,
        // markers:true,
       
        // scrub:2
},
x:-100,
duration: .5,
opacity: 0,
stagger:.2
});

gsap.from(`.image>h2`,{
    scrollTrigger:{
        scroller: `.main`,
        trigger: `.image`,
        start: `20% bottom`,
        end: `50% top`,
        // markers:true,
       
        // scrub:2
},
x:100,
duration: .2,
opacity: 0,
stagger:.2
});

gsap.from(`#page6>h2`,{
    scrollTrigger:{
        scroller: `.main`,
        trigger: `#page6`,
        start: `20% bottom`,
        end: `50% top`,
        // markers:true,
       
        scrub:true
},
y:100,
duration: .5,
opacity: 0,
stagger:.2
});

gsap.from(`#logos>img`,{
    scrollTrigger:{
        scroller: `.main`,
        trigger: `#page6`,
        start: `20% bottom`,
        end: `50% top`,
        // markers:true,
       
        scrub:true
},
y:100,
duration: .5,
opacity: 0,
stagger:.2
});

gsap.from(`#articles>h2`,{
    scrollTrigger:{
        scroller: `.main`,
        trigger: `#articles`,
        start: `20% bottom`,
        end: `50% 50%`,
        // markers:true,
       
        scrub:true
},
y:100,
duration: .5,
opacity: 0,
stagger:.2
});

gsap.from(`#articles>h1`,{
    scrollTrigger:{
        scroller: `.main`,
        trigger: `#articles`,
        start: `50% bottom`,
        end: `60% 50%`,
        // markers:true,
       
        scrub:true
},
x:-100,
duration: .5,
opacity: 0,
stagger:.2
});
