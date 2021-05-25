const sounds = ['alarm', 'explosion', 'fire', 'humming', 'powerup', 'scifi'] 

sounds.forEach( sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.addEventListener('click', () => {
        stopSong()
        document.getElementById(sound).play()
    })

    btn.innerText = sound
    document.getElementById('buttons').appendChild(btn)
})

function stopSong() {
    sounds.forEach( sound => {
        const song = document.getElementById(sound)
        song.pause()
        song.currentTime = 0
    })
}