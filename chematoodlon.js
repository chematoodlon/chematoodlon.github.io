var by = document.getElementsByTagName('body')[0];
var lr = document.getElementById("loader");

var n,lt;
window.onload = function(){	
	lt = new Date().getTime() - window.performance.timing.navigationStart;
	if(lt>=5000){n=1;}
	else if(lt<5000){n=0;}
	one();
}
function one(){
	if(n==0){
		setTimeout(function(){
			console.log("st");
			lr.style.opacity="0";
			setTimeout(function(){
				lr.style.display="none";
			},2000);
			},5000);
	}	
	if(n==1){
		setTimeout(function(){
			console.log("st2");
			lr.style.opacity="0";
			setTimeout(function(){
				lr.style.display="none";
			},2000);
			},lt);
	}
}


/*$(document).ready(function() {
	setTimeout(function(){
			$('body').addClass('loaded');
		},3000);  
});*/

