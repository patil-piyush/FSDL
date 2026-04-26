const addbtn = document.getElementById("addbtn");
const input = document.getElementById("item");
const list = document.getElementById("list");

addbtn.addEventListener("click", ()=>{
    if(input.value.trim() === "") return;

    const li = document.createElement("li")
    li.className = "listItem";

    const deletebtn = document.createElement("button");
    deletebtn.className = "delbtn";
    deletebtn.textContent = "Delete";
    deletebtn.addEventListener("click", ()=>{
        li.remove()
    });

    li.textContent = input.value;

    li.appendChild(deletebtn);
    list.appendChild(li);

    input.value = "";
})