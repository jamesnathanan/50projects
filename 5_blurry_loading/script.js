const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
    load++;

    if(load > 50) {
        clearInterval(int);
    }
    loadText.innerHTML = load + "%";
    loadText.style.opacity = scale(load, 0, 50, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 50, 20, 0)}px)`;
}
    
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

const scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

