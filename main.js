itemsGrid = document.getElementById("itemsGrid");

searchBar = document.getElementById("searchBar");

selRarity = document.getElementById("selRarity");
selRarity.addEventListener("change", search);
selType = document.getElementById("selType");
selType.addEventListener("change", search);

listToggle = document.getElementById("listToggle");
listToggle.checked = false

var artifacts = document.getElementsByClassName("item");
var spells = document.getElementsByClassName("spell");

function clear(e){
	while(e[0]){
		e[0].parentNode.removeChild(e[0]);
	}
}

if(listToggle.checked === true){
	document.getElementById("selRarity").style.display = "none";
	document.getElementById("selType").style.display = "none";
	spellsGrid();
} else {
	document.getElementById("selMagicSchool").style.display = "none";
	document.getElementById("selSpellLevel").style.display = "none";
	artifactsGrid();
}

listToggle.addEventListener("click",function(){
	if(listToggle.checked === true){
		document.getElementById("selRarity").style.display = "none";
		document.getElementById("selType").style.display = "none";
		document.getElementById("selMagicSchool").style.display = "inline-block";
		document.getElementById("selSpellLevel").style.display = "inline-block";
		clear(artifacts);
		spellsGrid();
	}
	else if(listToggle.checked === false){
		document.getElementById("selRarity").style.display = "inline-block";
		document.getElementById("selType").style.display = "inline-block";
		document.getElementById("selMagicSchool").style.display = "none";
		document.getElementById("selSpellLevel").style.display = "none";
		clear(spells);
		artifactsGrid();
	}
});
	

iName = document.getElementById("itemName");
iRarity = document.getElementById("itemRarity");
iAtk = document.getElementById("itemAtk");
iDef = document.getElementById("itemDef");
iPwr = document.getElementById("itemPwr");
iKnwl = document.getElementById("itemKnwl");
iEffect = document.getElementById("itemEffect");

itemTypeStat = document.getElementById("itemTypeStat");
itemRarityStat = document.getElementById("itemRarityStat");

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
	for(var j = 0; j < 120; j++){
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


function artifactsGrid(){
		var x = -104;
		var y = -438;
	for(var i = 0; i < 120; i++){
		item = document.createElement('li');
		item.className = "item";
		item.id = i;
		item.style.backgroundPosition = x + "px" + " " + y + "px";
		itemsGrid.appendChild(item);
		x -= 49;
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
		
		a = document.getElementById(i);
        (function(a) {
            a.addEventListener('mouseover', function(){
				itemName.innerHTML = items[a.id].Name;
				
				itemRarityStat.innerHTML = items[a.id].Rarity;
				itemTypeStat.innerHTML = items[a.id].Type;
				
				itemName.classList.add("border");
				if(items[a.id].Attack != "0" || items[a.id].Defense != "0" || items[a.id].Power != "0" || items[a.id].Knowledge != "0"){
					itemAtk.innerHTML = "Attack: " + items[a.id].Attack;
					itemDef.innerHTML = "Defense: " + items[a.id].Defense;
					itemPwr.innerHTML = "Power: " + items[a.id].Power;
					itemKnwl.innerHTML = "Knowledge: " + items[a.id].Knowledge;
				}
				if(items[a.id].Effect != ""){
					itemEffect.innerHTML = "Effect: " + items[a.id].Effect;
				}
            });
			a.addEventListener('mouseout', function(){
				itemName.innerHTML = "";
				itemName.classList.remove("border");
				itemAtk.innerHTML = "";
				itemDef.innerHTML = "";
				itemPwr.innerHTML = "";
				itemKnwl.innerHTML = "";
				itemEffect.innerHTML = "";
				
				itemRarityStat.innerHTML = "";
				itemTypeStat.innerHTML = "";
			});
        })(a); 		
	}	
}

function spellsGrid(){
		var x = -20;
		var y = 505;
	for(var i = 0; i < 70; i++){
		item = document.createElement('li');
		item.className = "spell";
		item.id = i;
		item.style.backgroundPosition = x + "px" + " " + y + "px";
		itemsGrid.appendChild(item);
		x -= 83;
		if(i == 10){
			x = -20;
			y = 440;
		}
		else if(i == 21){
			x = -20;
			y = 375;
		}
		else if(i == 32){
			x = -20;
			y = 310;
		}
		else if(i == 43){
			x = -20;
			y = 245;
		}
		else if(i == 54){
			x = -20;
			y = 180;
		}
		else if(i == 65){
			x = -20;
			y = 115;
		}
		
		a = document.getElementById(i);
        (function(a) {
            a.addEventListener('mouseover', function(){
				itemName.innerHTML = items[a.id].Name;
				itemName.classList.add("border");
				if(items[a.id].Attack != "0" || items[a.id].Defense != "0" || items[a.id].Power != "0" || items[a.id].Knowledge != "0"){
					itemAtk.innerHTML = "Attack: " + items[a.id].Attack;
					itemDef.innerHTML = "Defense: " + items[a.id].Defense;
					itemPwr.innerHTML = "Power: " + items[a.id].Power;
					itemKnwl.innerHTML = "Knowledge: " + items[a.id].Knowledge;
				}
				if(items[a.id].Effect != ""){
					itemEffect.innerHTML = "Effect: " + items[a.id].Effect;
				}
            });
			a.addEventListener('mouseout', function(){
				itemName.innerHTML = "";
				itemName.classList.remove("border");
				itemAtk.innerHTML = "";
				itemDef.innerHTML = "";
				itemPwr.innerHTML = "";
				itemKnwl.innerHTML = "";
				itemEffect.innerHTML = "";
			});
        })(a); 		
	}	
}