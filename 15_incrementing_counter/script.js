const counters = document.querySelectorAll('.counter')
//console.log(counters)

counters.forEach( counter => {
    counter.innerText = '0'

    const updaterCounter = () => {
        const target = +counter.getAttribute('data-target')
        // console.log(typeof target, target)

        const c = +counter.innerText

        const increment = target / 200
        //console.log(increment)

        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updaterCounter, 1)
        } else {
            counter.innerText = target
        }
    }

    updaterCounter()
})