function setCookie(cname,cvalue,exdays){
    var d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires+"; path=/"; 
}
function getCookie(cname){
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name)==0) { return c.substring(name.length,c.length); }
    }
    return "";
}


function checkCookie(){
    var user=getCookie("username");
    if (user!=""){
        alert("欢迎 " + user + " 再次访问");
    }
    else {
        user = prompt("请输入你的名字:","");
          if (user!="" && user!=null){
            setCookie("username",user,30);
        }
    }
}

function getIP(){

}

function getLocationByIP(ip){

}

function getLanguage(){
	var cookieName = "GeekCashTreasureGame";
	var lang = getCookie(cookieName);
	if(lang == null || lang == ""){
		lang = navigator.language || navigator.userLanguage;
		if(lang.substr(0,3) == 'zh-') {
			// Load Chinese
			//window.location.href='./ch/index.html';
			lang="ch";
			setCookie(cookieName,lang,365);
		}
		else{
			// Load English
			//window.location.href='./en/index.html';
			lang="en";
			setCookie(cookieName,lang,365);
		}
	}
	return lang;
}

function isChinese(){
	var lang = getLanguage();
	return lang == "ch";
}

function isEnglish(){
	var lang = getLanguage();
	return lang == "en";
}

function setChineseLangCookie(){
	var cookieName = "GeekCashTreasureGame";
	var lang = "ch";
	setCookie(cookieName, lang, 365);
}

function setEnglishLangCookie(){
	var cookieName = "GeekCashTreasureGame";
	var lang = "en";
	setCookie(cookieName, lang, 365);
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&#]*)/gi,
        function(m,key,value) {
            vars[key] = value;
        }
    );
    return vars;
}