function appendValue(value){
    document.getElementById("display").value += value;
}

function clearDisplay(){
    document.getElementById("display").value = 0;
}

function calculate(){
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value)
    }catch {
        display.value = "Erorrr";
        
    }
}

