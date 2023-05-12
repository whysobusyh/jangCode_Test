//  가위 바위 보를 숫자화 시켜서 바꿔볼려고 하는 중
//  s 가위 r 바위 p 보를 각각 숫자 1,2,3으로 바꾸고 스위치문으로 계산식을 입력
//  문제 1. switch내용을 var로 담을 수가 없다. 
//  스위치 내에서 var 값 = 변환해서 그 이후에 변환
//  가위 바위 보 뭐를 내든 똑같은 식으로 가능하긴 하다.
//  이길때까지 반복해야되면 while 반복문으로 해결 예정
/* 가위>보>바위>가위 1>3>2>1  
1 =  0(비김) -1(짐) -2(이김)  -면 +3해서  2(짐) 1(이김) 0(비김)
2 =  1(이김) 0(비김) -1(짐)   -면 +3해서  2(짐) 1(이김) 0(비김)
3 =  2(짐) 1(이김) 0 (비김)              2(짐) 1(이김) 0 (비김)
숫자 통일화
*/

/* 문제 2
비겼을때 다시 반복시킬 수가 없다.
while문으로 반복시킬 수 있나?
*/

/* 문제 3
while 문으로 반복시키면 비겼을때는 반복되는데
이기고 졌을때 출력이 되지않음 무한반복이라서 그냥 무한반복
*/






while (true) {
    var ch = prompt("가위바위보");
    var i = Math.floor(Math.random() * 3) + 1;
    //  var i 랜덤식을 통해 숫자와의 관계식으로 해결할려고 함
    switch (ch) {
        case "가위": i = i - 1;
            if (i == 0) {
                alert("비겼네요. 다시갑니다.");
// true; false;를 넣어봐도 달라지지 않음
// swith문 안에 있는 if 문 내부에 break 를 넣어도 달라지지 않음
                var a = 0;
// var a = 0이면 ' false ' 1이면 ' true '로 변환시켜서 if(a==1){}문으로 해결
            } else if (i == 1) {
                document.write("제가 졌네요. 아쉽네요");
                var a = 1;
            } else if (i == 2) {
                document.write("제가 이겼어요");
                var a = 1;
            }
            break;

        case "바위": i = i - 2;
            if (i < 0) { i = i + 3; }
            if (i == 0) {
                alert("비겼네요. 다시 갑니다");
                var a = 0;
            } else if (i == 1) {
                document.write("제가 졌네요. 아쉽네요");
                var a = 1;
            } else if (i == 2) {
                document.write("제가 이겼어요");
                var a = 1;
            }
            break;


        case "보": i = i - 3;
            if (i < 0) { i = i + 3; }
            if (i == 0) {
                alert("비겼네요. 다시 갑니다");
                var a = 0;
            } else if (i == 1) {
                document.write("제가 졌네요. 아쉽네요");
                var a = 1;
            } else if (i == 2) {
                document.write("제가 이겼어요");
                var a = 1;
            }
            break;
        default: {
            alert("다른 거는 할 수 없어요");
        }

    }
    
    if(a==1){
    document.write("<br>The End");
    break;}
    
}



/* 더러움 */