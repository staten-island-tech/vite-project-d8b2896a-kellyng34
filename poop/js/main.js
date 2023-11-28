import '../css/style.css'
import { DOMSelectors } from "./dom.js";
import { foods } from "./app.js";


// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `



function insert(arr){
    arr.forEach((x) => {
DOMSelectors.container_2.insertAdjacentHTML(
    "afterbegin",
    `<div class= "card">
       <h2 class= "name">${x.name}</h2>
       <img src="${x.pic}" class="cardimg"
       <h3 class= ${x.price}>price</h3>
    </div>`
)})};

insert(foods)

function clear(){
  DOMSelectors.container_2.innerHTML="";
}


let buttons = document.querySelectorAll('button')

buttons.forEach((btn)=> btn.addEventListener("click",function(){

    let hh = btn.textContent.toLowerCase()
    let newArr = foods.filter((food)=> food.cuisine === hh)
    clear()
    insert(newArr)
}))