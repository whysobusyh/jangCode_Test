

var rcp_player = "";
var rcp_com = "";
// 컴퓨터와 플레이어 출력값

var rcp_input_text;
// 입력값
var rcp_result_screen;
// 화면 결과값

var resultstring = "";

window.onload = function () {
    rcp_input_text = document.getElementById("rcp_input_text");
    rcp_result_screen = document.getElementById("rcp_result_area");

}
// html body 내에 있는 것들과 연결

function rcpinputbuttonclick() {
    // rcpinputbuttonclick의 기능을 만듦
    resultstring = "";
    rcp_result_screen.value = resultstring;
    // 초기화

    rcp_player = rcp_input_text.value;
    // rcp_player을 입력값으로 함



    if (rcp_player == "가위" || rcp_player == "바위" || rcp_player == "보") {

        // 입력값에 대해 가위바위보로 정리 아니면 다시 입력하게



        var c = Math.floor(Math.random() * 3) + 1;
        // 난수 발생

        var cs = "";

        switch (c) {
            case 1: cs = "가위"
                break;
            case 2: cs = "바위"
                break;
            case 3: cs = "보"
                break;
        }
        // 난수를 가위 바위 보로 치환

        resultstring = resultstring + "유저:" + rcp_player;
        resultstring = resultstring + "\n";
        resultstring = resultstring + "컴:" + rcp_com;
        resultstring = resultstring + "\n"
        // ?? 이건 뭐지?
        
        var result = "";
        // 가위 바위 보와 컴터 1~3랜덤값에 대해 스위치로 값을 표현
        switch (cs) {
            case "가위":
                switch (rcp_player) {
                    case "가위":
                        result = "비김"
                        break;
                    case "바위":
                        result = "이김"
                        break;
                    case "보":
                        result = "짐"
                        break;

                }
                break;
            case "바위":
                switch (rcp_player) {
                    case "가위":
                        result = "짐"
                        break;
                    case "바위":
                        result = "비김"
                        break;
                    case "보":
                        result = "이김"
                        break;

                }
                break;
            case "보":
                switch (rcp_player) {
                    case "가위":
                        result = "이김"
                        break;
                    case "바위":
                        result = "짐"
                        break;
                    case "보":
                        result = "비김"
                        break;

                }
                break;
        }
        resultstring = resultstring + "결과:" + result;
        rcp_result_screen = resultstring;
    } else {
        alert("다시 입력해주세요.");
        rcp_player = rcp_input_text.value;
    }

}
