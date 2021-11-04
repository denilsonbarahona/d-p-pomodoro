import {
    progress, 
    state,   
    form,
    formtype,
    start,
    pause,
    resume,
    break_,
    hideUi,
    ShowUi,
    msj,
    RemoveStyleClass
} from './ui.js'

import {Pomodoro, RestartPomodoro, PausePomodoro, ResumePomodoro} from './pomodoro.js';


start.addEventListener("click",handleStartClick);
break_.addEventListener("click", handleRestartClick);
pause.addEventListener("click", handlePauseClick);
resume.addEventListener("click", handleResumeClick);

/******* events ******/
function handleStartClick(event){
    const time = formtype.value||0; 

    if(time>0) {     
        msj.innerText=""   
        hideUi(event.target);
        hideUi(form);
        hideUi(msj);
        ShowUi(progress, "flex");
        ShowUi(break_,"inline-block");  
        RemoveStyleClass(pause,"button--inactive")
        RemoveStyleClass(resume,"button--inactive")
        Pomodoro(time)
    }else {
        ShowUi(msj,"inline-block");
        msj.innerText="please, try a number > 0";
    }
}

function handleRestartClick(event){    
    hideUi(event.target);
    ShowUi(form,"inline-block");
    ShowUi(start,"inline-block");
    hideUi(progress);
    RestartPomodoro();
}

function handlePauseClick(event){
    hideUi(event.target);
    ShowUi(resume,"inline-block");
    ShowUi(state,"inline-block");
    state.innerText ="Session paused";
    PausePomodoro();
}

function handleResumeClick(event) {
    hideUi(event.target);
    hideUi(state);
    ShowUi(pause,"inline-block");
    state.innerText ="";
    ResumePomodoro();
}