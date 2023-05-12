
for (var x = 1; x <= 10; x = x + 1) {
    var random = Math.floor(Math.random() * 10) + 1;
    if (x == random) {
        continue;
    }
    document.write(random);
}