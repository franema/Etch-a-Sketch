const $gridNumber = document.querySelector("input")
const $grid = document.querySelector(".grid")
const $label = document.querySelector("label")
const $rainbowDrawing = document.querySelector(".rainbow-drawing")
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
    $label.innerText = `${$gridNumber.value} x ${$gridNumber.value}`
}


function changeColor(e) {
    if (mouseDown) {
        const $div = e.target
        if ($rainbowDrawing.checked) {
            const hue = getRandomHue()
            $div.style.backgroundColor = `hsl(${hue}, 100%, 50%)`
        } else {
            $div.style.backgroundColor = "black"
        }
    }
}

function getRandomHue() {
    return Math.floor(Math.random() * 361)
}

function clearGrid () {
    const $squares = document.querySelectorAll(".square")
    $squares.forEach((square) => square.style.backgroundColor = "white" )
}

$gridNumber.addEventListener("change", makeGrid)
$grid.addEventListener("mouseover", changeColor)
let mouseDown = false
window.addEventListener("mousedown", () => mouseDown = true)
window.addEventListener("mouseup", () => mouseDown = false)
$clearButton.addEventListener("click", clearGrid)
makeGrid()