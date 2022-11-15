const timeDisplay = document.getElementById("timeDisplay")
const startBtn = document.getElementById("startBtn")
const resetBtn = document.getElementById("resetBtn")
const lapBtn = document.getElementById("lapBtn")
const clearBtn = document.getElementById("clearBtn")
const laps = document.querySelector('ul')

let startTime = 0;
let elapsedTime = 0 ;
let currentTime = 0;
let paused = true;
let interValId;
let millisecs = 0;
let secs = 0;
let mins = 0;
let lapItem = 0;

startBtn.addEventListener('click',()=>{
    if(paused){
paused = false
startTime = Date.now() - elapsedTime
interValId = setInterval(updateTime, 100 )
startBtn.textContent = "STOP"
resetBtn.disabled = false; 
lapBtn.disabled =  false
startBtn.style =  "background-color:crimson" ;
} else{
    lapBtn.disabled = true
   paused = true
elapsedTime = Date.now() - startTime
clearInterval(interValId)
 startBtn.textContent = "START";
 startBtn.style =  "background-color:rgb(0, 167, 0)" ;
}
})

resetBtn.addEventListener('click',()=>{
    startTime = 0;
    elapsedTime = 0 ;
    currentTime = 0;
    millisecs = 0;
    secs = 0;
    mins = 0;
     paused = true
    clearInterval(interValId)
timeDisplay.textContent = "00:00:00"
resetBtn.disabled =true;
lapBtn.disabled = true
startBtn.textContent = "START"
 lapItem = 0;
 startBtn.style =  "background-color:rgb(0, 167, 0)" ;
clearBtn.style="display: none"
laps.textContent = " "
const buttons =  document.querySelector(".buttons")
buttons.style = "margin-bottom : 0rem"

})

lapBtn.addEventListener('click', ()=>{

        const li = document.createElement('li')
        const number = document.createElement('span')
        const timeStamp = document.createElement('span')

        number.setAttribute("id", "number")
        timeStamp.setAttribute("id", "timeStamp")
    
        number.textContent= `#${++lapItem}.`
        timeStamp.textContent = `${mins}:${secs}:${millisecs}`
    
        li.append(number, timeStamp)
        laps.append(li)

const buttons =  document.querySelector(".buttons")
buttons.style = "margin-bottom : .75rem"

clearBtn.style = "display: block"

})

clearBtn.addEventListener('click', ()=>{
    clearBtn.style="display: none"
    const li = document.createElement('li')
    const number = document.createElement('span')
    const timeStamp = document.createElement('span')
 
laps.textContent = " "
const buttons =  document.querySelector(".buttons")
buttons.style = "margin-bottom : 0rem"
lapItem = 0;
})

function updateTime(){
    elapsedTime = Date.now() - startTime

    millisecs = Math.floor((elapsedTime%60))
    secs = Math.floor((elapsedTime/1000)%60)
    mins = Math.floor((elapsedTime/(1000*60))%60)

    millisecs = pad(millisecs)
    secs = pad(secs)
    mins = pad(mins)

    timeDisplay.textContent = `${mins}:${secs}:${millisecs}`

    function pad(unit){
        return(("0") + unit).length > 2 ? unit : "0" + unit
       }
}