const tempinput = document.getElementById("tempinput");
const toFH = document.getElementById("toFH");
const toCS = document.getElementById("toCS");
const results = document.getElementById("results");
let temp;


function convert() {
    if(toFH.checked){
        temp = Number(tempinput.value);
        temp = (temp * 9 / 5) + 32;
        results.textContent = temp.toFixed(1) + " ℉";
    }
    else if(toCS.checked){
        temp = Number(tempinput.value);
        temp = (temp - 32) * 5 / 9;
        results.textContent = temp.toFixed(1) + " ℃";
    }
    else{
        results.textContent = "Select a unit";
    }
    
}