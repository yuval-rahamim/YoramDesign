var popup = document.getElementById("myPopup");
var counter = document.getElementById("sec");
var notPopUp = document.getElementById("notPopUp");
let count;
const sec = 1000;
let a,b;
b = setTimeout(showPopUp,5*sec);
function showPopUp(){
    notPopUp.style.pointerEvents="none";
    clearTimeout(b);
    count =10;
    counter.innerText = count;
    popup.style.visibility = "visible";
    a = setInterval(countsec,sec);
}

function closePopUp()
{
    notPopUp.style.pointerEvents="auto";
    clearInterval(a);
    popup.style.visibility = "hidden";
}

function countsec()
{
    count--;
    counter.innerText = count;
    if(count==0){
        closePopUp();
    }
}
