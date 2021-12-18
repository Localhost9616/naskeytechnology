
let flag = 1;
const loadslide = () => {
  let slides = document.getElementsByClassName("pages");
  for (let index = 0; index < slides.length; index++) {
    if (index == flag) {
      slides[index].style.display = "flex";
    }else{
      slides[index].style.display = "none";
    }
  }
}
document.querySelector(`#num${flag + 1}`).innerHTML = `0${flag}`;
const funprev= () => {
  let count=0;
  // alert(hello);
  flag--;
  if(flag<0){
    flag=flag+8;
  }
  if(flag==0){
    count=8;
  }else{
    count=0;
  }
  console.log(flag);
  document.querySelector(`#num${(flag%8)+1}`).innerHTML = `0${flag+count}`;
  loadslide();
}
let flag2=1;
const funnext= () => {
  flag++;
  document.querySelector(`#num${(flag%8) + 1}`).innerHTML = `0${flag}`;
  flag=flag%8;
  // document.querySelector("#num7").style.display = "flex";
  // console.log(document.querySelector("#num7").style.display);
  loadslide();
}
// const nextslide= () => {
//   flag2++;
//   // document.querySelector(`#num${(flag%8) + 1}`).innerHTML = `0${flag}`;
//   // flag=flag%8;
//   // document.querySelector("#num7").style.display = "flex";
//   // console.log(document.querySelector("#num7").style.display);
//   // loadslide();
// }
// document.getElementById("prev").addEventListener("click", funprev);
// document.getElementById("next").addEventListener("click", funnext);

loadslide();
console.log(document.querySelector(".num").innerHTML);
let points=document.querySelectorAll("details");
const closeall=()=>{
  for (let index = 0; index < points.length; index++) {
    points[index].open=false;
    
  }
}
document.getElementById("suum1").onmouseenter=()=>{
  points[0].style.cursor="pointer";
  closeall();
  points[0].open=true;
}
document.getElementById("suum2").onmouseenter=()=>{
  points[1].style.cursor="pointer";
  closeall();
  points[1].open=true;
}
document.getElementById("suum3").onmouseenter=()=>{
  points[2].style.cursor="pointer";
  closeall();
  points[2].open=true;
}
document.getElementById("suum4").onmouseenter=()=>{
  points[3].style.cursor="pointer";
  closeall();
  points[3].open=true;
}
document.getElementById("suum5").onmouseenter=()=>{
  points[4].style.cursor="pointer";
  closeall();
  points[4].open=true;
}
document.getElementById("suum6").onmouseenter=()=>{
  points[5].style.cursor="pointer";
  closeall();
  points[5].open=true;
}
let cardcontainer=document.getElementById("page3");
let cards=document.getElementById("cards");
let ispressed=false;
let scroll;
cardcontainer.addEventListener("mousedown", (e)=>{
  ispressed=true;
  scroll=e.offsetX-cards.offsetLeft;
})
// console.log(points[2].open);
window.addEventListener("mouseup", ()=>{
  ispressed=false;
})
cardcontainer.addEventListener("mousemove", (e)=>{
  if(!ispressed) return;
    e.preventDefault();
    cards.style.left=`${e.offsetX-scroll}px`;
  
})
const nextslide= ()=>{
    cards.style.left=cards.style.left+10+"px";
    flag2++;
    document.getElementById("span1").innerHTML='flag2';
}
// document.getElementById("nextslide").addEventListener("click",()=>{
//   cards.style.left+=10+"px";
// })
