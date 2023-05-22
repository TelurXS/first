
const MILLISECONDS_IN_SECONDS = 1000;

const timer = {
    time: 0,

    start: () => {
        setInterval( () => {
                this.time += 1;
                this.onTick(this.time);
            },
            MILLISECONDS_IN_SECONDS)
    }
}

const timerValue = $("#timer");

timer.onTick = (time) => { timerValue.innerText = time; }
timer.start();