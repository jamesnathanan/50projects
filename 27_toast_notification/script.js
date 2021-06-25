const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
    "Hey's it's me !",
    "Long time no see !",
    "Where is the light",
    "You are my everything",
]

button.addEventListener('click', () => createNotification('This is invalid data'))

const createNotification = (message = null) => {
    const notif = document.createElement('div')
    notif.classList.add('toast')

    notif.innerText = message ? message : getRandomMessage()
    toasts.appendChild(notif)

    setTimeout( () => {
        notif.remove()
    }, 3000)
}

const getRandomMessage = () => {
    return messages[Math.floor(Math.random() * messages.length)]
}