// JavaScript source code
function check_currentUser() {
    let cur = localStorage.getItem("currentUser")
        ? JSON.parse(localStorage.getItem("currentUser"))
        : [];
    console.log(cur);
    if (cur.length > 0) {
        let user = document.getElementById("users");
        user.innerHTML = cur[0];
    }
}
check_currentUser();
function register() {
    let uname = document.getElementById("uname").value;
    let mk = document.getElementById("mk").value;
    // Lấy dữ liệu trong localStorage với phương thức getItem:
    var arr = localStorage.getItem('userAccount_key'); //Giá trị được lấy ra đang là kiểu string và chúng ta cần ép nó lại thành kiểu ban đầu
    var txtArr = JSON.parse(arr)// txtArr là mảng userAccount được ép trở về thành kiểu JSON, chúng ta có thể sử dụng txtArr như 1 object
    // Danh sách tài khoản đã trở về kiểu object để chúng ta làm việc với nó (thêm mới tài khoản)
    txtArr.acc.push(
        {
            name: uname, //có các obj với các thuộc tính là name và pwd
            pwd: mk
        })
    console.log(txtArr); // in ra object chứa danh sách tài khoản để kiểm tra thử
    localStorage.setItem('userAccount_key', JSON.stringify(txtArr)); //Sau khi thêm mới tài khoản thì lưu dữ liệu vào trong local storage
    alert("Egistration successfull!");
}
function login() {
    var arr1 = localStorage.getItem('userAccount_key');
    let user = document.getElementById("name").value; //User là giá trị tên username mà người dùng nhập vào
    if (user.length < 1) {
        alert("You need enter your details!");
        return false;
    }
    //Khai báo 1 mảng chứa obj userAccount ban đầu ta tryền vào localStorage
    var txtArr1 = JSON.parse(arr1); // Ép kiểu string của arr1 thành kiểu json để txtArr1 trở thành 1 object
    let tontai = 0;
    for (let item of txtArr1.acc) { // Lặp lại các phần tử (item) trong obj txtArr1
        // Kiểm tra thông tin được nhập trong các ô name và pwd xem có trùng khớp với bất cứ 1 object (trong thuộc tính acc) nào không
        if (user == item.name && document.getElementById("pwd").value == item.pwd) {
            tontai=1;
        }
    }
    if (tontai == 1) {
        alert("Logged in successfull!");
        window.location = "index.html";
        let currentUser = [user] //Đưa user vào localStorage của current
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
    }
    else {
        alert("Wrong password or account!");
    }
}

function check_Register() {
    let uname = document.getElementById("uname").value;
    let mk = document.getElementById("mk").value;
    let rmk = document.getElementById("rmk").value;
    let email = document.getElementById("email").value;
    if (uname.length == 0 || mk.length == 0 || rmk.length == 0) {
        alert("Information is not empty.!");
        return false;
    }
    if (mk.length <8 ) {
        alert("Passwords must be at least 8 characters!");
        return false;
    }
    if (mk != rmk) {
        alert("you need to re-enter your password!");
        return false;
    }
    if (email.indexOf("@")<0){
        alert("Email need @!")
        return false
    }

    let str_dstk = localStorage.getItem('userAccount_key');
    let dstk = JSON.parse(str_dstk);
    console.log(dstk);
    let check = 0;
    
    if (dstk.acc.length == 0) {
        check = 1;
    }
    else {
        for (let item of dstk.acc) {
            if (uname == item.name) {
                alert("Account already exists!");
                return false;
            }
            else {
                check = 1;
            }
        }
    }
    if (check > 0) {
        register();
    }
}