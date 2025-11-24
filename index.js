const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pbox1 = document.querySelector("#pbox1")
let pbox2 = document.querySelector("#pbox2")

let pass1 = ''
let pass2 = ''

function getRandom(){
    return Math.floor(Math.random()*characters.length);
}
function password(){
    let s = ""
    for(let i = 0;i<15;i++){
        s += characters[getRandom()]
    }
    return s;
}
function generate(){
    pass1 = password();
    pass2 = password();
    pbox1.textContent = pass1;
    pbox2.textContent = pass2;
}

function copy(box){
    if(box == '1'){
        navigator.clipboard.writeText(pbox1.textContent);
        pbox1.textContent = 'Copied'
        setTimeout(() =>{
            pbox1.textContent = pass1;
        }, 1500);
    }
    else{
        navigator.clipboard.writeText(pbox2.textContent);
        pbox2.textContent = 'Copied';
        setTimeout(() =>{
            pbox2.textContent = pass2;
        }, 1500)
    }
}
