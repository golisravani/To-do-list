const inputField = document.getElementById("input-field");
const addBtn = document.getElementById("add");
const listContainer = document.getElementById("list-container");

function addTask(){
    if (inputField.value === ""){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputField.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        span.style.cursor= "pointer";
        li.appendChild(span);
        saveData();
    }
    inputField.value= "";
}
    listContainer.addEventListener("click", (e)=>{
            if (e.target.tagName === "LI" ){
                e.target.classList.toggle("checked");
                saveData();
            } else if(e.target.tagName ==="SPAN" || e.target.tagName ==="I"){
                   const li = e.target.closest("li");
                    li.classList.add("slide");
                    li.addEventListener("transitionend", ()=>{
                        li.remove();
                        saveData();
                    });
            }
    },false);
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);

}
function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showData();