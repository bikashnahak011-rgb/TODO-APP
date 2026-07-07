const dark = document.getElementById("dark");

let state = false;

dark.addEventListener("click", function() {

    if( state===false){
        document.body.style.background = "#202020";
        document.body.style.color = "#ededed";
        document.body.style.transition = "1s";

        dark.innerText = "☀️ Light";
        state = true;  
    } else {
        document.body.style.background = "#cacaca";
        document.body.style.color = "#202020";
        document.body.style.transition = "1s";

        dark.innerText = "🌙 Dark";
        state = false;
    }
    
});

const service = document.getElementById("btn");
service.addEventListener("click", function() {
  alert("Service Not Available");
  
});


const input = document.getElementById("task");
const btn = document.getElementById("add");
const box = document.getElementById("tasks");
const done = document.getElementById("done");

btn.addEventListener("click", function () {
  if (input.value === "") {
    alert("Please enter a task");
    return;
  }

  const taskBox = document.createElement("div");
  const task = document.createElement("p");
  const button = document.createElement("button");
  

  task.innerText = input.value;
  button.innerText = "❌";

  taskBox.appendChild(task);
  box.appendChild(taskBox);
  task.appendChild(button);

  button.addEventListener("click", function() {
    task.remove();

  });

  input.value = "";

});