/*Thanh tìm kiếm*/
/*   checkKeySearch(e)    */

function checkKeySearch(e){
    var key=e.which||e.keycode;
    if (key==32){doSearch();
    }
}

/*   doSearch()    */

function doSearch(){
    var frm=document.forms["frm-search"];
    if(frm.words.value.length>0){
        frm.submit();
    }
}

/*    showSearch()    */

function showSearch(){
    var url=new URL(window.location);
    var ws=url.searchParams.get("words");
    document.getElementById("searchDetail").innerHTML="<h1> TỪ KHÓA ĐƯỢC TÌM KIẾM:</h1>"+"<b>"+ws
}

/*   	openCart()     */


/*Trang Đăng Nhập*/
function loginValidate(frm)
{
	var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	if ( emailReg.test(frm.email.value) == false ) {
		alert("Vui lòng nhập Email hoặc SĐT hợp lệ.");
		frm.email.focus();
		return false;
		}
    
	if ( frm.psw.value.length<8 ) {
		alert("Vui lòng nhập mật khẩu hợp lệ.");
		frm.psw.focus();
		return false;
		}
	alert("Đăng Nhập Thành Công!!!");
	return true;
}


/*Trang Đăng Ký*/
function registerValidate(frm)
{
	var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	if ( emailReg.test(frm.email.value) == false ) {
		alert("Vui lòng nhập Email hoặc SĐT hợp lệ.");
		frm.email.focus();
		return false;
		}
	if ( frm.psw.value.length<8 ) {
		alert("Mật khẩu phải có tối thiểu 8 ký tự.");
		frm.psw.focus();
		return false;
		}
	if ( frm.psw.value.length!= frm.psw2.value.length) {
		alert("Mật khẩu và Nhập Lại Mật Khẩu phải giống nhau.");
		frm.psw.focus();
		return false;
		}
	alert("Đăng Ký Thành Công!!!");
	return true;
}


/*Trang Liên hệ*/
function contactValidate(frm)
{
	var nameReg = /^[a-zA-Z]/;
	if ( frm.name.value.length<4 ) {
		alert("Vui lòng nhập đúng Họ Tên của bạn.");
		frm.name.focus();
		return false;
		}
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	if ( emailReg.test(frm.email.value) == false ) {
		alert("Vui lòng nhập Thông Tin Liên Lạc hợp lệ.");
		frm.email.focus();
		return false;
		}
	if ( frm.message.value.length<10 ) {
		alert("Nội dung Đóng Góp Ý Kiến quá ngắn, vui lòng nhập từ 10 ký tự trở lên.");
		frm.message.focus();
		return false;
		}	
	alert("Đã Gửi Thư Góp Ý Thành Công!!!");
	return true;
}