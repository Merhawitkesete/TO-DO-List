//console.log('hello');

const mytodolist = document.getElementById("mytodolist");
const todo = document.getElementById("todo");
const todolist = document.getElementById("todolist");
const delbtn = document.getElementById("delbtn");


todolist.addEventListener ("click", () =>{
 //   let newelemnt = document.createElement("p");
    
   // newelemnt.innerText =  todo.value;
   // mytodolist.appendChild(newelemnt);

 
document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                  ${todo.value}
                </span>
                <button class="delete">
                   Delete
                </button>
            </div>
        `;
 
        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
});

