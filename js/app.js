let boxes = document.querySelectorAll('.box');
let icons = document.querySelector('.icon');
function light(value){
  let pic;
  if(value === 'on'){
    pic = "./images/on bulb.png";
    boxes.forEach(box => {
      box.style.background = "";
      audio.play();
      box.classList.toggle('on');
      icons.style.color = "black";
    });
  } else {
    pic = "./images/off bulb.png";
    boxes.forEach(box => {
      box.style.background = ""; // Reset background color (optional)
      audio.play();
      box.classList.toggle('on');
      icons.style.color = "rgba(0, 255, 255, 0.3)";
    });
  }
  document.getElementById('bulb').src = pic;
}


// SCROLL STARTS HERE

const arr1 = ["1bb28c","e86a58","fed45b","9bc7c5"]
const arr2 = [...arr1]
const arr3 = [...arr1]
const words2 = ["DON’T","BE","EVIL"]
const words3 = ["NICE TO","MEET","YOU"]
const spans = document.querySelectorAll('h1 span')
const getHexFrom = (arr) => arr.splice( gsap.utils.random(0 ,arr.length-1, 1), 1)

const tl =  gsap.timeline({
  defaults:{ ease:'none' },
  scrollTrigger:{
    trigger:'section',
    scrub:0,
    pin:'h1',
    start:'0 0',
    end:'100% 0'
  }
})

spans.forEach((span,i)=>{
  gsap.set(span,{'--bg':'#'+getHexFrom(arr1)})
  
  tl.add( gsap.to(span, { text:words2[i] }), i)
  tl.add( gsap.to(span, { '--bg':'#'+getHexFrom(arr2), duration:0.15 }), i)
  
  tl.add( gsap.to(span, { text:words3[i] }), i+3)
  tl.add( gsap.to(span, { '--bg':'#'+getHexFrom(arr3), duration:0.15 }), i+3)
})


// Handy trick for smooth screen recording
// gsap.timeline({repeat:-1, repeatDelay:0.5, defaults:{duration:2, ease:'power1.inOut'}})
// .to(window, {scrollTo:innerHeight/2}, 0.5)
// .to(window, {scrollTo:innerHeight}, '+=0.15')
// .to(window, {scrollTo:0}, '+=0.15')

// SCROLL ENDS HERE


