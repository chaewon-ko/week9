let btn = document.getElementById("calc");
btn.addEventListener("click", convert);

function convert() {
    let select = document.getElementById("convert");
    let selectedVal = select.options[select.selectedIndex].value;
    
    let inputNum = Number(document.getElementById("input").value);
    
    const isNum = (value) => {
        if(!(isNaN(value)))
            return true
        return false
    }

    if (inputNum =='') {
        document.getElementById("answer").innerHTML = "Please enter a number.";
    }
    else {
        if (selectedVal == "kgtopounds") {
            if(isNum(inputNum)) {
                document.getElementById("answer").innerHTML = inputNum * 2.20462262;
            }
            else{
                alert('Your input is not valid!')
            }
        } else {
            if(isNum(inputNum)) {
                document.getElementById("answer").innerHTML = inputNum * 0.45359237;
            }
            else{
                alert('Your input is not valid!')
            }
        }
    }
}
