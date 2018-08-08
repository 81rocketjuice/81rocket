function isInsiteSearchForm(form){
	var keyword = form.keyword;
	var value = keyword.value;
	var errMsg = "2\u6587\u5b57\u4ee5\u4e0a\uff08\u6f22\u5b57\u3092\u9664\u304f\uff09\u306e\u30ad\u30fc\u30ef\u30fc\u30c9\u3092\u5165\u529b\u3057\u691c\u7d22\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u304f\u3060\u3055\u3044";
	if(form.name == JLJS_InsiteSearch.INSITE_SEARCH_FORM){
		if(!value || (value.match(/[\w| | ]/) && value.length == 1 ||value == JLJS_InsiteSearch.initValue)){
			alert(errMsg);
			keyword.value = '';
			JLJS.classAttr.add(keyword, JLJS_InsiteSearch.CLASS_TXBLA);
			keyword.focus();
			return false;
		}else{
			return true;
		}
	}else{
		if(!value || (value.match(/[\w| | ]/) && value.length == 1)){
			alert(errMsg);
			keyword.focus();
			return false;
		}else{
			return true;
		}
	}
}

function JLJS_InsiteSearchKeywordEvent(){
	this.initValue = '';
	this.CLASS_TXBLA = 'txBla';
	this.INSITE_SEARCH_FORM ="InsiteSearchForm"
}

JLJS_InsiteSearchKeywordEvent.prototype = {
	onload : function(form){
		var keywordElem = form.keyword;
		JLJS_InsiteSearch.onblur(keywordElem);
		keywordElem.blur();
	},

	onblur : function(node){
		if(node.value == '' || node.value == this.initValue){
			node.value = this.initValue;
			JLJS.classAttr.remove(node, this.CLASS_TXBLA);
		}else{
			JLJS.classAttr.add(node, this.CLASS_TXBLA);
		}
		return false;
	},
	onfocus : function(node){
		if(node.value == this.initValue){
			node.value = '';
		}
		JLJS.classAttr.add(node, this.CLASS_TXBLA);
		return false;
	}
}

var JLJS_InsiteSearch = new JLJS_InsiteSearchKeywordEvent();

function JLJS_InsiteSearchScope(){
	if(typeof ScopeManager == "function"){
		if(JLJS.env.isIE == true){
			var version = navigator.userAgent.toLowerCase().match(/msie [0-9.]+/);
			if(!version){
				return;
			}
			version = version[0].replace(/msie /g, "");
			if(version < 7){
				return;
			}
		}
		var scopeManager = new ScopeManager();
		if(document.getElementById("keyword01")){
			scopeManager.goSuggest("keyword01");
		}
	}
}

JLJS.addOnload(function(){
	var insiteSearchForm = document.forms[JLJS_InsiteSearch.INSITE_SEARCH_FORM];
	if(insiteSearchForm && insiteSearchForm.keyword && insiteSearchForm.keyword.type == "text"){
		JLJS_InsiteSearch.onload(insiteSearchForm);
		JLJS_InsiteSearchScope();
	}
});
