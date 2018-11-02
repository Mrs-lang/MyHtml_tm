
//轮播图片

var arr=Array();
arr[0]="images/bg1.jpg";
arr[1]="images/bg2.jpg";
arr[2]="images/bg3.jpg";
arr[3]="images/bg4.jpg";
arr[4]="images/bg5.jpg";
var n=0;
var a=setInterval(lunbo1,2000);
function lunbo1(){
	if (n==arr.length-1) {
		n=0;
	}
	else{
		n++;
	}
	document.getElementById("bg").src=arr[n];
	document.getElementById("lunbo").src=arr[n];
}
function stop1(){
	clearInterval(a);
}
function start1(){
	a=setInterval(lunbo1,2000);
}
function lunbo2(id){
	clearInterval(a);
	n=document.getElementById(id).value;
	document.getElementById("bg").src=arr[n];
	document.getElementById("lunbo").src=arr[n];
}

//导航栏和具体分类 二级菜单
function show(id1,id2) {
    document.getElementById(id2).style.display = "block";
    old=document.getElementById(id1).style.backgroundColor;
    document.getElementById(id1).style.backgroundColor = "white";
}

function hide(id1,id2) {
    document.getElementById(id2).style.display = "none";
	document.getElementById(id1).style.backgroundColor = old;
}

//顶部搜索栏随滚动条出现/消失
onscroll= function(){
	if (document.getElementById("showSearch").getBoundingClientRect().top<=0) {
		document.getElementById("search-fixed").style.display="block";
	}
	if (document.getElementById("showSearch").getBoundingClientRect().top>0) {
		document.getElementById("search-fixed").style.display="none";
	}
}

//品牌上关注的显示和隐藏
function showguanzhu(id0){
	document.getElementById(id0).style.display="block";
}
function hideguanzhu(id0){
	document.getElementById(id0).style.display="none";
}

//左侧图片切换
function change(id1,id2){
	document.getElementById(id1).src=document.getElementById(id2).src;
}


//点击登录（注册）
function login(){
	document.getElementById("z-top").style.display="block";
	document.getElementById("login1").style.display="block";
}
function hidelogin(){
	document.getElementById("z-top").style.display="none";
	document.getElementById("login1").style.display="none";
}

function denglu1(id1,id2,id3){
	if (document.getElementById(id1).value=="") {
		alert("请输入用户名");
		document.getElementById(id1).focus();
		return;
	}
	if (document.getElementById(id2).value=="") {
		alert("请输入密码");
		document.getElementById(id2).focus();
		return;
	}
	document.getElementById(id3).submit();

}
function long(){
	 		if (document.getElementById("username2").value.length>10) {
	 			alert("用户名不能超过10个字符");
	 			setTimeout(function(){document.getElementById("username2").focus();},100);
	 		}
	 	}

//图片改变大小
function imgBig(id){
	document.getElementById(id).style.width="140px";
	document.getElementById(id).style.height="140px";
}	 	
function imgSmall(id){
	document.getElementById(id).style.width="133px";
	document.getElementById(id).style.height="133px";
}