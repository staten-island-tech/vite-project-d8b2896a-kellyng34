`export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
`

const DOMSelectors = {
  form: document.querySelector("#form"),
  name: document.querySelector("#name"),
  price: document.querySelector("#price"),
  pic: document.querySelector("#pic"),
  container: document.querySelector(".container"),
};



function click_fruits() {
  document.querySelectorAll(".button").forEach((button) => {
      button.addEventListener("click", function (event) {
          event.preventDefault();


          divCreator(fruits);
          click_fruits();

      });
  });
};

function divCreator(fruits) {
  DOMSelectors.container.insertAdjacentHTML(
      "afterbegin",
      `<div class="card">
          <h2 class= cardname>${fruits.name}</h2>s
          <h2 class= cardname>${fruits.price}</h2>
          <img src="${fruits.pic}" alt="" class="cardimg">
      </div>`
  );
};

function click_vegetables() {
  document.querySelectorAll(".button").forEach((button) => {
      button.addEventListener("click", function (vegetables) {
          divCreator(vegetables){
              DOMSelectors.container.insertAdjacentHTML(
                  "afterbegin",
                  `<div class="card">
                      <h2 class= cardname>${vegetables.name}</h2>s
                      <h2 class= cardname>${vegetables.price}</h2>
                      <img src="${vegetables.pic}" alt="" class="cardimg">
                  </div>`
              )
          };

      });
  });
};
divCreator(vegetables);
click_vegetables();

function click_meats() {
  document.querySelectorAll(".button").forEach((button) => {
      button.addEventListener("click", function (meats) {
          divCreator(meats){
              DOMSelectors.container.insertAdjacentHTML(
                  "afterbegin",
                  `<div class="card">
                      <h2 class= cardname>${meats.name}</h2>s
                      <h2 class= cardname>${meats.price}</h2>
                      <img src="${meats.pic}" alt="" class="cardimg">
                  </div>`
              )
          };

      });
  });
};
divCreator(meats);
click_meats();


function click_juices() {
  document.querySelectorAll(".button").forEach((button) => {
      button.addEventListener("click", function (juices) {
          divCreator(juices){
              DOMSelectors.container.insertAdjacentHTML(
                  "afterbegin",
                  `<div class="card">
                      <h2 class= cardname>${juices.name}</h2>s
                      <h2 class= cardname>${juices.price}</h2>
                      <img src="${juices.pic}" alt="" class="cardimg">
                  </div>`
              )
          };

      });
  });
};
divCreator(juices);
click_juices();