//获取所有的li
var lis = document.getElementsByClassName("meitu");
//定义一个对象来全局显示li
var lit = 0; //图片index
//定时器每隔2秒切换一次图片
//button
var dfm = document.getElementsByClassName("anniu_dfm");
var _anniu = 0; //按钮index
img_xg();
//定义变量存取定时器setInter启动id
var Int_id = setInterval(img_xg, 2000);

//左右按钮点击事件
var img_boutton = document.getElementsByClassName("img_move_button");
for (var i = 0; i < img_boutton.length; i++) {
	(function(num) {
		img_boutton[i].onclick = function() {
			if (num == 0) {
				lit -= 2;
				_anniu -= 2;
				if (lit == -2) {
					lit = 2;
					_anniu = 2;
				}
				if (lit < 0) {
					lit = 3;
					_anniu = 3;
				}
			}
			img_xg(); //调用函数
			//清除定时器
			clearInterval(Int_id);
			//更新Int_id值，并重开时间函数
			Int_id = setInterval(img_xg, 2000);
		}
	})(i)
}
//button点击事件
var li_but = document.getElementsByClassName("anniu_dfm");
for (var i = 0; i < li_but.length; i++) {
	(function(num) {
		li_but[i].onclick = function() {
			//num
			//使图片与按钮index等于点击的index
			lit = num;
			_anniu = num;
			//调用图片效果代码，使效果立即展现
			img_xg();
			//停止时间事件
			clearInterval(Int_id);
			//更新Int_id值，并重开时间函数
			Int_id = setInterval(img_xg, 2000);
		}
	})(i)
}
//图片效果实现代码
function img_xg() {
	/*背景图*/
	//隐藏所有的li
	for (var i = 0; i < lis.length; i++) {
		lis[i].style.opacity = "0";
	}
	//修改显示的index
	lis[lit].style.opacity = "1";
	lit++;
	if (lit > 3) {
		lit = 0;
	}
	/*按钮部分*/
	//让每一个li先隐藏
	for (var i = 0; i < dfm.length; i++) {
		dfm[i].style.background = "#3d0509";
	}
	//修改需要显示的li
	dfm[_anniu].style.background = "red";
	_anniu++;
	//li有上限
	if (_anniu >= 4) {
		_anniu = 0;
	}
}
	

	


