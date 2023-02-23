const value = {}

let color = ["red", "pink", "green", "blue", "yellow", "purple"]
let color1 = ["pink", "green", "blue", "yellow", "purple", "red"]

function setdate() {
    value.date = new Date();
    let rnum = Math.floor(Math.random() * color.length);
    value.numc = color[rnum];
    value.texc = color1[rnum];
    postMessage(value);
    setTimeout("setdate()", 1000);
}

setdate();
