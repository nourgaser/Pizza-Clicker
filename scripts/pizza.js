const pizza = document.getElementById("pizza");
const num = document.getElementById("num");
var currImage = 1;
var NumOfSllices = 0;
pizza.addEventListener("click", (e) => {
  console.log("clicked!!");
  if (currImage === 4) {
    currImage = 1;
    num.innerHTML = ++NumOfSllices;
  } else currImage++;
  if (window.location.href.split("/").at(-1) !== "index.html")
    pizza.src = `../img/${currImage}.svg`;
  else pizza.src = `./img/${currImage}.svg`;
});
