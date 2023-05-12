window.onload = function () {
    while (true) {
        var x = prompt()
        if (x == 100) {
            document.write("정답입니다.")
            break;
        } else {
            document.write("다시 입력해주세요")
            break;
        }
    }
}