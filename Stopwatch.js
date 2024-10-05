const display = document.getElementById("display");
let starttime = 0;
let timer = null;
let elapsedtime = 0;
let isRunning = false;

function start(){
    if(!isRunning){
        starttime = Date.now() ;// the date now function will give the millsecs from epoch implies for the first interval start timer is epoch
        timer = setInterval(update,10)
        isRunning = true;
    }

}

function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedtime = Date.now()-starttime;
        isRunning = false;
    }
 
}
function reset(){
    clearInterval(timer)
    starttime = 0;
    timer = null;
    elapsedtime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00"


}

function update(){
    const currenttime = Date.now();/* it will be called after 10 millisces which implies currenttime will be greater 10 milliseconds by starttime ,
    during the next iteration start time will be the same only hence it will be greater by 20 milliseocds*/
    elapsedtime = currenttime - starttime;

    let hours = Math.floor(elapsedtime/(1000*60*60));
    let minutes = Math.floor(elapsedtime/(1000*60)%60);
    let seconds = Math.floor(elapsedtime/1000%60)
    let milliseconds = Math.floor(elapsedtime%1000/10)

    hours = String(hours).padStart(2,'0')
    minutes = String(minutes).padStart(2,'0')
    seconds = String(seconds).padStart(2,'0')
    milliseconds = String(milliseconds).padStart(2,'0')

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`

}