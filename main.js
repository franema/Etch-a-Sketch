const $gridNumber = document.querySelector("input")
const $grid = document.querySelector(".grid")
const $label = document.querySelector("label")

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

makeGrid()


function changeLabelValue() {
    $label.innerText = `${$gridNumber.value} x ${$gridNumber.value}`
}


function changeColor(e) {
    console.log(mouseDown)
    if (mouseDown) {
        const $div = e.target
        console.log($div)
        $div.style.backgroundColor = "white"
    }
}

$gridNumber.addEventListener("change", makeGrid)
$grid.addEventListener("mouseover", changeColor)
let mouseDown = false
window.addEventListener("mousedown", () => mouseDown = true)
window.addEventListener("mouseup", () => mouseDown = false)