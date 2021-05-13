const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes() //remove this if u dont want to show without scrolling first


function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach( box => {
        const boxTop = box.getBoundingClientRect().top

        if (boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}