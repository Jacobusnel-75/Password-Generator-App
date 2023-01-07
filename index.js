const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let btnOne = document.getElementById("btnOne")
let btnTwo = document.getElementById("btnTwo")
let generatorEl = document.getElementById("generated")
let selectedChoiceEl = document.getElementById("selectedChoice")
let charactersLength = 15

function random(){
    let ranChar = Math.floor(Math.random() * characters.length)
    return characters[ranChar]
}

function generate(){
            btnOne.textContent =  " "
            btnTwo.textContent =  " "
    for (let i = 0; i < charactersLength; i++) {
        btnOne.textContent += random()
        btnTwo.textContent += random()
     }
}


