let tl = gsap.timeline();

tl.from("i", { 
   y: -18, 
   duration: 1, 
   opacity:0,
});

tl.from("h1", { 
    y: -18, 
    duration: 1, 
    opacity:0,
 });

 tl.from(".calculator", { 
   scale:0,
   duration:2,
   rotate:360,

});
tl.from("button", { 
   opacity:0,
   scale:.7,
   duration:3,

 });

 console.log("ok")