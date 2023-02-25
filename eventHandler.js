const btn = document.querySelector(".btn");
const button = document.querySelector(".button");
const list = document.querySelector(".list");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const clear = document.querySelector(".clear");
const changeBgColor = document.querySelector(".change-bg-color");

nameInput.addEventListener("keyup", function () {
  emailInput.addEventListener("keyup", function () {
    if (nameInput.value != "" && emailInput.value != "") {
      button.removeAttribute("disabled");
    }
  });

  if (nameInput.value != "" && emailInput.value != "") {
    button.removeAttribute("disabled");
  }
});

function onSubmit(e) {
  e.preventDefault();

  const li = document.createElement("li");
  const name = nameInput.value;
  const email = emailInput.value;

  li.appendChild(document.createTextNode(`${name} : ${email}`));
  list.appendChild(li);

  console.log(`Added Name:${name}, Email:${email}`);
  nameInput.value = "";
  emailInput.value = "";
  button.setAttribute("disabled", true);
}

button.addEventListener("click", onSubmit);

clear.addEventListener("click", function (e) {
  e.preventDefault();
  list.innerHTML = "";
  console.log("Cleared!");
});

let i = 0
const colorList = ['red','magenta','white','purple','cyan']

changeBgColor.addEventListener("click", function (e) {
  e.preventDefault();
  
  document.body.style.backgroundColor = colorList[i];
  i++
  if(i===colorList.length){
    i=0
  }
});
