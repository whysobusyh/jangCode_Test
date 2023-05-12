var random = Math.floor(Math.random() * 20) + 1;

for (x = 1; x < random; x = x + 1) {

    if (x == 7) {
        document.write("<img id='goldbor' src= '페이셜.gif'>");
        document.write(x);

    } else {
        document.write("<img id='normal' src= '페이셜.gif'>");
        document.write(x);

    }
}
