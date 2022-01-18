var saveID = "cat";
var savePW = 1234;
var inputID;
var inputPW;

window.onload = function() {
    inputID = document.getElementById("input_id");
    inputPW = document.getElementById("input_pw");
}

function loginCheck() {
    if(inputID.value == saveID && inputPW.value == savePW) {
        loginSuccess();
        alert("로그인 성공!")
        console.log("로그인 성공")
    } else {
        alert("로그인 실패!")
        console.log("로그인 실패")
    }
}


function loginSuccess() {
    location.href="index.html";
}