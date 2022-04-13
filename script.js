let x=document.querySelector(".column1");

let y= ()=>{
  let z=Math.floor(Math.random() * 256);
  return z;
}
console.log(y());
x.onclick = ()=>{
  x.style.backgroundColor = `rgb(${y()},${y()},${y()})`;
}