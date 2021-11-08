const names = ["sipho", "wandiloe", "andisiwe", "mdudzi", "sithembiso", "vusimuzi", "mhlomphni", "kosiphemdule", "happy", 
"precious", "kagisho", "lucky", "lebo", "seline", "nkosi"]
const display = document.getElementById("display");

for (let i = 0; i <names.length; i++ ) {
    display.innerHTML += "<li>" + names[i]
}