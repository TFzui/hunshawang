
/*product页面下的作品展示手风琴效果*/
show(0);
function show(index){
	var mylis=document.getElementsByClassName("box");
	for (var i=0;i<mylis.length;i++) {
		mylis[i].getElementsByClassName("box_ul")[0].style.height="0px";
	}
	mylis[index].getElementsByClassName("box_ul")[0].style.height="230px";
}