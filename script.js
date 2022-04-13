let x=document.querySelector(".column1");

function y(){
  return Math.floor(Math.Random * 255);
}

x.onclick = function(){
  x.style.backgroundColor = 'rgb('+ y() +','+ y()+','y() ')';
}