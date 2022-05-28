let info = document.querySelector("#myName")
info.innerHTML = prompt("Lütfen adınızı giriniz: ")

let date = new Date();
let day = date.getDay();

switch(day){
    case 1:
        day = "Pazartesi";
        break;
    case 2:
        day = "Salı";
        break;
    case 3:
        day = "Çarşamba";
        break;
    case 4:
        day = "Perşembe";
        break;
    case 5:
        day = "Cuma";
        break;
    case 6:
        day = "Cumartesi";
        break;
    case 7:
        day = "Pazar";
        break;
}

let myClock = document.querySelector("#myClock")
myClock.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${day}`
myClock.style.color = "orange"
myClock.style.fontSize = "30px"

