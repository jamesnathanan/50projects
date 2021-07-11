const imgs = document.getElementById('imgs')
// console.log(imgs)
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

const img = document.querySelectorAll('#imgs img') //select img that is the child of #imgs

// console.log(img)

let idx = 0

// for automatic carousel
let interval = setInterval(run, 2000)

function run() {
    idx++
    changeImage()
}

function changeImage() {
    if(idx > img.length - 1) {
        idx = 0
    } else if(idx < 0) {
        idx = img.length - 1
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`
}

// manual carousel

// create function to reset interval if not it will cause issue
function resetInterval() {
    // clear interval
    clearInterval(interval)
    // then set interval again
    interval = setInterval(run, 2000)
}

rightBtn.addEventListener('click', () => {
    idx++
    changeImage()
    resetInterval()
})

leftBtn.addEventListener('click', () => {
    idx--
    changeImage()
    resetInterval()
})