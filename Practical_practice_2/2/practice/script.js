function createSkill(skillname, percent){

    const container = document.getElementById("skillContainer");

    const skilldiv = document.createElement("div");
    skilldiv.classList.add("skill");

    const name = document.createElement("div")
    name.classList.add("skillname");
    name.textContent = skillname;

    const bar = document.createElement("div")
    bar.classList.add("skillbar");

    const fill = document.createElement("div")
    fill.classList.add("skillfill");
    fill.textContent = percent+"%";


    bar.appendChild(fill);
    skilldiv.appendChild(name); 
    skilldiv.appendChild(bar); 
    container.appendChild(skilldiv); 

    setTimeout(()=>{
        fill.style.width = percent+"%";
    },100)
}


createSkill("python", 90);
createSkill("C++", 60);
createSkill("Physics", 50);
createSkill("chemistry", 40);