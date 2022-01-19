var inputId;
var inputPw;
var inputConfirmpw;
var inputName;
var inputYear;

window.onload = function() {
    inputId = document.getElementById("input_id");
    inputPw = document.getElementById("input_pw");
    inputConfirmpw = document.getElementById("input_pc");
    inputName = document.getElementById("input_name");
    inputYear = document.getElementById("input_birth_year");
}

function loginSuccess() {
    alert("회원가입을 축하합니다.");
    location.href="index2.html";
}

function getId() {
    if(inputId.value.length<4) {
        alert("아이디는 최소 4자리 입니다.");
        inputId.value="";
    } else if(inputId.value.length>12) {
        alert("아이디는 최대 12자리 입니다.");
        inputId.value="";
    }
}


function getPw() {
    if(inputPw.value.length<4) {
        alert("비밀번호는 최소 8자리 입니다.");
        inputPw.value="";
    } else if(inputId.value.length>12) {
        alert("비밀번호는 최대 12자리 입니다.");
        inputPw.value="";
    }
}

function pwConfirm() {
    if(inputPw.value == "") {
        alert("비밀번호를 다시 입력해주세요!")
        inputConfirmpw.value="";   
    } else if (inputPw.value == inputConfirmpw.value){
        console.log("비밀번호가 같습니다!")
    } else {
        alert("비밀번호가 같지 않습니다.");
        inputConfirmpw.value="";
        inputPw.value=""; 
    }
}

function getName() {
    if(inputName.value.length<2) {
        alert("이름은 최소 2자리 입니다.");
        inputName.value="";
    } else if(inputName.value.length>10) {
        alert("이름은 최대 10자리 입니다.");
        inputName.value="";
    }
}

function getYear() {
    if(inputYear.value.length<4) {
        alert("태어난 년도 4자리를 정확하게 입력하세요.");
    } else if (inputYear.value<1922) {
        alert("정말이세요?");
    } else if (inputYear.value>2007) {
        alert("만 14세 미만의 어린이는 보호자 동의가 필요합니다.");
    }
}

function signupBtn() {
    getId();
    getPw();
    pwConfirm();
    getName();
    getYear();
    loginSuccess();
}