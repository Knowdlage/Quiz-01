<script language=JavaScript>
	
	//Disable right mouse click Script
	//By Geek Site.in
	
	
	var message="❗ That's WrongWay For Get Answers !";
	
	///////////////////////////////////
	function clickIE4(){
	if (event.button==2){
	alert(message);
	return false;
	}
	}
	
	function clickNS4(e){
	if (document.layers||document.getElementById&&!document.all){
	if (e.which==2||e.which==3){
	alert(message);
	return false;
	}
	}
	}
	
	if (document.layers){
	document.captureEvents(Event.MOUSEDOWN);
	document.onmousedown=clickNS4;
	}
	else if (document.all&&!document.getElementById){
	document.onmousedown=clickIE4;
	}
	
	document.oncontextmenu=new Function("alert(message);return false")
	
	</script>
	
	
	
	
	<!-- Cloudflare Web Analytics --><script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "d1ac23984941433cb5e295ab2b187e98"}'></script><!-- End Cloudflare Web Analytics -->
	
	
	
	
	
	<script data-ad-client="ca-pub-2807697978229128" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
