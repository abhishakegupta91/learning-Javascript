function digitalClock() {
    var date = new Date();
    console.log(date);

    document.getElementById('clock').innerHTML=date;
}

digitalClock();

setInterval(digitalClock,1000);
