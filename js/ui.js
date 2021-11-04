export const circle = document.querySelector(".progress_inner");
export const form = document.querySelector(".form");
export const formtype = document.querySelector(".type");
export const start = document.querySelector("#start");
export const pause = document.querySelector("#pause");
export const resume = document.querySelector("#resume");
export const break_ = document.querySelector("#break");
export const progress = document.querySelector(".progress");
export const Time = document.querySelector(".progress-time");
export const state = document.querySelector(".process-state");
export const msj = document.querySelector(".form-msj");
export const audio = document.querySelector("#alarm");

export function hideUi(ui){
    ui.style.display="none";
}

export function ShowUi(ui,display){
    ui.style.display=display;
}

export function RemoveStyleClass(ui, styleclass){
    ui.classList.remove(styleclass);
}

export function AddStyleClass(ui, styleClass) {
    ui.classList.add(styleClass);
}

