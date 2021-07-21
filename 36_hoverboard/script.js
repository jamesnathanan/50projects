const container = document.getElementById('container')
const colors = ['#545863', '#00e8fc', '#f96e46', '#f9c846', '#ffe3e3']

const SQUARES = 500

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)

}

const setColor = (element) => {
    const color = getRandomColor()
    console.log(color)
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

const removeColor = (element) => {
    // console.log(element)
    element.style.background = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
}

const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)]
}