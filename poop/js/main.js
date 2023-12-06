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
       <img src="${x.pic}" class="cardimg">
       <h3 class=" price" id= >${x.price}</h3>
    </div>`
)})};

function clear(){
  DOMSelectors.container_2.innerHTML="";
}


let buttons = document.querySelectorAll(".btn")

buttons.forEach((btn)=> btn.addEventListener("click",function(){

    let hh = btn.textContent.toLowerCase()
    let newArr = foods.filter((food)=> food.thing === hh)
    clear()
    insert(newArr)
}))


document.querySelector(".theme").addEventListener("click", function(){
    if(document.body.classList.contains("blue")){
        document.body.classList.remove("blue");
        document.body.classList.add("purple");

    }
    else{
        document.body.classList.add("blue");
        document.body.classList.remove("purple");
    }
});


// const DOMSelectors = {
//   form: document.querySelector("#form"),
//   name: document.querySelector("#name"),
//   price: document.querySelector("#price"),
//   pic: document.querySelector("#pic"),
//   container: document.querySelector(".container"),
// };



// function click_fruits() {
//   document.querySelectorAll(".button").forEach((button) => {
//       button.addEventListener("click", function (event) {
//           event.preventDefault();


//           divCreator(fruits);
//           click_fruits();

//       });
//   });
// };

// function divCreator(fruits) {
//   DOMSelectors.container.insertAdjacentHTML(
//       "afterbegin",
//       `<div class="card">
//           <h2 class= cardname>${fruits.name}</h2>s
//           <h2 class= cardname>${fruits.price}</h2>
//           <img src="${fruits.pic}" alt="" class="cardimg">
//       </div>`
//   );
// };

// function click_vegetables() {
//   document.querySelectorAll(".button").forEach((button) => {
//       button.addEventListener("click", function (vegetables) {
//           divCreator(vegetables){
//               DOMSelectors.container.insertAdjacentHTML(
//                   "afterbegin",
//                   `<div class="card">
//                       <h2 class= cardname>${vegetables.name}</h2>s
//                       <h2 class= cardname>${vegetables.price}</h2>
//                       <img src="${vegetables.pic}" alt="" class="cardimg">
//                   </div>`
//               )
//           };

//       });
//   });
// };
// divCreator(vegetables);
// click_vegetables();

// function click_meats() {
//   document.querySelectorAll(".button").forEach((button) => {
//       button.addEventListener("click", function (meats) {
//           divCreator(meats){
//               DOMSelectors.container.insertAdjacentHTML(
//                   "afterbegin",
//                   `<div class="card">
//                       <h2 class= cardname>${meats.name}</h2>s
//                       <h2 class= cardname>${meats.price}</h2>
//                       <img src="${meats.pic}" alt="" class="cardimg">
//                   </div>`
//               )
//           };

//       });
//   });
// };
// divCreator(meats);
// click_meats();


// function click_juices() {
//   document.querySelectorAll(".button").forEach((button) => {
//       button.addEventListener("click", function (juices) {
//           divCreator(juices){
//               DOMSelectors.container.insertAdjacentHTML(
//                   "afterbegin",
//                   `<div class="card">
//                       <h2 class= cardname>${juices.name}</h2>s
//                       <h2 class= cardname>${juices.price}</h2>
//                       <img src="${juices.pic}" alt="" class="cardimg">
//                   </div>`
//               )
//           };

//       });
//   });
// };
// divCreator(juices);
// click_juices();