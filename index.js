const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passLength = 15
let randomPasswordOne = document.getElementById("box-1")
let randomPasswordTwo = document.getElementById("box-2")

function randomCharacter(){
    let randomIndex = Math.floor(Math.random()*characters.length)
    return characters[randomIndex]
}

function generateRandomPassword(){
    let randomPass = ""
    for (let i = 0; i<passLength; i++) {
        randomPass += randomCharacter()
    }
    return randomPass
}

function generateButton() {
    randomPasswordOne.textContent=generateRandomPassword()
    randomPasswordTwo.textContent=generateRandomPassword()
}


