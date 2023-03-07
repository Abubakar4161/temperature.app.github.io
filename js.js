function temperature() {
    var a = document.getElementById('temp').value;
    if (a >= 60 && a <= 100) {
        document.getElementById('tempwrite1').innerHTML = "ITS TOO HOT FOR US";
    } else if(a >= 30 && a <= 60){
        document.getElementById('tempwrite1').innerHTML = "ITS WARN TEMPERATURE";
    }else if(a >= 20 && a <= 30){
        document.getElementById('tempwrite1').innerHTML = "ITS MODERATE TEMPERATURE";
    }else if(a >= 10 && a <= 20){
        document.getElementById('tempwrite1').innerHTML = "ITS COLD OUTSIDE";
    }else if(a >= 0 && a <= 10){
        document.getElementById('tempwrite1').innerHTML = "TODAY IS LIKE A COOLING TEMPERATURE";
    }else if(a >= -10 && a <= 0){
        document.getElementById('tempwrite1').innerHTML = "ITS FREEZING";
    }
}