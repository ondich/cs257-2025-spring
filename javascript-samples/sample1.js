/*
    sample1.js
    Jeff Ondich, 5 May 2016
    For CS257 Software Design, Carleton College
 */
function onButtonPress() {
    alert('Hi from onButtonPress!');
}

function initialize() {
    var button = document.getElementById('prizebutton');
    button.onclick = onButtonPress;
}

// This causes initialization to wait until after the HTML page and its
// resources are all ready to go, which is often what you want.
window.addEventListener("load", initialize);

