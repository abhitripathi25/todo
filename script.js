const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function handleKey(event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent the default behavior of the Enter key (form submission)
      addTask();
    }
  }
  
function addTask(){
    if(inputBox.value === ''){
        alert('You must write something');
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.add("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove("checked");
        saveData();
    }

},false)

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showText(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showText();