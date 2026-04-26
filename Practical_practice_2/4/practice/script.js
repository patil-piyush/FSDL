const nname = document.getElementById("name");
const email = document.getElementById("email");
const bio = document.getElementById("bio")

const pname = document.getElementById("pname")
const pbio = document.getElementById("pbio")
const pemail = document.getElementById("pemail")

nname.addEventListener("input", ()=>{
    pname.textContent = nname.value || "your name"
})
email.addEventListener("input", ()=>{
    pemail.textContent = email.value || "your email"
})
bio.addEventListener("input", ()=>{
    pbio.textContent = bio.value || "your bio"
})