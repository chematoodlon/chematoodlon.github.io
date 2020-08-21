var by = document.getElementsByTagName('body')[0];
var lr = document.getElementById("loader");

var n,lt;
window.onload = function(){	
	lt = new Date().getTime() - window.performance.timing.navigationStart;
	if(lt>=8000){n=1;}
	else if(lt<8000){n=0;}
	one();
}
/*function one(){
	if(n==0){
		setTimeout(function(){
			console.log("st");
			lr.style.display="none";},8000);
	}	
	if(n==1){
		setTimeout(function(){
			console.log("st2");
			lr.style.display="none";},lt);
	}
}

/*$(document).ready(function() {
	setTimeout(function(){
			$('body').addClass('loaded');
		},3000);  
});*/

