import Ball from './ball.js'

const ball = new Ball(document.getElementById("ball"))

let lastTime;
function update(time) {
    if (lastTime != null) {
        const delta = time - lastTime
        //Update code
        ball.update(delta)
    }
    
    lastTime = time;
    //console.log(time);
    window.requestAnimationFrame(update)
}

window.requestAnimationFrame(update)