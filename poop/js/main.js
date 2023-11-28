import "../style.css"
import { DOMSelectors } from "./dom";
import viteLogo from '/vite.svg'
import {food} from "./app.js";
import { setupCounter } from './counter.js'


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


function clear(){
  DOMSelectors.container.innerHTML="";
}


function insert(arr){
    arr.forEach((x) => {
DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class= "container"></div>
    <div class= "card">
       <h2 class= "name">${x.name}</h2>
       <img src="${x.pic}" class="cardimg"
       <h3 class= ${x.price}>price</h3>
    </div>`
)})};


// insert(arr)


// let buttons = document.querySelectorAll('button')


// buttons.forEach((btn)=> btn.addEventListener("click", funtion(){


//   let category = btn.textContent.toLowerCase()


//   let newArr = foods.filter((food)=> food.thing === category)
//   clear()


//   insert(newArr)


// }
