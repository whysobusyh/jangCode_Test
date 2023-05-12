alert("가위바위보를 이기지 않으면 지나갈 수 없다.")
alert("가위")
alert("바위")
alert("보")
// 컨셉으로 가위바위보 해야하는 알람문
var x = prompt();
// 가위 바위 보를 입력하게 함

while (true) {
    var i = Math.floor(Math.random() * 3) + 1;
    if (i == 3) {
        alert("너가 이겼다.")
        break;
    } else if (i == 2) {
        alert("비겼군 다시");
        prompt();
    } else {
        alert("너는 패배했다.")
        break;
    }
}

//  값에 따른 결과값의 변화를 주지 않고 그냥 이기고 비기고 지는 3가지 경우


