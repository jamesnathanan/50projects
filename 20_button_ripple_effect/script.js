const buttons = document.querySelectorAll('.ripple')

buttons.forEach( button => {
    button.addEventListener('click', (e) => {
        const x = e.clientX
        const y = e.clientY

        // console.log(x, y)

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft
        const buttonRight = e.target.offsetRight
        const buttonBottom = e.target.offsetBottom

        console.log(buttonTop, buttonLeft)
    })
})