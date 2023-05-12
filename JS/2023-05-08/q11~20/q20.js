for (var x = 1; x <= 10; x = x + 1) {
    for (var y = 10; y > x; y = y - 1) {
        document.write("&nbsp;");
    }
    for (var z = 1; z < x; z = z + 1) {
        document.write("*");
    }
    document.write("<br>");
}