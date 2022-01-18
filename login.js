var saveID = "cat";
var savePW = 1234;
var inputID;
var inputPW;
var change = false;

window.onload = function() {
    inputID = document.getElementById("input_id");
    inputPW = document.getElementById("input_pw");
    change = document.getElementById("success");
}

function loginCheck() {
    if(inputID.value == saveID && inputPW.value == savePW) {
        loginSuccess();
        alert(saveID+"님 환영 합니다!")
        console.log("로그인 성공")
    } else if (inputID.value != saveID && inputPW.value == savePW) {
        alert("등록된 아이디가 아닙니다.")
        console.log("로그인 실패")
    } else if (inputID.value == saveID && inputPW.value != savePW) {
        alert("비밀번호가 틀렸습니다.")
        console.log("로그인 실패")
    }
}

function loginSuccess() {
    location.href="index2.html";
}
