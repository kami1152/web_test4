function logincheck(){
    document.getElementById("login-form").addEventListener("submit", function (e) {
        e.preventDefault(); 
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
    

        if (username === "test1" && password === "1234") {
            alert("로그인 성공!");
            window.location.href = "index3.html";
        } else {
            alert("로그인 실패. 올바른 사용자 이름과 비밀번호를 입력하세요.");
        }
    });
}