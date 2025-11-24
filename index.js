const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
const nonumber = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
const nosymbol = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const onlyalpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const len = document.querySelector('#len')
const sym = document.querySelector('#sym')
const num = document.querySelector('#num')
const pbox1 = document.querySelector("#pbox1")
const pbox2 = document.querySelector("#pbox2")
let symbol = true
let number = true
let length = 8
let pass1 = ''
let pass2 = ''

function getRandom(){
    if(symbol && number) return Math.floor(Math.random()*characters.length);
    else if(symbol && !number) return Math.floor(Math.random()*nonumber.length);
    else if(!symbol && number) return Math.floor(Math.random()*nosymbol.length);
    else return Math.floor(Math.random()*onlyalpha.length);
}
function password(){
    let s = ""
    for(let i = 0;i<length;i++){
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
    if(pass1=='' || pass2=='') return;
    if(box == '1'){
        navigator.clipboard.writeText(pbox1.textContent);
        pbox1.textContent = 'Copied!'
        setTimeout(() =>{
            pbox1.textContent = pass1;
        }, 1500);
    }
    else{
        navigator.clipboard.writeText(pbox2.textContent);
        pbox2.textContent = 'Copied!';
        setTimeout(() =>{
            pbox2.textContent = pass2;
        }, 1500)
    }
}

len.addEventListener('input', ()=>{
    length = len.value;
    generate()
});

sym.addEventListener('change',() =>{
    if(sym.checked) symbol = true;
    else symbol = false;
    generate();
})

num.addEventListener('change', ()=>{
    if(num.checked) number = true;
    else number = false;
    generate();
})