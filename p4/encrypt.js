window.onload = function () {
    const btn = document.getElementById("btn")
    
    btn.onclick = () => {
        // alert('Hello World!');

        let selectedType = document.getElementById("type").options[type.selectedIndex].value;

        if (selectedType == 'shift') {
            let input = document.getElementById("plain_text").value;
            let n = document.getElementById("val").options[val.selectedIndex].value;
    
            function shift() {
                var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                var lower = "abcdefghijklmnopqrstuvwxyz";
                var result= '';
        
                for(var i =0; i <input.length; i++){
                    var text = input[i];
                    var textArr = upper.includes(text) ? upper : lower;
                    var index = textArr.indexOf(text)-n;
                    if (index < 0) index += 26
                    result += textArr[index];
                }
                return result;     
            }
            let result = shift();
            document.getElementById("output").innerHTML = result;
        }else{
            let input = document.getElementById("plain_text").value;

            function random() {

                var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    var lower = "abcdefghijklmnopqrstuvwxyz";
                    var randomUpper = '';
                    var randomLower = '';
                    var result = '';

                function randArr() {

                    for(var i=0; i<26; i++){

                        randomUpper += upper.charAt(Math.floor(Math.random() * upper.length));
                        randomLower += lower.charAt(Math.floor(Math.random() * lower.length));
                    }
                    return {
                        randomUpper: randomUpper,
                        randomLower: randomLower
                    };   
                };

                let randomText = randArr();

                for(var i =0; i <input.length; i++){
                    var text = input[i];
                    var textArr = upper.includes(text) ? randomText.randomUpper : randomText.randomLower;
                    text = textArr[i];
                    result += text;
                }

                return result;  
            }
            let result = random();
            document.getElementById("output").innerHTML = result;
        }
    }
}