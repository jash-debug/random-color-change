let x=document.querySelector(".column1");
let a=document.querySelector(".column2");
let b=document.querySelector(".column3");

let y= ()=>{
  let z=Math.floor(Math.random() * 256);
  return z;
}
console.log(y());
console.log(y());
console.log(y());

x.onclick = ()=>{
  x.style.backgroundColor = `rgb(${y()},${y()},${y()})`;
}

a.onclick = ()=>{
  a.style.backgroundColor = `rgb(${y()},${y()},${y()})`;
}

b.onclick = ()=>{
  b.style.backgroundColor = `rgb(${y()},${y()},${y()})`;
}