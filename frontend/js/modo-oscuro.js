let switchButtom = document.getElementById("switch");
let body = document.body;
switchButtom.addEventListener("click", function () {
  let val = body.classList.toggle("dark");
  switchButtom.classList.toggle("active");
  localStorage.setItem("switch", val);
});

let valor=localStorage.getItem("switch")
if (valor=="true") {
    body.classList.add("dark")
} else {
    body.classList.remove("dark")
}

