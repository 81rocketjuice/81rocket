if("viewPC" in window){
	document.write('<meta name="viewport" content="width=1024">');
}else if ((navigator.userAgent.indexOf('iPhone') > 0) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
	document.write('<meta name="viewport" content="width=375,user-scalable=yes">');
}else{
	document.write('<meta name="viewport" content="width=device-width, initial-scale=1,minimum-scale=1, maximum-scale=1, user-scalable=yes">');
}
