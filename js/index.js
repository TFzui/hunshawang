
/*首页最新优惠下的3张动图*/
		//第义一个数组来装图片改变时的top值
		var arrs=["2px","-209px","-420px"];
		//获取图片集合
		var imglis=document.getElementsByClassName("box_tu")[0];
		//定义一个变量接收定时器的返回值
		var myid;
		//第义一个全局的indx
		var indx=0;
		myId=setInterval(Move,2000);
		var flag=true;
		
		/*自动切换图片*/
		function Move(){
			imglis.style.top=arrs[indx];
			if (flag) {
				down();
			}else{
				up();
			}
		}
		/*鼠标悬停上去时跳转*/
		function Show(index){
			//清除定时器
			clearInterval(myId);
			//修改全局index
			indx=index;
			imglis.style.top=arrs[indx];
		}
		
		/*鼠标移出*/
		function Out(){
			//鼠标移开后，启动定时器
			myId=setInterval(Move,2000);
		}
		//下一张
		function down(){
			indx++;
			if (indx==2) {
				flag=false;
			}
		}
		//上一张
		function up(){
			indx--;
			if (indx==0) {
				flag=true;
			}
		}