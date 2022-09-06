function changeTime(){
    let date = new Date();
    let hours = document.getElementById("hours");
    let mins = document.getElementById("mins");
    let secs = document.getElementById("secs");
    if(date.getHours().toString().length === 1){
        hours.innerHTML = "0" + date.getHours().toString();
    }
    else{
        hours.innerHTML = date.getHours().toString();
    }
    if(date.getMinutes().toString().length === 1){
        mins.innerHTML = "0" + date.getMinutes().toString();
    }
    else{
        mins.innerHTML = date.getMinutes().toString();
    }
    if(date.getSeconds().toString().length === 1){
        secs.innerHTML = "0" + date.getSeconds().toString();
    }
    else{
        secs.innerHTML = date.getSeconds().toString();
    }
}
setInterval(changeTime,1000)