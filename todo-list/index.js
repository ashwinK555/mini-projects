const inputField = document.getElementById("inputField"); 
const addTask = document.getElementById("add-task"); 
const taskList = document.getElementById("task-list");
const listContainer = document.getElementById("list-container");
var tasks = [];

addTask.addEventListener("click",()=>{
  var  newTask = inputField.value;
  if(newTask != ""){
    tasks.push(newTask);
    renderTask();
    inputField.value = "";
  }
});

function renderTask(){
taskList.innerHTML=" ";
tasks.forEach((task,index)=>{
    const listItem = document.createElement("div");
    listItem.textContent= task;

    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class","btn btn-danger")
    deleteBtn.textContent="delete";

  const box = document.createElement("div");
box.setAttribute("class","d-flex align-items-center justify-content-center gap-2");
    box.appendChild(listItem);
    box.appendChild(deleteBtn);
    taskList.appendChild(box);
    deleteBtn.addEventListener("click",()=>{
        tasks.splice(index,1);
        renderTask();
    }
    );
})

}