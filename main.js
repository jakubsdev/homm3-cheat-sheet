artifactsGrid = document.getElementById("artifactsGrid");

searchBar = document.getElementById("searchBar");

selRarity = document.getElementById("selRarity");
selRarity.addEventListener("change", search);
selType = document.getElementById("selType");
selType.addEventListener("change", search);


iName = document.getElementById("itemName");
iRarity = document.getElementById("itemRarity");
iAtk = document.getElementById("itemAtk");
iDef = document.getElementById("itemDef");
iPwr = document.getElementById("itemPwr");
iKnwl = document.getElementById("itemKnwl");
iEffect = document.getElementById("itemEffect");

var items = [];

function add(jsonObj){
  for(var i = 0;i < jsonObj.length;i++){
	  items.push(jsonObj[i]);
  }
}


var requestFile = "artifacts_list.txt";
var request = new XMLHttpRequest();
request.open('GET', requestFile);
request.responseType = 'json';
request.send();

request.onload = function() {
  var artifacts = request.response;
  add(artifacts);
}

function search(){
	var li = document.getElementsByTagName('li');
	var input = searchBar.value.toUpperCase();
	for(var j = 0; j < 64; j++){
		if(items[j].Name.toUpperCase().indexOf(input) > -1 || items[j].Effect.toUpperCase().indexOf(input) > -1){
			document.getElementById(j).style.display = "block";
		} 
		else {
			document.getElementById(j).style.display = "none";
		}
		
		if(selRarity.value != "Default" && selRarity.value != items[j].Rarity){
			document.getElementById(j).style.display = "none";
		}
		
		if(selType.value != "Default" && selType.value != items[j].Type){
			document.getElementById(j).style.display = "none";
		}
	}
}
			
searchBar.addEventListener("keyup", search);
var x = -104;
var y = -438;

function artifacts(){
	for(var i = 0; i < 64; i++){
		item = document.createElement('li');
		item.className = "item";
		item.id = i;
		item.style.backgroundPosition = x + "px" + " " + y + "px";
		artifactsGrid.appendChild(item);
		x -= 49;
		
		
		a = document.getElementById(i);
        (function(a) {
            a.addEventListener('mouseover', function(){
				itemName.innerHTML = items[a.id].Name;
				itemAtk.innerHTML = items[a.id].Attack;
				itemDef.innerHTML = items[a.id].Defense;
				itemPwr.innerHTML = items[a.id].Power;
				itemKnwl.innerHTML = items[a.id].Knowledge;
				itemEffect.innerHTML = items[a.id].Effect;
            });
			a.addEventListener('mouseout', function(){
				itemName.innerHTML = "";
				itemAtk.innerHTML = "";
				itemDef.innerHTML = "";
				itemPwr.innerHTML = "";
				itemKnwl.innerHTML = "";
				itemEffect.innerHTML = "";
			});
			
        })(a); 
		
		if(i == 29){
			x = -6;
			y = -498;
		}
		else if(i == 61){
			x = -6;
			y = -558;
		}
		else if(i == 92){
			x = -6;
			y = -614;
		}
		
/*		a = document.getElementById('artifact'+i);
        (function (a) {
            a.addEventListener('mouseover', function(){
				var name = "";
				var rarity = "";
				var atk = "";
				var def = "";
				var pwr = "";
				var knwl = "";
				var desc = "";				
                switch(a.id){

    break;
				}
				itemName.innerHTML = name;
				itemRarity.innerHTML = "Rarity: " + rarity;
				itemAtk.innerHTML = "A: " + atk;
				itemDef.innerHTML = "D: " + def;
				itemPwr.innerHTML = "P: " + pwr;
				itemKnwl.innerHTML = "K: " + knwl;
				itemEffect.innerHTML = desc;
            });
			a.addEventListener('mouseout', function(){
				itemName.innerHTML = "";
				itemRarity.innerHTML = "";
				itemAtk.innerHTML = "";
				itemDef.innerHTML = "";
				itemPwr.innerHTML = "";
				itemKnwl.innerHTML = "";
				itemEffect.innerHTML = "";
			});
        })(a); */
	}	
}
artifacts();