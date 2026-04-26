const btn = document.getElementById("themeToggler");

const currtheme = localStorage.getItem("theme");
if(currtheme){
    document.body.className = currtheme;
}
else{
    document.body.className = "light";
}


btn.addEventListener("click", ()=>{
    if(document.body.classList.contains("light")){
        document.body.className = "dark";
        localStorage.setItem("theme", "light");
    }
    else{
        document.body.className = "light";
        localStorage.setItem("theme", "light");
    }
})