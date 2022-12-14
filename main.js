const $gridNumber = document.querySelector("input")
const $grid = document.querySelector(".grid")
const $sizeValue = document.querySelector(".size-value")
const $rainbowDrawing = document.querySelector(".rainbow-drawing")
const $eraser = document.querySelector(".eraser")
const $clearButton = document.querySelector(".clear")

function getGridValue($gridNumber) {
    console.log(this.value)
}

function makeGrid() {
    $grid.innerHTML = ""
    $grid.style.gridTemplateColumns = `repeat(${$gridNumber.value}, 1fr)`
    $grid.style.gridTemplateRows = `repeat(${$gridNumber.value}, 1fr)`
    for (let i = 0; i < ($gridNumber.value * $gridNumber.value); i++) {
        const $div = document.createElement("div")
        $div.className = "square"
        $grid.appendChild($div)
    }
    changeLabelValue()
}

function changeLabelValue() {
    $sizeValue.innerText = `${$gridNumber.value} x ${$gridNumber.value}`
}


function changeColor(e) {
    if (mouseDown) {
        const $div = e.target
        if ($rainbowDrawing.checked) {
            const hue = getRandomHue()
            $div.style.backgroundColor = `hsl(${hue}, 100%, 50%)`
        } else if ($eraser.checked) {
            $div.style.backgroundColor = "rgb(212, 206, 206)"
        } else {
            $div.style.backgroundColor = "black"
        }

    }
}

function getRandomHue() {
    return Math.floor(Math.random() * 361)
}

function clearGrid() {
    makeButtonEfect()
    const $squares = document.querySelectorAll(".square")
    $squares.forEach((square) => square.style.backgroundColor = "rgb(212, 206, 206)")
}

function makeButtonEfect() {
    $clearButton.classList.add("clicked")
    setTimeout(function () {
        $clearButton.classList.remove("clicked")
    }, 500)
}



$gridNumber.addEventListener("change", makeGrid)
$grid.addEventListener("mouseover", changeColor)
let mouseDown = false
window.addEventListener("mousedown", () => mouseDown = true)
window.addEventListener("mouseup", () => mouseDown = false)
$clearButton.addEventListener("click", clearGrid)
makeGrid()