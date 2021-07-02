const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'We love programming!'

let idx = 1
let speed = 300 / speedEl.value

// console.log(speedEl.value)

writeText()


function writeText() {
    textEl.innerText = text.slice(0, idx)
    idx++

    if (idx > text.length) {
        idx = 1
    }
    
    setTimeout(writeText, speed)
}

speedEl.addEventListener('click', (e) => speed = 300 / speedEl.value)