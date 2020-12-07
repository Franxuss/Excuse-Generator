let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

let whoResult = who[Math.floor(Math.random()*4)];
let actionResult = action[Math.floor(Math.random()*4)];
let whatResult = what[Math.floor(Math.random()*3)];
let whenResult = when[Math.floor(Math.random()*5)];

window.onload = () => {
    document.getElementById("generator").innerHTML = randomExcuse(whoResult, actionResult, whatResult, whenResult);
}

function randomExcuse(reason1, reason2, reason3, reason4){
    return reason1+" "+reason2+" "+reason3+" "+reason4;
}

;