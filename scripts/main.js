let myImage = document.getElementById("firefox-image")

myImage.onclick = function (){
    let src = this.getAttribute("src")
    if (src === "images/firefox2.jpg"){
        this.setAttribute('src',"images/firefox-icon.png")
    } else {
        this.setAttribute('src',"images/firefox2.jpg")
    }
}

let button_chg_user = document.getElementById("change-user")
let h1 = document.querySelector("h1")

function set_user_name(){
    let name = prompt("Input your name")
    localStorage.setItem("name", name)
    h1.textContent = "Welcome, " + name
}

if (!localStorage.getItem("name")){
    set_user_name()
} else {
    var storedName = localStorage.getItem("name")
    h1.textContent = "Hello, " + storedName + ". Glad to see you"
}
button_chg_user.onclick = set_user_name
