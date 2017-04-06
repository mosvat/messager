var selectText;
var date;
var time;



function giveMess() {
var request = new XMLHttpRequest();
request.open('GET', 'https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest/send', true);	
request.onload = function() {
if (request.status >= 200 && request.status < 400) {
	    // Обработчик успещного ответа
	    var response = request.responseText;
	    console.log(response);
	
	    JSON.parse(response).forEach(
	      function (obj) {
			
			
			date = new Date();
			time = date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
			time = new Date();
			if((obj.datetime != undefined)&&(obj.user_id != undefined)&&(obj.message != undefined)) selectText.innerHTML += `<div class="twitToMe">(${time}) ${obj.user_id}: ${obj.message}</div>`;
 
	      }
	    )
	  } else {
	    console.log(request.status);
	  }
	};
request.onerror = function() {
// Обработчик ответа в случае неудачного соеденения
};
request.send();
}


function sayMess() {
var request = new XMLHttpRequest();
request.open('POST', 'http://mockbin.com/bin/a61c099a-74a5-43a4-865b-0f723572a381', true);	
request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

request.onreadystatechange = function() {    //Call a function when the state changes.
    if(request.readyState == 4 && request.status == 200) {
        alert(request.responseText);
    }
}
date1 = new Date();
request.send("message="+encodeURIComponent(unescape("Kama bullet"))+"&time="+ encodeURIComponent(unescape(date1))+"&user="+ encodeURIComponent(unescape("KAMABULLEt")));
//request.send({"message": "Super text","time": "2017-02-16T09:17:47Z","user": 1});
}








function close1(obj) {
	if(obj!=null){
	var objId = obj.getAttribute("name");
	
	var objEl1 = document.getElementById("block2");
	objEl1.removeChild(document.getElementById("A"+objId));
	
	var objEl2 = document.getElementById("block3");
	objEl2.removeChild(document.getElementById("B"+objId));
	//document.getElementById("B"+objId).style.display = "none";
	
	}
	
	
}





function sort(obj) {
	var arrEl = obj.getElementsByTagName("div");
	
	var len = arrEl.length;
	var sel;
	for (var i = 0; i < len; i++) {
		sel = arrEl[i]; 
		sel.selected = "false";
	}
	
}
window.onclick = function(event) {
   var target = event.target; // где был клик?

	//target.style.backgroundColor = "RGB("+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+")";
};


window.onload = function() {
	select(document.getElementsByClassName("sel")[0].getElementsByTagName("div")[0]); 
	giveMess();
   
	
    //document.getElementsByTagName('div')[0].innerHTML = time;
}


function select(obj) {
	var objId = obj.getAttribute("name");
	
	var objEl = document.getElementsByClassName("sel")[0];
	var arrEl = objEl.getElementsByTagName("div");
	var len = arrEl.length;
	var sel1,sel2,selId;
	for (var i = 0; i < len; i++) {
		sel1 = arrEl[i]; 
		sel1.style.zIndex = len-i;
		sel1.setAttribute("selected","false");
		
		selId = sel1.getAttribute("name"); 
		sel2 = document.getElementById("B"+selId);
		sel2.setAttribute("selected","false");
		
	}
	
	obj.style.zIndex += 0;
	obj.setAttribute("selected","true");
	
	
	var selA = document.getElementById("B"+objId);
	if(selA!=null){
	selectText = selA;
	selA.setAttribute("selected","true");
	}else{select(document.getElementById("Aid1"));}

}

function selectLeft(obj) {
	if(obj.getAttribute("name")==null){
		obj.setAttribute("name",("id"+Math.floor(Math.random()*10000)));
	}

	if(obj.getAttribute("id")==null){
		obj.setAttribute("id",obj.getAttribute("name"));
	}
	
	var objId = obj.getAttribute("name");
	
	if(document.getElementById("A"+objId)==null){
		var objEl1 = document.getElementById("block2");
		var newA = document.createElement("div");
		newA.setAttribute("onclick","select(this);");
		//newA.onclick = "select(this);";
		newA.setAttribute("id",("A"+objId));
		newA.setAttribute("name",objId);
		newA.setAttribute("selected","false");
		newA.setAttribute("style","z-index: 0;");
		newA.innerHTML = obj.innerHTML+'<span onclick="close1(this);" class="close" name="'+objId+'"></span>';
		objEl1.appendChild(newA);
	}
	
	if(document.getElementById("B"+objId)==null){
		var objEl2 = document.getElementById("block3");
		var newB = document.createElement("div");
		newB.setAttribute("id",("B"+objId));
		newB.setAttribute("name",objId);
		objEl2.appendChild(newB);
	}
	
	select(document.getElementById("A"+objId));
}


function write1() {
	 selectText.scrollTop = (selectText.scrollHeight-250)
	 date = new Date();
	 time = date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
	 selectText.innerHTML += "<div class='twitMe'>("+time+") You:"+document.getElementById("text1").value+"</div>";
	// selectText.innerHTML += "<div class='twitToMe'>("+time+") "+selectText.getAttribute("id")+": Text Text Text</div>";
}

