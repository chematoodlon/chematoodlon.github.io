//Scrolling down to a particular section:

var vw = window.innerWidth;

var ao = document.getElementsByClassName("aorganising");
	var or = document.getElementById("organising");
	var aoy = or.getBoundingClientRect().top + window.scrollY - 12.5*vw/100;
	
var ae = document.getElementsByClassName("aevents");
	var es = document.getElementById("events");
	var aey = es.getBoundingClientRect().top + window.scrollY - 12.5*vw/100;
	
var as = document.getElementsByClassName("asubscription");
	var ss = document.getElementById("subscription");
	var asy = ss.getBoundingClientRect().top + window.scrollY - 12.5*vw/100;
	
var ad = document.getElementsByClassName("adates");
	var dt = document.getElementById("dates");
	var ady = dt.getBoundingClientRect().top + window.scrollY - 12.5*vw/100;
	
var aj = document.getElementsByClassName("ajointheteam");
	var jt = document.getElementById("jointheteam");
	var ajy = jt.getBoundingClientRect().top + window.scrollY - 12.5*vw/100;

window.addEventListener('click',function(e){
for(var i=0;i<ao.length;i++){
	if(ao[i].contains(e.target)){
		window.scroll({
			top: aoy,
			behavior: 'smooth'
			})
		}
	}
for(var i=0;i<ae.length;i++){
	if(ae[i].contains(e.target)){
		window.scroll({
			top: aey,
			behavior: 'smooth'
			})
		}
	}
for(var i=0;i<as.length;i++){
	if(as[i].contains(e.target)){
		window.scroll({
			top: asy,
			behavior: 'smooth'
			})
		}
	}
for(var i=0;i<ad.length;i++){
	if(ad[i].contains(e.target)){
		window.scroll({
			top: ady,
			behavior: 'smooth'
			})
		}
	}
for(var i=0;i<aj.length;i++){	
	if(aj[i].contains(e.target)){
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
var frh = hr.getBoundingClientRect().height + me.getBoundingClientRect().height +15*vw/100;
var frhpx = frh + "px";

fr.style.top = frhpx;
