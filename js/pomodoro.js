import { circle, Time, audio } from './ui.js'

var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();
var gainNode = audioCtx.createGain();

const track = audioCtx.createMediaElementSource(audio);
const radius = circle.r.baseVal.value;
const cirumference = radius*2*Math.PI;

var intervalId;
var step=0;
var isPaused=false;

circle.style.strokeDasharray = `${cirumference} ${cirumference}`;
circle.style.strokeDashoffset = cirumference;
track.connect(gainNode).connect(audioCtx.destination);

function setProgress(percentage){
    const offset = cirumference - percentage / 100 * cirumference;
    circle.style.strokeDashoffset = offset;
}

function showTime(second, second_dif){
    let current = ((second - second_dif))/60;    
    let minutes = Number(current).toFixed(2)
    if( Number(minutes) > 0)
        Time.innerText = String(minutes).replace(".",":");
    else 
        Time.innerText = "0:00";
}

function handleProgress(second){
    if (isPaused) return;
    
    step = step +1;  
    let progress = (step/second)*100
    
    showTime(second, step);

    if(progress<=101)
        setProgress(progress);
    else {
        clearInterval(intervalId); 
        setPlayAudio();
    }
}

function setPlayAudio(){   
    gainNode.gain.value =  0.1; 
    playAudio(audioCtx)
}

function playAudio(audioCtx){
    if(audioCtx.state ==="suspended")
        audioCtx.resume();
    audio.play();
}

function setProcessInterval(time){
    const seconds = time*60;
    showTime(seconds,0);
    setProgress(0);
    if(!intervalId) {       
        intervalId = setInterval(handleProgress, 1000, seconds);
    }
}

function CancelPomodoro(){
    clearInterval(intervalId); 
    intervalId=null;
    step=0;
}

export function PausePomodoro(){
    isPaused=true;
}

export function ResumePomodoro(){
    isPaused=false;
}

export function RestartPomodoro(){
    CancelPomodoro();
    audio.pause();
}

export function Pomodoro(time){
    setProcessInterval(time);
}

