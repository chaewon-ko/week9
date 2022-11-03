function clickBtn() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    mycolor.innerHTML = "Your Color Is " + "#" + randomColor + "!";
}