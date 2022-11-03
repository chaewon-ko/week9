let btn = document.getElementById("submit");
btn.addEventListener("click", check);

function check() {
    let inputs = document.querySelectorAll(".input")

    function trim() {
        return this.replace(/(^\s*)|(\s*$)/gi, "");
    }

    for(let input of inputs){
        var space = /\s/;
        if (input.value.trim() == ""){
            let blank = input
            input.style.backgroundColor = 'red';
        }else {
            input.style.backgroundColor = ''
        }
    }
    
}