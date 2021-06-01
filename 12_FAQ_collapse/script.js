const toggles = document.querySelectorAll('.faq-toggle')
console.log(toggles)

toggles.forEach( toggle => {
    console.log(toggle)
    toggle.addEventListener('click', () => {
        if (toggle.parentNode.classList.contains('active')) {
            toggle.parentNode.classList.toggle('active')
        } else {
            toggles.forEach( toggle => {
                if(toggle.parentNode.classList.contains('active')) {
    
                    toggle.parentNode.classList.toggle('active')
                }
            })
            toggle.parentNode.classList.toggle('active')
        }
        
        // toggle.parentNode.classList.toggle('active')
    })
} )