// Select Items /


//  Add todays date
const date = new Date();
document.getElementById("todayDate").innerHTML = date.toDateString();


// Prevent default 
const form = document.querySelector(".container");
form.addEventListener('submit', addItem);
function addItem(event){
    event.preventDefault();
}


// Add a new input 
const Item = document.querySelector('.addtask');
const taskItem = document.querySelector('#push').onclick = function(){
    if (document.querySelector('#newtask input'). value.length == 0) {
        alert ("Opps, no task added. Enter a Task.");
    }
    else{
        document.querySelector('#tasks').innerHTML 
    +=` <div class="task">
            <span id="taskname">
                ${document.querySelector('#newtask input').value}
            </span>
            <button type="submit" class="edit-btn">
            <i class="fas fa-edit"></i>
        </button>
        <button type="submit" class="delete-btn">
            <i class="fas fa-trash"></i>
        </button>

        </div>`
    }
}

// save to local storage 
const submitbtn = document.getElementById("form");
submitbtn.addEventListener('submit', function() {
    console.log(Item.value);
    localStorage.setItem('task', Item.value);
    
})



// delete tasks /
const deleteBtn = document.querySelector('.delete-btn');
deleteBtn.addEventListener('click', (e) => {
    Item =  Item.parentNode.removeChild();
    // Item.parentElement.style = "none";
})

// const remove = document.querySelector(.delete-btn);
// remove.addEventListener('submit', )

// let currentTask = document.querySelector("delete-btn");
// for(let i=0; i< currentTask.length; i++){
//     Item[1].onclick = function(){
//         this.parentNode.removeChild();
//     }
// }

//  clear to do list 






// edit to do item /