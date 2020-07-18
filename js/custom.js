var myVar;
var type;
var i = 0;
var txt = "I'm a Computer Engineering Student and Software Developer";
var speed = 30; 


function myFunction() {
    myVar = setTimeout(showPage, 3500);
    type = setTimeout(typeWriter, 4000);
}

function showPage() {
    document.getElementById("header").style.display = "block"
    document.getElementById("test").style.display = "block"
    document.getElementById("projects").style.display = "block"
    document.getElementById("skills").style.display = "block"
    document.getElementById("landing").style.display = "block"
    document.getElementById("about").style.display = "block"
    document.getElementById("contact").style.display = "block";
    document.getElementById("work").style.display = "block";
    document.getElementById("footer").style.display = "block";
    document.getElementById("social").style.display = "block";
}

function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("subheading").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
