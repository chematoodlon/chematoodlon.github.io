var by = document.getElementsByTagName('body')[0];
var lr = document.getElementById("loader");

var n,lt;
window.onload = function(){	
	lt = new Date().getTime() - window.performance.timing.navigationStart;
	one();
}
function one(){
		lr.style.opacity="0";
		setTimeout(function(){
			lr.style.display="none";
		},2000);
}


/*$(document).ready(function() {
	setTimeout(function(){
			$('body').addClass('loaded');
		},3000);  
});*/

