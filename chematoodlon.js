var by = document.getElementsByTagName('body')[0];
var lr = document.getElementById("loader");

var n,lt;
window.onload = function(){	
	lt = new Date().getTime() - window.performance.timing.navigationStart;
	one();
}
function one(){
		lr.style.opacity="0";
		by.style.backgroundColor="#46215B";
		setTimeout(function(){
			lr.style.display="none";
		},2000);
}


/*$(document).ready(function() {
	setTimeout(function(){
			$('body').addClass('loaded');
		},3000);  
});*/

//Showing and hiding the top menu on clicking the menu button & clicking outside respectively:	
	var mb = document.getElementById("menuButtonM");
	var mi = document.getElementById("mtItemsM");
	var mc = document.getElementById("menuCloseButtonM");
						
			var n=0;
			
			window.addEventListener('click',function(e){
					
				if(mb.contains(e.target)){n=1;}
				else{n=0;}
				
				if(mc.contains(e.target)){
				mb.style="initial";
				mi.style="initial";			
				}
				
				if(n==0){
					if(mi.contains(e.target)){n==1}
					else{
					mb.style="initial";
					mi.style="initial";
					}
				}
				
				if(n==1){
				mb.style.visibility = "hidden";
				mb.style.opacity="0";			
				mb.addEventListener('transitionend',function(){
				n=1;
				
				mb.style.display = "none";
				mi.style.display = "flex";
				mi.style.visibility = "visible";})			
				}			
			})
