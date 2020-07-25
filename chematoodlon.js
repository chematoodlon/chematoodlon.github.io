//Showing and hiding the top menu on clicking the menu button & clicking outside respectively:	

	var mb = document.getElementById("menuButtonM");
	var mi = document.getElementById("mtItemsM");
	var mc = document.getElementById("menuCloseButtonM");
						
			var n=0;
			
			window.addEventListener('click',function(e){
					
			if(mb.contains(e.target)){n=1}
			else{n=0}
			
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
			mi.style.flexDirection = "column";
			mi.style.alignItems = "flex-end";
			mi.style.marginRight = "-6vw";	
			mi.style.visibility = "visible";})			
			}			
			})


//Scrolling down to a particular section:

var vw = window.innerWidth;
if(vw>=769){var scry = 12.5*vw/100;}
else{var scry = 21*vw/100;}

var ao = document.getElementsByClassName("aorganising");
	var or = document.getElementById("organising");
	var aoy = or.getBoundingClientRect().top + window.scrollY - scry;
	
var ae = document.getElementsByClassName("aevents");
	var es = document.getElementById("events");
	var aey = es.getBoundingClientRect().top + window.scrollY - scry;
	
var as = document.getElementsByClassName("asubscription");
	var ss = document.getElementById("subscription");
	var asy = ss.getBoundingClientRect().top + window.scrollY - scry;
	
var ad = document.getElementsByClassName("adates");
	var dt = document.getElementById("dates");
	var ady = dt.getBoundingClientRect().top + window.scrollY - scry;
	
var aj = document.getElementsByClassName("ajointheteam");
	var jt = document.getElementById("jointheteam");
	var ajy = jt.getBoundingClientRect().top + window.scrollY - scry;

window.addEventListener('click',function(f){
for(var i=0;i<ao.length;i++){
	if(ao[i].contains(f.target)){	
		window.scroll({
			top: aoy,
			behavior: 'smooth'
			})
		}
	}
for(var i=0;i<ae.length;i++){
	if(ae[i].contains(f.target)){
		window.scroll({
			top: aey,
			behavior: 'smooth'
			})
		}
	}
for(var i=0;i<as.length;i++){
	if(as[i].contains(f.target)){
		window.scroll({
			top: asy,
			behavior: 'smooth'
			})
		}
	}
for(var i=0;i<ad.length;i++){
	if(ad[i].contains(f.target)){
		window.scroll({
			top: ady,
			behavior: 'smooth'
			})
		}
	}
for(var i=0;i<aj.length;i++){	
	if(aj[i].contains(f.target)){
		window.scroll({
			top: ajy,
			behavior: 'smooth'
			})
		}
	}
	})
	

//Setting height of footer:
var hr = document.getElementById("header");
var me = document.getElementById("middle");
var fr = document.getElementById("footer");
if(vw>769){var frhy = 15*vw/100}
else{var frhy = 30*vw/100}
var frh = hr.getBoundingClientRect().height + me.getBoundingClientRect().height + frhy;
var frhpx = frh + "px";

fr.style.top = frhpx;

