//定位的div（显示提示信息）
function floatdiv() {
    floatDiv = document.getElementsByClassName('float')[0].children;  //[0]-[9]个div 全局
    //var a1 =floatDiv[0]-[8]    .children[0];                           //div中的span
    // style =floatDiv.style;                                    //div 的样式
}

//提交表单
function check(from) {
    floatdiv();

    let inputValue = Array.from(document.querySelectorAll('input,select')).map(i => i.value); //array[0]-[9] 输出input中的值
    uname = inputValue[0];             //uname为全局变量
    password = inputValue[1];
    repassword = inputValue[2];
    rename = inputValue[3];
    phonenum = inputValue[4];
    mail = inputValue[5];
    sex = inputValue[6];
    classname = inputValue[7];
    hobby = inputValue[8];

    // _uname();         //1 调用函数方法,下面直接调用了
    // _password();
    // _reuname();
    // _phonenum();
    // _mail();
    // _sex();
    // _class();
    // _hobby();

    //b- i,8个参数 9个方法，但是passward与reqassword合并
    var b = _uname(b);                 //true || flase
    var c = _password(c);
    var d = _reuname(d);
    var e = _phonenum(e);
    var f = _mail(f);
    var g = _sex(g);
    var h = _class(h);
    var i = _hobby(i);

    var judge = (b && c && d && e && f && g && h && i)
    return judge;

}

//1,用户名
function _uname(b) {
    var a1 = floatDiv[0];          //a4  第一个float div  仅floatDiv[i] 中i变 i为下标
    var style1 = a1.style;         //div 样式
    var span1 = a1.children[0];   //span 

    style1 = style1.display = "block";


    if (uname == "" || uname == null || uname.length < 2 || uname.length > 10) {
        span1.innerHTML = "必填，长度为2~10位字符";
        return false;
    }
    else {
        span1.innerHTML = "";
        return true;
    }
}
//2,3密码
function _password(c) {

    var a2 = floatDiv[1];
    var style2 = a2.style;
    var span2 = a2.children[0];
    style2 = style2.display = "block";

    var a3 = floatDiv[2];
    var style3 = a3.style;
    var span3 = a3.children[0];
    style3 = style3.display = "block";

    if (password != '' && repassword != '' && password === repassword) {
        span2.innerHTML = "密码输入正确";
        span3.innerHTML = "确认密码输入正确";
        return true;

    } else if (password == '' && repassword != '') {
        span2.innerHTML = "密码不能为空";
        span3.innerHTML = "确认密码错误";
        return false;

    } else if (password != '' && repassword == '') {
        span2.innerHTML = "密码输入错误";
        span3.innerHTML = "确认密码不能为空";
        return false;

    } else if (password == '' && repassword == '') {
        span2.innerHTML = "密码不能为空";
        span3.innerHTML = "确认密码也不能为空";
        return false;

    } else {
        span2.innerHTML = "密码输入错误";
        span3.innerHTML = "确认密码应与密码一致";
        return false;

    }
}


//4,别名
function _reuname(d) {
    var a4 = floatDiv[3];
    var style4 = a4.style;
    var span4 = a4.children[0];

    style4 = style4.display = "block";

    var reg = /^[\u4e00-\u9fa5]+$/;//连续多个中文

    if (rename == "" || rename == null) {
        span4.innerHTML = "别名不能为空";
        return false;
    }
    else if (!reg.test(rename)) {
        span4.innerHTML = "别名中不能含有非中文";
        return false;
    } else {
        span4.innerHTML = "别名格式正确";
        return true;
    }
}

//5,手机号码
function _phonenum(e) {

    var a5 = floatDiv[4];
    var style5 = a5.style;
    var span5 = a5.children[0];

    style5 = style5.display = "block";

    if (phonenum.length == 11) {
        span5.innerHTML = "";
        return true;
    } else {
        span5.innerHTML = "输入错误,当前长度为" + phonenum.length;
        return false;
    }
}
//6,邮箱
function _mail(f) {

    var a6 = floatDiv[5];
    var style6 = a6.style;
    var span6 = a6.children[0];

    style6 = style6.display = "block";

    var reg = /^[\w\d]+$/;;//英文或数字

    if (mail == "" || mail == null || mail.length < 4 || mail.length > 16) {
        span6.innerHTML = "邮箱名必填，长度为4~16位字符";
        return false;
    }
    else if (!reg.test(mail)) {
        span6.innerHTML = "邮箱名中只能含有英文字母或数字";
        return false;
    }
    else {
        span6.innerHTML = "格式正确,当前长度为" + mail.length;
        return true;
    }
}

//7, 性别
function _sex(g) {
    var a7 = floatDiv[6];
    var style7 = a7.style;
    var span7 = a7.children[0];

    style7 = style7.display = "block";

    if (sex == '') {
        span7.innerHTML = "请选择性别"
        return false;
    } else {
        span7.innerHTML = ""
        return true;
    }
}

//8,班级
function _class(h) {
    var a8 = floatDiv[7];
    var style8 = a8.style;
    var span8 = a8.children[0];
    style8 = style8.display = "block";

    if (classname == '') {
        span8.innerHTML = "请选择班级名";
        return false;
    } else {
        span8.innerHTML = "";
        return true;
    }

}

//9，爱好
function _hobby(i) {

    var a9 = floatDiv[8];
    var style9 = a9.style;
    var span9 = a9.children[0];
    style9 = style9.display = "block";
    if (hobby == '') {
        span9.innerHTML = "请选择爱好"
        return false;
    } else {
        span9.innerHTML = ""
        return true;
    }
}