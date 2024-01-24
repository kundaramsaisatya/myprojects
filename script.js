const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
const addBtna=document.getElementById("addBtn");

addTask=()=>{
    if (inputBox.value.trim() === "") {
        alert("Add Something!");
    }

   else{
    let li=document.createElement("li");
    li.innerHTML=inputBox.value;
    listContainer.appendChild(li);

    let span=document.createElement("span");
    span.innerHTML='\u00d7';
    li.appendChild(span);
   }
   inputBox.value='';
   saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked"); 
        saveData();  
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false)

inputBox.addEventListener("keydown",(event)=>{
    if(event.key==="Enter"){
    addTask();
    }
});

saveData=()=>{
    localStorage.setItem("tasks",listContainer.innerHTML);
}
showTask=()=>{
    listContainer.innerHTML=localStorage.getItem("tasks");
}
showTask();
