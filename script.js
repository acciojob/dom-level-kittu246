//your JS code here. If required.
let child = document.getElementById("level");

console.log(child.parentNode);
let i=0;

while(child.parentNode){
  child = child.parentNode;
  i++;
}

window.alert(`The level of the element is: ${i}`);