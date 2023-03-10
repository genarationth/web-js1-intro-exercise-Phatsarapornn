// function ChangeName(){
//     let prompt = window.prompt("What's your name?","");
//     let name = document.querySelector("myName"); 
//     name.textContent = prompt;
// }

function ChangeName() {
    let insertName = prompt("What's your name?", "");
    document.getElementById("myName").innerHTML = insertName;
}

