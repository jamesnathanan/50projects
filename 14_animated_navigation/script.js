const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')
// console.log(toggle)
console.log(nav)

toggle.addEventListener('click', () => {
    nav.classList.toggle('active')
})