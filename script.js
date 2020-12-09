document.querySelectorAll('button').forEach(function (elm) {
    console.log(elm)
    elm.onclick = changeColor;
})

document.querySelector(".start").onclick = function(){
    if(this.innerHTML === "START"){
        this.innerHTML = "STOP"
        this.style.color = "red"
        this.style.backgroundColor = "black"
    } else {
      this.innerHTML = "START"
        this.style.color = "green"
        this.style.backgroundColor = "white"
    }
}


function changeColor() {
    console.log(this.classList.value, this.style.backgroundColor)
    if (this.style.backgroundColor === this.classList.value) {
        this.style.backgroundColor = "white";
    } else {
        this.style.backgroundColor = this.classList.value;
    }
}