document.querySelectorAll('button').forEach(function (elm) {
    console.log(elm)
    elm.onclick = changeColor;
})


function changeColor() {
    console.log(this.classList.value, this.style.backgroundColor)
    if (this.style.backgroundColor === this.classList.value) {
        this.style.backgroundColor = "white";
    } else {
        this.style.backgroundColor = this.classList.value;
    }
}