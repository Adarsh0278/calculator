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
   y: -58, 
   duration: 2, 
   opacity:0,

});
tl.from("button", { 
    y: -58, 
    duration: 2, 
    opacity:0,

 });

//  tl.from("h1", { 
//     y: -18, 
//     opacity:0,
//  });

 console.log("ok")